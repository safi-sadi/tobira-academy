"use client";

import {
  ArrowUpRight,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";
import { iconMap } from "@/lib/iconMap";
export default function ServiceCard({ service }) {
  const Icon = iconMap[service.icon] || GraduationCap;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-red-600 hover:shadow-2xl"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-all group-hover:bg-red-600 group-hover:text-white">
        <Icon size={30} />
      </div>

      <h3 className="mt-6 text-2xl font-semibold">
        {service.title}
      </h3>

      <p className="mt-4 leading-7 text-gray-600">
        {service.description}
      </p>

      <button className="mt-8 flex items-center gap-2 font-semibold text-red-600">
        Learn More

        <ArrowUpRight
          className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          size={18}
        />
      </button>
    </motion.div>
  );
}