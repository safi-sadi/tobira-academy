"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  Plane,
  Languages,
} from "lucide-react";

import FeatureItem from "./FeatureItem";

export default function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-xl"
    >
      {/* Badge */}

      <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-5 py-2">

        <ShieldCheck
          size={18}
          className="text-red-600"
        />

        <span className="text-sm font-semibold text-red-600">
          ABOUT Tobira Language Academy
        </span>

      </div>

      {/* Heading */}

      <h2 className="mt-7 text-4xl font-black leading-tight text-slate-900 lg:text-5xl">

        Helping Students

        <span className="block">
          Build Their Future
        </span>

        <span className="block bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
          In Japan
        </span>

      </h2>

      {/* Paragraph */}

      <p className="mt-7 text-lg leading-8 text-slate-600">
        Tobira Language Academy has helped hundreds of Bangladeshi students
        pursue higher education in Japan through professional
        university admission guidance, Japanese language training,
        scholarship consultation and student visa support.
      </p>

      {/* Features */}

      <div className="mt-10 space-y-5">

        <FeatureItem
          icon={GraduationCap}
          title="University Admission Support"
        />

        <FeatureItem
          icon={Plane}
          title="Student Visa Processing"
        />

        <FeatureItem
          icon={Languages}
          title="Japanese Language Courses"
        />

      </div>

      {/* CTA */}

      <Link
        href="/about"
        className="
          group
          mt-10
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
        Learn More

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />

      </Link>

    </motion.div>
  );
}