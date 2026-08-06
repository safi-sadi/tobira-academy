"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
} from "lucide-react";

export default function OfficeCard({ office }) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group relative h-[360px] overflow-hidden rounded-3xl shadow-xl"
    >
      {/* ================= FRONT ================= */}

      <motion.div
        variants={{
          rest: {
            opacity: 1,
            scale: 1,
          },
          hover: {
            opacity: 0,
            scale: 1.08,
          },
        }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0"
      >
        <div className="relative h-full w-full">
          <Image
            src={office.flag}
            alt={office.country}
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Dark Gradient */}

          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/70 to-transparent" />

          {/* Text */}

          <div className="absolute bottom-6 left-8">

            <h3 className="text-3xl font-bold text-white">
              {office.country}
            </h3>

            <div className="mt-3 flex items-center gap-2 text-white/80">

              <span>Hover to Explore</span>

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />

            </div>

          </div>
        </div>
      </motion.div>

      {/* ================= BACK ================= */}

      <motion.div
        variants={{
          rest: {
            opacity: 0,
            y: 60,
          },
          hover: {
            opacity: 1,
            y: 0,
          },
        }}
        transition={{
          duration: 0.5,
        }}
        className="absolute inset-0 flex flex-col justify-center bg-gradient-to-br from-white via-slate-50 to-red-50 p-7"
      >
        <h3 className="text-3xl font-bold">
          {office.title}
        </h3>

        <div className="mt-6 space-y-4">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileHover={{}}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: .10 }}
            className="flex gap-4"
          >
            <MapPin className="text-red-600 shrink-0" />
            <span>{office.address}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: .20 }}
            className="flex gap-4"
          >
            <Phone className="text-red-600 shrink-0" />
            <span>{office.phone}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: .30 }}
            className="flex gap-4"
          >
            <Mail className="text-red-600 shrink-0" />
            <span>{office.email}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: .40 }}
            className="flex gap-4"
          >
            <Clock className="text-red-600 shrink-0" />
            <span>{office.hours}</span>
          </motion.div>

        </div>

        <Link
          href={office.map}
          target="_blank"
          className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white"
        >
          View on Google Maps

          <ArrowUpRight size={18} />
        </Link>

      </motion.div>

    </motion.div>
  );
}