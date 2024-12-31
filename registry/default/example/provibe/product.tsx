import WaitlistButton from "./waitlist-button";
import ProductGrid from "./product-card";
import { ArrowUp } from "lucide-react";
import { CompactButton } from "./compact-button";
const product = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1599348338068-f5725422f77f?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1631863552070-7f7329017f2e?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1637160151663-a410315e4e75?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1520170350707-b2da59970118?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1603372715460-9b4679de62ec?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1562869319-a1368ba7fe75?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1633793566211-7e7355c24a96?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1645961359148-ca3f853de345?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1671834214323-eb472b9c6ec6?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1512580770426-cbed71c40e94?q=80&w=3007&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function Product() {
  return (
    <>
      <div className=" flex flex-col gap-4 p-6 md:p-10">
        <div className="flex w-full flex-col space-y-4 px-2 md:flex-row md:justify-between md:space-x-8 md:space-y-0">
          {/* Hero Section */}
          <div className="max-w-lg space-y-6">
            <h3 className=" text-lg text-black md:text-lg xl:text-2xl">
              ProVibe is a sleek and modern platform designed to showcase a
              curated collection of lifestyle products. From stylish bags and
              cameras to luxury watches, lipsticks, and wardrobes, ProVibe
              offers a vibrant space to explore and discover high-quality items
              that elevate your everyday living.
            </h3>
          </div>

          {/* CTA Buttons */}
          <div className="flex w-full flex-col items-start justify-between gap-4 ">
            <p className="ubuntu-medium font-bold text-black">
              52°13&apos;47.17&quotN, 21°0&apos;42.41&quotE{" "}
              <span className="text-xs opacity-35">/offline store</span>
            </p>
            <div className="flex gap-2">
              <WaitlistButton />
              <CompactButton
                placeholder="name@gmail.com"
                onSearch={(value) => console.log("Searching:", value)}
                searchIcon={"Notify me"}
                backIcon={<ArrowUp className="h-5 w-5" />}
              />
            </div>
          </div>
        </div>
        <ProductGrid products={product} />
      </div>
    </>
  );
}
