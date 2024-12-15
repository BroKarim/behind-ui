"use client";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { codeToHtml } from "shiki";

type CodePreviewProps = {
  children: string;
  language?: string;
};

export default function CodePreview({ children, language = "javascript" }: CodePreviewProps) {
  const [hasCheckIcon, setHasCheckIcon] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(children); // Salin isi dari children ke clipboard
    setHasCheckIcon(true);

    setTimeout(() => {
      setHasCheckIcon(false);
    }, 1000);
  };

  return (
    <div className="relative">
      <div className="absolute right-4 top-4 cursor-pointer bg-transparent p-2" onClick={onCopy}>
        <div className={`absolute inset-0 transition-all duration-300${hasCheckIcon ? "scale-0 opacity-0" : "scale-100 opacity-100"}`}>
          <Copy className="h-4 w-4 text-zinc-50" />
        </div>
        <div className={`absolute inset-0 transition-all duration-300${hasCheckIcon ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
          <Check className="h-4 w-4 text-zinc-50" />
        </div>
      </div>
      <div className="h-[650px] overflow-auto rounded-md bg-zinc-900 text-white">
        <code>{children}</code>
      </div>
    </div>
  );
}
