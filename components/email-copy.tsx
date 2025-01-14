"use client";

import { useState, useEffect } from "react";
import { Copy, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { toast } from "sonner";
import { useToast } from "@/hooks/use-toast";

export default function EmailCopy() {
  const [copied, setCopied] = useState(false);
  const email = "brokariim@gmail.com";
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(email); // Tidak menggunakan async
    setCopied(true);

    // Reset state setelah 2 detik
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        toast({
          description: "Email copied successfully.",
        });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <Button
      variant="ghost"
      className={`
          group flex items-center gap-3 rounded-full bg-[#34383c] py-4 
          transition-colors hover:bg-zinc-800
          ${copied ? "text-green-400" : "text-zinc-200"}
        `}
      onClick={handleCopy}
    >
      {copied ? <ClipboardCheck className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
      <span className="border-b border-current font-mono text-sm">{email}</span>
      <span className="sr-only">{copied ? "Copied!" : "Click to copy email address"}</span>
    </Button>
  );
}
