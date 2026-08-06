"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroContent({ data }) {
  if (!data) return null;

  return (
    <div className="max-w-3xl text-white">
      {/* Subtitle */}
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-block rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm uppercase tracking-[3px] backdrop-blur-md"
      >
        {data.subtitle}
      </motion.span>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 text-5xl font-bold leading-tight md:text-7xl"
      >
        {data.title}
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 max-w-2xl text-lg leading-8 text-gray-200"
      >
        {data.description}
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <Link
          href={data.primaryButtonLink}
          className="rounded-xl bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700"
        >
          {data.primaryButtonText}
        </Link>

        <Link
          href={data.secondaryButtonLink}
          className="rounded-xl border border-white px-8 py-4 font-semibold backdrop-blur-sm transition hover:bg-white hover:text-black"
        >
          {data.secondaryButtonText}
        </Link>
      </motion.div>
    </div>
  );
}