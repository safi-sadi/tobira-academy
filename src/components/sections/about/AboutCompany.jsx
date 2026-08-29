"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  Globe2,
  GraduationCap,
  HeartHandshake,
} from "lucide-react";

export default function AboutCompany() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Student First",
      text: "Every recommendation is built around the student's goals and future.",
    },
    {
      icon: Globe2,
      title: "Japan Focused",
      text: "Focused expertise in Japanese language, education and career pathways.",
    },
    {
      icon: HeartHandshake,
      title: "Personal Guidance",
      text: "From the first consultation to your journey in Japan, we're with you.",
    },
  ];

  return (
    <section
      id="about-company"
      className="
        relative
        overflow-hidden
        bg-white
        py-28
        md:py-36
      "
    >
      {/* Background decoration */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-red-100/50
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-red-50
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Main layout */}

        <div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-24
          "
        >

          {/* ================= IMAGE ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >

            {/* Decorative frame */}

            <div
              className="
                absolute
                -left-5
                -top-5
                h-full
                w-full
                rounded-[40px]
                border
                border-red-100
              "
            />

            {/* Image */}

            <div
              className="
                relative
                z-10
                overflow-hidden
                rounded-[36px]
                bg-slate-100
                p-3
                shadow-[0_35px_90px_rgba(0,0,0,.12)]
              "
            >
              <div className="relative aspect-[4/4.7] overflow-hidden rounded-[28px]">

                <Image
                  src="/images/about/about-company.jpg"
                  alt="TW Education"
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />

                {/* Image overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/40
                    via-transparent
                    to-transparent
                  "
                />
              </div>
            </div>

            {/* Floating experience card */}

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
                delay: 0.35,
                duration: 0.6,
              }}
              className="
                absolute
                -bottom-8
                -right-5
                z-20
                rounded-[24px]
                border
                border-white/70
                bg-white/90
                px-6
                py-5
                shadow-[0_20px_50px_rgba(0,0,0,.14)]
                backdrop-blur-xl
                sm:right-5
              "
            >
              <div className="flex items-center gap-4">

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-red-100
                    text-red-600
                  "
                >
                  <Globe2 size={23} />
                </div>

                <div>
                  <p className="text-2xl font-black text-slate-900">
                    Bangladesh × Japan
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Connecting dreams with opportunity
                  </p>
                </div>

              </div>
            </motion.div>

          </motion.div>


          {/* ================= CONTENT ================= */}

          <div>

            {/* Label */}

            <motion.span
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
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
              Who We Are
            </motion.span>


            {/* Heading */}

            <motion.h2
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
                delay: 0.1,
                duration: 0.7,
              }}
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
              More Than A
              <br />

              <span className="text-red-600">
                Consultancy.
              </span>

              <br />

              We're Your Partner.
            </motion.h2>


            {/* Intro */}

            <motion.p
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
                delay: 0.2,
                duration: 0.6,
              }}
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-8
                text-slate-600
              "
            >
              Tobira Language Academy is a student-focused education consultancy
              dedicated to helping ambitious students from Bangladesh
              pursue meaningful educational and career opportunities
              in Japan.
            </motion.p>


            {/* Story */}

            <motion.p
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
                delay: 0.3,
                duration: 0.6,
              }}
              className="
                mt-5
                max-w-2xl
                text-base
                leading-8
                text-slate-500
              "
            >
              We understand that studying abroad is a major decision.
              That's why our team stays beside students throughout
              the process — from Japanese language preparation and
              institution selection to admission, visa processing,
              and their next chapter in Japan.
            </motion.p>


            {/* Highlights */}

            <div className="mt-10 space-y-5">

              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      x: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.35 + index * 0.12,
                      duration: 0.55,
                    }}
                    className="
                      group
                      flex
                      items-start
                      gap-4
                    "
                  >

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        bg-red-50
                        text-red-600
                        transition-all
                        duration-300
                        group-hover:bg-red-600
                        group-hover:text-white
                      "
                    >
                      <Icon size={20} />
                    </div>

                    <div>

                      <h3
                        className="
                          font-bold
                          text-slate-900
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-1
                          max-w-xl
                          text-sm
                          leading-6
                          text-slate-500
                        "
                      >
                        {item.text}
                      </p>

                    </div>

                  </motion.div>
                );
              })}

            </div>


            {/* Bottom link */}

            <motion.a
              href="/contact"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.75,
              }}
              className="
                group
                mt-10
                inline-flex
                items-center
                gap-3
                font-semibold
                text-red-600
              "
            >
              Talk to our team

              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-red-50
                  transition-all
                  duration-300
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
              </span>
            </motion.a>

          </div>

        </div>

      </div>
    </section>
  );
}