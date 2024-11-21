import { Switch } from "@/components/ui/switch";
import { Icons } from "@/components/icons";
import { Marquee } from "./components/marquee";
import { Player } from "@lottiefiles/react-lottie-player";
import { useTheme } from "next-themes";

export default function Odama() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="z-1 relative flex flex-col justify-between bg-white dark:bg-black  md:h-full">
        <Marquee className="bg-[#01ff00]">
          <div className="flex w-full items-center justify-center gap-8  text-black ">
            <p className="font-sans text-sm font-medium">
              now accepting new projects
            </p>
            <p className="font-sans text-sm font-medium">
              now accepting new projects
            </p>
            <p className="font-sans text-sm font-medium">
              now accepting new projects
            </p>
          </div>
        </Marquee>
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-4 dark:bg-black">
          {/* Navigation */}
          <nav className="absolute left-0 top-0 flex w-full items-center justify-between p-6">
            <div className=" font-medium">
              <Icons.odama />
            </div>
            <Switch
              id="theme-switch"
              className="h-4 border "
              checked={theme === "dark"}
              onCheckedChange={(checked) =>
                setTheme(checked ? "dark" : "light")
              }
            />
          </nav>

          {/* Main Content */}
          <div className="w-full max-w-4xl space-y-12 text-center md:max-w-full">
            {/* Logo/Title */}
            <h1 className="font-serif text-4xl tracking-tight text-black dark:text-white sm:text-6xl md:text-8xl lg:text-[10rem]">
              FOR GOOD DESIGN
            </h1>
          </div>

          <p className="text-lg md:text-2xl">
            Lets make this digital age a little more human.
          </p>
          <div className="absolute bottom-16 right-2 translate-x-1/4 translate-y-1/4">
            <div className="relative flex gap-2 dark:hidden">
              <Player
                src="https://lottie.host/cc2816b3-737f-45b5-8fdd-996f233a76df/jXxToAaL72.json"
                speed={1.5}
                className="h-56 w-56 rotate-90"
                loop
                autoplay
              />
              <span className="absolute right-16 top-6 text-sm font-medium">
                WORK
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
