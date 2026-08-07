"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Clock3, Star } from "lucide-react";

export default function CourseImage({ course }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -60,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: .6,
      }}
      className="relative flex justify-center"
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          h-[520px]
          w-[520px]
          rounded-full
          bg-gradient-to-br
          from-red-200/30
          via-orange-100/20
          to-transparent
          blur-[120px]
        "
      />

      {/* Decorative Ring */}

      <div
        className="
          absolute
          left-2
          top-12
          h-28
          w-28
          rounded-full
          border
          border-red-200/40
        "
      />

      {/* Image */}

      <motion.div
        whileHover={{
          y: -6,
          rotate: -1,
        }}
        transition={{
          duration: .35,
        }}
        className="relative z-10"
      >
        <div
          className="
            overflow-hidden
            rounded-[34px]
            border
            border-white/50
            bg-white/50
            p-4
            backdrop-blur-xl
            shadow-[0_30px_80px_rgba(0,0,0,.12)]
          "
        >
          <Image
            src={course.image}
            alt={course.title}
            width={700}
            height={900}
            priority
            className="
              h-[520px]
              w-[460px]
              rounded-[28px]
              object-cover
              transition-transform
              duration-700
              hover:scale-105
            "
          />
        </div>
      </motion.div>

      {/* Badge */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: .4,
        }}
        className="
          absolute
          left-0
          top-10
          z-20
          rounded-2xl
          border
          border-white/60
          bg-white/90
          px-5
          py-4
          shadow-xl
          backdrop-blur-xl
        "
      >
        <div className="flex items-center gap-3">

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              bg-gradient-to-br
              from-red-500
              to-red-600
              text-white
            "
          >
            <Star size={22} />
          </div>

          <div>

            <p className="text-xs text-slate-500">
              Featured Course
            </p>

            <h4 className="font-bold text-slate-900">
              {course.badge}
            </h4>

          </div>

        </div>

      </motion.div>

      {/* Duration */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: .55,
        }}
        className="
          absolute
          bottom-8
          right-0
          z-20
          rounded-2xl
          border
          border-white/60
          bg-white/90
          px-6
          py-5
          shadow-xl
          backdrop-blur-xl
        "
      >
        <div className="flex items-center gap-4">

          <Clock3
            size={28}
            className="text-red-600"
          />

          <div>

            <p className="text-xs text-slate-500">
              Course Duration
            </p>

            <h3 className="text-xl font-black text-slate-900">
              {course.duration}
            </h3>

          </div>

        </div>

      </motion.div>

    </motion.div>
  );
}