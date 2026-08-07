"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import QuoteCard from "./QuoteCard";

export default function CEOImage({ data }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: .8,
      }}
      className="relative"
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          left-10
          top-10
          h-[430px]
          w-[430px]
          rounded-full
          bg-red-200/20
          blur-[120px]
        "
      />

      {/* Decorative Border */}

      <div
        className="
          absolute
          -left-6
          -top-6
          h-full
          w-full
          rounded-[38px]
          border
          border-red-100
        "
      />

      {/* Image Card */}

      <motion.div
        initial={{
          scale: .94,
        }}
        whileInView={{
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: .8,
        }}
        className="
          relative
          z-10
          overflow-hidden
          rounded-[36px]
          border
          border-white/70
          bg-white
          p-3
          shadow-[0_35px_90px_rgba(0,0,0,.15)]
        "
      >
        <Image
          src={data.image}
          alt={data.name}
          width={520}
          height={640}
          className="
            rounded-[28px]
            object-cover
          "
        />
      </motion.div>

      {/* Floating Quote */}

      <div
        className="
          absolute
          -bottom-10
          right-[-50px]
          z-20
          w-[340px]
        "
      >
        <QuoteCard quote={data.quote} />
      </div>
    </motion.div>
  );
}