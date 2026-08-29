"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  PhoneCall,
  CalendarCheck,
  ArrowRight,
  GraduationCap,
  Globe2,
  Users,
  BadgeCheck,
} from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-500 to-orange-500 py-24 lg:py-32">

      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-yellow-300/20 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
        >

          <div className="inline-flex items-center gap-3 rounded-full bg-white/15 px-5 py-3 backdrop-blur-xl">

            <PhoneCall size={18} className="text-white" />

            <span className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact Tobira Language Academy
            </span>

          </div>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white lg:text-7xl">

            Let's Start

            <span className="block text-yellow-300">
              Your Journey
            </span>

            to Japan

          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-red-100">

            Speak with our expert consultants about Japanese language
            courses, student visa processing, university admission and
            career opportunities in Japan.

          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              href="#contact-form"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-red-600 transition hover:scale-105"
            >
              <CalendarCheck size={20} />

              Book Consultation
            </Link>

            <a
              href="tel:+8801712345678"
              className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white hover:text-red-600"
            >
              <PhoneCall size={20} />

              Call Now
            </a>

          </div>

          {/* Stats */}

          <div className="mt-14 grid grid-cols-3 gap-8">

            <div>

              <Users className="mb-3 text-yellow-300" size={28} />

              <h3 className="text-3xl font-bold text-white">
                3000+
              </h3>

              <p className="text-red-100">
                Students
              </p>

            </div>

            <div>

              <GraduationCap className="mb-3 text-yellow-300" size={28} />

              <h3 className="text-3xl font-bold text-white">
                150+
              </h3>

              <p className="text-red-100">
                Universities
              </p>

            </div>

            <div>

              <Globe2 className="mb-3 text-yellow-300" size={28} />

              <h3 className="text-3xl font-bold text-white">
                2
              </h3>

              <p className="text-red-100">
                Offices
              </p>

            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          className="flex justify-center lg:justify-end"
        >

          <div className="w-full max-w-md rounded-[32px] border border-white/20 bg-white/10 p-8 backdrop-blur-2xl shadow-2xl">

            <div className="mb-8 flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white">

                <span className="text-3xl">🇯🇵</span>

              </div>

              <div>

                <h3 className="text-2xl font-bold text-white">
                  Free Consultation
                </h3>

                <p className="text-red-100">
                  We reply within 24 hours
                </p>

              </div>

            </div>

            <div className="space-y-5">

              {[
                "Professional Visa Guidance",
                "Japanese Language Courses",
                "University Admission Support",
                "Career Counseling",
                "Scholarship Assistance",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl bg-white/10 p-4"
                >

                  <BadgeCheck
                    className="text-yellow-300"
                    size={22}
                  />

                  <span className="font-medium text-white">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            <Link
              href="#contact-form"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 font-semibold text-red-600 transition hover:scale-[1.02]"
            >
              Get Started

              <ArrowRight size={20} />

            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
}