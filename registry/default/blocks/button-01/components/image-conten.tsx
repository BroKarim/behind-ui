import { InfoCard, InfoCardAction, InfoCardContent, InfoCardDescription, InfoCardDismiss, InfoCardFooter, InfoCardMedia, InfoCardTitle } from "./infor-card";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function ImageContent() {
  return (
    <InfoCard className="z-50 border border-black">
      <InfoCardContent>
        <InfoCardTitle>Introducing New Dashboard</InfoCardTitle>
        <InfoCardDescription>New Feature. New Platform. Same Feel.</InfoCardDescription>
        <InfoCardMedia
          media={[
            {
              src: "https://images.unsplash.com/photo-1746730251085-34132b6dcec5?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              src: "https://cd-misc.s3.us-east-2.amazonaws.com/sidebar/second.webp",
            },
            {
              src: "https://cd-misc.s3.us-east-2.amazonaws.com/sidebar/first.webp",
            },
          ]}
        />
        <InfoCardFooter>
          <InfoCardDismiss>Dismiss</InfoCardDismiss>
          <InfoCardAction>
            <Link href="#" className="flex flex-row items-center gap-1 underline">
              Try it out <ExternalLink size={12} />
            </Link>
          </InfoCardAction>
        </InfoCardFooter>
      </InfoCardContent>
    </InfoCard>
  );
}
