import { CheckCircle2, PieChart, Receipt, Calculator } from "lucide-react";

const features = [
  {
    icon: <Receipt className="w-6 h-6" />,
    title: "Professional Invoicing",
    description: "Create and send branded invoices in seconds. Get paid faster with automated reminders.",
  },
  {
    icon: <PieChart className="w-6 h-6" />,
    title: "Expense Tracking",
    description: "Automatically categorize expenses and track your business spending in real-time.",
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "Tax Management",
    description: "Stay compliant with automated tax calculations and reports ready for submission.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Quote Management",
    description: "Create professional quotes that can be converted to invoices with one click.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Everything You Need to Run Your Business
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-secondary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;