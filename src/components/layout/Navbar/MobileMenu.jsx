"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import {
  navLinks,
  serviceLinks,
} from "./navData";

export default function MobileMenu({ close }) {
  const [openServices, setOpenServices] =
    useState(false);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -20,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        absolute
        left-4
        right-4
        top-full
        mt-4
        overflow-hidden
        rounded-[32px]
        border
        border-white/40
        bg-white/90
        p-6
        shadow-2xl
        backdrop-blur-xl
      "
    >
      <nav className="space-y-3">

        {navLinks.map((item) => {

          if (item.dropdown) {
            return (
              <div key={item.title}>

                <button
                  onClick={() =>
                    setOpenServices(
                      !openServices
                    )
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-2xl
                    px-4
                    py-4
                    font-semibold
                    transition
                    hover:bg-red-50
                  "
                >
                  {item.title}

                  <motion.div
                    animate={{
                      rotate:
                        openServices
                          ? 180
                          : 0,
                    }}
                  >
                    <ChevronDown />
                  </motion.div>

                </button>

                <AnimatePresence>

                  {openServices && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      className="overflow-hidden"
                    >

                      <div className="mt-2 ml-4 space-y-2">

                        {serviceLinks.map(
                          (service) => {

                            const Icon =
                              service.icon;

                            return (
                              <Link
                                key={service.href}
                                href={
                                  service.href
                                }
                                onClick={
                                  close
                                }
                                className="
                                  flex
                                  items-center
                                  gap-4
                                  rounded-2xl
                                  p-3
                                  transition
                                  hover:bg-red-50
                                "
                              >

                                <Icon
                                  size={18}
                                  className="text-red-600"
                                />

                                <div>

                                  <p className="font-medium">

                                    {
                                      service.title
                                    }

                                  </p>

                                  <p className="text-xs text-gray-500">

                                    {
                                      service.description
                                    }

                                  </p>

                                </div>

                              </Link>
                            );
                          }
                        )}

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </div>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="
                block
                rounded-2xl
                px-4
                py-4
                font-semibold
                transition
                hover:bg-red-50
              "
            >
              {item.title}
            </Link>
          );
        })}

      </nav>

      <Link
        href="/contact"
        onClick={close}
        className="
          mt-8
          flex
          justify-center
          rounded-full
          bg-red-600
          py-4
          font-semibold
          text-white
          transition
          hover:bg-red-700
        "
      >
        Book Consultation
      </Link>

    </motion.div>
  );
}