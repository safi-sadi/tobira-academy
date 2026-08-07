"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import courses from "./courseData";
import CourseTabs from "./CourseTabs";
import CourseImage from "./CourseImage";
import CourseContent from "./CourseContent";

export default function CoursesSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-red-50/40
        to-white
        py-32
      "
    >
      {/* Background Decoration */}

      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
            absolute
            -left-40
            top-20
            h-[520px]
            w-[520px]
            rounded-full
            bg-red-200/20
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-0
            h-[450px]
            w-[450px]
            rounded-full
            bg-orange-200/20
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-20
            h-72
            w-72
            -translate-x-1/2
            rounded-full
            border
            border-red-100
          "
        />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span
            className="
              inline-flex
              rounded-full
              bg-red-100
              px-5
              py-2
              text-sm
              font-semibold
              text-red-600
            "
          >
            Japanese Language Courses
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Learn Japanese With Confidence
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Professional JLPT preparation courses designed for students
            who want to study, work, and build their future in Japan.
          </p>
        </motion.div>

        {/* Floating Stats */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .3 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-8
              rounded-full
              border
              border-red-100
              bg-white/90
              px-8
              py-5
              shadow-xl
              backdrop-blur-xl
            "
          >
            <div>
              <p className="text-xs text-slate-500">
                Students
              </p>

              <h3 className="font-black text-slate-900">
                500+
              </h3>
            </div>

            <div className="hidden h-10 w-px bg-red-100 md:block" />

            <div>
              <p className="text-xs text-slate-500">
                Success Rate
              </p>

              <h3 className="font-black text-slate-900">
                98%
              </h3>
            </div>

            <div className="hidden h-10 w-px bg-red-100 md:block" />

            <div>
              <p className="text-xs text-slate-500">
                Courses
              </p>

              <h3 className="font-black text-slate-900">
                JLPT N5 • N4
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}

        <CourseTabs
          courses={courses}
          active={active}
          setActive={setActive}
        />

        {/* Divider */}

        <div className="my-16 flex items-center">

          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-red-200 to-transparent" />

        </div>

        {/* Main Card */}

        <div
          className="
            overflow-hidden
            rounded-[42px]
            border
            border-white/60
            bg-white/80
            backdrop-blur-xl
            shadow-[0_35px_100px_rgba(0,0,0,.12)]
          "
        >
          <AnimatePresence mode="wait">

            <motion.div
              key={courses[active].id}
              initial={{
                opacity: 0,
                y: 50,
                scale: .96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -30,
                scale: .98,
              }}
              transition={{
                duration: .45,
              }}
              className="
                grid
                items-center
                gap-16
                p-8
                lg:grid-cols-2
                lg:p-12
              "
            >
              <CourseImage
                course={courses[active]}
              />

              <CourseContent
                course={courses[active]}
              />

            </motion.div>

          </AnimatePresence>

        </div>

      </div>

    </section>
  );
}