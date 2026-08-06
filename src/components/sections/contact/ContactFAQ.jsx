"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can I study in Japan through TW Education?",
    answer:
      "We guide you through the complete process including university selection, admission, document preparation, visa processing, and pre-departure support."
  },
  {
    question: "Do I need Japanese language proficiency?",
    answer:
      "Not always. Some programs require Japanese language skills while others are available in English. We help you choose the best option."
  },
  {
    question: "How long does the visa process take?",
    answer:
      "Normally it takes around 2–4 months depending on the university, intake, and embassy processing time."
  },
  {
    question: "What documents are required?",
    answer:
      "Passport, academic certificates, transcripts, financial documents, photographs, and additional documents depending on the university."
  },
  {
    question: "Do you provide Japanese language classes?",
    answer:
      "Yes. We provide Japanese language courses from beginner to advanced levels with experienced instructors."
  },
  {
    question: "Can I get a free consultation?",
    answer:
      "Absolutely. Our experienced counselors provide free consultation to help you choose the right university and career path."
  }
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-14 text-center">

          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            Have Questions?
          </h2>

          <p className="mt-4 text-gray-600">
            Here are the questions students ask us most often.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => {

            const open = openIndex === index;

            return (

              <motion.div
                key={index}
                layout
                className="overflow-hidden rounded-2xl border bg-white shadow-sm"
              >

                <button
                  onClick={() =>
                    setOpenIndex(open ? -1 : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left"
                >

                  <h3 className="text-lg font-semibold">
                    {faq.question}
                  </h3>

                  <motion.div
                    animate={{
                      rotate: open ? 180 : 0
                    }}
                  >
                    <ChevronDown />
                  </motion.div>

                </button>

                <AnimatePresence>

                  {open && (

                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto"
                      }}
                      exit={{
                        opacity: 0,
                        height: 0
                      }}
                    >

                      <div className="border-t px-6 pb-6 pt-5 text-gray-600 leading-8">
                        {faq.answer}
                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}