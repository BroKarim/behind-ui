"use client";

import * as React from "react";
import template from "lodash.template";
import { Check } from "lucide-react";
import { useTheme } from "next-themes";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { ThemeWrapper } from "./theme-wrapper";
import { copyToClipboardWithMeta } from "./copy-button";
import { useConfig } from "@/lib/use-config";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { baseColors, BaseColor } from "@/registry/registry-base-colors";
import { Skeleton } from "./ui/skeleton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import "@/styles/mdx.css";
import ThemePresetSelect from "./editor/theme-select";
import { useThemePresetStore } from "@/store/theme-preset-store";
import { useEditorStore } from "@/store/editor-store";
import { CodePanelDialog } from "./code-panel-dialog";

export function ThemeCustomizer() {
  const [mounted, setMounted] = React.useState(false);
  const [codePanelOpen, setCodePanelOpen] = React.useState(false);
  const { themeState } = useEditorStore();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className="w-full">
        <Customizer />
        {/* <CopyCodeButton variant="ghost" size="sm" className=" [&_svg]:hidden" /> */}
        <Button className="mt-8 w-full bg-black text-white" onClick={() => setCodePanelOpen(true)}>
          Show Code
        </Button>
        <CodePanelDialog open={codePanelOpen} onOpenChange={setCodePanelOpen} themeEditorState={themeState} />
      </div>
    </>
  );
}

// TODO: Update customization approach to align with TweaKCN for font, color, radius, and shadow
function Customizer() {
  const [mounted, setMounted] = React.useState(false);
  const { setTheme: setMode, resolvedTheme: mode } = useTheme();
  const [config, setConfig] = useConfig();
  const { applyThemePreset, themeState } = useEditorStore();
  const presets = useThemePresetStore((state) => state.getAllPresets());

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeWrapper className="flex flex-col space-y-4  md:space-y-6">
      <div className="flex flex-1 flex-col space-y-4 font-sans md:space-y-6">
        {/* Mode opt */}
        <div className="space-y-4 bg-background">
          <h3 className="text-xl font-medium">Mode</h3>
          <div className="grid grid-cols-3 gap-2">
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
        {/* radius */}
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
        {/* font */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Font</h3>
          <Select value={config.font} onValueChange={(value) => setConfig({ ...config, font: value as "sans" | "mono" | "serif" | "roboto" })}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select font" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sans">Sans</SelectItem>
              <SelectItem value="serif">Serif</SelectItem>
              <SelectItem value="mono">Mono</SelectItem>
              <SelectItem value="roboto">Roboto</SelectItem>
              {/* <SelectItem value="roboto">Roboto</SelectItem> */}
            </SelectContent>
          </Select>
        </div>
      </div>
    </ThemeWrapper>
  );
}

// function CopyCodeButton({ className, ...props }: React.ComponentProps<typeof Button>) {
//   const [config, setConfig] = useConfig();
//   const activeTheme = baseColors.find((theme) => theme.name === config.theme);
//   const [hasCopied, setHasCopied] = React.useState(false);

//   React.useEffect(() => {
//     setTimeout(() => {
//       setHasCopied(false);
//     }, 2000);
//   }, [hasCopied]);

//   return (
//     <>
//       {activeTheme && (
//         <Button
//           onClick={() => {
//             copyToClipboardWithMeta(getThemeCode(activeTheme, config.radius), {
//               name: "copy_theme_code",
//               properties: {
//                 theme: activeTheme.name,
//                 radius: config.radius,
//               },
//             });
//             setHasCopied(true);
//           }}
//           className={cn("md:hidden", className)}
//           {...props}
//         >
//           {hasCopied ? <Check /> : <Copy />}
//           Copy code
//         </Button>
//       )}
//       <Dialog>
//         <div className="mt-10 flex w-full  items-center space-x-2">
//           <DialogTrigger asChild className="flex items-center justify-center">
//             <Button className={cn(" w-full  bg-black text-white   ", className)} {...props}>
//               Copy code
//             </Button>
//           </DialogTrigger>
//           <DialogContent className="flex max-w-2xl flex-col outline-none">
//             <DialogHeader>
//               <DialogTitle>Theme</DialogTitle>
//               <DialogDescription>Copy and paste the following code into your CSS file.</DialogDescription>
//             </DialogHeader>
//             <ThemeWrapper  className="relative">
//               <CustomizerCode />
//               {activeTheme && (
//                 <Button
//                   size="sm"
//                   onClick={() => {
//                     copyToClipboardWithMeta(getThemeCode(activeTheme, config.radius), {
//                       name: "copy_theme_code",
//                       properties: {
//                         theme: activeTheme.name,
//                         radius: config.radius,
//                       },
//                     });
//                     setHasCopied(true);
//                   }}
//                   className="absolute right-4 top-4 bg-muted text-muted-foreground hover:bg-muted hover:text-muted-foreground"
//                 >
//                   {hasCopied ? <Check /> : <Copy />}
//                   Copy
//                 </Button>
//               )}
//             </ThemeWrapper>
//           </DialogContent>

