import Image from "next/image";

export default function Hero({ service }) {
  return (
    <section className="bg-gradient-to-br from-red-50 to-white py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">

        {/* Left */}
        <div>
          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Our Services
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight">
            {service.title}
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            {service.subtitle}
          </p>

          <button className="mt-10 rounded-xl bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700">
            Book Free Consultation
          </button>
        </div>

        {/* Right */}
        <div className="relative h-[500px]">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            className="rounded-3xl object-cover"
          />
        </div>

      </div>
    </section>
  );
}
// export default function Hero({ service }) {
//   return (
//     <section className="p-20 bg-red-100">
//       <h1 className="text-5xl font-bold">{service.title}</h1>
//     </section>
//   );
// }