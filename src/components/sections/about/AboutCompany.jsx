import Image from "next/image";

export default function AboutCompany() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 items-center">

        {/* Left */}
        <div className="relative">
          <Image
            src="/images/about/company.jpg"
            alt="TW Education"
            width={700}
            height={700}
            className="rounded-3xl object-cover shadow-2xl"
          />
        </div>

        {/* Right */}
        <div>

          <span className="uppercase tracking-[4px] text-red-600 font-semibold">
            About TW Education
          </span>

          <h2 className="mt-5 text-5xl font-bold leading-tight">
            Your Gateway To
            <br />
            Higher Education In Japan
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            TW Education is committed to helping Bangladeshi students
            achieve their dream of studying in Japan through expert
            counseling, university admission support, Japanese language
            training, visa processing, and pre-departure guidance.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-5">

            <Feature text="Experienced Consultants" />
            <Feature text="Transparent Process" />
            <Feature text="University Partnerships" />
            <Feature text="Student-Centered Support" />

          </div>

        </div>

      </div>
    </section>
  );
}

function Feature({ text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white">
        ✓
      </div>

      <span className="font-medium">{text}</span>
    </div>
  );
}