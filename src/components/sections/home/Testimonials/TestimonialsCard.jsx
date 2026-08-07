"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react";
import ProgressBar from "./ProgressBar";
export default function TestimonialsCard({ testimonial }) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[36px]
        border border-white/60
        bg-white/80
        backdrop-blur-xl
        shadow-[0_30px_80px_rgba(0,0,0,.08)]
        p-10
        lg:p-12
      "
    >
      {/* Decorative Glow */}
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-red-100/50 blur-3xl" />

      <AnimatePresence mode="wait">
        <motion.div
          key={testimonial.id}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          transition={{
            duration: 0.45,
          }}
        >
          {/* Quote */}
          <Quote
            className="
              mx-auto
              mb-8
              h-14
              w-14
              text-red-200
            "
            strokeWidth={1.5}
          />

          {/* Review */}
          <p
            className="
              text-center
              text-lg
              leading-9
              text-slate-600
            "
          >
            {testimonial.review}
          </p>

          {/* Rating */}
          <div className="mt-10 flex justify-center gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-red-500 text-red-500"
              />
            ))}
          </div>

          {/* Student */}

          <div className="mt-10 text-center">
            <h4 className="text-2xl font-bold text-slate-900">
              {testimonial.name}
            </h4>

            <p className="mt-2 font-medium text-red-600">
              {testimonial.course}
            </p>

            <ProgressBar active={testimonial.id} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}