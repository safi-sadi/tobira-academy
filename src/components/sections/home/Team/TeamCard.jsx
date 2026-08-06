"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

export default function TeamCard({ member }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:border-red-500 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative h-80 overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <span className="absolute left-5 top-5 rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white">
          {member.experience}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold">{member.name}</h3>

        <p className="mt-2 font-medium text-red-600">
          {member.position}
        </p>

        <p className="mt-4 leading-7 text-slate-600">
          {member.bio}
        </p>

        <div className="mt-6">
          <SocialLinks social={member.social} />
        </div>
      </div>
    </motion.div>
  );
}