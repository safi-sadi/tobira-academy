"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      animate={{ y: [0, 12, 0] }}
      transition={{
        repeat: Infinity,
        duration: 1.6,
      }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
    >
      <ChevronDown size={34} />
    </motion.div>
  );
}