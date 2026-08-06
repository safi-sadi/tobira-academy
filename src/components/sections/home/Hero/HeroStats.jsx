// "use client";

// import { motion } from "framer-motion";
// import {
//   Users,
//   BadgeCheck,
//   GraduationCap,
// } from "lucide-react";

// const stats = [
//   {
//     icon: Users,
//     number: "500+",
//     label: "Students Sent",
//   },
//   {
//     icon: BadgeCheck,
//     number: "98%",
//     label: "Visa Success",
//   },
//   {
//     icon: GraduationCap,
//     number: "10+",
//     label: "Years Experience",
//   },
// ];

// export default function HeroStats() {
//   return (
//     <div className="grid grid-cols-3 gap-4">

//       {stats.map((stat, index) => {
//         const Icon = stat.icon;

//         return (
//           <motion.div
//             key={stat.label}
//             initial={{
//               opacity: 0,
//               y: 30,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               delay: 0.8 + index * 0.15,
//               duration: 0.5,
//             }}
//             whileHover={{
//               y: -8,
//               scale: 1.04,
//             }}
//             className="
//               group
//               rounded-3xl
//               border
//               border-white/20
//               bg-white/10
//               p-6
//               backdrop-blur-xl
//               transition-all
//               duration-300
//               hover:bg-white/15
//               hover:shadow-2xl
//               hover:shadow-black/20
//             "
//           >
//             <div className="flex justify-center">

//               <div
//                 className="
//                   flex
//                   h-14
//                   w-14
//                   items-center
//                   justify-center
//                   rounded-2xl
//                   bg-white/15
//                   transition
//                   duration-300
//                   group-hover:rotate-6
//                   group-hover:bg-yellow-300
//                   group-hover:text-red-600
//                 "
//               >
//                 <Icon size={28} />
//               </div>

//             </div>

//             <h3 className="mt-5 text-center text-3xl font-black text-white">
//               {stat.number}
//             </h3>

//             <p className="mt-2 text-center text-sm text-red-100">
//               {stat.label}
//             </p>

//           </motion.div>
//         );
//       })}

//     </div>
//   );
// }
"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  GraduationCap,
  BadgeCheck,
  Globe2,
  Users,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    number: 500,
    suffix: "+",
    title: "Students Guided",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: BadgeCheck,
    number: 98,
    suffix: "%",
    title: "Visa Success",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: GraduationCap,
    number: 50,
    suffix: "+",
    title: "Partner Universities",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe2,
    number: 12,
    suffix: "+",
    title: "Years Experience",
    color: "from-purple-500 to-pink-500",
  },
];

export default function HeroStats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  return (
    <section
      ref={ref}
      className="relative bg-white py-24 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-red-100 blur-3xl opacity-60" />

        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-orange-100 blur-3xl opacity-60" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mb-16 text-center"
        >
          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            Our Achievements
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Trusted By Hundreds Of Students
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-gray-600 leading-8">
            We have helped hundreds of Bangladeshi students
            achieve their dream of studying in Japan through
            professional guidance and visa support.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                  duration: .6,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-gray-100
                  bg-white
                  p-8
                  shadow-lg
                  transition-all
                  duration-300
                  hover:shadow-2xl
                "
              >
                {/* Glow */}

                <div
                  className={`
                    absolute
                    -right-16
                    -top-16
                    h-44
                    w-44
                    rounded-full
                    bg-gradient-to-br
                    ${item.color}
                    opacity-10
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:scale-125
                  `}
                />

                {/* Icon */}

                <div
                  className={`
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    ${item.color}
                    text-white
                    shadow-lg
                  `}
                >
                  <Icon size={28} />
                </div>

                {/* Number */}

                <h2 className="mt-8 text-5xl font-extrabold text-gray-900">

                  {inView && (
                    <CountUp
                      end={item.number}
                      duration={2.5}
                    />
                  )}

                  {item.suffix}

                </h2>

                <p className="mt-3 text-gray-600">
                  {item.title}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}