"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  MessageCircle,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Transparent Guidance",
    text: "Clear advice, realistic expectations, and straightforward communication at every stage.",
    className: "md:col-span-2",
  },
  {
    icon: Users,
    title: "Student-Centered",
    text: "We understand that every student's goals, background, and circumstances are different.",
    className: "",
  },
  {
    icon: MessageCircle,
    title: "Always Within Reach",
    text: "Questions don't stop after admission. Our support continues throughout your journey.",
    className: "",
  },
  {
    icon: GraduationCap,
    title: "Education & Career Focus",
    text: "We look beyond admission and help students think about their long-term future in Japan.",
    className: "md:col-span-2",
  },
];

export default function AboutDifference() {
  return (
    <section className="relative overflow-hidden bg-white py-32 md:py-40">

      {/* Background decoration */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-red-100/50
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-200px]
          left-[-150px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-slate-100
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* ================= HEADER ================= */}

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <span
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
              Why Tobira Language Academy
            </span>

            <h2
              className="
                mt-6
                text-4xl
                font-black
                leading-[1.08]
                tracking-tight
                text-slate-900
                md:text-5xl
              "
            >
              The Difference
              <br />

              <span className="text-red-600">
                Is In The Details.
              </span>
            </h2>

          </motion.div>


          <motion.div
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
              delay: 0.15,
              duration: 0.7,
            }}
          >
            <p
              className="
                max-w-2xl
                text-lg
                leading-8
                text-slate-500
              "
            >
              Choosing an education consultancy is about more than
              paperwork. It's about finding people who understand
              your goals, respect your decisions, and genuinely care
              about where your journey takes you.
            </p>
          </motion.div>

        </div>


        {/* ================= BENTO ================= */}

        <div
          className="
            mt-20
            grid
            gap-5
            md:grid-cols-2
            md:auto-rows-[270px]
          "
        >

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 50,
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
                  delay: index * 0.1,
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-slate-200
                  bg-slate-50
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-red-200
                  hover:bg-white
                  hover:shadow-[0_30px_70px_rgba(0,0,0,.10)]
                  ${feature.className}
                `}
              >

                {/* Background glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-24
                    -top-24
                    h-64
                    w-64
                    rounded-full
                    bg-red-100/0
                    blur-[80px]
                    transition-all
                    duration-700
                    group-hover:bg-red-100
                  "
                />


                {/* Number */}

                <span
                  className="
                    absolute
                    right-8
                    top-7
                    text-sm
                    font-bold
                    tracking-widest
                    text-slate-300
                    transition-colors
                    duration-300
                    group-hover:text-red-200
                  "
                >
                  0{index + 1}
                </span>


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
                    bg-white
                    text-red-600
                    shadow-sm
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:bg-red-600
                    group-hover:text-white
                    group-hover:shadow-lg
                    group-hover:shadow-red-200
                  "
                >
                  <Icon
                    size={25}
                    strokeWidth={1.8}
                  />
                </div>


                {/* Content */}

                <div className="relative mt-10">

                  <h3
                    className="
                      text-2xl
                      font-bold
                      tracking-tight
                      text-slate-900
                    "
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-xl
                      text-base
                      leading-7
                      text-slate-500
                    "
                  >
                    {feature.text}
                  </p>

                </div>


                {/* Arrow */}

                <div
                  className="
                    absolute
                    bottom-7
                    right-7
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    text-slate-400
                    transition-all
                    duration-300
                    group-hover:border-red-600
                    group-hover:bg-red-600
                    group-hover:text-white
                  "
                >
                  <ArrowUpRight
                    size={17}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </div>


                {/* Bottom accent */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-1
                    w-0
                    bg-gradient-to-r
                    from-red-600
                    to-red-400
                    transition-all
                    duration-700
                    group-hover:w-full
                  "
                />

              </motion.div>
            );
          })}

        </div>


        {/* ================= BOTTOM STATEMENT ================= */}

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
            delay: 0.4,
            duration: 0.7,
          }}
          className="
            mt-20
            flex
            flex-col
            gap-6
            rounded-[30px]
            border
            border-red-100
            bg-gradient-to-br
            from-red-50
            via-white
            to-white
            p-8
            md:flex-row
            md:items-center
            md:justify-between
            md:p-10
          "
        >

          <div className="max-w-2xl">

            <p
              className="
                text-2xl
                font-bold
                leading-tight
                text-slate-900
                md:text-3xl
              "
            >
              Your journey deserves
              <span className="text-red-600">
                {" "}more than a checklist.
              </span>
            </p>

            <p
              className="
                mt-3
                text-slate-500
              "
            >
              It deserves people who genuinely care about getting
              every important detail right.
            </p>

          </div>


          <a
            href="/contact"
            className="
              group
              inline-flex
              shrink-0
              items-center
              justify-center
              gap-3
              rounded-full
              bg-red-600
              px-7
              py-4
              font-semibold
              text-white
              shadow-lg
              shadow-red-200
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-red-700
              hover:shadow-xl
            "
          >
            Speak With Us

            <ArrowUpRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>

        </motion.div>

      </div>
    </section>
  );
}