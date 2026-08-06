"use client";

import { motion } from "framer-motion";
import { iconMap } from "@/lib/iconMap";

export default function FeatureCard({ feature }) {
  const Icon = iconMap[feature.icon];

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-red-500 hover:shadow-xl"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-all group-hover:bg-red-600 group-hover:text-white">
        <Icon size={30} />
      </div>

      <h3 className="mt-6 text-xl font-bold text-slate-900">
        {feature.title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {feature.description}
      </p>
    </motion.div>
  );
}