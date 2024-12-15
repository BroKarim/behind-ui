import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import { EarthIcon } from "./earth";

const suggestions = [
  "What are some unique features for a productivity app? ",
  "What strategies can enhance social media engagement?",
  "What are the essential elements of a meditation app?",
  "What are innovative ideas for a travel planning app?",
  "Draft a presentation with Slidev",
  "How can we optimize a food delivery app for user convenience?",
];

export default function Chat({
  borderSize = 2,
  borderRadius = 20,
  neonColors = {
    firstColor: "#ff00aa",
    secondColor: "#00FFF1",
  },
  ...props
}) {
  const [isFocused, setIsFocused] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Handle clicking outside to close suggestions
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="mx-auto w-full p-4 md:max-w-2xl ">
      <div className="relative" ref={inputRef}>
        <div className="relative flex items-center">
          <div className="pointer-events-none absolute left-2 flex items-center">
            {/* <Globe className="h-5 w-5 text-muted-foreground" /> */}
            <EarthIcon />
          </div>

          <Input
            type="text"
            placeholder="Ask Something..."
            className="h-12  rounded-full border-none bg-white pl-12 text-base ring-0 focus:outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
          />
          <Button
            size="icon"
            variant="ghost"
            className="absolute right-1 h-10 w-10 rounded-full bg-black hover:bg-green-500 "
          >
            <ArrowRight color="white" className="h-5 w-5 " />
          </Button>
        </div>

        {/* Suggestions dropdown */}
        <div
          className={cn(
            "absolute inset-x-0 top-full mt-2 h-72 overflow-y-auto rounded-lg bg-transparent p-2",
            "transition-all duration-200 ease-in-out",
            isFocused
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0",
          )}
        >
          <div className="relative flex  flex-wrap gap-2">
            {suggestions.map((suggestion) => (
              <Button
                key={suggestion}
                // variant="secondary"
                className={cn(
                  "h-auto rounded-full bg-white px-3 py-1.5 text-sm font-normal text-black hover:bg-transparent",
                )}
                onClick={() => {
                  setQuery(suggestion);
                  setIsFocused(false);
                  if (inputRef.current) {
                    inputRef.current.focus();
                  }
                }}
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
