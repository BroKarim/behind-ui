"use client";
import SuggestComponents from "@/components/suggest-component";

export default function Home() {
  return (
    <>
      <div className="absolute inset-0 h-full overflow-hidden">
        <div className="relative size-full">
          <div className="container flex h-full flex-col items-center justify-center">
            <div className="-translate-y-10">
              <h1 className="font-heading xs:text-2xl text-pretty text-center text-xl font-semibold tracking-tighter sm:text-3xl md:text-4xl">When Dribble Meets Code.</h1>
              <h2 className="text-fg-muted mt-3 text-center text-sm">Ready to use world class headline components for your website with the backbone of clean code.</h2>
              <div className="relative flex w-full items-center justify-center">
                <div className="absolute left-1/2 top-0 -translate-x-1/2">
                  <div className="z-[-1] h-[450px] w-[700px] bg-[radial-gradient(at_0%_0%,#0894ff_0,rgba(0,0,0,0)_40%),radial-gradient(at_50%_30%,#ff2e54_0,rgba(0,0,0,0)_60%),radial-gradient(at_100%_0%,#ff9004_0,rgba(0,0,0,0)_40%)] blur-[100px]" />
                </div>
                <SuggestComponents
                  onSend={(message) => {
                    // Handle sending message here
                    console.log(message);
                  }}
                />
                {/* <SearchCommand context animated className="mt-6 h-64 w-full lg:min-w-[600px]" /> */}
              </div>
            </div>
            {/* footer */}
          </div>
        </div>
      </div>
    </>
  );
}
