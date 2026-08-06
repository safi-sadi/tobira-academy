"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroContent() {
  return (
    <div className="mx-auto max-w-4xl text-center">

      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-semibold uppercase tracking-[4px] text-red-600"
      >
        Our Services
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .15 }}
        className="mt-6 text-5xl font-black leading-tight lg:text-7xl"
      >
        Everything You Need
        <br />
        To Study In Japan
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .3 }}
        className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600"
      >
        From university admission and visa processing to Japanese
        language training and pre-departure support, we guide
        you through every step of your international education journey.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .45 }}
        className="mt-12 flex flex-wrap justify-center gap-5"
      >
        <Link
          href="/contact"
          className="rounded-xl bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700"
        >
          Book Free Consultation
        </Link>

        <Link
          href="#services"
          className="rounded-xl border border-gray-300 px-8 py-4 font-semibold transition hover:bg-gray-100"
        >
          Explore Services
        </Link>

      </motion.div>

    </div>
  );
}