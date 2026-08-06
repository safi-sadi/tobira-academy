"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import FloatingCard from "./FloatingCard";

export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center overflow-visible">

      {/* ================= Background Glow ================= */}

      <div className="absolute h-[600px] w-[600px] rounded-full bg-gradient-to-br from-red-300/20 via-orange-300/20 to-transparent blur-[120px]" />

      {/* Decorative Ring */}

      <div className="absolute h-[540px] w-[540px] rounded-full border border-white/30" />

      {/* ================= Main Image ================= */}

      <motion.div
        initial={{
          opacity: 0,
          x: 80,
          scale: .95,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          duration: .9,
        }}
        className="relative z-20"
      >
        <div
          className="
            rounded-[38px]
            border
            border-white/40
            bg-white/20
            p-5
            backdrop-blur-2xl
            shadow-[0_40px_80px_rgba(0,0,0,.18)]
          "
        >

          <div className="overflow-hidden rounded-[30px]">

            <Image
              src="/images/hero/student.png"
              alt="Study in Japan"
              width={520}
              height={650}
              priority
              className="
                object-cover
                transition-all
                duration-700
                hover:scale-105
              "
            />

          </div>

        </div>

      </motion.div>

      {/* ================= Floating Cards ================= */}

      <FloatingCard
        title="Visa Success"
        value={98}
        suffix="%"
        duration={4}
        className="-left-16 top-16"
      />

      <FloatingCard
        title="Students"
        value={500}
        suffix="+"
        duration={5}
        className="-right-10 top-12"
      />

      <FloatingCard
        title="Universities"
        value={50}
        suffix="+"
        duration={6}
        className="-left-12 bottom-15"
      />

      <FloatingCard
        title="Experience"
        value={12}
        suffix="+ Years"
        duration={4.5}
        className="-right-10 bottom-16"
      />

    </div>
  );
}