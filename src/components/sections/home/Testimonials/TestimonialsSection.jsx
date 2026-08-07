"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import testimonialData from "./testimonialData";
import TestimonialsImages from "./TestimonialsImages";
import TestimonialsCard from "./TestimonialsCard";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonialData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-red-50/40
        to-white
        py-32
      "
    >
      {/* Background */}

      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
            absolute
            left-1/2
            top-20
            h-[450px]
            w-[450px]
            -translate-x-1/2
            rounded-full
            bg-red-200/20
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            -left-32
            bottom-0
            h-[350px]
            w-[350px]
            rounded-full
            bg-orange-200/20
            blur-[120px]
          "
        />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

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
            duration: .7,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span
            className="
              inline-flex
              rounded-full
              bg-red-100
              px-5
              py-2
              text-sm
              font-semibold
              text-red-600
            "
          >
            Student Testimonials
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              text-slate-900
              md:text-5xl
            "
          >
            Real Stories From
            <br />
            Successful Students
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-slate-600
            "
          >
            Discover how TW Education has helped students
            achieve their dreams of studying and building
            successful careers in Japan.
          </p>
        </motion.div>

        {/* Content */}

        <div
          className="
            mt-20
            grid
            items-center
            gap-20
            lg:grid-cols-2
          "
        >
          <TestimonialsImages />

          <TestimonialsCard
            testimonial={testimonialData[active]}
          />
        </div>

      </div>
    </section>
  );
}