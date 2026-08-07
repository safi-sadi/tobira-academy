"use client";

import { motion } from "framer-motion";

import teamData from "./teamData";
import TeamGrid from "./TeamGrid";

export default function TeamSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-red-50/40
        via-white
        to-red-50/30
        py-32
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-40
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-red-200/20
          blur-[150px]
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
          className="mx-auto max-w-3xl text-center"
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
            Meet Our Experts
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
            Our Professional Team
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-slate-600
            "
          >
            Experienced teachers and consultants dedicated to helping
            you study, work and build your future in Japan.
          </p>
        </motion.div>

        <TeamGrid members={teamData} />

      </div>
    </section>
  );
}