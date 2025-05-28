"use client";

import * as React from "react";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { ThemeWrapper } from "./theme-wrapper";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Skeleton } from "./ui/skeleton";
// import "@/styles/mdx.css";
import ThemePresetSelect from "./editor/theme-select";
import { useThemePresetStore } from "@/store/theme-preset-store";
import { useEditorStore } from "@/store/editor-store";
import { CodePanelDialog } from "./code-panel-dialog";
import { ScrollArea } from "./ui/scroll-area";
import ThemeFontSelect from "./editor/theme-font-select";
import { getAppliedThemeFont, monoFonts, sansSerifFonts, serifFonts } from "@/utils/theme-fonts";
import {  DEFAULT_FONT_SANS } from "@/config/theme";

interface ColorBoxProps {
  color: string;
}

export function ThemeCustomizer() {
  const [mounted, setMounted] = React.useState(false);
  const [codePanelOpen, setCodePanelOpen] = React.useState(false);
  const { themeState } = useEditorStore();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className="h-screen overflow-hidden flex flex-col">
        <ScrollArea className="overflow-auto flex-1 p-4 ">
          <Customizer />
          <Button className="mt-8 w-full bg-black text-white" onClick={() => setCodePanelOpen(true)}>
            Show Code
          </Button>
          <CodePanelDialog open={codePanelOpen} onOpenChange={setCodePanelOpen} themeEditorState={themeState} />
        </ScrollArea>
      </div>
    </>
  );
}

const primaryPresets = [
  { name: "Blue", value: "hsl(240 100% 50%)" },
  { name: "Pink", value: "hsl(330 100% 70%)" },
  { name: "Emerald", value: "hsl(160 80% 45%)" },
  { name: "Zinc", value: "hsl(240 5% 60%)" },
  { name: "Slate", value: "hsl(222 14% 60%)" },
  { name: "Stone", value: "hsl(24 6% 60%)" },
  { name: "Gray", value: "hsl(0 0% 60%)" },
  { name: "Neutral", value: "hsl(0 0% 50%)" },
  { name: "Red", value: "hsl(0 100% 50%)" },
  { name: "Orange", value: "hsl(24 100% 50%)" },
  { name: "Green", value: "hsl(142 71% 45%)" },
  { name: "Yellow", value: "hsl(47 100% 50%)" },
  { name: "Violet", value: "hsl(262 83% 58%)" },
];
const ColorBox: React.FC<ColorBoxProps> = ({ color }) => <div className="h-3 w-3 rounded-sm border border-muted" style={{ backgroundColor: color }} />;

function Customizer() {
  const [mounted, setMounted] = React.useState(false);
  const { applyThemePreset, themeState } = useEditorStore();
  const presets = useThemePresetStore((state) => state.getAllPresets());
  const setThemeState = useEditorStore((state) => state.setThemeState);
  const currentMode = themeState.currentMode;
  const styles = themeState.styles;
  const radiusPresets = ["0", "0.3", "0.5", "0.75", "1.0"];

  const currentStyles = {
    ...styles.light,
    ...(currentMode === "dark" ? styles.dark : {}),
  };

  function updateStyle<K extends keyof typeof currentStyles>(key: K, value: (typeof currentStyles)[K]) {
    const updatedStyles = {
      ...styles,
      [currentMode]: {
        ...styles[currentMode],
        [key]: value,
      },
    };

    setThemeState({
      ...themeState,
      styles: updatedStyles,
    });
  }

  const currentRadius = parseFloat(currentStyles.radius.replace("rem", ""));

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeWrapper className="flex flex-col space-y-4  md:space-y-6">
      <div className="flex flex-1 flex-col space-y-4 font-sans md:space-y-6">
        {/* Mode opt */}

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Mode</h3>
          <div>
            {mounted ? (
              <>
                <ThemeToggle />
              </>
            ) : (
              <>
                <Skeleton className="h-8 w-full" />
              </>
            )}
          </div>
        </div>
        <div className="space-y-4">
          <ThemePresetSelect presets={presets} currentPreset={themeState.preset || null} onPresetChange={applyThemePreset} />
        </div>
        {/* color */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Color</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {primaryPresets.map((preset) => {
              const isActive = currentStyles.primary === preset.value;

              return (
                <Button
                  key={preset.name}
                  variant="outline"
                  size="sm"
                  onClick={() => updateStyle("primary", preset.value)}
                  className={cn("justify-start ", isActive && "border-2 border-primary bg-primary/20")}
                  style={
                    {
                      "--theme-primary": `hsl(${preset.value})`,
                    } as React.CSSProperties
                  }
                >
                  <ColorBox color={preset.value} />

                  {preset.name}
                </Button>
              );
            })}
          </div>
        </div>
        {/* radius */}
        <div className="space-y-4">
          <Label className="text-xs">Radius</Label>
          <div className="grid grid-cols-5 gap-2">
            {radiusPresets.map((value) => {
              const radiusValue = parseFloat(value);
              const isActive = currentRadius === radiusValue;

              return (
                <Button variant="outline" size="sm" key={value} onClick={() => updateStyle("radius", `${radiusValue}rem`)} className={cn(isActive && "border-2 border-primary")}>
                  {value}
                </Button>
              );
            })}
          </div>
        </div>
        {/* font */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Font</h3>
          <ThemeFontSelect fonts={{ ...sansSerifFonts, ...serifFonts, ...monoFonts }} defaultValue={DEFAULT_FONT_SANS} currentFont={getAppliedThemeFont(themeState, "font-sans")} onFontChange={(value) => updateStyle("font-sans", value)} />
        </div>
      </div>
    </ThemeWrapper>
  );
}
