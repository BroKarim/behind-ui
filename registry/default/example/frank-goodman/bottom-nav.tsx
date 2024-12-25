"use client";
import React from "react";
import { PersonStanding, Mail, Compass } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";

const BottomNavigation = () => {
  const Tools = [
    {
      name: "frankgoodman",
      icon: <Compass className="text-black dark:text-white" size={20} />,
      link: "/",
    },
    {
      name: "index",
      icon: <Mail className="text-black dark:text-white" size={20} />,
      action: "toggle",
    },
    {
      name: "about",
      icon: <PersonStanding className="text-black dark:text-white" size={20} />,
      link: "/about",
    },
  ];

  return (
    <>
      <nav className=" static left-1/2 top-96 z-30 mb-4 flex gap-2 md:absolute md:mb-0 md:-translate-x-1/2  ">
        <div className="relative flex items-center justify-center  rounded-full bg-white/60 p-1  backdrop-blur-sm   ">
          {Tools.map((menu, index) => (
            <Button
              key={index}
              className="h-6 cursor-pointer  rounded-full py-0 text-center"
            >
              {menu.name}
            </Button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default BottomNavigation;
