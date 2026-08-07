"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function FeatureItem({
  icon: Icon,
  title,
}) {
  return (
    <motion.div
      whileHover={{
        x: 8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        flex
        items-center
        gap-5
        rounded-2xl
        border
        border-slate-200
        bg-white/80
        p-5
        backdrop-blur-xl
        shadow-sm
        transition-all
        duration-300
        hover:border-red-200
        hover:shadow-xl
      "
    >
      {/* Icon */}

      <div
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-red-600
          to-orange-500
          text-white
          shadow-lg
          transition-transform
          duration-300
          group-hover:rotate-6
          group-hover:scale-110
        "
      >
        <Icon size={26} />
      </div>

      {/* Content */}

      <div className="flex-1">

        <h3 className="text-lg font-semibold text-slate-900">
          {title}
        </h3>

      </div>

      {/* Check */}

      <CheckCircle2
        size={24}
        className="
          text-green-500
          transition-transform
          duration-300
          group-hover:scale-110
        "
      />
    </motion.div>
  );
}