"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CourseFAQ({ course }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-gradient-to-b from-red-50/30 to-white py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Got Questions?
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Everything you need to know before enrolling in this course.
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-4xl space-y-5">
          {course.faq.map((item, index) => (
            <motion.div
              key={item.question}
              whileHover={{ y: -2 }}
              className="overflow-hidden rounded-3xl border border-red-100 bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? -1 : index)
                }
                className="flex w-full items-center justify-between px-8 py-6 text-left"
              >
                <h3 className="text-lg font-semibold">
                  {item.question}
                </h3>

                <ChevronDown
                  className={`transition duration-300 ${
                    open === index ? "rotate-180 text-red-600" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <p className="px-8 pb-8 leading-8 text-gray-600">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}