"use client";

import { Icons } from "@/components/icons";
import Link from "next/link";
import { Bell, HelpCircle } from "lucide-react";
import Chat from "./chat";
import { ExpandableTabs } from "./expandable-tab";
import { NavbarMobile, NavbarProvider, NavbarMobileBtn } from "./navbar-components";

const Tirana = () => {
  const tabs = [
    { title: "Notifications", icon: Bell },
    { title: "Support", icon: HelpCircle },
  ];
  return (
    <>
      <div className=" z-50 flex h-screen flex-col items-center justify-between dark:bg-black md:overflow-hidden">
        <NavbarProvider>
          <nav className="absolute left-0 top-0 z-50 flex w-full items-center justify-between px-10 py-6 ">
            <div className="flex w-full  items-center justify-between space-x-12 text-lg font-medium md:justify-start">
              <div>
                <Icons.tirana />
              </div>
              <div className=" relative flex items-center justify-end">
                <div className="hidden space-x-4 rounded-full bg-[#f3f3f3] px-4 py-1 text-[12px] text-black md:gap-2 lg:flex">
                  <Link href="/">feature</Link>

                  <Link href="/">pricing</Link>
                  <Link href="/">help ccenter</Link>
                  <Link href="/">toolbox</Link>
                </div>
                <NavbarMobileBtn />
              </div>
            </div>
            <NavbarMobile />
            <div className="hidden w-full justify-end gap-4 md:flex">
              <ExpandableTabs tabs={tabs} />
            </div>
          </nav>
        </NavbarProvider>
        <div className=" flex-1 bg-white">
          <div className="absolute inset-0 z-50 h-full ">
            <div className="relative size-full">
              <div className="container flex  h-full flex-col items-center justify-center">
                <div className="-translate-y-10">
                  <h1 className="font-heading xs:text-2xl text-pretty text-center text-xl font-semibold tracking-tighter sm:text-3xl md:text-4xl">Where ideas and AI come together.</h1>
                  <h2 className="text-fg-muted mt-3 text-center text-sm">Ready to use world class headline components for your website with the backbone of clean code.</h2>
                  <div className="relative flex w-full items-center justify-center">
                    <div className="absolute left-1/2 top-0 -translate-x-1/2">
                      <div className="z-[-1] h-[450px] w-[700px] bg-[radial-gradient(at_0%_0%,#0894ff_0,rgba(0,0,0,0)_40%),radial-gradient(at_50%_30%,#ff2e54_0,rgba(0,0,0,0)_60%),radial-gradient(at_100%_0%,#ff9004_0,rgba(0,0,0,0)_40%)] blur-[100px]" />
                    </div>
                    <Chat />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tirana;
