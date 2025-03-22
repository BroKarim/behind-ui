import { CardsStats } from "./stats";
import { CardsCalendar } from "./calender";
import { CardsActivityGoal } from "./activity-goal";
import { CardsMetric } from "./metrics";

export default function ProductivityCard() {
  return (
    <>
      <div className="md:grids-col-2 relative z-50 grid h-full md:h-screen md:gap-4 lg:grid-cols-10 xl:grid-cols-11 xl:gap-4">
        <div className="space-y-4 lg:col-span-4 xl:col-span-6 xl:space-y-4">
          <CardsStats />
          <div className="grid gap-1 sm:grid-cols-[260px_1fr]">
            <CardsCalendar />
            <div className="pt-3 sm:pl-2 sm:pt-0 xl:pl-4">
              <CardsActivityGoal />
            </div>
            <div className="pt-3 sm:col-span-2 xl:pt-4">
              <CardsMetric />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
