import { blocks } from "@/registry/registry-blocks";
// Function to get all unique categories from registry
export function getAllCategories(): string[] {
  // Add 'All' as the default category
  const categories = new Set<string>(["All"]);

  // Extract categories from registry entries
  blocks.forEach((entry) => {
    if (entry.categories && Array.isArray(entry.categories)) {
      entry.categories.forEach((category) => categories.add(category));
    }
  });

  return Array.from(categories);
}

export function getCategoryToComponentsMap(): Map<string, Set<string>> {
  const categoryToComponents = new Map<string, Set<string>>();

  blocks.forEach((entry) => {
    if (entry.categories && entry.categories.length > 0) {
      entry.categories.forEach((category) => {
        if (!categoryToComponents.has(category)) {
          categoryToComponents.set(category, new Set<string>());
        }
        categoryToComponents.get(category)?.add(entry.name);
      });
    }
  });

  return categoryToComponents;
}

// Function to check if a document belongs to a category
export function documentBelongsToCategory(docCode: string, category: string): boolean {
  if (category === "All") return true;

  const componentsInCategory = getCategoryToComponentsMap().get(category) || new Set<string>();

  // Check if doc contains any component from this category
  for (const componentName of componentsInCategory) {
    if (docCode.includes(componentName)) {
      return true;
    }
  }

  return false;
}
