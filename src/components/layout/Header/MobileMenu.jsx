"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export default function MobileMenu({ open, setOpen }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}

      <button
        onClick={() => setOpen(true)}
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          border
          border-gray-200
          bg-white
          transition
          hover:border-red-200
          hover:bg-red-50
        "
      >
        <Menu size={22} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            />

            {/* Drawer */}

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 28,
              }}
              className="
                fixed
                right-0
                top-0
                z-50
                h-screen
                w-80
                overflow-y-auto
                bg-white
                shadow-2xl
              "
            >
              {/* Header */}

              <div className="flex items-center justify-between border-b p-6">
                <h2 className="text-xl font-bold">Menu</h2>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 hover:bg-gray-100"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Navigation */}

              <div className="space-y-2 p-6">

                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl p-4 transition hover:bg-gray-100"
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl p-4 transition hover:bg-gray-100"
                >
                  About
                </Link>

                {/* ================= Services ================= */}

                <div className="rounded-xl hover:bg-gray-100">

                  <div className="flex items-center justify-between">

                    <Link
                      href="/services"
                      onClick={() => setOpen(false)}
                      className="flex-1 rounded-l-xl p-4 font-medium"
                    >
                      Services
                    </Link>

                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="rounded-r-xl p-4"
                    >
                      <ChevronDown
                        size={20}
                        className={`transition duration-300 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                  </div>

                </div>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="ml-5 overflow-hidden"
                    >
                      <Link
                        href="/services/student-visa-processing"
                        onClick={() => setOpen(false)}
                        className="block py-3"
                      >
                        Student Visa Processing
                      </Link>

                      <Link
                        href="/services/university-admission"
                        onClick={() => setOpen(false)}
                        className="block py-3"
                      >
                        University Admission
                      </Link>

                      <Link
                        href="/services/language-preparation"
                        onClick={() => setOpen(false)}
                        className="block py-3"
                      >
                        Language Preparation
                      </Link>

                      <Link
                        href="/services/scholarship-assistance"
                        onClick={() => setOpen(false)}
                        className="block py-3"
                      >
                        Scholarship Assistance
                      </Link>

                      <Link
                        href="/services/accommodation-support"
                        onClick={() => setOpen(false)}
                        className="block py-3"
                      >
                        Accommodation Support
                      </Link>

                      <Link
                        href="/services/pre-departure-support"
                        onClick={() => setOpen(false)}
                        className="block py-3"
                      >
                        Pre Departure Support
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ================= Courses ================= */}

                <div className="rounded-xl hover:bg-gray-100">

                  <div className="flex items-center justify-between">

                    <Link
                      href="/courses"
                      onClick={() => setOpen(false)}
                      className="flex-1 rounded-l-xl p-4 font-medium"
                    >
                      Courses
                    </Link>

                    <button
                      onClick={() => setCoursesOpen(!coursesOpen)}
                      className="rounded-r-xl p-4"
                    >
                      <ChevronDown
                        size={20}
                        className={`transition duration-300 ${
                          coursesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                  </div>

                </div>

                <AnimatePresence>
                  {coursesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="ml-5 overflow-hidden"
                    >
                      <Link
                        href="/courses/japanese-language-n5"
                        onClick={() => setOpen(false)}
                        className="block py-3"
                      >
                        Japanese Language N5
                      </Link>

                      <Link
                        href="/courses/japanese-language-n4"
                        onClick={() => setOpen(false)}
                        className="block py-3"
                      >
                        Japanese Language N4
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl p-4 transition hover:bg-gray-100"
                >
                  Contact
                </Link>
                {/* Contact */}

                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="
                    mt-6
                    block
                    rounded-xl
                    bg-red-600
                    px-6
                    py-4
                    text-center
                    font-semibold
                    text-white
                    transition
                    hover:bg-red-700
                  "
                >
                  Free Consultation
                </Link>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}