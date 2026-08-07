"use client";

import { motion } from "framer-motion";
import Counter from "./Counter";

export default function BentoCard({ item, index }) {
  const Icon = item.icon;


  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className={`
        relative
        overflow-hidden
        rounded-[34px]
        border
        border-white/60
        bg-white/80
        backdrop-blur-xl
        shadow-[0_25px_70px_rgba(0,0,0,.08)]
        transition-all
        duration-500
        hover:shadow-[0_35px_90px_rgba(239,68,68,.15)]
      `}
    >
      {/* Glow */}

      <div
        className={`
          absolute
          -right-20
          -top-20
          h-60
          w-60
          rounded-full
          bg-gradient-to-br
          ${item.color}
          opacity-10
          blur-[90px]
        `}
      />

      {/* Floating Icon */}

      <motion.div
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className={`
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          ${item.color}
          text-white
          shadow-xl
        `}
      >
        <Icon size={28} />
      </motion.div>

      <div className="relative z-10 p-8">

        {/* Counter */}

        {item.number && (
          <Counter
            number={item.number}
            suffix={item.suffix}
          />
        )}

        {/* Title */}

        <h3 className="mt-5 text-2xl font-black text-slate-900">
          {item.title}
        </h3>

        {/* Description */}

        <p className="mt-4 leading-8 text-slate-600">
          {item.description}
        </p>

      </div>

      {/* Decorative Circle */}

      <div
        className="
          absolute
          bottom-6
          right-6
          h-16
          w-16
          rounded-full
          border
          border-red-100/60
        "
      />

    </motion.div>
  );
}