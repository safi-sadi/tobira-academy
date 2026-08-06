"use client";

import Container from "@/components/ui/Container";
import {
  BookOpen,
  Trophy,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";

const sectionIcons = {
  contents: BookOpen,
  examination: Trophy,
  preparation: GraduationCap,
};

const sectionTitles = {
  contents: "Exam Contents",
  examination: "Examination",
  preparation: "Preparation",
};

export default function CourseExamDetails({ course }) {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-red-50/30">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            JLPT Information
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Examination Details
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Everything you need to know before taking the JLPT examination.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {Object.entries(course.examDetails).map(([key, items], index) => {

            const Icon = sectionIcons[key];

            return (

              <motion.div
                key={key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .5,
                  delay: index * .15,
                }}
                viewport={{ once: true }}
                className="
                rounded-[32px]
                border
                border-red-100
                bg-white
                p-8
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
              >

                <div className="flex items-center gap-4">

                  <div className="rounded-2xl bg-red-100 p-3">

                    <Icon
                      className="text-red-600"
                      size={26}
                    />

                  </div>

                  <h3 className="text-2xl font-bold">
                    {sectionTitles[key]}
                  </h3>

                </div>

                <div className="mt-8 space-y-6">

                  {items.map((item) => (

                    <div
                      key={item.title}
                      className="
                      rounded-2xl
                      bg-red-50
                      p-5
                    "
                    >

                      <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                        {item.title}
                      </p>

                      <p className="mt-2 text-xl font-bold text-gray-900">
                        {item.value}
                      </p>

                    </div>

                  ))}

                </div>

              </motion.div>

            );

          })}

        </div>

      </Container>
    </section>
  );
}