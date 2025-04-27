"use client";

import * as React from "react";
import { BadgeCheck, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { TextureButton } from "@/components/ui/texture-button";

export interface PricingTier {
  name: string;
  price: number;
  description: string;
  features: string[];
  cta: string;
  linear?: boolean;
  default?: boolean;
}

interface PricingCardProps {
  tier: PricingTier;
  paymentFrequency: string;
}

export function PricingCard({ tier }: PricingCardProps) {
  const isLinear = tier.linear;
  const isDefault = tier.default;

  return (
    <Card
      className={cn(
        "relative w-96 overflow-hidden border border-white/60 dark:border-stone-950/60",
        "bg-gradient-to-b from-neutral-100 to-white/70 dark:from-neutral-800 dark:to-neutral-900",
        isLinear ? "text-primary" : "text-primary",
        isDefault && "ring-2 ring-primary",
        "bg-background/5",
        "bg-gradient-to-br from-black/5 to-black/[0.02] dark:from-white/5 dark:to-white/[0.02]",
        "backdrop-blur-xl backdrop-saturate-[180%]",
        "border border-black/10 dark:border-white/10",
        "shadow-[0_8px_16px_rgb(0_0_0_/_0.15)] dark:shadow-[0_8px_16px_rgb(0_0_0_/_0.25)]",
        "translate-z-0 will-change-transform",
      )}
    >
      {isLinear && <LinearBackground />}
      {isDefault && <DefaultBackground />}

      <div
        className={cn(
          "relative flex w-full flex-col gap-8 rounded-xl p-6",
          "bg-gradient-to-br from-black/[0.05] to-transparent dark:from-white/[0.08] dark:to-transparent",
          "backdrop-blur-md backdrop-saturate-150",
          "border border-black/[0.05] dark:border-white/[0.08]",

          "shadow-sm",
          "translate-z-0 will-change-transform",
          "before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-br before:from-black/[0.02] before:to-black/[0.01] before:opacity-0 before:transition-opacity dark:before:from-white/[0.03] dark:before:to-white/[0.01]",
          "hover:before:opacity-100",
        )}
      >
        <h2 className="flex w-full items-center justify-between gap-3 text-xl font-medium capitalize">
          {tier.name}
          {isDefault && (
            <Badge variant="accent" className="z-10 p-1">
              30 days free trial
            </Badge>
          )}
        </h2>

        <div className="relative h-12">
          <>
            <span className="text-4xl font-medium">${tier.price}</span>
            <p className="-mt-2 text-xs text-muted-foreground">
              Per month/user
            </p>
          </>
        </div>
        <TextureButton variant="accent" className="w-full ">
          {tier.cta}
          <ArrowRight className="ml-2 h-4 w-4" />
        </TextureButton>

        <div className="flex-1 space-y-2 border-t border-primary/40 pt-6">
          <h3 className="text-sm font-medium">{tier.description}</h3>
          <ul className="space-y-2 text-primary">
            {tier.features.map((feature, index) => (
              <li
                key={index}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium",
                  isLinear ? "text-primary" : "text-primary",
                )}
              >
                <BadgeCheck className="h-4 w-4" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}

const LinearBackground = () => (
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:45px_45px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
);

const DefaultBackground = () => (
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
);
