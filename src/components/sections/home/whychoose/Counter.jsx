"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

export default function Counter({
  number = 0,
  suffix = "",
  duration = 2,
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, number, {
      duration,
      ease: "easeOut",
      onUpdate(value) {
        setCount(Math.floor(value));
      },
    });

    return () => controls.stop();
  }, [isInView, number, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.6,
      }}
    >
      <h2
        className="
          text-5xl
          font-black
          tracking-tight
          lg:text-6xl
          bg-gradient-to-r
          from-red-600
          to-red-400
          bg-clip-text
          text-transparent
        "
      >
        {count}
        {suffix}
      </h2>
    </motion.div>
  );
}