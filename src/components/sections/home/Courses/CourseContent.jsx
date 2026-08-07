"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CourseContent({ course }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col"
    >
      {/* Badge */}

      <div
        className="
          inline-flex
          w-fit
          items-center
          rounded-full
          bg-red-100
          px-4
          py-2
          text-sm
          font-semibold
          text-red-600
        "
      >
        {course.level}
      </div>

      {/* Title */}

      <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900 lg:text-5xl">
        {course.title}
      </h2>

      {/* Description */}

      <p className="mt-6 text-lg leading-8 text-slate-600">
        {course.description}
      </p>

      {/* Features */}

      <div className="mt-10 grid gap-5">

        {course.features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.title}
              initial={{
                opacity: 0,
                x: 25,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.08,
              }}
              className="
                flex
                items-center
                gap-5
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-red-50
                  text-red-600
                "
              >
                <Icon size={22} />
              </div>

              <div>

                <h4 className="font-semibold text-slate-900">
                  {feature.title}
                </h4>

              </div>

            </motion.div>
          );
        })}

      </div>

      {/* Bottom Info */}

      <div
        className="
          mt-10
          rounded-3xl
          border
          border-red-100
          bg-gradient-to-r
          from-red-50
          to-white
          p-6
        "
      >
        <div className="flex items-center gap-3">

          <CheckCircle2
            size={24}
            className="text-red-600"
          />

          <div>

            <p className="text-sm text-slate-500">
              Perfect for students planning to study in Japan.
            </p>

          </div>

        </div>
      </div>

      {/* Buttons */}

      <div className="mt-12 flex flex-wrap gap-4">

        <Link
          href={course.route}
          className="
            inline-flex
            items-center
            gap-3
            rounded-2xl
            bg-gradient-to-r
            from-red-600
            to-red-500
            px-8
            py-4
            font-semibold
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-red-200
          "
        >
          View Course

          <ArrowRight size={20} />
        </Link>

        <Link
          href="/contact"
          className="
            inline-flex
            items-center
            rounded-2xl
            border
            border-red-200
            bg-white
            px-8
            py-4
            font-semibold
            text-slate-700
            transition-all
            duration-300
            hover:border-red-500
            hover:text-red-600
          "
        >
          Free Consultation
        </Link>

      </div>

    </motion.div>
  );
}