"use client";

import * as React from "react";
import template from "lodash.template";
import { Check, Copy, Moon, Repeat, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { ThemeWrapper } from "./theme-wrapper";
import { useConfig } from "@/lib/use-config";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { BaseColor, baseColors } from "@/registry/registry-base-colors";
import { Skeleton } from "./ui/skeleton";

import "@/styles/mdx.css";

export function ThemeCustomizer() {
  const [config, setConfig] = useConfig();
  const { setTheme: setMode, resolvedTheme: mode } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <ThemeWrapper defaultTheme="zinc" className="flex flex-col space-y-4 md:space-y-6">
        <div className="flex flex-1 flex-col space-y-4 md:space-y-6">
          {/* Mode opt */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Mode</h3>
            <div className="grid grid-cols-3 gap-2">
              {mounted ? (
                <>
                  <Button variant={"outline"} size="sm" onClick={() => setMode("light")} className={cn(mode === "light" && "border-2 border-primary")}>
                    <Sun className="mr-1 -translate-x-1" />
                    Light
                  </Button>
                  <Button variant={"outline"} size="sm" onClick={() => setMode("dark")} className={cn(mode === "dark" && "border-2 border-primary")}>
                    <Moon className="mr-1 -translate-x-1" />
                    Dark
                  </Button>
                </>
              ) : (
                <>
                  <Skeleton className="h-8 w-full" />
                  <Skeleton className="h-8 w-full" />
                </>
              )}
            </div>
          </div>
          {/* color */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Color</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {baseColors
                .filter((theme) => !["slate", "stone", "gray", "neutral"].includes(theme.name))
                .map((theme) => {
                  const isActive = config.theme === theme.name;

                  return mounted ? (
                    <Button
                      variant={"outline"}
                      size="sm"
                      key={theme.name}
                      onClick={() => {
                        setConfig({
                          ...config,
                          theme: theme.name,
                        });
                      }}
                      className={cn("justify-start", isActive && "border-2 border-primary")}
                      style={
                        {
                          "--theme-primary": `hsl(${theme?.activeColor[mode === "dark" ? "dark" : "light"]})`,
                        } as React.CSSProperties
                      }
                    >
                      <span className={cn("mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full bg-[--theme-primary]")}>{isActive && <Check className="h-4 w-4 text-white" />}</span>
                      {theme.label}
                    </Button>
                  ) : (
                    <Skeleton className="h-8 w-full" key={theme.name} />
                  );
                })}
            </div>
          </div>
          <div className="space-y-4">
            <Label className="text-xs">Radius</Label>
            <div className="grid grid-cols-5 gap-2">
              {["0", "0.3", "0.5", "0.75", "1.0"].map((value) => {
                return (
                  <Button
                    variant={"outline"}
                    size="sm"
                    key={value}
                    onClick={() => {
                      setConfig({
                        ...config,
                        radius: parseFloat(value),
                      });
                    }}
                    className={cn(config.radius === parseFloat(value) && "border-2 border-primary")}
                  >
                    {value}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </ThemeWrapper>
    </>
  );
}
