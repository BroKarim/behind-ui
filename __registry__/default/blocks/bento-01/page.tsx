"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useAnimations } from "./hooks/useAnimation";
import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import AnimatedEmoji from "./components/animated-emoji";
import Logo from "./components/logo";

export default function MainLayout() {
  const { cardIdentity, cardSlogan, cardProduct, verticalCard, quoteCard } =
    useAnimations();

  return (
    <>
      <div className="max-w-screen  bg-backgroud z-50 h-screen p-4  2xl:overflow-visible">
        <div className="grid grid-cols-4 grid-rows-8 gap-5 text-primary lg:grid-cols-3">
          <div className=" col-span-full h-full w-full lg:col-span-1 lg:col-start-2 lg:row-span-2 lg:row-start-2">
            <Card className=" h-full w-full">
              <CardContent className="flex h-full  w-full items-center justify-center gap-2">
                <Logo className="h-auto w-48" />
              </CardContent>
            </Card>
          </div>
          <motion.div
            className=" group relative col-span-full p-0  lg:col-span-2 lg:row-span-1 lg:row-start-1"
            {...cardIdentity}
          >
            <Card className=" h-full w-full text-primary">
              <CardContent className="flex h-full items-end justify-start gap-2 px-8">
                <div className="w-80 text-xl ">
                  Discover our new eco-friendly skincare collection designs to
                  nourish your skin
                </div>
                <button className="dark:border-knight absolute  right-2 top-2 h-10 w-10 rounded-full border-2 border-transparent bg-primary p-2 transition-all duration-500 ease-in-out group-hover:w-40 group-hover:bg-primary md:h-[2.75rem] md:w-[2.75rem]">
                  <div className="flex items-center justify-center">
                    <span className="md:text-medium animate-fade invisible mr-1 hidden text-nowrap text-sm text-black  group-hover:visible group-hover:block ">
                      Order Now
                    </span>
                    <MoveUpRight className="text-black" />
                  </div>
                </button>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            className=" col-span-full row-start-2 row-end-3 rounded-full  p-0 lg:col-span-1 lg:col-start-1 lg:row-start-2"
            {...cardSlogan}
          >
            <Card className=" h-full w-full bg-blue-300 text-primary">
              <CardContent className="flex h-full items-center justify-center p-0">
                <h2 className="text-center text-2xl font-bold  lg:text-3xl">
                  Beauty & Care
                </h2>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            className="col-span-2 hidden justify-center rounded-full  p-0 lg:col-span-1 lg:col-start-3 lg:row-span-1 lg:row-start-3 lg:flex"
            {...cardProduct}
          >
            <Card className="flex h-full w-full items-center justify-center bg-blue-300 text-primary">
              <CardContent className=" flex items-center justify-center p-0 ">
                <div className="text-center text-3xl font-bold">
                  Serum & Treatment
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="col-span-full p-0 lg:col-span-1 lg:col-start-1 lg:row-span-2 lg:row-start-3"
            {...verticalCard}
          >
            <Card className="h-full w-full">
              <CardContent className="flex h-full items-center justify-center p-0">
                <AnimatedEmoji />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="relative hidden rounded-xl  lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:block lg:h-[350px]"
            {...verticalCard}
          >
            <Image
              src="https://images.unsplash.com/photo-1724084120131-3f2e0d11a288?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              priority={true}
              alt="profile image"
              fill
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
          </motion.div>
          <motion.div
            className="relative col-span-full  lg:col-span-2 lg:col-start-2 lg:row-span-1 lg:row-start-4"
            {...quoteCard}
          >
            <Card className="h-full w-full">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1584949514123-474cfa705dfe?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  priority={true}
                  alt="profile image"
                  fill
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "15px",
                  }}
                />
              </div>
              <div className="absolute inset-0 rounded-[15px] bg-black/30"></div>

              {/* Text Container with Center Alignment */}
              <div className="relative z-10 flex h-full  w-full items-center justify-center gap-1 px-4 text-center text-primary ">
                <p className="text-xl font-light">your secret</p>

                {/* Horizontal Line */}
                <div className="my-3 h-px bg-primary md:w-40"></div>

                <p className="text-xl font-light">beauty</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
}
