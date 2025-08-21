import React from "react";

const features = [
  {
    id: 1,
    title: "Fast Delivery",
    description: "Get your products delivered in record time with our express shipping.",
    icon: "🚚",
  },
  {
    id: 2,
    title: "Secure Payment",
    description: "Your payments are 100% secure with multiple payment options.",
    icon: "💳",
  },
  {
    id: 3,
    title: "Quality Products",
    description: "We offer only high-quality products with verified suppliers.",
    icon: "✔️",
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Our support team is available around the clock to help you.",
    icon: "📞",
  },
];

const FeatureHighlights = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="card bg-white shadow-lg p-6 text-center rounded-lg">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
