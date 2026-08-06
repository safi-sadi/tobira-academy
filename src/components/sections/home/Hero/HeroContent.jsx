"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Star,
  ShieldCheck,
} from "lucide-react";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">

      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        className="inline-flex items-center gap-1 rounded-full border border-red-200 bg-white/80 px-5 py-1 backdrop-blur-xl shadow-sm"
      >
        <ShieldCheck className="text-red-600" size={18} />

        <span className="text-sm font-semibold text-red-600">
          Trusted Japan Education Consultant
        </span>
      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .15, duration: .7 }}
        className="mt-8 text-3xl font-black leading-tight text-slate-900 md:text-5xl"
      >
        Study In

        <span className="block bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
          Japan
        </span>

        With Confidence.
      </motion.h1>

      {/* Paragraph */}

      <motion.p
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .3, duration: .7 }}
        className="mt-5 max-w-xl text-lg leading-9 text-slate-600"
      >
        We help Bangladeshi students achieve their dream of studying
        in Japan through professional admission guidance,
        Japanese language training, scholarship support and
        student visa processing.
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .45 }}
        className="mt-10 flex flex-wrap gap-5"
      >
        <Link
          href="/contact"
          className="
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-gradient-to-r
            from-red-600
            to-orange-500
            px-8
            py-4
            font-semibold
            text-white
            shadow-xl
            shadow-red-200
            transition-all
            duration-300
            hover:-translate-y-1
          "
        >
          Free Consultation

          <ArrowRight size={18} />
        </Link>

        <Link
          href="/services"
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-red-200
            bg-white/80
            px-8
            py-4
            font-semibold
            text-slate-800
            backdrop-blur-xl
            transition
            hover:border-red-500
            hover:text-red-600
          "
        >
          Explore Services
        </Link>
      </motion.div>

      {/* Features */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .6 }}
        className="mt-12 grid gap-4 sm:grid-cols-2"
      >
        {[
          "Student Visa Assistance",
          "University Admission",
          "Japanese Language Courses",
          "Scholarship Guidance",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >
            <CheckCircle2
              size={20}
              className="text-red-600"
            />

            <span className="font-medium text-slate-700">
              {item}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Trust */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .8 }}
        className="mt-14 flex flex-wrap items-center gap-6"
      >
        <div className="flex">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              size={18}
              fill="#f59e0b"
              className="text-yellow-400"
            />
          ))}
        </div>

        <div className="h-10 w-px bg-slate-300" />

        <div>
          <h3 className="text-xl font-bold text-slate-900">
            Trusted by 500+ Students
          </h3>

          <p className="text-slate-500">
            Visa Success Rate 98%
          </p>
        </div>
      </motion.div>

    </div>
  );
}