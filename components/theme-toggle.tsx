import React from "react";
import { Moon, Sun } from "lucide-react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { useTheme } from "@/components/theme-provider";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  console.log("Current theme:", theme);
  // Debug the current theme
  React.useEffect(() => {
    console.log("ThemeToggle rendered with theme:", theme);
    console.log("HTML classes:", document.documentElement.className);
  }, [theme]);

  const handleThemeToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent default to ensure the event is fully handled
    const { clientX: x, clientY: y } = event;

    console.log("Toggle clicked:", { theme, x, y });
    toggleTheme({ x, y });
  };

  return (
    <div className="px-2">
      <Tooltip>
        <TooltipTrigger>
          <SwitchPrimitives.Root
            checked={theme === "dark"}
            onClick={handleThemeToggle}
            className="focus-visible:outline-hidden peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-accent data-[state=unchecked]:bg-input"
          >
            <SwitchPrimitives.Thumb className="pointer-events-none  flex h-5 w-5 items-center justify-center rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0">
              {theme === "dark" ? <Moon className="size-3" /> : <Sun className="size-3" />}
            </SwitchPrimitives.Thumb>
          </SwitchPrimitives.Root>
        </TooltipTrigger>
        <TooltipContent>Toggle light/dark mode</TooltipContent>
      </Tooltip>
    </div>
  );
}
