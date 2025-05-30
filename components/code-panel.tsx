import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check, Heart } from "lucide-react";
import { ThemeEditorState } from "@/types/editor";
import { Alert } from "./ui/alert";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { ColorFormat } from "@/types";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "./ui/select";
import { useEditorStore } from "@/store/editor-store";
import { usePreferencesStore } from "@/store/preferences-store";
import { generateThemeCode } from "@/utils/theme-style-generator";

interface CodePanelProps {
  themeEditorState: ThemeEditorState;
}

const CodePanel: React.FC<CodePanelProps> = ({ themeEditorState }) => {
  const [registryCopied, setRegistryCopied] = useState(false);
  const [copied, setCopied] = useState(false);
  const preset = useEditorStore((state) => state.themeState.preset);
  const colorFormat = usePreferencesStore((state) => state.colorFormat);
  const setColorFormat = usePreferencesStore((state) => state.setColorFormat);

  const code = generateThemeCode(themeEditorState, colorFormat);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  const showRegistryCommand = useMemo(() => {
    return preset && preset !== "default";
  }, [preset]);

  return (
    <>
      <div className="flex h-full flex-col">
        <div className="mb-4 flex-none">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-lg font-semibold">Theme Code</h2>
          </div>
        </div>
        <div className="mb-4 flex items-center gap-2 ">
          <Select
            value={colorFormat}
            onValueChange={(value: ColorFormat) => setColorFormat(value)}
          >
            <SelectTrigger className="outline-hidden w-fit gap-1 border-none bg-muted/50 focus:border-none focus:ring-transparent">
              <SelectValue className="focus:ring-transparent" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hsl">hsl</SelectItem>
              <SelectItem value="oklch">oklch</SelectItem>
              <SelectItem value="rgb">rgb</SelectItem>
              <SelectItem value="hex">hex</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-lg border">
          <div className="flex flex-none items-center justify-between border-b bg-muted/50 px-4 py-2">
            <span className="text-sm font-medium">index.css</span>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(code)}
                className="h-8"
                aria-label={
                  copied ? "Copied to clipboard" : "Copy to clipboard"
                }
              >
                {copied ? (
                  <>
                    <Check className="size-4" />
                    <span className="sr-only md:not-sr-only">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="size-4" />
                    <span className="sr-only md:not-sr-only">Copy</span>
                  </>
                )}
              </Button>
            </div>
          </div>

          <ScrollArea className="relative flex-1">
            <pre className="h-full p-4 text-sm">
              <code>{code}</code>
            </pre>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
    </>
  );
};

export default CodePanel;
