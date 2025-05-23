"use client";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose } from "./drawer";
import React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LangSwitch() {
  return (
    <React.Fragment>
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className={cn("flex items-center rounded-sm")}
          >
            <span>EN</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="grid gap-4 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Select Language</h3>
              <DrawerClose asChild>
                <Button variant="ghost" size="icon" className="rou h-8 w-8">
                  <X className="h-5 w-5" />
                </Button>
              </DrawerClose>
            </div>
            <div className="grid gap-2">
              <Button variant="ghost" className="justify-start gap-2">
                <span>English</span>
              </Button>
              <Button variant="ghost" className="justify-start gap-2">
                <span>Español</span>
              </Button>
              <Button variant="ghost" className="justify-start gap-2">
                <span>Français</span>
              </Button>
              <Button variant="ghost" className="justify-start gap-2">
                <span>Deutsch</span>
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  );
}
