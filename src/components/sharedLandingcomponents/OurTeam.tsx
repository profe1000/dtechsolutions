const teamMembers = [
  {
    name: "Firstname Lastname",
    position: "Managing Director",
    image: "http://localhost:3001/images/aboutPage/founder.jpg",
  },
  {
    name: "Firstname Lastname",
    position: "Account Manager",
    image: "https://i.pravatar.cc/400?img=47",
  },
  {
    name: "Firstname Lastname",
    position: "Sales Manager",
    image: "https://i.pravatar.cc/400?img=68",
  },
  {
    name: "Firstname Lastname",
    position: "Operations Manager",
    image: "https://i.pravatar.cc/400?img=32",
  },
];

const OurTeams = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-red-600 font-semibold uppercase tracking-[0.2em]">
            Our Team
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Meet the People Behind Our Success
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Our dedicated team combines expertise, innovation, and a passion
            for excellence to deliver premium paint solutions that transform
            every space.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>

                <p className="mt-2 text-red-600 font-medium">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeams;