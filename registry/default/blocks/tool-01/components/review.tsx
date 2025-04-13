import { MessageCircleIcon } from "lucide-react";
import Image from "next/image";

import { Icons } from "@/components/icons";

export const Review = () => (
  <section className="flex flex-col gap-8 p-8">
    <div className="flex items-center gap-2 text-neutral-500">
      <MessageCircleIcon size={14} />
      <small>Nice words</small>
    </div>
    <p className="text-xl font-semibold tracking-tight sm:text-2xl">
      &ldquo;Active has completely transformed how I approach SaaS development.
      The all-in-one setup saves so much time, and the fact that it's free and
      open source is just the cherry on top. Highly recommend for any devs
      looking to streamline their workflows!.&rdquo;
    </p>
    <div className="space-between flex items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="flex items-center -space-x-1">
          <Image
            className="rounded-full ring-1 ring-background"
            src="https://github.com/BroKarim.png"
            width={24}
            height={24}
            alt="Avatar 01"
          />
        </div>
        <p className="text-sm text-neutral-500">
          <span className="font-medium">BroKarim</span>, CEO of Nothing
        </p>
      </div>
      <a
        href="https://x.com/rauchg/status/1853171412766466119"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icons.Xicon />
      </a>
    </div>
  </section>
);
