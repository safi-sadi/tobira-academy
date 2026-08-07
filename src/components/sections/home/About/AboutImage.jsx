"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import ExperienceCard from "./ExperienceCard";

export default function AboutImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative flex w-full justify-center"
    >
      {/* Background Glow */}

      <div className="absolute h-[700px] w-[700px] rounded-full bg-gradient-to-br from-red-200/30 via-orange-200/20 to-transparent blur-[140px]" />

      {/* Decorative Circles */}

      <div className="absolute -left-10 top-10 h-24 w-24 rounded-full border border-red-200/50" />

      <div className="absolute -right-10 bottom-24 h-20 w-20 rounded-full bg-red-100/60 blur-sm" />

      {/* Main Image */}

      <motion.div
  whileHover={{
    y: -8,
    rotate: -1,
  }}
  transition={{
    duration: 0.4,
  }}
  className="relative z-10 w-full max-w-[620px]"
>
  <div
    className="
      rounded-[40px]
      border
      border-white/40
      bg-white/30
      p-5
      backdrop-blur-xl
      shadow-[0_30px_80px_rgba(0,0,0,.15)]
    "
  >
    <div className="overflow-hidden rounded-[30px]">

      <Image
        src="/images/about/about.jpg"
        alt="TW Education"
        width={750}
        height={900}
        priority
        className="
          h-[600px]
          w-full
          rounded-[30px]
          object-cover
          transition-all
          duration-700
          hover:scale-105
        "
      />

    </div>
  </div>
</motion.div>

      {/* Experience Card */}

      <ExperienceCard />

      {/* Students Card */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="
          absolute
          -bottom-8
          -right-6
          hidden
          lg:block
          rounded-2xl
          border
          border-white/50
          bg-white/85
          px-6
          py-5
          backdrop-blur-xl
          shadow-[0_20px_60px_rgba(0,0,0,.15)]
          z-20
        "
      >
        <p className="text-sm text-slate-500">
          Students Guided
        </p>

        <h3 className="mt-1 text-3xl font-black text-slate-900">
          500+
        </h3>
      </motion.div>
    </motion.div>
  );
}