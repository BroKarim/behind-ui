import { Product } from "./product";
import NavigationOverlay from "./nav-overlay";

const ProVibe = () => {
  return (
    <>
      <div className="z-50 mx-auto max-w-full bg-white px-4 md:h-[32rem] md:overflow-auto">
        <div className=" grid  max-w-none grid-cols-1 p-0 lg:grid-cols-4">
          <aside className="fixed bottom-8  z-50 col-span-1 w-full  self-end text-xl font-bold  md:sticky  md:h-fit md:self-end">
            <NavigationOverlay />
          </aside>
          <div className="col-span-3 flex flex-col  gap-6 pt-6">
            <Product />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProVibe;
