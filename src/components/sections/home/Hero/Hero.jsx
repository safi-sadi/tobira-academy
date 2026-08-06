"use client";

import { motion } from "framer-motion";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#fff8f7] via-[#fff3ef] to-[#ffe8de]">

      {/* ================= Background ================= */}

      <div className="absolute inset-0">

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right,#ef4444 1px,transparent 1px),
              linear-gradient(to bottom,#ef4444 1px,transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Top Left Glow */}

        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-56 -top-52 h-[650px] w-[650px] rounded-full bg-red-300/25 blur-[130px]"
        />

        {/* Right Glow */}

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-250px] top-24 h-[700px] w-[700px] rounded-full bg-orange-300/20 blur-[140px]"
        />

        {/* Center Glow */}

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [.25, .4, .25],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-400/10 blur-[120px]"
        />

        {/* Decorative Circles */}

        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute left-[12%] top-[18%] h-5 w-5 rounded-full bg-red-400/30"
        />

        <motion.div
          animate={{
            y: [0, 25, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute right-[18%] top-[22%] h-8 w-8 rounded-full bg-orange-400/25"
        />

        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
          className="absolute bottom-40 left-[18%] h-6 w-6 rounded-full bg-red-500/20"
        />
      </div>

      {/* ================= Hero ================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="grid min-h-screen items-center gap-20 pt-32 pb-24 lg:grid-cols-2">

          <HeroContent />

          <HeroImage />

        </div>

      </div>

      {/* Bottom Gradient */}

      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-white to-transparent" />

      <ScrollIndicator />

    </section>
  );
}