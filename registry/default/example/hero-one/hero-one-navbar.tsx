import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

type Props = {
  href: string;
  children: React.ReactNode;
};

export const Navbar = () => {
  return (
    <div className="sticky top-0 z-30 flex flex-col bg-transparent   font-mono">
      <nav className="top-0 flex grid-cols-12 items-center justify-between md:grid md:border-b ">
        <Link
          href="/"
          className="shrink-0 px-2.5 py-4 text-foreground transition-colors md:col-span-2 md:w-[--fd-sidebar-width] md:border-r md:px-5"
        >
          <div className="flex w-full flex-col gap-2">
            <div className="flex items-center gap-2">
              <p>BETTER-AUTH.</p>
            </div>
          </div>
        </Link>
        <div className="relative flex items-center justify-end md:col-span-10">
          <ul className="hidden w-max shrink-0 items-center divide-x border-r md:flex">
            {navMenu.map((menu, i) => (
              <NavLink key={menu.name} href={menu.path}>
                {menu.name}
              </NavLink>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export const NavLink = ({ href, children }: Props) => {
  return (
    <li className="group relative">
      <Link
        href={href}
        className={cn(
          "group block h-full w-full px-5 py-4 transition-colors",
          "text-foreground group-hover:text-foreground",
        )}
      >
        {children}
      </Link>
      <div
        className={cn(
          "absolute bottom-0 h-0.5 bg-muted-foreground opacity-0 transition-all duration-500",
          "group-hover:w-full group-hover:opacity-100",
        )}
      ></div>
    </li>
  );
};

export const navMenu = [
  {
    name: "helo_",
    path: "/",
  },
  {
    name: "docs",
    path: "/docs",
  },

  {
    name: "changelogs",
    path: "/changelogs",
  },
  {
    name: "community",
    path: "https://discord.gg/GYC3W7tZzb",
  },
];
