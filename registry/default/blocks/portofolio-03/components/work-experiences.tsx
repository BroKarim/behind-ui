import React from "react";
import { Logos } from "./logos";
import { ExpandableTab } from "./expandable-tab";

interface Badge {
  children: React.ReactNode;
  company: string;
  role: string;
}

type BadgeItem = Badge;
interface WorkExperienceItem {
  period: string;
  work: string;
  preposition: string;
  badges: BadgeItem[];
  bgColor: string;
}

const workExperienceData: WorkExperienceItem[] = [
  {
    period: "2024 - Present",
    work: "CEO",
    preposition: "at",
    badges: [
      {
        children: <Logos.whatsapp className="h-4 w-4" />,
        company: "Whatsapp",
        role: "group chat",
      },
    ],
    bgColor: "bg-green-200",
  },
  {
    period: "2022 - 2024",
    work: "Researcher",
    preposition: "at",
    badges: [
      {
        children: <Logos.google className="h-4 w-4" />,
        company: "Google",
        role: " chrome browser",
      },
    ],
    bgColor: "bg-blue-50",
  },
  {
    period: "2020 - 2022",
    work: "Product Manager",
    preposition: "at",
    badges: [
      {
        children: <Logos.tiktok className="h-4 w-4" />,
        company: "Tiktok",
        role: "comments",
      },
    ],
    bgColor: "bg-red-200",
  },
  {
    period: "2019 - 2020",
    work: "Investor",
    preposition: "at",
    badges: [
      {
        children: <Logos.shopee className="h-4 w-4" />,
        company: "Shopee",
        role: "whislist",
      },
    ],
    bgColor: "bg-orange-50",
  },
];

export function WorkExperience() {
  return (
    <div className="mx-auto w-full max-w-4xl ">
      <h2 className="mb-12 text-4xl font-bold">Work Experience</h2>
      <div>
        <div className="w-full space-y-6">
          {workExperienceData.map((item, index) => (
            <div
              key={index}
              className="flex w-full flex-col gap-6 md:flex-row md:items-center  md:gap-20"
            >
              <div className="w-full text-gray-500 md:w-1/6">{item.period}</div>
              <div className=" flex items-center justify-start gap-2">
                <div>
                  {item.work} {item.preposition}
                </div>
                <ExpandableTab badges={item.badges} bgColor={item.bgColor} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
