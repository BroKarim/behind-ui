import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1524357157238-7d55300162dc?q=80&w=2570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Adventure background with people on a yellow off-road vehicle"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 z-10 bg-black/20"></div>

      {/* Content Container */}
      <div className="relative z-20 h-full w-full">
        {/* Header/Navigation */}
        <header className="flex items-center justify-between p-4 md:px-8 lg:px-16">
          <div className="flex items-center">
            <Image src="/placeholder.svg?height=50&width=120" alt="Eiger Logo" width={120} height={50} className="h-10 w-auto md:h-12" />
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <div className="flex items-center rounded-full bg-white/90 px-6 py-2">
              <Link href="/" className="px-3 py-1 font-medium text-gray-800">
                Home
              </Link>
              <Link href="/collections" className="px-3 py-1 font-medium text-gray-800">
                Our Collections
              </Link>
              <Link href="/about" className="px-3 py-1 font-medium text-gray-800">
                About
              </Link>
            </div>
            <Link href="/pre-order" className="rounded-full bg-black px-6 py-2 font-medium text-white">
              Pre-Order Now
            </Link>
          </nav>

          <button className="text-white md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </header>

        {/* Main Hero Content */}
        <div className="flex h-[calc(100%-80px)] flex-col px-4 md:flex-row md:px-8 lg:px-16">
          {/* Left Side - Main Heading */}
          <div className="flex flex-1 items-center">
            <h1 className="text-5xl font-bold leading-tight text-[#f5b47b] md:text-6xl lg:text-7xl xl:text-8xl">
              You Are
              <br />
              Meant To
              <br />
              Travel
            </h1>
          </div>

          {/* Right Side - Collection Card & CTA */}
          <div className="flex flex-1 flex-col items-end justify-center gap-8 pb-12 md:pb-0">
            {/* Collection Card */}
            <div className="w-full max-w-xs rounded-lg bg-gray-100/90 p-4">
              <div className="flex gap-4">
                <div className="h-20 w-20 overflow-hidden rounded-lg bg-gray-800">
                  <Image src="/placeholder.svg?height=80&width=80" alt="Riding Collection" width={80} height={80} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Riding Series Collections</h3>
                  <p className="text-sm text-gray-600">new style for you</p>
                  <Link href="/collections" className="text-sm text-gray-900 hover:underline">
                    View Collections
                  </Link>
                </div>
              </div>
            </div>

            {/* Description Text */}
            <div className="max-w-md text-white">
              <p className="text-lg">Adventure awaits. Explore, wander, and embrace the journey—because the world is yours to discover</p>
            </div>

            {/* CTA Button */}
            <Button variant="ghost" className="flex items-center gap-2  px-6 py-3 font-medium text-white">
              Discover More
              <ChevronRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
