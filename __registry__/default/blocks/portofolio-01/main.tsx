import { List } from "./components/list";
import Link from "next/link";
import { Footer } from "./components/footer";
import { projects } from "./contents/projects";
import AnimatedBackground from "./components/animated-background";

export default function HomeLayout() {
  return (
    <>
      <div className=" relative z-50 mx-auto flex h-full w-full justify-center px-4 pt-20 text-primary md:h-screen">
        <div>
          <div>
            <h1 className="text-lg font-semibold">BroKarim</h1>
          </div>
          <div>
            <p className="text-fg-muted">Software Engineer</p>
          </div>

          <div>
            <p className="mt-10 text-sm">
              Designing sleek, accessible, and modern UIs that set a new
              standard in functionality and aesthetics
            </p>
          </div>
          <div>
            <h2 className="text-fg-muted mb-2 mt-10 text-sm">Projects</h2>
          </div>
          <List items={projects} />
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
