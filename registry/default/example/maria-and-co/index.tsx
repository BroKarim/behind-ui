import { Header } from "./header";
import { Marquee } from "../components/marquee";

export default function MariaAndCo() {
  return (
    <>
      <div className="z-1 relative flex flex-col justify-between overflow-hidden bg-white dark:bg-black  md:h-full">
        <Header />
        <section className="relative mx-auto flex w-full flex-col space-y-6 px-4 pb-8 pt-6 md:pt-10 lg:pt-16 ">
          <h1 className="mb-8 text-center text-7xl font-black leading-none tracking-tighter md:text-5xl lg:text-[10rem]">
            FALL WINTER 2024
          </h1>
          <div className="w-full grid-cols-1 place-items-center justify-center md:grid md:grid-cols-2 md:gap-4 ">
            <div className="relative ">
              <img
                src="https://images.unsplash.com/photo-1531599890467-0673e8859bbf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Model wearing black jacket over white t-shirt"
                className="w-96 object-cover md:w-full"
              />
            </div>
            <div className="relative hidden md:block">
              <div className="absolute right-4 top-4 z-10">
                <svg
                  className="h-32 w-32 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0l2.832 8.728L24 12l-9.168 3.272L12 24l-2.832-8.728L0 12l9.168-3.272z" />
                </svg>
              </div>
              <img
                src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Model in casual pose wearing light sweatshirt"
                className="object-cover md:w-full"
              />
            </div>
          </div>
        </section>
        <div className="w-full bg-white dark:bg-black">
          <Marquee>
            <div className="flex w-full items-center justify-center gap-2 text-black dark:text-white">
              <h1 className="text-4xl font-bold ">70% OFF ON OLDER PRODUCT</h1>
              <svg
                className="h-16 w-16  "
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0l2.832 8.728L24 12l-9.168 3.272L12 24l-2.832-8.728L0 12l9.168-3.272z" />
              </svg>
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
}
