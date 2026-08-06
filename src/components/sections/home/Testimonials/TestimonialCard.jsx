"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Rating from "./Rating";
import { Quote, ArrowRight } from "lucide-react";

export default function TestimonialCard({ testimonial }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-red-500 hover:shadow-xl"
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-full">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            {testimonial.name}
          </h3>

          <p className="text-sm text-slate-500">
            {testimonial.university}
          </p>

          <p className="text-sm font-medium text-red-600">
            {testimonial.country}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="mt-6">
        <Rating rating={testimonial.rating} />
      </div>

      {/* Quote */}
      <Quote
        size={36}
        className="mt-6 text-red-100"
      />

      {/* Review */}
      <p className="mt-4 leading-7 text-slate-600">
        {testimonial.review}
      </p>

      {/* Button */}
      <button className="mt-8 flex items-center gap-2 font-semibold text-red-600 transition group-hover:gap-3">
        Read Story

        <ArrowRight size={18} />
      </button>
    </motion.div>
  );
}