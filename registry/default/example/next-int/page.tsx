"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icons } from "@/components/icons";
import { NavigationBar } from "./components/navbar";
import { Photos } from "./components/photos";
import LangSwitch from "./components/lang-switch";
const projects = [
  {
    id: 1,
    media: "https://images.unsplash.com/photo-1571781418606-70265b9cce90?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    media: "https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    media: "https://images.unsplash.com/photo-1557804483-ef3ae78eca57?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    media: "https://plus.unsplash.com/premium_photo-1684445035564-c98efbe1fb7d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    media: "https://images.unsplash.com/photo-1493857671505-72967e2e2760?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    media: "https://images.unsplash.com/photo-1551038247-3d9af20df552?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const NextInt = () => {
  const photos = projects.map((project) => project.media);
  return (
    <>
      <div className="z-50 flex h-full flex-col items-center justify-between overflow-hidden bg-background px-4 md:h-screen ">
        <div className="flex w-full items-center justify-between p-6 px-10">
          <div className="flex flex-1 text-lg font-medium text-primary  md:text-2xl">NexInt</div>
          <div className="hidden w-full flex-1 justify-end md:flex md:justify-center">
            <NavigationBar.Desktop />
          </div>
          <div className="flex justify-end gap-3 md:flex-1">
            <LangSwitch />
          </div>
        </div>

        <div className=" flex-1  md:mt-10">
          <div className="container flex-col items-center md:flex md:h-full md:justify-between">
            <div className="text-primary md:translate-y-32">
              <div className="mb-2 flex w-full items-center justify-center gap-2">
                <Icons.nextint />
                Broadway St., 123, New York, NY 10007 USA
              </div>
              <h1 className="font-heading xs:text-2xl text-pretty text-center text-xl tracking-tighter sm:text-3xl md:max-w-6xl  md:text-7xl">
                Building visions & creating reality <br />
                with NextInt
              </h1>
            </div>
            <Photos photos={photos} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NextInt;
