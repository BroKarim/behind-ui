import Link from "next/link";
import { SelectAnimation } from "../components/select-animation";
import { Button } from "@/components/ui/button";
import LogoHover from "../components/logo-hover";

const Theo = () => {
  return (
    <>
      <div className="z-50 min-h-screen bg-black text-white">
        <nav className="flex items-center justify-between p-4 md:p-6">
          <div className="flex items-center gap-6">
            <Link href="#" className="text-gray-300 transition-colors hover:text-white">
              Best Practices
            </Link>
            <Link href="#" className="text-gray-300 transition-colors hover:text-white">
              Help Center
            </Link>
            <Link href="#" className="text-gray-300 transition-colors hover:text-white">
              Pricing
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2  rounded-md bg-[#3e3d3d] p-[1px]">
              <SelectAnimation />
            </div>
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              Log in
            </Button>
            <Button className="bg-white text-black hover:bg-gray-100">Build your site</Button>
          </div>
        </nav>

        <main className="container mx-auto px-4 pt-20 md:pt-32">
          <div className="max-w-4xl">
            <div className="mb-12 flex items-center gap-3 font-mono text-5xl font-medium md:text-3xl">
              <h1>Hi, We&apos;re</h1>
              <LogoHover />
              {/* <img src="https://v0.blob.com" alt="wegic logo" width={160} height={60} className="inline-block" /> */}
            </div>

            <h2 className="mb-8 text-4xl md:text-5xl lg:text-6xl">Your AI website team: designer, developer, and manager.</h2>

            <p className="mb-12 text-3xl md:text-4xl lg:text-5xl">Just chat with us, and we&apos;ll build, manage, and effortlessly update your site.</p>

            <h3 className="mb-12 text-3xl md:text-4xl lg:text-5xl">Let&apos;s get started!</h3>

            <div className="flex gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-800">
                  <div className="h-1 w-4 rounded-full bg-white" />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
