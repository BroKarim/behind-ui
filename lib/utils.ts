import { env } from "@/env.mjs";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
// import { isEqual } from "@ngard/tiny-isequal";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export function isDeepEqual(a: unknown, b: unknown): boolean {
//   return isEqual(a, b);
// }

export function humanize(name: string): string {
  return name
    .replace(/-/g, " ")
    .replace(/([A-Z])/g, " $1")
    .trim()
    .split(/\s+/)
    .map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase())
    .join(" ");
}

export const truncate = (str: string | null, length: number) => {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length - 3)}...`;
};

export const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

/**
 * Capitalizes first letters of words in string.
 * @param {string} str String to be modified
 * @param {boolean=false} lower Whether all other letters should be lowercased
 * @return {string}
 * @see https://stackoverflow.com/questions/2332811/capitalize-words-in-string/7592235#7592235
 * @usage
 *   capitalize('fix this string');     // -> 'Fix This String'
 *   capitalize('javaSCrIPT');          // -> 'JavaSCrIPT'
 *   capitalize('javaSCrIPT', true);    // -> 'Javascript'
 */
export const capitalize = (str: string, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase(),
  );

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`;
}
