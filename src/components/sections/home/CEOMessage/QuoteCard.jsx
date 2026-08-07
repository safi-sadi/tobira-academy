"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function QuoteCard({ quote }) {
  return (
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
        delay: 0.3,
        duration: 0.7,
      }}
      className="
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/70
        bg-white/80
        p-8
        backdrop-blur-xl
        shadow-[0_25px_60px_rgba(0,0,0,.12)]
      "
    >
      {/* Decorative Quote */}

      <Quote
        className="
          absolute
          right-6
          top-6
          h-20
          w-20
          text-red-100
        "
        strokeWidth={1}
      />

      {/* Small Label */}

      <span
        className="
          inline-flex
          rounded-full
          bg-red-100
          px-4
          py-1.5
          text-xs
          font-semibold
          uppercase
          tracking-widest
          text-red-600
        "
      >
        Personal Philosophy
      </span>

      {/* Quote */}

      <p
        className="
          relative
          mt-6
          text-lg
          font-medium
          leading-8
          text-slate-700
        "
      >
        “{quote}”
      </p>

      {/* Decorative Line */}

      <div
        className="
          mt-8
          h-[3px]
          w-20
          rounded-full
          bg-gradient-to-r
          from-red-600
          to-red-300
        "
      />
    </motion.div>
  );
}