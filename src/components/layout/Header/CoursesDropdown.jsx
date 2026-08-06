"use client";

import Link from "next/link";
import { Languages, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Japanese Language N5",
    href: "/courses/japanese-language-n5",
    description: "Beginner Level",
  },
  {
    title: "Japanese Language N4",
    href: "/courses/japanese-language-n4",
    description: "Elementary Level",
  },
];

export default function CoursesDropdown() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2 }}
      className="
      absolute
      left-1/2
      top-full
      mt-4
      w-72
      -translate-x-1/2
      overflow-hidden
      rounded-2xl
      border
      border-gray-100
      bg-white
      shadow-2xl
      "
    >
      {courses.map((course) => (
        <Link
          key={course.href}
          href={course.href}
          className="
          group
          flex
          items-center
          justify-between
          p-4
          transition
          hover:bg-red-50
          "
        >
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-red-100 p-3 text-red-600">
              <Languages size={20} />
            </div>

            <div>
              <h4 className="font-semibold group-hover:text-red-600">
                {course.title}
              </h4>

              <p className="text-sm text-gray-500">
                {course.description}
              </p>
            </div>
          </div>

          <ChevronRight
            size={18}
            className="text-gray-400 group-hover:text-red-600"
          />
        </Link>
      ))}
    </motion.div>
  );
}