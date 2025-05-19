"use client";

import { useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";



export function CategoryTab({ categories, onCategoryChange }: { categories: string[]; onCategoryChange: (category: string) => void }) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
    <>
      <Tabs defaultValue={categories[0]} className="w-full" onValueChange={handleCategoryChange}>
        <ScrollArea className="h-16 w-full whitespace-nowrap rounded-md bg-transparent">
          <TabsList className="bg-transparent">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="text-md">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          <ScrollBar orientation="horizontal" className="w-0 bg-transparent  " />
        </ScrollArea>
      </Tabs>
    </>
  );
}
