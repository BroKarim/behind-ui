import { Header } from "./components/header";
import { Banner } from "./components/banner";
import { Review } from "./components/review";
import { OpenSource } from "./components/open-source";

export default function HomeLayout() {
  return (
    <div className="flex flex-col ">
      <div className="container mx-auto border-x">
        <Header />
        <div className="divide-y">
          <Banner />
          <div className="grid divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <div className="sm:col-span-2">
              <Review />
            </div>
            <div className="sm:col-span-1">
              <OpenSource />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
