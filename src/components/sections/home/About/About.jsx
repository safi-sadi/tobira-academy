"use client";

import { motion } from "framer-motion";

import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-red-50/30 to-white py-28">

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-red-200/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-orange-200/20 blur-[130px]"
        />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <AboutImage />

          {/* Right */}

          <AboutContent />

        </div>

      </div>

    </section>
  );
}