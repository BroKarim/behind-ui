import { Item } from "./components/fade-in";
import { List } from "./components/list";
import Link from "next/link";
import { Footer } from "./components/footer";
import { projects } from "./contents/projects";

export default function HomeLayout() {
  return (
    <>
      <div className=" relative z-50 mx-auto flex h-full w-full justify-center px-4 pt-20 text-primary md:h-screen">
        <div>
          <Item translateAnimation={false}>
            <h1 className="text-lg font-semibold">Mehdi Ben Hadj Ali</h1>
          </Item>
          <Item>
            <p className="text-fg-muted">Design Engineer</p>
          </Item>

          <Item>
            <p className="mt-10 text-sm">
              Currently making the web better at{" "}
              <Link href="https://dotui.org" target="_blank">
                dotUI
              </Link>
              .<br />I like building accessible, polished, and modern user
              interfaces.
            </p>
          </Item>
          <Item>
            <h2 className="text-fg-muted mb-2 mt-10 text-sm">Projects</h2>
          </Item>
          <List items={projects} />
          <Item>
            <Footer />
          </Item>
        </div>
      </div>
    </>
  );
}
