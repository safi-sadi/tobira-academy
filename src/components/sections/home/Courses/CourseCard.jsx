"use client";

import { motion } from "framer-motion";
import { Clock3, Users, ArrowRight } from "lucide-react";
import LevelBadge from "./LevelBadge";

export default function CourseCard({ course }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-red-500 hover:shadow-xl"
    >
      <LevelBadge level={course.level} />

      <h3 className="mt-6 text-2xl font-bold">
        {course.title}
      </h3>

      <p className="mt-4 flex-grow leading-7 text-slate-600">
        {course.description}
      </p>

      <div className="mt-8 space-y-3 border-t border-slate-200 pt-6">
        <div className="flex items-center gap-3 text-slate-700">
          <Clock3 size={18} className="text-red-600" />
          <span>{course.duration}</span>
        </div>

        <div className="flex items-center gap-3 text-slate-700">
          <Users size={18} className="text-red-600" />
          <span>{course.students}</span>
        </div>
      </div>

      <button className="mt-8 flex items-center gap-2 font-semibold text-red-600 transition-all group-hover:gap-3">
        Learn More
        <ArrowRight size={18} />
      </button>
    </motion.div>
  );
}