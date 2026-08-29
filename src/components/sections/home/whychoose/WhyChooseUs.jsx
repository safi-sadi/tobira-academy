"use client";

import { motion } from "framer-motion";
import BentoGrid from "./BentoGrid";

export default function WhyChooseUs() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-red-50/40
        to-white
        py-32
      "
    >
      {/* Background Decoration */}

      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
            absolute
            -left-44
            top-24
            h-[500px]
            w-[500px]
            rounded-full
            bg-red-200/20
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            -right-44
            bottom-10
            h-[450px]
            w-[450px]
            rounded-full
            bg-orange-200/20
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-0
            h-[320px]
            w-[320px]
            -translate-x-1/2
            rounded-full
            border
            border-red-100
          "
        />

      </div>

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
          className="mx-auto max-w-3xl text-center"
        >
          <span
            className="
              inline-flex
              rounded-full
              border
              border-red-100
              bg-white
              px-5
              py-2
              text-sm
              font-semibold
              text-red-600
              shadow-md
            "
          >
            Why Choose Tobira Language Academy
          </span>

          <h2
            className="
              mt-7
              text-4xl
              font-black
              leading-tight
              text-slate-900
              md:text-5xl
            "
          >
            More Than Language Classes.
            <br />
            We Build Futures in Japan.
          </h2>

          <p
            className="
              mt-7
              text-lg
              leading-8
              text-slate-600
            "
          >
            Every student receives personalized guidance—from
            learning Japanese to university admission, visa
            processing, and career preparation—making us a trusted
            partner throughout the journey.
          </p>
        </motion.div>

        {/* Divider */}

        <div className="my-16 flex items-center">

          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-red-200 to-transparent" />

        </div>

        {/* Bento Grid */}

        <BentoGrid />

      </div>
    </section>
  );
}