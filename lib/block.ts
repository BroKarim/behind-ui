"use server";

import { registryEntrySchema } from "@/registry/schema";
import { z } from "zod";

import { Style } from "@/registry/registry-styles";

export async function getAllBlockIds(
  types: z.infer<typeof registryEntrySchema>["type"][] = [
    "registry:block",
    "registry:internal",
  ],
  categories: string[] = [],
  style: Style["name"] = "default",
): Promise<string[]> {
  const { Index } = await import("@/__registry__");

  if (
    !Index[style] ||
    typeof Index[style] !== "object" ||
    Array.isArray(Index[style])
  ) {
    return []; // Return empty array instead of throwing error
  }

  try {
    // Change this line - parse each entry individually instead of the whole object
    const entries = Object.entries(Index[style]);
    const validEntries = [];

    for (const [key, value] of entries) {
      try {
        const validatedEntry = registryEntrySchema.parse(value);
        validEntries.push({ key, ...validatedEntry });
      } catch (error) {
        console.warn(`Entry "${key}" failed validation:`, error);
        // Continue with next entry instead of failing completely
      }
    }

    console.log(
      `Successfully validated ${validEntries.length} out of ${entries.length} entries`,
    );

    return validEntries
      .filter(
        (block) =>
          types.includes(block.type) &&
          (categories.length === 0 ||
            block.categories?.some((category) =>
              categories.includes(category),
            )) &&
          !block.name.startsWith("chart-"),
      )
      .map((block) => block.name);
  } catch (error) {
    console.error("Function error:", error);
    return []; // Return empty array instead of throwing error
  }
}
