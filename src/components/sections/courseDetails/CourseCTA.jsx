"use client";

import Container from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function CourseCTA({ course }) {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-500 to-orange-500" />

      {/* Decorative Circles */}

      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="relative mx-auto max-w-5xl text-center"
        >

          <span
            className="
            rounded-full
            border
            border-white/20
            bg-white/10
            px-5
            py-2
            text-sm
            font-semibold
            text-white
            backdrop-blur-xl
          "
          >
            🇯🇵 Begin Your Future Today
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-6xl">
            {course.cta.title}
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-red-100">
            {course.cta.description}
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              href="/contact"
              className="
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-white
              px-8
              py-4
              font-semibold
              text-red-600
              shadow-xl
              transition-all
              duration-300
              hover:-translate-y-1
            "
            >
              {course.cta.primaryButton}

              <ArrowRight size={20} />
            </Link>

            <Link
              href="/contact"
              className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white/30
              bg-white/10
              px-8
              py-4
              font-semibold
              text-white
              backdrop-blur-xl
              transition-all
              duration-300
              hover:bg-white/20
            "
            >
              <Phone size={18} />

              {course.cta.secondaryButton}
            </Link>

          </div>

          {/* Bottom Stats */}

          <div className="mt-20 grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl">

              <h3 className="text-5xl font-bold text-white">
                500+
              </h3>

              <p className="mt-3 text-red-100">
                Successful Students
              </p>

            </div>

            <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl">

              <h3 className="text-5xl font-bold text-white">
                98%
              </h3>

              <p className="mt-3 text-red-100">
                JLPT Success Rate
              </p>

            </div>

            <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl">

              <h3 className="text-5xl font-bold text-white">
                10+
              </h3>

              <p className="mt-3 text-red-100">
                Years of Experience
              </p>

            </div>

          </div>

        </motion.div>

      </Container>

    </section>
  );
}