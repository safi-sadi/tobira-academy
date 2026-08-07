"use client";

import { motion } from "framer-motion";

import ceoData from "./ceoData";

import CEOImage from "./CEOImage";
import CEOContent from "./CEOContent";

export default function CEOSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-red-50/30
        to-white
        py-32
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-40
          h-[550px]
          w-[550px]
          -translate-x-1/2
          rounded-full
          bg-red-200/20
          blur-[150px]
        "
      />

      {/* Decorative Circle */}

      <div
        className="
          absolute
          -left-40
          top-28
          h-[420px]
          w-[420px]
          rounded-full
          border
          border-red-100
          opacity-40
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .7,
          }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span
            className="
              inline-flex
              rounded-full
              bg-red-100
              px-5
              py-2
              text-sm
              font-semibold
              text-red-600
            "
          >
            Message From Our Founder
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              text-slate-900
              md:text-5xl
            "
          >
            Building Your Future,
            <br />
            One Step At A Time
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-slate-600
            "
          >
            A personal message from our Founder & CEO to every
            student dreaming of studying and building a successful
            future in Japan.
          </p>
        </motion.div>

        {/* Main Layout */}

        <div
          className="
            grid
            items-center
            gap-20
            lg:grid-cols-[480px_1fr]
          "
        >
          <CEOImage data={ceoData} />

          <CEOContent data={ceoData} />
        </div>

      </div>
    </section>
  );
}