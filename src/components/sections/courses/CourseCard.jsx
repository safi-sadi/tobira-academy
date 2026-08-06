"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  GraduationCap,
  MapPin,
  Languages,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  Languages,
  BookOpen,
};

export default function CourseCard({ course }) {
  const Icon = iconMap[course.icon];

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.015,
      }}
      transition={{
        duration: 0.35,
      }}
      className="group relative"
    >
      {/* Animated Border */}

      <div
        className="
        absolute
        -inset-[2px]
        rounded-[34px]
        bg-[linear-gradient(90deg,#ef4444,#fb923c,#ef4444,#f43f5e,#ef4444)]
        bg-[length:300%_300%]
        animate-[gradient_6s_linear_infinite]
      "
      />

      {/* Glow */}

      <div
        className="
        absolute
        inset-0
        rounded-[34px]
        bg-gradient-to-r
        from-red-400/40
        via-orange-300/40
        to-red-400/40
        blur-3xl
        opacity-0
        transition
        duration-500
        group-hover:opacity-100
      "
      />

      {/* Floating Gradient Orb */}

      <div
        className="
        absolute
        -right-16
        -top-16
        h-40
        w-40
        rounded-full
        bg-gradient-to-br
        from-red-400/20
        to-orange-400/20
        blur-3xl
        transition-all
        duration-700
        group-hover:scale-150
      "
      />

      {/* Card */}

      <div
        className="
        relative
        flex
        min-h-[760px]
        flex-col
        overflow-hidden
        rounded-[32px]
        bg-white
        shadow-xl
        transition-all
        duration-500
        group-hover:shadow-2xl
        group-hover:shadow-red-200/40
      "
      >
        {/* Shine */}

        <div
          className="
          absolute
          -left-32
          top-0
          h-full
          w-24
          rotate-12
          bg-white/30
          blur-xl
          transition-all
          duration-1000
          group-hover:left-[120%]
        "
        />

        {/* Image */}

        <div className="relative h-72 overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-red-600/10" />

          {/* Badge */}

          <span
            className="
            absolute
            left-6
            top-6
            rounded-full
            border
            border-white/30
            bg-white/15
            px-4
            py-2
            text-sm
            font-semibold
            text-white
            shadow-lg
            backdrop-blur-xl
          "
          >
            🇯🇵 {course.badge}
          </span>

          {/* Icon */}

          <div
            className="
            absolute
            bottom-6
            left-6
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-white
            shadow-xl
            transition-all
            duration-500
            group-hover:rotate-[18deg]
            group-hover:scale-110
          "
          >
            <Icon
              className="text-red-600"
              size={30}
            />
          </div>
        </div>

        {/* Content */}

        <div className="flex flex-1 flex-col p-8">

          <p className="text-sm font-semibold uppercase tracking-[3px] text-red-600">
            {course.level}
          </p>

          <h3
            className="
            mt-3
            min-h-[80px]
            text-3xl
            font-bold
            leading-tight
          "
          >
            {course.title}
          </h3>

          <p
            className="
            mt-5
            min-h-[110px]
            leading-7
            text-gray-600
          "
          >
            {course.description}
          </p>

          {/* Info Chips */}

          <div className="mt-8 flex flex-wrap gap-3">

            <div className="flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-600">
              <Clock size={16} />
              {course.duration}
            </div>

            <div className="flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600">
              <GraduationCap size={16} />
              JLPT
            </div>

            <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
              <MapPin size={16} />
              {course.mode}
            </div>

          </div>

          {/* Bottom Button */}

          <div className="mt-auto border-t border-gray-100 pt-6">

            <Link
              href={`/courses/${course.slug}`}
              className="
              flex
              items-center
              justify-between
              font-semibold
              text-red-600
              transition-all
              duration-300
              group-hover:tracking-wide
            "
            >
              {course.button}

              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </Link>

          </div>

        </div>
      </div>
    </motion.div>
  );
}