"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function DestinationCard({ destination }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl"
    >
      <div className="relative h-[420px] w-full overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.country}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <span className="text-sm uppercase tracking-[3px] text-red-400">
            Study Destination
          </span>

          <h3 className="mt-2 text-3xl font-bold">
            {destination.country}
          </h3>

          <p className="mt-2 text-gray-200">
            {destination.description}
          </p>

          <p className="mt-5 font-medium">
            {destination.universities}
          </p>

          <Link
            href={destination.href}
            className="mt-6 inline-flex items-center gap-2 text-red-400 transition group-hover:gap-3"
          >
            Explore

            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}