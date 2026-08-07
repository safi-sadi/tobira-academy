"use client";

import { motion } from "framer-motion";
import TeamCard from "./TeamCard";

export default function TeamGrid({ members }) {
  return (
    <div
      className="
        mt-20
        grid
        gap-10

        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
      {members.map((member, index) => (
        <motion.div
          key={member.id}
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .6,
            delay: index * .12,
          }}
        >
          <TeamCard member={member} />
        </motion.div>
      ))}
    </div>
  );
}