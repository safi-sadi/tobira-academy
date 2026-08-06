import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative flex h-[500px] items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/about/about-banner.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <span className="uppercase tracking-[5px] text-red-500 font-semibold">
          About Us
        </span>

        <h1 className="mt-6 text-5xl md:text-7xl font-bold">
          Your Trusted Partner
          <br />
          For Studying In Japan
        </h1>

        <div className="mt-8 text-lg">
          <Link href="/" className="hover:text-red-400">
            Home
          </Link>

          <span className="mx-2">/</span>

          <span>About</span>
        </div>
      </div>
    </section>
  );
}