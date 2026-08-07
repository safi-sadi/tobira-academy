// "use client";

// import { motion } from "framer-motion";

// import SectionHeading from "./SectionHeading";
// import ServiceCard from "./ServiceCard";
// import services from "./servicesData";

// export default function Services() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-b from-white via-red-50/30 to-white py-28">

//       {/* Background Glow */}

//       <div className="absolute inset-0 overflow-hidden">

//         <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-red-200/20 blur-[120px]" />

//         <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-orange-200/20 blur-[120px]" />

//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-6">

//         <SectionHeading />

//         <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

//           {services.map((service, index) => (
//             <motion.div
//               key={service.title}
//               initial={{
//                 opacity: 0,
//                 y: 60,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               viewport={{
//                 once: true,
//               }}
//               transition={{
//                 delay: index * 0.12,
//                 duration: 0.6,
//               }}
//             >
//               <ServiceCard {...service} />
//             </motion.div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";

import Coverflow from "./Coverflow";
import ServiceCard from "./ServiceCard";
import { services } from "./servicesData";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-red-100/30 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-100/40 blur-[120px]" />

      {/* Container */}

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="flex justify-center"
        >
          <span
            className="
              rounded-full
              border
              border-red-200
              bg-red-50
              px-5
              py-2
              text-sm
              font-semibold
              tracking-wider
              uppercase
              text-red-600
            "
          >
            Our Services
          </span>
        </motion.div>

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: .1,
            duration: .6,
          }}
          className="
            mx-auto
            mt-6
            max-w-3xl
            text-center
            text-4xl
            font-black
            leading-tight
            text-slate-900
            lg:text-6xl
          "
        >
          Everything You Need
          <br />
          To Study In Japan
        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: .2,
            duration: .6,
          }}
          className="
            mx-auto
            mt-8
            max-w-3xl
            text-center
            text-lg
            leading-8
            text-slate-600
          "
        >
          From Japanese language preparation to university admission,
          visa processing and pre-departure guidance, we provide
          complete support throughout your journey.
        </motion.p>

        {/* Coverflow */}

        <div className="mt-20">

          <Coverflow
            items={services}
            renderCard={(service) => (
              <ServiceCard
                number={service.number}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            )}
          />

        </div>

      </div>

    </section>
  );
}