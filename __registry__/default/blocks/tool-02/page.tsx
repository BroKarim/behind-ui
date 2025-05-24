import React from "react";
import { Compare } from "./components/compare";
import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
  ImageComparisonMarquee,
} from "./components/image-compare";

const Index = () => {
  return (
    <>
      <div className="n bg-backgroud z-50 flex min-h-screen items-center justify-center p-4">
        {/* <ImageComparison className="aspect-[16/10] w-full rounded-lg border border-zinc-200 dark:border-zinc-800">
          <ImageComparisonImage src="https://motion-primitives.com/mp_dark.png" alt="Motion Primitives Dark" position="left" />
          <ImageComparisonImage src="https://motion-primitives.com/mp_light.png" alt="Motion Primitives Light" position="right" />
          <ImageComparisonSlider className="w-2 bg-white/50 backdrop-blur-sm transition-colors hover:bg-white/80">
            <div className="absolute left-1/2 top-1/2 h-8 w-6 -translate-x-1/2 -translate-y-1/2 rounded-[4px] bg-white" />
          </ImageComparisonSlider>
        </ImageComparison> */}
        <ImageComparisonMarquee
          comparisons={[
            {
              leftSrc: "https://motion-primitives.com/mp_dark.png",
              rightSrc: "https://motion-primitives.com/mp_light.png",
              alt: "Perbandingan 1",
            },
            {
              leftSrc: "https://motion-primitives.com/mp_dark.png",
              rightSrc: "https://motion-primitives.com/mp_light.png",
              alt: "Perbandingan 2",
            },
            {
              leftSrc: "https://motion-primitives.com/mp_dark.png",
              rightSrc: "https://motion-primitives.com/mp_light.png",
              alt: "Perbandingan 3",
            },
            {
              leftSrc: "https://motion-primitives.com/mp_dark.png",
              rightSrc: "https://motion-primitives.com/mp_light.png",
              alt: "Perbandingan 4",
            },
            {
              leftSrc: "https://motion-primitives.com/mp_dark.png",
              rightSrc: "https://motion-primitives.com/mp_light.png",
              alt: "Perbandingan 5",
            },
            {
              leftSrc: "https://motion-primitives.com/mp_dark.png",
              rightSrc: "https://motion-primitives.com/mp_light.png",
              alt: "Perbandingan 6",
            },
          ]}
          transitionDuration={3000} // Waktu transisi dalam milidetik
          pauseOnHover={true}
          reverse={false}
        />
        {/* <div className="rounded-3xl border border-neutral-200 bg-neutral-100 p-4  dark:border-neutral-800 dark:bg-neutral-900">
          <Compare
            firstImage="https://assets.aceternity.com/code-problem.png"
            secondImage="https://assets.aceternity.com/code-solution.png"
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
            slideMode="hover"
            autoplay={true}
          />
        </div> */}
      </div>
    </>
  );
};

export default Index;
