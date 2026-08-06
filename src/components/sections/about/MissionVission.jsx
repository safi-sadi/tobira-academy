"use client";

import { Target, Eye, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Our Mission",
    icon: Target,
    description:
      "To empower Bangladeshi students with honest guidance, quality education opportunities, and complete support throughout their study abroad journey.",
  },
  {
    title: "Our Vision",
    icon: Eye,
    description:
      "To become Bangladesh's most trusted education consultancy by creating successful international graduates who make a positive global impact.",
  },
  {
    title: "Our Strategy",
    icon: Rocket,
    description:
      "Provide transparent counseling, Japanese language education, university admission, visa processing, and post-arrival support under one roof.",
  },
];

export default function MissionVission() {
  return (
    <section className="bg-slate-50 py-15">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="font-semibold uppercase tracking-[4px] text-red-600">
            Our Purpose
          </span>

          <h2 className="mt-5 text-5xl font-bold">
            Mission, Vision & Strategy
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Everything we do is focused on helping students build
            successful international academic careers through
            professional guidance and long-term support.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="rounded-3xl bg-white p-10 shadow-lg transition-all hover:shadow-2xl"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                  <Icon size={36} />
                </div>

                <h3 className="mt-8 text-3xl font-bold">
                  {card.title}
                </h3>

                <p className="mt-6 leading-8 text-gray-600">
                  {card.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}