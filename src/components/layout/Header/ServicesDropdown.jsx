"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  FileCheck,
  Languages,
  BookOpen,
  Home,
  Plane,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Student Visa Processing",
    href: "/services/student-visa-processing",
    icon: FileCheck,
  },
  {
    title: "University Admission",
    href: "/services/university-admission-support",
    icon: GraduationCap,
  },
  {
    title: "Language Preparation",
    href: "/services/language-preparation",
    icon: Languages,
  },
  {
    title: "Scholarship Assistance",
    href: "/services/scholarship-assistance",
    icon: BookOpen,
  },
  {
    title: "Accommodation Support",
    href: "/services/accommodation-support",
    icon: Home,
  },
  {
    title: "Pre Departure Support",
    href: "/services/pre-departure-support",
    icon: Plane,
  },
];

export default function ServicesDropdown() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 8,
        scale: 0.97,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: 6,
        scale: 0.98,
      }}
      transition={{
        duration: 0.22,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        w-[350px]
        overflow-hidden
        rounded-[22px]
        border
        border-white/70
        bg-white/[0.88]
        shadow-[0_25px_70px_rgba(15,23,42,.16)]
        backdrop-blur-2xl
        backdrop-saturate-150
      "
    >

      {/* Top highlight */}

      <div
        className="
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-red-300
          to-transparent
        "
      />

      {/* Header */}

      <div className="px-5 pb-3 pt-5">

        <p
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.2em]
            text-red-500
          "
        >
          What we offer
        </p>

        <h3 className="mt-1 text-lg font-bold text-slate-900">
          Our Services
        </h3>

        <p className="mt-1 text-xs text-slate-500">
          Everything you need for your journey to Japan.
        </p>

      </div>


      {/* Services */}

      <div className="px-2 pb-2">

        {services.map((service) => {
          const Icon = service.icon;

          return (
            <Link
              key={service.href}
              href={service.href}
              className="
                group
                flex
                items-center
                gap-3
                rounded-xl
                px-3
                py-2.5
                transition-all
                duration-300
                hover:bg-red-50
              "
            >

              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-red-50
                  text-red-600
                  transition-all
                  duration-300
                  group-hover:bg-red-600
                  group-hover:text-white
                  group-hover:shadow-md
                  group-hover:shadow-red-200
                "
              >
                <Icon size={17} />
              </div>

              <span
                className="
                  flex-1
                  text-sm
                  font-medium
                  text-slate-700
                  transition-colors
                  group-hover:text-red-600
                "
              >
                {service.title}
              </span>

              <ArrowUpRight
                size={15}
                className="
                  text-slate-300
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                  group-hover:text-red-500
                  group-hover:opacity-100
                "
              />

            </Link>
          );
        })}

      </div>


      {/* Footer */}

      <div
        className="
          border-t
          border-slate-200/70
          bg-slate-50/60
          p-3
        "
      >
        <Link
          href="/services"
          className="
            group
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-red-600
            py-2.5
            text-sm
            font-semibold
            text-white
            shadow-[0_8px_20px_rgba(220,38,38,.18)]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-red-700
            hover:shadow-[0_12px_25px_rgba(220,38,38,.25)]
          "
        >
          View All Services

          <ArrowUpRight
            size={15}
            className="
              transition-transform
              duration-300
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
            "
          />
        </Link>
      </div>

    </motion.div>
  );
}