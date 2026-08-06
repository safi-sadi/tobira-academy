"use client";

import { motion } from "framer-motion";
import { iconMap } from "@/lib/iconMap";

export default function FeatureCard({ feature, index }) {
  const Icon = iconMap[feature.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -12,
      }}
      className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-red-500 hover:shadow-2xl"
    >
      {/* Gradient Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-blue-900 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content */}

      <div className="relative z-10">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-all duration-500 group-hover:bg-white/20 group-hover:text-white">

          <Icon size={32} />

        </div>

        <h3 className="mt-8 text-3xl font-bold transition-colors duration-500 group-hover:text-white">
          {feature.title}
        </h3>

        <p className="mt-6 leading-8 text-gray-600 transition-colors duration-500 group-hover:text-gray-100">
          {feature.description}
        </p>

      </div>

      {/* Light Effect */}

      <div className="absolute -left-40 top-0 h-full w-24 -skew-x-12 bg-white/20 opacity-0 blur-xl transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />

    </motion.div>
  );
}