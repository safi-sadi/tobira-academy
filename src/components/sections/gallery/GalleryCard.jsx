"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import { urlFor } from "@/sanity/lib/image";

export default function GalleryCard({ item, onClick }) {
  const category = item.category
    ?.replace(/-/g, " ")
    ?.replace(/\b\w/g, (l) => l.toUpperCase());

  // Smaller Pinterest Heights
  const height =
    item.displayOrder % 3 === 0
      ? "h-[360px]"
      : item.displayOrder % 2 === 0
      ? "h-[280px]"
      : "h-[320px]";

  return (
    <motion.div
      layout
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35 }}
      onClick={() => onClick?.(item)}
      className="group cursor-pointer"
    >
      <div
        className={`
          relative
          ${height}
          overflow-hidden
          rounded-2xl
          shadow-md
          transition-all
          duration-500
          group-hover:-translate-y-1
          group-hover:shadow-2xl
          group-hover:shadow-red-500/20
        `}
      >
        {/* Image */}

        <Image
          src={urlFor(item.image).width(900).url()}
          alt={item.title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        {/* Category */}

        <div
          className="
            absolute
            left-4
            top-4
            rounded-full
            bg-white/20
            px-3
            py-1.5
            text-[10px]
            font-semibold
            uppercase
            tracking-widest
            text-white
            backdrop-blur-xl
          "
        >
          {category}
        </div>

        {/* Arrow */}

        <div
          className="
            absolute
            right-4
            top-4
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-white/20
            text-white
            backdrop-blur-xl
            opacity-0
            transition-all
            duration-300
            group-hover:translate-x-1
            group-hover:-translate-y-1
            group-hover:rotate-12
            group-hover:opacity-100
          "
        >
          <ArrowUpRight size={16} />
        </div>

        {/* Bottom Glass Card */}

        <div
          className="
            absolute
            bottom-4
            left-4
            right-4
            rounded-xl
            bg-black/40
            p-4
            backdrop-blur-xl
            transition-all
            duration-500
            group-hover:bottom-5
          "
        >
          <h3 className="text-lg font-bold text-white">
            {item.title}
          </h3>

          {item.description && (
            <p
              className="
                mt-2
                line-clamp-2
                text-xs
                text-white/80
                opacity-0
                transition-all
                duration-500
                group-hover:opacity-100
              "
            >
              {item.description}
            </p>
          )}

          <div className="mt-3 flex flex-wrap gap-3 text-xs text-white/90">
            {item.location && (
              <div className="flex items-center gap-1.5">
                <MapPin size={13} />
                {item.location}
              </div>
            )}

            {item.date && (
              <div className="flex items-center gap-1.5">
                <CalendarDays size={13} />
                {new Date(item.date).toLocaleDateString()}
              </div>
            )}
          </div>
        </div>

        {/* Shine */}

        <div
          className="
            absolute
            -left-32
            top-0
            h-full
            w-20
            rotate-12
            bg-white/25
            blur-xl
            transition-all
            duration-1000
            group-hover:left-[120%]
          "
        />
      </div>
    </motion.div>
  );
}