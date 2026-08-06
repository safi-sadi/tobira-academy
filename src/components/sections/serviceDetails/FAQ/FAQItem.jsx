"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export default function FAQItem({
  faq,
  index,
  active,
  setActive,
}) {
  const open = active === index;

  return (
    <motion.div
      layout
      className={`
      overflow-hidden
      rounded-3xl
      border
      bg-white/80
      backdrop-blur-xl
      transition-all
      duration-500

      ${
        open
          ? "border-red-500 shadow-2xl shadow-red-500/10"
          : "border-gray-200 hover:border-red-200 hover:shadow-lg"
      }
      `}
    >
      <button
        onClick={() => setActive(open ? -1 : index)}
        className="flex w-full items-center justify-between p-8 text-left"
      >
        <h3 className="text-xl font-semibold">
          {faq.question}
        </h3>

        <motion.div
          animate={{
            rotate: open ? 45 : 0,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <Plus
            size={28}
            className="text-red-600"
          />
        </motion.div>
      </button>

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="overflow-hidden"
          >

            <div className="border-t border-gray-100 bg-slate-50 px-8 py-7 leading-8 text-gray-600">
              {faq.answer}
            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </motion.div>
  );
}