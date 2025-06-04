"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { registryCategories } from "@/registry/registry-categories";

export function BlocksNav() {
  const pathname = usePathname();
  return (
    <div className="relative overflow-hidden">
      <ScrollArea className="max-w-none">
        <div className="flex items-center">
          <BlocksNavLink
            category={{ name: "Featured", slug: "", hidden: false }}
            isActive={pathname === "/" || pathname === ""}
          />
          {registryCategories.map((category) => (
            <BlocksNavLink
              key={category.slug}
              category={category}
              isActive={
                pathname === `/${category.slug}` ||
                pathname.startsWith(`/${category.slug}/`)
              }
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  );
}

function BlocksNavLink({
  category,
  isActive,
}: {
  category: (typeof registryCategories)[number];
  isActive: boolean;
}) {
  if (category.hidden) {
    return null;
  }

  const href = category.slug === "" ? "/" : `/${category.slug}`;

  return (
    <Link
      href={href}
      className="flex h-7 shrink-0 items-center justify-center whitespace-nowrap rounded-full px-4 text-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[active=true]:bg-muted data-[active=true]:text-foreground"
      data-active={isActive}
    >
      {category.name}
    </Link>
  );
}
