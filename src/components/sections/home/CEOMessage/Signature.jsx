"use client";

import { motion } from "framer-motion";

export default function Signature({ data }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: .55,
        duration: .6,
      }}
      className="mt-14"
    >
      {/* Decorative Line */}

      <div className="h-px w-40 bg-gradient-to-r from-red-600 via-red-300 to-transparent" />

      {/* Signature */}

      <div className="mt-8">

        {/* Replace with signature image later */}

        <h3
          className="
            text-4xl
            italic
            font-light
            tracking-wide
            text-red-600
          "
          style={{
            fontFamily: "cursive",
          }}
        >
          {data.name}
        </h3>

        <p
          className="
            mt-4
            text-lg
            font-semibold
            text-slate-900
          "
        >
          {data.designation}
        </p>

        <p
          className="
            mt-1
            text-slate-500
          "
        >
          {data.company}
        </p>

      </div>

      {/* Bottom Line */}

      <div className="mt-8 h-px w-24 bg-red-600" />
    </motion.div>
  );
}