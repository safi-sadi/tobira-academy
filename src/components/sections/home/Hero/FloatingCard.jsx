"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function FloatingCard({
  title,
  value,
  suffix = "",
  duration = 4,
  className,
}) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`
        absolute
        z-30
        hidden
        lg:block
        ${className}
      `}
    >
      <div
        className="
          rounded-2xl
          border
          border-white/40
          bg-white/75
          px-6
          py-5
          backdrop-blur-2xl
          shadow-[0_20px_50px_rgba(0,0,0,.12)]
        "
      >
        <p className="text-sm text-slate-500">
          {title}
        </p>

        <h3 className="mt-1 text-2xl font-extrabold text-slate-900">
          <CountUp
            end={value}
            duration={2.5}
          />
          {suffix}
        </h3>
      </div>
    </motion.div>
  );
}