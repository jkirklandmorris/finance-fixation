import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Basic",
    price: "£9.99",
    period: "per month",
    description: "Perfect for getting started",
    features: [
      "Up to 5 clients",
      "Basic invoice templates",
      "Expense tracking",
      "Basic tax reports",
    ],
  },
  {
    name: "Pro",
    price: "£19.99",
    period: "per month",
    description: "Most popular for freelancers",
    features: [
      "Unlimited clients",
      "Custom invoice templates",
      "Advanced expense tracking",
      "Tax forecasting",
      "Quote management",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "£39.99",
    period: "per month",
    description: "For growing businesses",
    features: [
      "Everything in Pro",
      "Multiple team members",
      "Advanced analytics",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Choose Your Plan
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 animate-fade-up ${
                tier.highlighted
                  ? "bg-primary text-white ring-2 ring-primary"
                  : "bg-white border border-gray-200"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">{tier.price}</span>
                <span className={tier.highlighted ? "text-gray-200" : "text-gray-600"}>
                  {" "}
                  {tier.period}
                </span>
              </div>
              <p className={`mb-6 ${tier.highlighted ? "text-gray-200" : "text-gray-600"}`}>
                {tier.description}
              </p>
              <Button
                className={`w-full mb-6 ${
                  tier.highlighted
                    ? "bg-white text-primary hover:bg-gray-100"
                    : "bg-primary text-white hover:bg-primary/90"
                }`}
              >
                Get Started
              </Button>
              <ul className="space-y-3">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="w-5 h-5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;