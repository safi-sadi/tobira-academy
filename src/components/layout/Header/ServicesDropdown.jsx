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
} from "lucide-react";

const services = [
  {
    title: "Student Visa Processing",
    href: "/services/student-visa-processing",
    icon: FileCheck,
  },
  {
    title: "University Admission",
    href: "/services/university-admission",
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
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2 }}
      className="
        absolute
        left-1/2
        top-full
        z-50
        mt-4
        w-80
        -translate-x-1/2
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white/95
        backdrop-blur-xl
        shadow-xl
      "
    >
      <div className="py-2">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <Link
              key={service.href}
              href={service.href}
              className="
                group
                mx-2
                flex
                items-center
                gap-3
                rounded-xl
                px-4
                py-3
                transition-all
                duration-300
                hover:bg-red-50
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-red-100
                  text-red-600
                  transition
                  group-hover:scale-110
                "
              >
                <Icon size={18} />
              </div>

              <span className="font-medium text-gray-700 group-hover:text-red-600">
                {service.title}
              </span>
            </Link>
          );
        })}
      </div>

      <div className="border-t bg-gray-50 p-3">
        <Link
          href="/services"
          className="
            block
            rounded-xl
            bg-red-600
            py-3
            text-center
            font-semibold
            text-white
            transition
            hover:bg-red-700
          "
        >
          View All Services →
        </Link>
      </div>
    </motion.div>
  );
}