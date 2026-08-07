"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TestimonialsImages() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative flex justify-center pb-28"
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          left-8
          top-10
          h-[450px]
          w-[450px]
          rounded-full
          bg-red-200/20
          blur-[130px]
        "
      />

      {/* Main Portrait */}

      <motion.div
        initial={{ scale: 0.94 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          relative
          z-10
          overflow-hidden
          rounded-[36px]
          border
          border-white/60
          bg-white
          p-3
          shadow-[0_35px_90px_rgba(0,0,0,.15)]
        "
      >
        <Image
          src="/images/testimonials/student-main.jpg"
          alt="Student"
          width={680}
          height={820}
          className="
            h-[520px]
            w-[370px]
            rounded-[30px]
            object-cover
          "
        />
      </motion.div>

      {/* Wide Classroom Image */}

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.25,
          duration: 0.7,
        }}
        className="
          absolute
          right-[-40px]
          bottom-0
          z-20
          overflow-hidden
          rounded-[28px]
          border-[8px]
          border-white
          bg-white
          shadow-[0_25px_60px_rgba(0,0,0,.18)]
        "
      >
        <Image
          src="/images/testimonials/student-small.jpg"
          alt="Japanese Classroom"
          width={420}
          height={240}
          className="
            h-[300px]
            w-[360px]
            object-cover
          "
        />
      </motion.div>

      {/* Rating Badge */}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45 }}
        className="
          absolute
          -left-4
          top-10
          z-30
          rounded-2xl
          border
          border-white/70
          bg-white/90
          px-6
          py-4
          backdrop-blur-xl
          shadow-xl
        "
      >
        <p className="text-3xl font-black text-red-600">
          4.9
        </p>

        <p className="mt-1 text-sm text-slate-600">
          Average Rating
        </p>
      </motion.div>
    </motion.div>
  );
}