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
      <div className="max-w-screen bg-backgroud z-50 flex min-h-screen items-center justify-center p-4">
        {TIERS.map((tier) => (
          <PricingCard key={tier.name} tier={tier} paymentFrequency="monthly" />
        ))}
      </div>
    </>
  );
}
