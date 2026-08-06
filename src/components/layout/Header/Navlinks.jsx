"use client";

import Link from "next/link";
import { navigation } from "@/data/navigation";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import ServicesDropdown from "./ServicesDropdown";
import CoursesDropdown from "./CoursesDropdown";

export default function NavLinks() {
  const [open, setOpen] = useState(null);

  return (
    <nav className="hidden lg:flex items-center gap-10">
      {navigation.map((item) => {
        const isServices = item.label === "Services";
        const isCourses = item.label === "Courses";

        return (
          <div
            key={item.href}
            className="relative"
            onMouseEnter={() => {
              if (isServices) setOpen("services");
              if (isCourses) setOpen("courses");
            }}
            onMouseLeave={() => {
              if (isServices || isCourses) setOpen(null);
            }}
          >
            <Link
              href={item.href}
              className="
                flex
                items-center
                gap-1
                py-2
                font-medium
                text-gray-700
                transition
                duration-300
                hover:text-red-600
              "
            >
              {item.label}

              {(isServices || isCourses) && (
                <ChevronDown
                  size={16}
                  className={`
                    transition-transform duration-300
                    ${
                      (isServices && open === "services") ||
                      (isCourses && open === "courses")
                        ? "rotate-180 text-red-600"
                        : ""
                    }
                  `}
                />
              )}
            </Link>

            <AnimatePresence>
              {isServices && open === "services" && (
                <ServicesDropdown />
              )}

              {isCourses && open === "courses" && (
                <CoursesDropdown />
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </nav>
  );
}