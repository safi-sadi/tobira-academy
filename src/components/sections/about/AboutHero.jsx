"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative min-h-[650px] overflow-hidden bg-slate-950">

      {/* Background Image */}

      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          scale-105
        "
        style={{
          backgroundImage:
            "url('/images/about/about-banner.jpg')",
        }}
      />

      {/* Main Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/85
          via-black/60
          to-red-950/30
        "
      />

      {/* Red Glow */}

      <div
        className="
          absolute
          -right-40
          top-1/2
          h-[500px]
          w-[500px]
          -translate-y-1/2
          rounded-full
          bg-red-600/20
          blur-[140px]
        "
      />

      {/* Content */}

      <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-6">

        <div className="max-w-4xl">

          {/* Breadcrumb */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-3 text-sm text-white/70"
          >
            <Link
              href="/"
              className="transition-colors hover:text-white"
            >
              Home
            </Link>

            <span>/</span>

            <span className="text-white">
              About
            </span>
          </motion.div>

          {/* Label */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white/20
              bg-white/10
              px-5
              py-2.5
              backdrop-blur-md
            "
          >
            <span className="h-2 w-2 rounded-full bg-red-500" />

            <span className="text-sm font-semibold tracking-wide text-white">
              About Tobira Language Academy
            </span>
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="
              mt-7
              text-5xl
              font-black
              leading-[1.05]
              tracking-tight
              text-white
              md:text-7xl
            "
          >
            Guiding Your
            <br />

            <span className="text-red-500">
              Journey To Japan.
            </span>
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
            className="
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-white/75
              md:text-xl
            "
          >
            From Japanese language preparation to university admission,
            visa support, and beyond, we help students turn their
            dreams of studying in Japan into reality.
          </motion.p>

          {/* Bottom Action */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            className="mt-10"
          >
            <Link
              href="#about-company"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-white
                px-7
                py-4
                font-semibold
                text-slate-900
                shadow-2xl
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              Discover Our Story

              <ArrowDownRight
                size={19}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:translate-y-1
                "
              />
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Bottom Fade */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-32
          bg-gradient-to-t
          from-slate-950
          to-transparent
        "
      />

    </section>
  );
}