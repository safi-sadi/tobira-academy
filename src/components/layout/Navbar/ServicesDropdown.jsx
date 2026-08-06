"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { serviceLinks } from "./navData";

export default function ServicesDropdown() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: 10,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        absolute
        left-1/2
        top-full
        mt-6
        w-[920px]
        -translate-x-1/2
        overflow-hidden
        rounded-[36px]
        border
        border-white/60
        bg-white/90
        backdrop-blur-2xl
        shadow-[0_30px_80px_rgba(0,0,0,.10)]
      "
    >
      {/* Header */}

      <div className="border-b border-gray-100 bg-white p-8">
        <p className="text-sm font-semibold uppercase tracking-[3px] text-red-600">
          Our Services
        </p>

        <h3 className="mt-3 text-4xl font-bold">
          Study in Japan Services
        </h3>

        <p className="mt-4 max-w-2xl text-gray-500">
          Everything you need—from university admission to visa processing,
          accommodation and pre-departure support.
        </p>
      </div>

      {/* Body */}

      <div className="grid grid-cols-[1.7fr_1fr]">
        {/* LEFT */}

        <div className="p-5">
          {serviceLinks.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.href}
                href={service.href}
                className="
                  group
                  mb-2
                  flex
                  items-center
                  justify-between
                  rounded-3xl
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-gradient-to-r
                  hover:from-red-50
                  hover:to-orange-50
                  hover:shadow-lg
                "
              >
                <div className="flex items-center gap-5">
                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-red-100
                      via-white
                      to-orange-50
                      text-red-600
                      shadow-sm
                      transition-all
                      duration-300
                      group-hover:rotate-6
                      group-hover:scale-110
                      group-hover:shadow-lg
                    "
                  >
                    <Icon size={28} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 transition group-hover:text-red-600">
                      {service.title}
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ArrowUpRight className="text-gray-400 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-red-600" />
              </Link>
            );
          })}

          {/* Footer */}

          <div className="mt-4 border-t border-gray-100 pt-5">
            <Link
              href="/services"
              className="
                flex
                items-center
                justify-between
                rounded-2xl
                bg-red-50
                p-5
                font-semibold
                text-red-600
                transition
                hover:bg-red-100
              "
            >
              View All Services

              <ArrowUpRight />
            </Link>
          </div>
        </div>

        {/* RIGHT */}

        <div className="border-l border-gray-100 bg-gradient-to-br from-red-50 via-white to-orange-50 p-8">
          <div className="relative h-48 overflow-hidden rounded-3xl">
            <Image
              src="/images/japan/navbar-japan.jpg"
              alt="Study in Japan"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="absolute bottom-5 left-5">
              <p className="text-sm text-white/80">
                TW Education
              </p>

              <h3 className="text-2xl font-bold text-white">
                Your Future Starts Here
              </h3>
            </div>
          </div>

          {/* Stats */}

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <h3 className="text-2xl font-bold text-red-600">
                1000+
              </h3>

              <p className="text-sm text-gray-500">
                Students
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <h3 className="text-2xl font-bold text-red-600">
                98%
              </h3>

              <p className="text-sm text-gray-500">
                Success Rate
              </p>
            </div>
          </div>

          <p className="mt-6 leading-7 text-gray-600">
            Need help choosing the right university or visa service? Our expert
            counselors will guide you through every step.
          </p>

          <Link
            href="/contact"
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-gradient-to-r
              from-red-600
              to-red-500
              px-6
              py-3
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              hover:shadow-red-200
            "
          >
            Book Free Consultation

            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}