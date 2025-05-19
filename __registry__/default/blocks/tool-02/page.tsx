import React from "react";
import { Compare } from "./components/compare";
const Index = () => {
  return (
    <>
      <div className="max-w-screen bg-backgroud z-50 flex min-h-screen items-center justify-center p-4">
        <div className="rounded-3xl border border-neutral-200 bg-neutral-100 p-4  dark:border-neutral-800 dark:bg-neutral-900">
          <Compare
            firstImage="https://assets.aceternity.com/code-problem.png"
            secondImage="https://assets.aceternity.com/code-solution.png"
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
            slideMode="hover"
          />
        </div>
      </div>
    </>
  );
};

export default Index;
