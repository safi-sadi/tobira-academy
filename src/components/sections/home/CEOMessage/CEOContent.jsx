"use client";

import { motion } from "framer-motion";

import Signature from "./Signature";

export default function CEOContent({ data }) {
  return (
    <div>

      {/* Small Heading */}

      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .5 }}
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
        From Our Founder
      </motion.span>

      {/* Title */}

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: .1 }}
        className="
          mt-6
          text-4xl
          font-black
          leading-tight
          text-slate-900
        "
      >
        Every Dream Begins
        <br />
        With One Brave Decision.
      </motion.h2>

      {/* Paragraphs */}

      <div className="mt-10 space-y-7">

        {data.message.map((paragraph, index) => (

          <motion.p
            key={index}
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: .2 + index * .15,
            }}
            className="
              text-lg
              leading-9
              text-slate-600
            "
          >
            {paragraph}
          </motion.p>

        ))}

      </div>

      {/* Signature */}

      <Signature data={data} />

      {/* CTA */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: .7,
        }}
        className="mt-12"
      >
        <a
          href={data.button.href}
          className="
            inline-flex
            items-center
            gap-3

            rounded-full

            bg-red-600

            px-8
            py-4

            font-semibold
            text-white

            shadow-xl

            transition-all
            duration-300

            hover:-translate-y-1
            hover:bg-red-700
            hover:shadow-red-300/40
          "
        >
          {data.button.text}

          <span
            className="
              text-xl
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </a>
      </motion.div>

    </div>
  );
}