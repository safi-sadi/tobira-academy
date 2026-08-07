"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Award } from "lucide-react";

export default function ExperienceCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -40,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        delay: 0.3,
        duration: 0.7,
      }}
      animate={{
        y: [0, -10, 0],
      }}
      className="
        absolute
        left-0
        top-10
        z-20
        hidden
        lg:block
      "
    >
      <div
        className="
          rounded-3xl
          border
          border-white/40
          bg-white/75
          px-6
          py-5
          backdrop-blur-2xl
          shadow-[0_20px_60px_rgba(0,0,0,.15)]
        "
      >
        <div className="flex items-center gap-4">

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-red-600
              to-orange-500
              text-white
              shadow-lg
            "
          >
            <Award size={28} />
          </div>

          <div>

            <h2 className="text-3xl font-black text-slate-900">
              <CountUp
                end={12}
                duration={2}
              />
              +
            </h2>

            <p className="text-sm text-slate-500">
              Years Experience
            </p>

          </div>

        </div>
      </div>
    </motion.div>
  );
}