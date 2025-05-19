"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { usePathname } from "next/navigation";

export function TemplateToaster() {
  const [isVisibile, setIsVisible] = useState(true);
  const [notificationStatus, setNotificationStatus] = useState<string | null>(null);
  const path = usePathname();
  const [hydrated, setHydrated] = useState(false);

  // Run this effect only once to set hydrated to true
  useEffect(() => {
    setHydrated(true);
  }, []);

  // Run this effect only on client side
  useEffect(() => {
    if (hydrated) {
      localStorage.removeItem("behindui-notification");
      setNotificationStatus(localStorage.getItem("behindui-notification"));
    }
  }, [hydrated]);

  if (!hydrated) {
    return null;
  }

  const templates = path.includes("templates");
  const isIframe = isInIframe();
  if (isIframe || notificationStatus === "off") {
    return <div></div>;
  }

  return (
    isVisibile &&
    !templates && (
      <section className="relative z-50">
        <div className="font-geist fixed bottom-4 right-4">
          <Card className={cn(" w-[350px] bg-background [border:1px_solid_rgba(255,255,255,.1)]")}>
            <CardHeader>
              <div className="font-mono font-bold  uppercase tracking-tight">
                🚧Website Under Development 🚧 <br />
              </div>
              <CardDescription className="mt-4 text-black/90 dark:text-white/70">This website is currently in active development. Enjoy exploring—exciting updates coming soon!</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-end gap-4">
              <Button
                size="sm"
                onClick={() => {
                  localStorage.setItem("behindui-notification", "off");
                  setIsVisible(false);
                }}
              >
                Understand
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    )
  );
}

function isInIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}
