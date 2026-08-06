"use client";

import Container from "@/components/ui/Container";
import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function CourseCurriculum({ course }) {
  return (
    <section
      id="curriculum"
      className="py-24 bg-gradient-to-b from-red-50/30 to-white"
    >
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Learning Journey
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Course Curriculum
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Master Japanese step by step through our structured curriculum
            designed according to the JLPT syllabus.
          </p>

        </div>

        <div className="relative mx-auto mt-20 max-w-4xl">

          {/* Vertical Line */}

          <div className="absolute left-8 top-0 h-full w-[2px] bg-red-100" />

          {course.curriculum.map((item, index) => (

            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .08,
              }}
              viewport={{ once: true }}
              className="relative mb-10 flex gap-8"
            >

              {/* Number */}

              <div
                className="
                relative
                z-10
                flex
                h-16
                w-16
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-red-600
                to-orange-500
                font-bold
                text-white
                shadow-xl
              "
              >
                {item.number}
              </div>

              {/* Card */}

              <div
                className="
                flex-1
                rounded-3xl
                border
                border-red-100
                bg-white
                p-8
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-red-200
                hover:shadow-xl
              "
              >

                <div className="flex items-center gap-4">

                  <div className="rounded-2xl bg-red-100 p-3">

                    <BookOpen
                      className="text-red-600"
                      size={22}
                    />

                  </div>

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                </div>

                <p className="mt-5 leading-8 text-gray-600">
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}