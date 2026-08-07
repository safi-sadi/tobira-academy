"use client";

import { motion } from "framer-motion";

export default function CourseTabs({
  courses,
  active,
  setActive,
}) {
  return (
    <div className="mt-14 flex justify-center">

      <div
        className="
          relative
          inline-flex
          rounded-2xl
          border
          border-red-100
          bg-white/80
          p-2
          shadow-lg
          backdrop-blur-xl
        "
      >
        {/* Sliding Background */}

        <motion.div
          layoutId="course-tab"
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 30,
          }}
          className="
            absolute
            top-2
            bottom-2
            rounded-xl
            bg-gradient-to-r
            from-red-500
            to-red-600
            shadow-lg
          "
          style={{
            width: `calc((100% - 16px) / ${courses.length})`,
            left: `calc(8px + ${active} * ((100% - 16px) / ${courses.length}))`,
          }}
        />

        {courses.map((course, index) => (
          <button
            key={course.id}
            onClick={() => setActive(index)}
            className="
              relative
              z-10
              min-w-[170px]
              rounded-xl
              px-8
              py-4
              text-center
              transition-all
              duration-300
            "
          >
            <div
              className={`text-lg font-bold transition-colors duration-300 ${
                active === index
                  ? "text-white"
                  : "text-slate-700"
              }`}
            >
              {course.id.toUpperCase()}
            </div>

            <div
              className={`mt-1 text-sm transition-colors duration-300 ${
                active === index
                  ? "text-red-100"
                  : "text-slate-500"
              }`}
            >
              {course.level}
            </div>
          </button>
        ))}
      </div>

    </div>
  );
}