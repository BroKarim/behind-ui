// This component is sourced from 21st.dev, originally created by Origin UI.

import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

function GitHubButton() {
  return (
    <Button>
      <Star
        className="-ms-1 me-2 opacity-60"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
      <span className="flex items-baseline gap-2">
        Star
        <span className="text-xs text-primary-foreground/60">729</span>
      </span>
    </Button>
  );
}

export { GitHubButton };
