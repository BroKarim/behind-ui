"use client";

import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Shortcut } from "./kbd";
export function InfoDialog() {
  const customShadowStyle = {
    boxShadow: `
      0px 32px 64px -16px rgba(0,0,0,0.30),
      0px 16px 32px -8px rgba(0,0,0,0.30),
      0px 8px 16px -4px rgba(0,0,0,0.24),
      0px 4px 8px -2px rgba(0,0,0,0.24),
      0px -8px 16px -1px rgba(0,0,0,0.16),
      0px 2px 4px -1px rgba(0,0,0,0.24),
      0px 0px 0px 1px rgba(0,0,0,1.00),
      inset 0px 0px 0px 1px rgba(255,255,255,0.08),
      inset 0px 1px 0px 0px rgba(255,255,255,0.20)
    `,
  };

  const commonClasses =
    "h-10 bg-[#131316] rounded-[99px] justify-center items-center inline-flex overflow-hidden text-white border-none";
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            style={customShadowStyle}
            className={`${commonClasses} text-secondary border-none `}
          >
            <Info />
            Hotkets
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Shortcut</DialogTitle>
          <div className="flex gap-8">
            <div className="flex-1 flex flex-col gap-2">
              <div className="flex flex-col gap-4">
                <Shortcut keys={["⌘", "Z"]}>Undo action</Shortcut>
                <Shortcut keys={["⌘", "⇧", "Z"]}>Redo action</Shortcut>
                <Shortcut keys={["⌘", "F"]}>Search icons</Shortcut>
                <Shortcut keys={["⌘", "."]}>Toggle interface</Shortcut>
                <Shortcut keys={["⌘", "K"]}>Toggle export menu</Shortcut>
                <Shortcut keys={["⌘", "⇧", "E"]}>Export</Shortcut>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <div className="flex flex-col gap-4">
                <Shortcut keys={["⌘", "C"]}>Copy image</Shortcut>
                <Shortcut keys={["⌘", "shift", "C"]}>Copy URL</Shortcut>
                <Shortcut keys={["?"]}>Open shortcuts</Shortcut>
                <Shortcut keys={["⌘", "N"]}>New table</Shortcut>
                <Shortcut keys={["⌘", "⇧", "C"]}>Clear contents</Shortcut>
                <Shortcut keys={["⌘", "↩"]}>Insert new row</Shortcut>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
