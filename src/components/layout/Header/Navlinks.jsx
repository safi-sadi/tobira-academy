"use client";

import Link from "next/link";
import { navigation } from "@/data/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import ServicesDropdown from "./ServicesDropdown";
import CoursesDropdown from "./CoursesDropdown";

export default function NavLinks() {
  const [open, setOpen] = useState(null);

  return (
    <nav className="hidden items-center gap-2 lg:flex">
      {navigation.map((item) => {
        const isServices = item.label === "Services";
        const isCourses = item.label === "Courses";
        const hasDropdown = isServices || isCourses;

        const dropdownName = isServices
          ? "services"
          : isCourses
            ? "courses"
            : null;

        const isOpen = open === dropdownName;

        return (
          <div
            key={item.href}
            className="relative"
            onMouseEnter={() => {
              if (hasDropdown) {
                setOpen(dropdownName);
              } else {
                setOpen(null);
              }
            }}
            onMouseLeave={() => {
              if (hasDropdown) {
                setOpen(null);
              }
            }}
          >
            {/* Navigation link */}

            <Link
              href={item.href}
              className={`
                group
                relative
                flex
                items-center
                gap-1.5
                rounded-full
                px-4
                py-2.5
                text-sm
                font-medium
                transition-all
                duration-300

                ${
                  isOpen
                    ? "bg-white/75 text-red-600 shadow-[0_5px_20px_rgba(15,23,42,.06)]"
                    : "text-slate-600 hover:bg-white/60 hover:text-red-600"
                }
              `}
            >
              {item.label}

              {hasDropdown && (
                <ChevronDown
                  size={15}
                  strokeWidth={2}
                  className={`
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? "rotate-180 text-red-600"
                        : "text-slate-400 group-hover:text-red-500"
                    }
                  `}
                />
              )}

              {/* Active underline */}

              <span
                className={`
                  absolute
                  bottom-1
                  left-1/2
                  h-[2px]
                  -translate-x-1/2
                  rounded-full
                  bg-red-500
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "w-5 opacity-100"
                      : "w-0 opacity-0"
                  }
                `}
              />
            </Link>


            {/* Dropdown */}

            <AnimatePresence mode="wait">
              {isServices && isOpen && (
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
                    duration: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    left-1/2
                    top-full
                    z-[100]
                    -translate-x-1/2
                    pt-3
                  "
                >
                  <ServicesDropdown />
                </motion.div>
              )}

              {isCourses && isOpen && (
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
                    duration: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    left-1/2
                    top-full
                    z-[100]
                    -translate-x-1/2
                    pt-3
                  "
                >
                  <CoursesDropdown />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </nav>
  );
}