"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Card, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

export function DevelopmentToast() {
  const [hasToastBeenShown, setHasToastBeenShown] = useState(false);
  const path = usePathname();

  useEffect(() => {
    if (!hasToastBeenShown && path === "/") {
      toast(
        <section>
          <Card className={cn("animate-background-shine w-[350px] bg-white bg-[linear-gradient(110deg,#000,55%,#57476e,65%,#000)] [border:1px_solid_rgba(255,255,255,.1)]")}>
            <CardHeader>
              <div className="font-mono font-normal uppercase tracking-tight">
                ✨ Access the full template ✨ <br />
                <span className="mt-1 font-bold">50% discount is now available.</span>
              </div>
              <CardDescription className="mt-4 text-black/90 dark:text-white/70">
                Go get the full access of template with almost for free and more than <span className="font-bold">50% discount</span> if you buy couple and more!
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-end gap-4">
              <Button
                variant="ghost"
                size="sm"
                // onClick={() => {
                //   localStorage.setItem("behindui-notification", "off");
                //   setIsVisible(true);
                // }}
              >
                Cancel
              </Button>
              <Button size="sm" asChild>
                <Link href="https://farmui.com/templates" target="_blank">
                  Get the template
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </section>,
        {
          duration: 5000, // Tentukan durasi toast
        }
      );
      setHasToastBeenShown(true); // Mencegah toast muncul berulang
    }
  }, [hasToastBeenShown, path]); // Empty array means it runs only once when component mounts

  return null;
}
