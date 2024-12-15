import * as React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

export function MobileHeader() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          >
            <svg
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
            >
              <path
                d="M3 5H11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3 12H16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3 19H21"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="pr-0">
          <Link className="font-serif text-2xl font-bold" href="/">
            Maria & Co.
          </Link>
          <div className="mt-4 flex gap-8">
            <div className=" flex h-full flex-col  items-start">
              <ul>
                <li>
                  <a href="#" className="text-sm  font-medium">
                    Assistance
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm  font-medium">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm  font-medium">
                    Faq
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex h-full flex-col">
              <ul>
                <li>
                  <a href="#">Stores</a>
                </li>
                <li>
                  <a href="#">Collection</a>
                </li>
                <li>
                  <a href="#">Log in</a>
                </li>
              </ul>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
