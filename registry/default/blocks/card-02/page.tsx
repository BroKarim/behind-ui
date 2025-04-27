import { PricingCard } from "./components/pricing-card";

const TIERS = [
  {
    name: "Teams",
    price: 12,
    description:
      "Highly recommended for small teams who seek to upgrade their time & perform",
    features: [
      "1 team",
      "Schedule meeting as team",
      "Collective events",
      "Team workflow",
    ],
    cta: "Get Started",
    linear: true,
    default: true,
  },
];

export default function Page() {
  return (
    <>
      <div className=" z-50  flex flex-1 justify-center gap-6 bg-background p-6 ">
        {TIERS.map((tier) => (
          <PricingCard key={tier.name} tier={tier} paymentFrequency="monthly" />
        ))}
      </div>
    </>
  );
}
