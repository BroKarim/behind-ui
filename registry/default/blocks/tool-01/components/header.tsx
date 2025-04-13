import Link from "next/link";
import { GitHubButton } from "./github-button";
import { ButtonColorful } from "./colorful-button";
import Logo from "./logo.svg";
import { Icons } from "@/components/icons";

const links = [
  {
    label: "Home",
    href: "/#",
  },
  {
    label: "Apps",
    href: "/#apps",
  },
  {
    label: "Features",
    href: "/#features",
  },
  {
    label: "Community",
    href: "/#community",
  },
];

export const Header = () => (
  <div className="sticky top-0 z-50 w-full border-b  backdrop-blur-sm">
    <div className="container mx-auto flex items-center justify-between px-8 py-2">
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center gap-2 py-1">
          <Icons.logo />
          <p className="hidden text-lg font-semibold tracking-tight sm:block">next-forge</p>
        </Link>
        <div className="hidden items-center gap-4 text-sm font-medium text-neutral-500 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <GitHubButton />
        <ButtonColorful />
      </div>
    </div>
  </div>
);
