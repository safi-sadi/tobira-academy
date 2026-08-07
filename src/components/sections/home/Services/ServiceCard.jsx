// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// export default function ServiceCard({
//   icon: Icon,
//   title,
//   description,
//   color,
// }) {
//   return (
//     <motion.div
//       whileHover={{ y: -12 }}
//       transition={{ duration: 0.35 }}
//       className="
//         group
//         relative
//         flex
//         h-full
//         min-h-[380px]
//         flex-col
//         overflow-hidden
//         rounded-[30px]
//         border
//         border-slate-200
//         bg-white/80
//         p-8
//         backdrop-blur-xl
//         shadow-[0_15px_45px_rgba(0,0,0,.06)]
//         transition-all
//         duration-500
//         hover:border-red-200
//         hover:shadow-[0_25px_70px_rgba(239,68,68,.15)]
//       "
//     >
//       {/* Gradient Glow */}

//       <div
//         className={`
//           absolute
//           -right-16
//           -top-16
//           h-44
//           w-44
//           rounded-full
//           bg-gradient-to-br
//           ${color}
//           opacity-0
//           blur-3xl
//           transition-all
//           duration-500
//           group-hover:opacity-20
//         `}
//       />

//       {/* Icon */}

//       <motion.div
//         whileHover={{
//           rotate: 8,
//           scale: 1.08,
//         }}
//         className={`
//           flex
//           h-16
//           w-16
//           items-center
//           justify-center
//           rounded-2xl
//           bg-gradient-to-br
//           ${color}
//           text-white
//           shadow-xl
//         `}
//       >
//         <Icon size={30} />
//       </motion.div>

//       {/* Title */}

//       <h3 className="mt-8 text-2xl font-bold text-slate-900">
//         {title}
//       </h3>

//       {/* Description */}

//       <p className="mt-4 flex-1 leading-7 text-slate-600">
//         {description}
//       </p>

//       {/* Divider */}

//       <div className="my-8 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

//       {/* Button */}

//       <Link
//         href="/services"
//         className="
//           inline-flex
//           items-center
//           gap-3
//           font-semibold
//           text-red-600
//         "
//       >
//         Learn More

//         <ArrowRight
//           size={18}
//           className="
//             transition-transform
//             duration-300
//             group-hover:translate-x-2
//           "
//         />
//       </Link>

//       {/* Bottom Accent */}

//       <div
//         className={`
//           absolute
//           bottom-0
//           left-0
//           h-1
//           w-0
//           bg-gradient-to-r
//           ${color}
//           transition-all
//           duration-500
//           group-hover:w-full
//         `}
//       />
//     </motion.div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  number,
  active,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
        group
        cursor-pointer
        relative
        h-[430px]
        overflow-hidden
        rounded-[34px]
        border
        border-white/50
        bg-white/90
        backdrop-blur-xl
        shadow-[0_30px_80px_rgba(15,23,42,.12)]
        transition-all
        duration-500
        hover:border-red-200
        hover:shadow-[0_30px_80px_rgba(220,38,38,.15)]
      "
    >

      {/* Background Glow */}

      <div
        className="
          absolute
          -right-24
          -top-24
          h-60
          w-60
          rounded-full
          bg-gradient-to-br
          from-red-500/15
          to-orange-400/15
          blur-3xl
          transition-all
          duration-500
          group-hover:scale-125
        "
      />

      {/* Top Number */}

      <span
        className="
          absolute
          right-8
          top-6
          text-7xl
          font-black
          text-slate-100
          transition
          duration-500
          group-hover:text-red-50
        "
      >
        {number}
      </span>

      {/* Content */}

      <div className="relative flex h-full flex-col p-9">

        {/* Icon */}

        <div
          className="
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-3xl
            bg-gradient-to-br
            from-red-600
            to-orange-500
            text-white
            shadow-xl
            transition-all
            duration-500
            group-hover:rotate-6
            group-hover:scale-110
          "
        >
          <Icon size={34} />
        </div>

        {/* Title */}

        <h3
          className="
            mt-10
            text-3xl
            font-black
            leading-tight
            text-slate-900
          "
        >
          {title}
        </h3>

        {/* Divider */}

        <div
          className="
            mt-6
            h-[2px]
            w-16
            rounded-full
            bg-gradient-to-r
            from-red-600
            to-orange-500
            transition-all
            duration-500
            group-hover:w-28
          "
        />

        {/* Description */}

        <p
          className="
            mt-6
            text-[17px]
            leading-8
            text-slate-600
          "
        >
          {description}
        </p>

        {/* Bottom */}

        <div className="mt-auto">

          <button
            className="
              inline-flex
              items-center
              gap-3
              font-semibold
              text-red-600
            "
          >
            Learn More

            <ArrowRight
              className="
                transition-transform
                duration-300
                group-hover:translate-x-2
              "
              size={20}
            />

          </button>

        </div>

      </div>

    </motion.div>
  );
}