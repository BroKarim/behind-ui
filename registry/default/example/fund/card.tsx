import { Marquee } from "@/components/marquee";
import { Card } from "@/components/ui/card";

const activity = [
  {
    id: 1,
    body: "Providing meals to underprivileged children",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    body: "Organizing community clean-up events.",
    img: "https://images.unsplash.com/photo-1616680214084-22670de1bc82?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    body: "Assisting families in need with moving and resettling",
    img: "https://images.unsplash.com/photo-1610064094685-2015f42d8586?q=80&w=2732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    body: "Offering school supplies and tutoring for disadvantaged students",
    img: "https://images.unsplash.com/flagged/photo-1574098335395-18cf525e45d6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    body: "Supporting medical care for low-income families",
    img: "https://images.pexels.com/photos/263337/pexels-photo-263337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 6,
    body: "Offering free sports programs and equipment for kids",
    img: "https://images.unsplash.com/photo-1593101635261-8d3ba345e570?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    body: "Saving and caring for abandoned and stray animals",
    img: "https://images.pexels.com/photos/8576736/pexels-photo-8576736.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const firstRow = activity.slice(0, activity.length / 2);
const secondRow = activity.slice(activity.length / 2);

const ReviewCard = ({
  img,
  body,
  id,
}: {
  img: string;
  body: string;
  id: number;
}) => {
  return (
    <Card className="flex w-full max-w-xs items-center rounded-none md:flex-col">
      <div className="flex flex-row items-center md:gap-2">
        <img
          alt="Product Image"
          width={400}
          height={350}
          src={img}
          className="aspect-square object-cover"
        />
      </div>
      <blockquote className=" text-center text-sm md:p-2">{body}</blockquote>
    </Card>
  );
};

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex h-screen w-full flex-row items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 "></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 "></div>
    </div>
  );
}

export function MarqueeDemoHorizontal() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-start overflow-hidden  md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
