"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const offices = [
  {
    country: "Bangladesh",
    city: "Dhaka",
    flag: "/images/offices/bangladesh.png",
    description:
      "Our Bangladesh office is where your journey begins. Meet our team, discuss your goals, and get personalized guidance for studying in Japan.",
    address: "Dhaka, Bangladesh",
    phone: "+880 1XXX-XXXXXX",
    email: "info@tweducationbd.com",
    hours: "Sat – Thu · 10:00 AM – 7:00 PM",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Dhaka%2C%20Bangladesh",
  },
  {
    country: "Japan",
    city: "Tokyo",
    flag: "/images/offices/japan.png",
    description:
      "Our presence in Japan helps us stay connected with students after they arrive and better understand the educational environment on the ground.",
    address: "Tokyo, Japan",
    phone: "+81 XX-XXXX-XXXX",
    email: "japan@tweducationbd.com",
    hours: "Mon – Fri · 10:00 AM – 6:00 PM",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Tokyo%2C%20Japan",
  },
];

export default function AboutOffices() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-32 md:py-40">

      {/* Background */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-red-600/10
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          h-[400px]
          w-[400px]
          rounded-full
          bg-red-500/10
          blur-[130px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-3xl text-center"
        >

          <span
            className="
              inline-flex
              rounded-full
              border
              border-red-500/20
              bg-red-500/10
              px-5
              py-2
              text-sm
              font-semibold
              text-red-400
            "
          >
            Our Presence
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              tracking-tight
              text-white
              md:text-5xl
            "
          >
            Connected Across
            <br />

            <span className="text-red-500">
              Bangladesh & Japan.
            </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-white/55
            "
          >
            From your first consultation in Bangladesh to your life
            in Japan, we're here to keep you connected.
          </p>

        </motion.div>


        {/* Offices */}

        <div
          className="
            mt-20
            grid
            gap-8
            lg:grid-cols-2
          "
        >

          {offices.map((office, index) => (
            <motion.div
              key={office.country}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              className="
  group
  relative
  h-[360px]
  overflow-hidden
  rounded-[30px]
  border
  border-white/10
  bg-white/5
  shadow-[0_25px_60px_rgba(0,0,0,.22)]
"

            >

              {/* Image */}

              <div className="absolute inset-0">

                <Image
                  src={office.flag}
                  alt={`${office.country} office`}
                  fill
                  className="
                    object-cover
                    transition-all
                    duration-1000
                    group-hover:scale-105
                    group-hover:opacity-20
                  "
                />

                {/* Initial overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/20
                    to-black/10
                    transition-opacity
                    duration-700
                    group-hover:opacity-0
                  "
                />

                {/* Hover dark layer */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-red-950/95
                    via-slate-950/95
                    to-black/95
                    opacity-0
                    transition-opacity
                    duration-700
                    group-hover:opacity-100
                  "
                />

              </div>


              {/* Initial content */}

              <div
                className="
  absolute
  bottom-0
  left-0
  right-0
  z-20
  p-4
  transition-all
  duration-700
  group-hover:translate-y-[-10px]
  group-hover:opacity-0
"
              >

                <div
                  className="
                    mb-4
                    inline-flex
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-white/80
                    backdrop-blur-md
                  "
                >
                  {office.city}
                </div>

                <h3
                  className="
                    text-4xl
                    font-black
                    text-white
                  "
                >
                  {office.country}
                </h3>

                <p className="mt-3 text-white/70">
                  Hover to explore our office
                </p>

              </div>


              {/* Hover content */}

              {/* Hover content */}

              <div
                className="
    absolute
    inset-0
    z-30
    flex
    flex-col
    p-5
    opacity-0
    transition-all
    duration-700
    group-hover:opacity-100
  "
              >
                {/* Header */}

                <div className="flex items-center justify-between">

                  <span
                    className="
        text-[10px]
        font-semibold
        uppercase
        tracking-[0.2em]
        text-red-400
      "
                  >
                    Tobira Language Academy
                  </span>

                  <div
                    className="
        flex
        h-8
        w-8
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/10
        text-white
      "
                  >
                    <ArrowUpRight size={15} />
                  </div>

                </div>


                {/* Country */}

                <h3
                  className="
      mt-3
      text-2xl
      font-black
      leading-none
      text-white
    "
                >
                  {office.country}
                </h3>


                {/* Description */}

                <p
                  className="
      mt-2
      text-[11px]
      leading-5
      text-white/60
    "
                >
                  {office.description}
                </p>


                {/* Details */}

                <div className="mt-3 space-y-2">

                  <OfficeDetail
                    icon={MapPin}
                    text={office.address}
                  />

                  <OfficeDetail
                    icon={Phone}
                    text={office.phone}
                  />

                  <OfficeDetail
                    icon={Mail}
                    text={office.email}
                  />

                  <OfficeDetail
                    icon={Clock3}
                    text={office.hours}
                  />

                </div>


                {/* Maps Button */}

                <a
                  href={office.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
      mt-3
      inline-flex
      w-fit
      items-center
      gap-2
      rounded-full
      bg-white
      px-4
      py-2
      text-[11px]
      font-semibold
      text-slate-900
      transition-all
      duration-300
      hover:-translate-y-0.5
      hover:bg-red-600
      hover:text-white
    "
                >
                  View on Google Maps
                  <ArrowUpRight size={13} />
                </a>

              </div>

            </motion.div>
          ))}

        </div>


        {/* Bottom line */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.5,
          }}
          className="
            mx-auto
            mt-16
            flex
            max-w-2xl
            items-center
            justify-center
            gap-4
            text-center
          "
        >

          <div className="h-px flex-1 bg-white/10" />

          <p className="text-sm text-white/40">
            One team · Two countries · One journey
          </p>

          <div className="h-px flex-1 bg-white/10" />

        </motion.div>

      </div>
    </section>
  );
}


/* ================= DETAIL ================= */

function OfficeDetail({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-2.5">

      <div
        className="
          flex
          h-7
          w-7
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-white/10
          text-red-400
        "
      >
        <Icon size={13} />
      </div>

      <span
        className="
          min-w-0
          truncate
          text-[11px]
          text-white/70
        "
      >
        {text}
      </span>

    </div>
  );
}