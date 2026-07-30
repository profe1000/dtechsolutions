import React from "react";

interface Colour {
  name: string;
  code: string;
  hex: string;
}

interface ColourFamily {
  title: string;
  colours: Colour[];
}

const colourFamilies: ColourFamily[] = [
  {
    title: "Neutrals",
    colours: [
      { name: "Pure White", code: "GP-001", hex: "#FFFFFF" },
      { name: "Ivory Cream", code: "GP-002", hex: "#F7F1E5" },
      { name: "Warm Beige", code: "GP-003", hex: "#D8C3A5" },
      { name: "Stone Grey", code: "GP-004", hex: "#B0B7C3" },
      { name: "Charcoal", code: "GP-005", hex: "#3F4A59" },
    ],
  },
  {
    title: "Blues",
    colours: [
      { name: "Ocean Blue", code: "GP-101", hex: "#2563EB" },
      { name: "Sky Blue", code: "GP-102", hex: "#60A5FA" },
      { name: "Royal Blue", code: "GP-103", hex: "#1D4ED8" },
      { name: "Navy Blue", code: "GP-104", hex: "#172554" },
      { name: "Powder Blue", code: "GP-105", hex: "#BFDBFE" },
    ],
  },
  {
    title: "Greens",
    colours: [
      { name: "Forest Green", code: "GP-201", hex: "#166534" },
      { name: "Olive Green", code: "GP-202", hex: "#4D7C0F" },
      { name: "Mint Green", code: "GP-203", hex: "#BBF7D0" },
      { name: "Emerald", code: "GP-204", hex: "#10B981" },
      { name: "Lime Green", code: "GP-205", hex: "#84CC16" },
    ],
  },
  {
    title: "Yellows & Gold",
    colours: [
      { name: "Sunflower", code: "GP-301", hex: "#FACC15" },
      { name: "Golden Sand", code: "GP-302", hex: "#EAB308" },
      { name: "Mustard", code: "GP-303", hex: "#CA8A04" },
      { name: "Soft Yellow", code: "GP-304", hex: "#FEF08A" },
      { name: "Amber", code: "GP-305", hex: "#F59E0B" },
    ],
  },
  {
    title: "Reds",
    colours: [
      { name: "Ruby Red", code: "GP-401", hex: "#DC2626" },
      { name: "Terracotta", code: "GP-402", hex: "#B45309" },
      { name: "Brick Red", code: "GP-403", hex: "#991B1B" },
      { name: "Rose", code: "GP-404", hex: "#FB7185" },
      { name: "Wine Red", code: "GP-405", hex: "#881337" },
    ],
  },
];

export default function ColourChart() {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-16">

          <span className="inline-block bg-blue-950 text-white px-5 py-2 rounded-full font-semibold uppercase tracking-widest">
            Colour Collection
          </span>

          <h2 className="mt-6 text-5xl font-bold text-blue-950 fontPoppinsRegular">
            Find Your Perfect Colour
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our wide range of premium paint colours designed for homes,
            offices, commercial buildings and industrial projects.
          </p>

        </div>

        <div className="space-y-16">

          {colourFamilies.map((family) => (
            <div key={family.title}>

              <h3 className="text-3xl font-bold text-blue-950 mb-8">
                {family.title}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

                {family.colours.map((colour) => (
                  <div
                    key={colour.code}
                    className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
                  >

                    <div
                      style={{
                        background: colour.hex,
                        height: "180px",
                      }}
                    />

                    <div className="p-5">

                      <h4 className="font-bold text-lg text-blue-950">
                        {colour.name}
                      </h4>

                      <p className="text-gray-500 mt-1">
                        {colour.code}
                      </p>

                      <div className="mt-4 flex items-center justify-between">

                        <span className="text-sm text-gray-400">
                          {colour.hex}
                        </span>

                        <div
                          style={{
                            background: colour.hex,
                            width: 22,
                            height: 22,
                            borderRadius: "9999px",
                            border: "2px solid #e5e7eb",
                          }}
                        />

                      </div>

                    </div>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}