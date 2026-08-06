"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  Clock,
  GraduationCap,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function CourseHero({ course }) {
  return (
    <section className="relative overflow-hidden">

      {/* Background Image */}

      <div className="absolute inset-0">

        <Image
          src={course.heroImage || course.image}
          alt={course.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      </div>

      <Container>

        <div className="relative flex min-h-[85vh] items-center py-24">

          <div className="max-w-3xl">

            {/* Badge */}

            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur-xl"
            >
              🇯🇵 Japanese Language Course
            </motion.span>

            {/* Title */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-8 text-5xl font-bold leading-tight text-white lg:text-7xl"
            >
              {course.hero?.title || course.title}
            </motion.h1>

            {/* Subtitle */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-2xl text-lg leading-8 text-gray-200"
            >
              {course.hero?.subtitle || course.subtitle}
            </motion.p>

            {/* Info Cards */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 backdrop-blur-xl">
                <GraduationCap className="text-red-400" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-300">
                    Level
                  </p>
                  <p className="font-semibold text-white">
                    {course.level}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 backdrop-blur-xl">
                <Clock className="text-red-400" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-300">
                    Duration
                  </p>
                  <p className="font-semibold text-white">
                    {course.duration}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 backdrop-blur-xl">
                <MapPin className="text-red-400" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-300">
                    Mode
                  </p>
                  <p className="font-semibold text-white">
                    {course.mode}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex flex-wrap gap-5"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700"
              >
                Enroll Now

                <ArrowRight size={20} />
              </Link>

              <a
                href="#curriculum"
                className="rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/20"
              >
                View Curriculum
              </a>
            </motion.div>

          </div>

        </div>

      </Container>
    </section>
  );
}