"use client";

import Link from "next/link";
import { Languages, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Japanese Language N5",
    href: "/courses/japanese-language-n5",
    description: "Beginner Level",
  },
  {
    title: "Japanese Language N4",
    href: "/courses/japanese-language-n4",
    description: "Elementary Level",
  },
];

export default function CoursesDropdown() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 8,
        scale: 0.97,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: 6,
        scale: 0.98,
      }}
      transition={{
        duration: 0.22,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        w-[320px]
        overflow-hidden
        rounded-[22px]
        border
        border-white/70
        bg-white/[0.88]
        shadow-[0_25px_70px_rgba(15,23,42,.16)]
        backdrop-blur-2xl
        backdrop-saturate-150
      "
    >

      {/* Top highlight */}

      <div
        className="
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-red-300
          to-transparent
        "
      />

      {/* Header */}

      <div className="px-5 pb-3 pt-5">

        <p
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.2em]
            text-red-500
          "
        >
          Learn Japanese
        </p>

        <h3 className="mt-1 text-lg font-bold text-slate-900">
          Our Courses
        </h3>

        <p className="mt-1 text-xs text-slate-500">
          Build your Japanese language foundation.
        </p>

      </div>


      {/* Courses */}

      <div className="px-2 pb-2">

        {courses.map((course) => (
          <Link
            key={course.href}
            href={course.href}
            className="
              group
              flex
              items-center
              justify-between
              rounded-xl
              px-3
              py-3
              transition-all
              duration-300
              hover:bg-red-50
            "
          >

            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-red-50
                  text-red-600
                  transition-all
                  duration-300
                  group-hover:bg-red-600
                  group-hover:text-white
                  group-hover:shadow-md
                  group-hover:shadow-red-200
                "
              >
                <Languages size={18} />
              </div>


              <div>

                <h4
                  className="
                    text-sm
                    font-semibold
                    text-slate-700
                    transition-colors
                    group-hover:text-red-600
                  "
                >
                  {course.title}
                </h4>

                <p className="mt-0.5 text-xs text-slate-400">
                  {course.description}
                </p>

              </div>

            </div>


            <ArrowUpRight
              size={15}
              className="
                text-slate-300
                opacity-0
                transition-all
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:text-red-500
                group-hover:opacity-100
              "
            />

          </Link>
        ))}

      </div>


      {/* Footer */}

      <div
        className="
          border-t
          border-slate-200/70
          bg-slate-50/60
          p-3
        "
      >
        <Link
          href="/courses"
          className="
            group
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-red-600
            py-2.5
            text-sm
            font-semibold
            text-white
            shadow-[0_8px_20px_rgba(220,38,38,.18)]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-red-700
            hover:shadow-[0_12px_25px_rgba(220,38,38,.25)]
          "
        >
          View All Courses

          <ArrowUpRight
            size={15}
            className="
              transition-transform
              duration-300
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
            "
          />
        </Link>
      </div>

    </motion.div>
  );
}