import { ButtonColorful } from "./colorful-button";
import { Installer } from "./installer";
import { Button } from "@/components/ui/button";

export const Banner = () => (
  <section className="bg-dashed flex flex-col items-center justify-center gap-6 px-4 py-16 sm:px-16 sm:py-24">
    <h1 className="max-w-3xl text-center text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:max-w-4xl md:text-6xl lg:leading-[1.1]">
      Production-grade Turborepo template for Next.js apps
    </h1>
    <p className="max-w-xl text-center text-neutral-600 dark:text-neutral-400 md:max-w-2xl md:text-lg">
      A monorepo template designed to have everything you need to build your new
      SaaS app as thoroughly as possible. Free and open source, forever.
    </p>
    <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-4 sm:flex-row">
      <Installer />
      <Button>Get started</Button>
    </div>
  </section>
);