//           <Button
//             size="icon"
//             variant="ghost"
//             className="rounded-md border-2 border-black"
//             onClick={() => {
//               setConfig({
//                 ...config,
//                 theme: "zinc",
//                 radius: 0.5,
//               });
//             }}
//           >
//             <Repeat />
//             <span className="sr-only">Reset</span>
//           </Button>
//         </div>
//       </Dialog>
//     </>
//   );
// }

// function CustomizerCode() {
//   const [config] = useConfig();
//   const activeTheme = baseColors.find((theme) => theme.name === config.theme);

//   return (
//     <ThemeWrapper className="relative space-y-4">
//       <div data-rehype-pretty-code-fragment="">
//         <pre className="max-h-[450px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900">
//           <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
//             <span className="line text-white">@layer base &#123;</span>
//             <span className="line text-white">&nbsp;&nbsp;:root &#123;</span>
//             <span className="line text-white">&nbsp;&nbsp;&nbsp;&nbsp;--background: {activeTheme?.cssVars.light["background"]};</span>
//             <span className="line text-white">&nbsp;&nbsp;&nbsp;&nbsp;--foreground: {activeTheme?.cssVars.light["foreground"]};</span>
//             {["card", "popover", "primary", "secondary", "muted", "accent", "destructive"].map((prefix) => (
//               <>
//                 <span className="line text-white">
//                   &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}: {activeTheme?.cssVars.light[prefix as keyof typeof activeTheme.cssVars.light]};
//                 </span>
//                 <span className="line text-white">
//                   &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}-foreground: {activeTheme?.cssVars.light[`${prefix}-foreground` as keyof typeof activeTheme.cssVars.light]};
//                 </span>
//               </>
//             ))}
//             <span className="line text-white">&nbsp;&nbsp;&nbsp;&nbsp;--border: {activeTheme?.cssVars.light["border"]};</span>
//             <span className="line text-white">&nbsp;&nbsp;&nbsp;&nbsp;--input: {activeTheme?.cssVars.light["input"]};</span>
//             <span className="line text-white">&nbsp;&nbsp;&nbsp;&nbsp;--ring: {activeTheme?.cssVars.light["ring"]};</span>
//             <span className="line text-white">&nbsp;&nbsp;&nbsp;&nbsp;--radius: {config.radius}rem;</span>
//             {["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"].map((prefix) => (
//               <>
//                 <span className="line text-white">
//                   &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}: {activeTheme?.cssVars.light[prefix as keyof typeof activeTheme.cssVars.light]};
//                 </span>
//               </>
//             ))}
//             <span className="line text-white">&nbsp;&nbsp;&#125;</span>
//             <span className="line text-white">&nbsp;</span>
//             <span className="line text-white">&nbsp;&nbsp;.dark &#123;</span>
//             <span className="line text-white">&nbsp;&nbsp;&nbsp;&nbsp;--background: {activeTheme?.cssVars.dark["background"]};</span>
//             <span className="line text-white">&nbsp;&nbsp;&nbsp;&nbsp;--foreground: {activeTheme?.cssVars.dark["foreground"]};</span>
//             {["card", "popover", "primary", "secondary", "muted", "accent", "destructive"].map((prefix) => (
//               <>
//                 <span className="line text-white">
//                   &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}: {activeTheme?.cssVars.dark[prefix as keyof typeof activeTheme.cssVars.dark]};
//                 </span>
//                 <span className="line text-white">
//                   &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}-foreground: {activeTheme?.cssVars.dark[`${prefix}-foreground` as keyof typeof activeTheme.cssVars.dark]};
//                 </span>
//               </>
//             ))}
//             <span className="line text-white">&nbsp;&nbsp;&nbsp;&nbsp;--border: {activeTheme?.cssVars.dark["border"]};</span>
//             <span className="line text-white">&nbsp;&nbsp;&nbsp;&nbsp;--input: {activeTheme?.cssVars.dark["input"]};</span>
//             <span className="line text-white">&nbsp;&nbsp;&nbsp;&nbsp;--ring: {activeTheme?.cssVars.dark["ring"]};</span>
//             {["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"].map((prefix) => (
//               <>
//                 <span className="line text-white">
//                   &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}: {activeTheme?.cssVars.dark[prefix as keyof typeof activeTheme.cssVars.dark]};
//                 </span>
//               </>
//             ))}
//             <span className="line text-white">&nbsp;&nbsp;&#125;</span>
//             <span className="line text-white">&#125;</span>
//           </code>
//         </pre>
//       </div>
//     </ThemeWrapper>
//   );
// }

