import { cn } from "@/lib/utils";
import { PostCard } from "./components/post-card";

export default function Page() {
  return (
    <>
      <div className="max-w-screen  bg-backgroud z-50 p-4  2xl:overflow-visible flex min-h-screen items-center justify-center">
        <div className="3xl:gap-36 4xl:gap-40 xl:gap-18 3xl:py-32 4xl:py-36 isolate mx-auto flex w-full max-w-2xl flex-col gap-20 px-4 py-12 md:gap-24 md:px-6 md:py-16 lg:gap-28 lg:px-8 lg:py-20 xl:py-24 2xl:gap-32 2xl:py-28">
          <Section>
            <SectionHeading className="lg:text-center">
              Posts are the sweet spots between chat and docs
            </SectionHeading>
            <PostCard />
          </Section>
        </div>
      </div>
    </>
  );
}

export function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("flex flex-col gap-4", className)}>
      {children}
    </section>
  );
}

export function SectionHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "scroll-mt-20 text-balance text-[clamp(1.5rem,_3vw,_1.8rem)] font-semibold leading-[1.2] -tracking-[0.5px]",
        className,
      )}
    >
      {children}
    </h3>
  );
}
