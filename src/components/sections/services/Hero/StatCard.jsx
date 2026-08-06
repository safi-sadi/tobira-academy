"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

export default function StatCard({ stat, index }) {
  const Icon = stat.icon;

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
        delay: index * 0.1,
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all hover:shadow-2xl"
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">

        <Icon size={28} />

      </div>

      <h3 className="text-5xl font-black text-gray-900">

        <AnimatedCounter
          end={stat.end}
          suffix={stat.suffix}
        />

      </h3>

      <p className="mt-3 text-gray-500">
        {stat.label}
      </p>
    </motion.div>
  );
}