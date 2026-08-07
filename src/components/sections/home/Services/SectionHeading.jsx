"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function SectionHeading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mx-auto mb-20 max-w-3xl text-center"
    >
      {/* Badge */}

      <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-5 py-2">

        <Sparkles
          size={18}
          className="text-red-600"
        />

        <span className="text-sm font-semibold tracking-wide text-red-600 uppercase">
          Our Services
        </span>

      </div>

      {/* Heading */}

      <h2 className="mt-7 text-4xl font-black leading-tight text-slate-900 md:text-5xl">

        Everything You Need

        <span className="block">
          To Study
        </span>

        <span className="block bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
          In Japan
        </span>

      </h2>

      {/* Description */}

      <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600">
        From your first consultation to arriving in Japan,
        TW Education provides complete guidance to help you
        achieve your academic goals with confidence.
      </p>
    </motion.div>
  );
}