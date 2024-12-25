import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href="/"
        className={`relative block whitespace-nowrap px-3 py-2 transition ${isActive ? "text-lime-600 dark:text-lime-400" : "hover:text-lime-600 dark:hover:text-lime-400"}`}
      >
        {children}
        {isActive && (
          <motion.span
            className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-lime-700/0 via-lime-700/70 to-lime-700/0 dark:from-lime-400/0 dark:via-lime-400/40 dark:to-lime-400/0"
            layoutId="active-nav-item"
          />
        )}
      </Link>
    </li>
  );
}

function Desktop({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radius = useMotionValue(0);
  const handleMouseMove = React.useCallback(
    ({ clientX, clientY, currentTarget }: React.MouseEvent) => {
      const bounds = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - bounds.left);
      mouseY.set(clientY - bounds.top);
      radius.set(Math.sqrt(bounds.width ** 2 + bounds.height ** 2) / 2.5);
    },
    [mouseX, mouseY, radius],
  );
  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, var(--spotlight-color) 0%, transparent 65%)`;

  return (
    <nav
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative",
        "rounded-full bg-gradient-to-b from-zinc-50/70 to-white/90",
        "shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-md",
        // "dark:from-zinc-900/70 dark:to-zinc-800/90 dark:ring-zinc-100/10",
        "[--spotlight-color:rgb(236_252_203_/_0.6)] ",
        className,
      )}
      {...props}
    >
      {/* Spotlight overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background }}
        aria-hidden="true"
      />

      <ul className="flex bg-transparent px-3 text-sm font-medium text-zinc-800 dark:text-zinc-200 ">
        {navigationItems.map(({ href, text }) => (
          <NavItem key={href} href={href}>
            {text}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}
// keknya bagian mobiele kita buat bentuk Tirana aja, dengan catatan ada animasi x close
// namun saat dipanggil tetap kaya cali.so

export const navigationItems = [
  { href: "/", text: "About" },
  { href: "/", text: "Service" },
  { href: "/", text: "Testimonial" },
  { href: "/", text: "Projects" },
];

export const NavigationBar = {
  Desktop,
} as const;
