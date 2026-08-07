"use client";

import { motion } from "framer-motion";

export default function ProgressBar({ active }) {
  return (
    <div className="mt-10 h-1.5 w-full overflow-hidden rounded-full bg-red-100">
      <motion.div
        key={active}
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{
          duration: 3,
          ease: "linear",
        }}
        className="h-full rounded-full bg-gradient-to-r from-red-500 to-red-600"
      />
    </div>
  );
}