export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "Free/mo",
      color: "border-red-500 bg-red-50",
      features: ["Online Booking", "Client Management", "Reminders"],
    },
    {
      name: "Professional",
      price: "$9/mo",
      color: "border-orange bg-amber-200",
      features: ["Everything in Starter", "Inventory", "Reports", "Payments"],
    },
    {
      name: "Business",
      price: "$19/mo",
      color: "border-red-950 bg-pink-200",
      features: [
        "Everything in Professional",
        "Staff Accounts",
        "Advanced Analytics",
      ],
    },
  ];

  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-14">
          Simple Pricing
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`p-8 rounded-xl shadow-xl hover:shadow-2xl transition border-t-8 ${p.color}`}
            >
              <h3 className="text-2xl font-bold text-gray-900">{p.name}</h3>
              <p className="text-4xl font-extrabold mt-4 text-gray-900">
                {p.price}
              </p>

              <ul className="mt-6 space-y-2 text-gray-700">
                {p.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>

              <button className="mt-8 w-full bg-gradient-to-br to-[#EA903F]  from-[#C91F4B] hover:bg-black text-white py-3 rounded-lg font-semibold">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
