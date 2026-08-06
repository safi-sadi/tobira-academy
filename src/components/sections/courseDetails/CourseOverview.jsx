"use client";

import Container from "@/components/ui/Container";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function CourseOverview({ course }) {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-red-50/30">

      <Container>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
          >

            <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
              About This Course
            </span>

            <h2 className="mt-6 text-4xl font-bold">
              {course.overview.title}
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              {course.overview.description}
            </p>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
            className="
            rounded-[32px]
            border
            border-red-100
            bg-white
            p-10
            shadow-xl
          "
          >

            <h3 className="text-2xl font-bold">
              What You'll Learn
            </h3>

            <div className="mt-8 space-y-5">

              {course.overview.highlights.map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-4"
                >

                  <div className="mt-1 rounded-full bg-red-100 p-2">

                    <CheckCircle2
                      size={18}
                      className="text-red-600"
                    />

                  </div>

                  <p className="text-gray-700">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </Container>

    </section>
  );
}