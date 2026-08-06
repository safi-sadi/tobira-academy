"use client";

import Container from "@/components/ui/Container";

import {
  GraduationCap,
  Users,
  BookOpen,
  ClipboardCheck,
  Target,
  Plane,
} from "lucide-react";

import { motion } from "framer-motion";

const iconMap = {
  GraduationCap,
  Users,
  BookOpen,
  ClipboardCheck,
  Target,
  Plane,
};

export default function CourseFeatures({ course }) {
  return (
    <section className="py-24 bg-white">

      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Learn Japanese with Confidence
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Everything you need to successfully prepare for JLPT and your
            future in Japan.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {course.features.map((feature, index) => {

            const Icon = iconMap[feature.icon];

            return (

              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .5,
                  delay: index * .08,
                }}
                viewport={{ once: true }}
                className="
                group
                rounded-[30px]
                border
                border-red-100
                bg-white
                p-8
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-red-200
                hover:shadow-2xl
              "
              >

                <div
                  className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-3xl
                  bg-gradient-to-br
                  from-red-500
                  to-orange-400
                  text-white
                  transition
                  duration-500
                  group-hover:rotate-12
                  group-hover:scale-110
                "
                >

                  <Icon size={36} />

                </div>

                <h3 className="mt-8 text-2xl font-bold">

                  {feature.title}

                </h3>

                <p className="mt-4 leading-8 text-gray-600">

                  {feature.description}

                </p>

              </motion.div>

            );

          })}

        </div>

      </Container>

    </section>
  );
}