function getThemeCode(theme: BaseColor, radius: number) {
  if (!theme) {
    return "";
  }

  return template(BASE_STYLES_WITH_VARIABLES)({
    colors: theme.cssVars,
    radius,
  });
}

const BASE_STYLES_WITH_VARIABLES = `
@layer base {
  :root {
    --background: <%- colors.light["background"] %>;
    --foreground: <%- colors.light["foreground"] %>;
    --card: <%- colors.light["card"] %>;
    --card-foreground: <%- colors.light["card-foreground"] %>;
    --popover: <%- colors.light["popover"] %>;
    --popover-foreground: <%- colors.light["popover-foreground"] %>;
    --primary: <%- colors.light["primary"] %>;
    --primary-foreground: <%- colors.light["primary-foreground"] %>;
    --secondary: <%- colors.light["secondary"] %>;
    --secondary-foreground: <%- colors.light["secondary-foreground"] %>;
    --muted: <%- colors.light["muted"] %>;
    --muted-foreground: <%- colors.light["muted-foreground"] %>;
    --accent: <%- colors.light["accent"] %>;
    --accent-foreground: <%- colors.light["accent-foreground"] %>;
    --destructive: <%- colors.light["destructive"] %>;
    --destructive-foreground: <%- colors.light["destructive-foreground"] %>;
    --border: <%- colors.light["border"] %>;
    --input: <%- colors.light["input"] %>;
    --ring: <%- colors.light["ring"] %>;
    --radius: <%- radius %>rem;
    --chart-1: <%- colors.light["chart-1"] %>;
    --chart-2: <%- colors.light["chart-2"] %>;
    --chart-3: <%- colors.light["chart-3"] %>;
    --chart-4: <%- colors.light["chart-4"] %>;
    --chart-5: <%- colors.light["chart-5"] %>;
  }

  .dark {
    --background: <%- colors.dark["background"] %>;
    --foreground: <%- colors.dark["foreground"] %>;
    --card: <%- colors.dark["card"] %>;
    --card-foreground: <%- colors.dark["card-foreground"] %>;
    --popover: <%- colors.dark["popover"] %>;
    --popover-foreground: <%- colors.dark["popover-foreground"] %>;
    --primary: <%- colors.dark["primary"] %>;
    --primary-foreground: <%- colors.dark["primary-foreground"] %>;
    --secondary: <%- colors.dark["secondary"] %>;
    --secondary-foreground: <%- colors.dark["secondary-foreground"] %>;
    --muted: <%- colors.dark["muted"] %>;
    --muted-foreground: <%- colors.dark["muted-foreground"] %>;
    --accent: <%- colors.dark["accent"] %>;
    --accent-foreground: <%- colors.dark["accent-foreground"] %>;
    --destructive: <%- colors.dark["destructive"] %>;
    --destructive-foreground: <%- colors.dark["destructive-foreground"] %>;
    --border: <%- colors.dark["border"] %>;
    --input: <%- colors.dark["input"] %>;
    --ring: <%- colors.dark["ring"] %>;
    --chart-1: <%- colors.dark["chart-1"] %>;
    --chart-2: <%- colors.dark["chart-2"] %>;
    --chart-3: <%- colors.dark["chart-3"] %>;
    --chart-4: <%- colors.dark["chart-4"] %>;
    --chart-5: <%- colors.dark["chart-5"] %>;
  }
}
`;
