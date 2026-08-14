"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Eye,
  Target,
  ArrowUpRight,
} from "lucide-react";

const items = [
  {
    number: "01",
    title: "Our Mission",
    icon: Target,
    description:
      "To empower students with honest guidance, quality education, and personalized support so they can confidently pursue their dreams in Japan.",
  },
  {
    number: "02",
    title: "Our Vision",
    icon: Eye,
    description:
      "To become a trusted bridge between Bangladesh and Japan, creating meaningful opportunities for students to learn, grow, and build successful futures.",
  },
  {
    number: "03",
    title: "Our Approach",
    icon: Compass,
    description:
      "We combine professional expertise with personal care, guiding every student through each stage of their journey with transparency and dedication.",
  },
];

export default function AboutMission() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-32">

      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[600px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-red-600/10
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-[350px]
          w-[350px]
          rounded-full
          bg-red-500/10
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-3xl text-center"
        >

          <span
            className="
              inline-flex
              rounded-full
              border
              border-red-500/20
              bg-red-500/10
              px-5
              py-2
              text-sm
              font-semibold
              text-red-400
            "
          >
            What Drives Us
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              leading-tight
              tracking-tight
              text-white
              md:text-5xl
            "
          >
            Purpose Behind
            <br />

            <span className="text-red-500">
              Everything We Do.
            </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-white/60
            "
          >
            Our work is guided by a simple belief: when students have
            the right guidance, the right preparation, and the right
            support, their possibilities become limitless.
          </p>

        </motion.div>


        {/* Cards */}

        <div
          className="
            mt-20
            grid
            gap-6
            md:grid-cols-3
          "
        >

          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white/10
                  bg-white/[0.06]
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-red-500/30
                  hover:bg-white/[0.09]
                "
              >

                {/* Hover Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-red-600/0
                    blur-[70px]
                    transition-all
                    duration-700
                    group-hover:bg-red-600/20
                  "
                />

                {/* Number */}

                <div
                  className="
                    absolute
                    right-7
                    top-7
                    text-sm
                    font-bold
                    tracking-widest
                    text-white/20
                    transition-colors
                    duration-300
                    group-hover:text-red-500/60
                  "
                >
                  {item.number}
                </div>


                {/* Icon */}

                <div
                  className="
                    relative
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-red-500/20
                    bg-red-500/10
                    text-red-400
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:bg-red-600
                    group-hover:text-white
                  "
                >
                  <Icon size={25} strokeWidth={1.8} />
                </div>


                {/* Content */}

                <h3
                  className="
                    relative
                    mt-10
                    text-2xl
                    font-bold
                    text-white
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    relative
                    mt-5
                    text-base
                    leading-8
                    text-white/55
                    transition-colors
                    duration-300
                    group-hover:text-white/70
                  "
                >
                  {item.description}
                </p>


                {/* Bottom Line */}

                <div
                  className="
                    relative
                    mt-8
                    h-px
                    w-full
                    overflow-hidden
                    bg-white/10
                  "
                >
                  <div
                    className="
                      h-full
                      w-0
                      bg-gradient-to-r
                      from-red-600
                      to-red-400
                      transition-all
                      duration-700
                      group-hover:w-full
                    "
                  />
                </div>


                {/* Arrow */}

                <div
                  className="
                    mt-6
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    text-white/40
                    transition-all
                    duration-300
                    group-hover:border-red-500/40
                    group-hover:bg-red-600
                    group-hover:text-white
                  "
                >
                  <ArrowUpRight
                    size={17}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </div>

              </motion.div>
            );
          })}

        </div>


        {/* Bottom Statement */}

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
            delay: 0.5,
            duration: 0.7,
          }}
          className="
            mx-auto
            mt-20
            max-w-4xl
            text-center
          "
        >

          <div className="mx-auto mb-6 h-px w-20 bg-red-500/60" />

          <p
            className="
              text-2xl
              font-medium
              leading-10
              text-white/80
              md:text-3xl
            "
          >
            "Your success is not just a destination.
            <span className="text-red-500">
              {" "}It's a journey we take together.
            </span>"
          </p>

        </motion.div>

      </div>
    </section>
  );
}