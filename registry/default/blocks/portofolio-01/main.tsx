import { Item } from "./components/fade-in";
import { List } from "./components/list";
import Link from "next/link";
import { Footer } from "./components/footer";

export default function HomeLayout() {
  return (
    <>
      <div className="max-w-screen relative z-50 mx-auto h-full px-4 pt-20 md:h-screen">
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
            <Footer />
          </Item>
        </div>
      </div>
    </>
  );
}
