import {
  InfoCard,
  InfoCardAction,
  InfoCardContent,
  InfoCardDescription,
  InfoCardFooter,
  InfoCardTitle,
} from "./infor-card";
import { ChartContent } from "./chart-content";

export function ImageContent() {
  return (
    <InfoCard className=" border border-black">
      <InfoCardContent>
        <InfoCardTitle>User Growth</InfoCardTitle>
        <InfoCardDescription>
          Track the number of users over the past 6 months to monitor your
          growth trend.
        </InfoCardDescription>

        <ChartContent />
        <InfoCardFooter className="mt-2">
          <div className="flex items-center gap-2 font-medium leading-none">
            Trending up by 5.2% this month
          </div>
        </InfoCardFooter>
      </InfoCardContent>
    </InfoCard>
  );
}
