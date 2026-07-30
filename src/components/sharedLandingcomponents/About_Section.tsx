import { CheckCircleFilled } from "@ant-design/icons";

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="relative">

            <div className="absolute -top-6 -left-6 w-48 h-48 rounded-3xl bg-blue-100"></div>

            <img
              src={`${process.env.PUBLIC_URL}/images/about/about.jpg`}
              alt="Data Design Tech Solutions"
              className="relative rounded-3xl shadow-2xl w-full h-[550px] object-cover"
            />

            <div className="absolute bottom-8 left-8 bg-white rounded-2xl shadow-xl px-8 py-6">

              <h3 className="text-4xl font-bold text-blue-950">
                Trusted
              </h3>

              <p className="text-gray-600 mt-1">
                Technology Advisory Partner
              </p>

            </div>

          </div>

          {/* Right */}
          <div>

            <span className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
              ABOUT US
            </span>

            <h2 className="mt-6 text-5xl font-bold text-slate-900 leading-tight">
              Helping Businesses
              <span className="text-blue-700"> Transform </span>
              Through Technology &
              <br />
              Data.
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-9">
              <strong>Data Design Tech Solutions</strong> is an advisory and
              implementation company dedicated to helping enterprises solve
              complex business challenges with innovative technology
              solutions. We partner with organizations to design, implement,
              and support modern digital solutions that improve efficiency,
              security, and long-term business performance.
            </p>

            <p className="mt-6 text-lg text-gray-600 leading-9">
              We are passionate about helping businesses harness the full
              potential of their data. As a trusted technology partner, we
              deliver scalable, secure, and intelligent solutions that empower
              informed decision-making, operational excellence, and sustainable
              growth.
            </p>

            {/* Features */}

            <div className="grid md:grid-cols-2 gap-6 mt-10">

              <div className="flex gap-4">
                <CheckCircleFilled className="text-blue-600 text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Technology Advisory
                  </h4>
                  <p className="text-gray-600">
                    Strategic guidance for digital transformation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircleFilled className="text-blue-600 text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Data Management
                  </h4>
                  <p className="text-gray-600">
                    Secure and scalable enterprise data solutions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircleFilled className="text-blue-600 text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Software Support
                  </h4>
                  <p className="text-gray-600">
                    Reliable maintenance and technical support services.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircleFilled className="text-blue-600 text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Data Analytics
                  </h4>
                  <p className="text-gray-600">
                    Turning business data into actionable insights.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}