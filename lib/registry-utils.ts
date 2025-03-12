// utils/registry-utils.ts
import { examples } from "@/registry/registry-examples";
import { promises as fs } from "fs";
import { tmpdir } from "os";
import path from "path";
import { Index } from "@/__registry__";
import { registryItemFileSchema, registryEntrySchema } from "@/registry/schema";
import { Style } from "@/registry/registry-styles";
import { Project, ScriptKind, SourceFile } from "ts-morph";
import { z } from "zod";

export const DEFAULT_REGISTRY_STYLE = "default" satisfies Style["name"];

const memoizedIndex: typeof Index = Object.fromEntries(Object.entries(Index).map(([style, items]) => [style, { ...items }]));

export function getRegistryComponent(name: string, style: Style["name"] = DEFAULT_REGISTRY_STYLE) {
  return memoizedIndex[style][name]?.component;
}

export async function getRegistryItem(name: string, style: Style["name"] = DEFAULT_REGISTRY_STYLE) {
  const item = memoizedIndex[style][name];
  console.log("Fetching Registry Item for:", name);
  console.log("Available styles:", Object.keys(memoizedIndex));

  if (!item) {
    return null;
  }

  // Convert all file paths to object.
  // TODO: remove when we migrate to new registry.
  item.files = item.files.map((file: unknown) =>
    typeof file === "string"
      ? { path: file, type: "registry:component", target: "" } // Tambahkan type dan target
      : { ...file, type: file.type || "registry:component", target: file.target || "" }
  );

  console.log("Processed Files (Before Validation):", JSON.stringify(item.files, null, 2));

  console.log("Before Validation:", JSON.stringify(item, null, 2));
  console.log("File Type:", typeof item.files[0].type);
  console.log("File Target:", typeof item.files[0].target);
  // Fail early before doing expensive file operations.
  const result = registryEntrySchema.safeParse(item);
  if (!result.success) {
    console.error("Zod Validation Error:", result.error.format());
    return null;
  }

  let files: typeof result.data.files = [];
  console.log("Registry Data:", result.data);

  for (const file of item.files) {
    const content = await getFileContent(file);
    const relativePath = path.relative(process.cwd(), file.path);

    files.push({
      ...file,
      path: relativePath,
      content,
    });
  }
  console.log("Processed Files:", JSON.stringify(files, null, 2));

  // Get meta.
  // Assume the first file is the main file.
  // const meta = await getFileMeta(files[0].path)

  // Fix file paths.
  files = fixFilePaths(files) || "";

  const parsed = registryEntrySchema.safeParse({
    ...result.data,
    files,
    // meta,
  });

  if (!parsed.success) {
    console.error(parsed.error.message);
    return null;
  }

  return parsed.data;
}

async function getFileContent(file: z.infer<typeof registryItemFileSchema>) {
  const raw = await fs.readFile(file.path, "utf-8");

  const project = new Project({
    compilerOptions: {},
  });

  const tempFile = await createTempSourceFile(file.path);
  const sourceFile = project.createSourceFile(tempFile, raw, {
    scriptKind: ScriptKind.TSX,
  });

  // Remove meta variables.
  removeVariable(sourceFile, "iframeHeight");
  removeVariable(sourceFile, "containerClassName");
  removeVariable(sourceFile, "description");

  let code = sourceFile.getFullText();

  // Some registry items uses default export.
  // We want to use named export instead.
  // TODO: do we really need this? - @shadcn.
  if (file.type !== "registry:page") {
    code = code.replaceAll("export default", "export");
  }

  // Fix imports.
  code = fixImport(code);

  return code;
}

function removeVariable(sourceFile: SourceFile, name: string) {
  sourceFile.getVariableDeclaration(name)?.remove();
}

async function createTempSourceFile(filename: string) {
  const dir = await fs.mkdtemp(path.join(tmpdir(), "shadcn-"));
  return path.join(dir, filename);
}

function fixFilePaths(files: z.infer<typeof registryEntrySchema>["files"]) {
  if (!files) {
    return [];
  }

  // Resolve all paths relative to the first file's directory.
  const firstFilePath = files[0].path;
  const firstFilePathDir = path.dirname(firstFilePath);

  return files.map((file) => {
    return {
      ...file,
      path: path.relative(firstFilePathDir, file.path),
      target: getFileTarget(file),
    };
  });
}

export function fixImport(content: string) {
  const regex = /@\/(.+?)\/((?:.*?\/)?(?:components|ui|hooks|lib))\/([\w-]+)/g;

  const replacement = (match: string, path: string, type: string, component: string) => {
    if (type.endsWith("components")) {
      return `@/components/${component}`;
    } else if (type.endsWith("ui")) {
      return `@/components/ui/${component}`;
    } else if (type.endsWith("hooks")) {
      return `@/hooks/${component}`;
    } else if (type.endsWith("lib")) {
      return `@/lib/${component}`;
    }

    return match;
  };

  return content.replace(regex, replacement);
}

function getFileTarget(file: z.infer<typeof registryItemFileSchema>) {}

export type FileTree = {
  name: string;
  path?: string;
  children?: FileTree[];
};

export function createFileTreeForRegistryItemFiles(files: Array<{ path: string; target?: string }>) {
  const root: FileTree[] = [];

  for (const file of files) {
    const path = file.target ?? file.path;
    const parts = path.split("/");
    let currentLevel = root;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      const isFile = i === parts.length - 1;
      const existingNode = currentLevel.find((node) => node.name === part);

      if (existingNode) {
        if (isFile) {
          // Update existing file node with full path
          existingNode.path = path;
        } else {
          // Move to next level in the tree
          currentLevel = existingNode.children!;
        }
      } else {
        const newNode: FileTree = isFile ? { name: part, path } : { name: part, children: [] };

        currentLevel.push(newNode);

        if (!isFile) {
          currentLevel = newNode.children!;
        }
      }
    }
  }

  return root;
}
