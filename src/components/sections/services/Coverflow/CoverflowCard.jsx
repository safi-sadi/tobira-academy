"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CoverflowCard({
    service,
    index,
    activeIndex,
    next,
    prev,
    setActiveIndex,
    total,
}) {
    // const total = 6;

    let offset = index - activeIndex;

    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    if (Math.abs(offset) > 2) return null;

    const positions = {
        "-2": {
            x: -430,
            scale: 0.72,
            rotate: 40,
            opacity: 0.45,
        },
        "-1": {
            x: -230,
            scale: 0.88,
            rotate: 22,
            opacity: 0.85,
        },
        "0": {
            x: 0,
            scale: 1,
            rotate: 0,
            opacity: 1,
        },
        "1": {
            x: 230,
            scale: 0.88,
            rotate: -22,
            opacity: 0.85,
        },
        "2": {
            x: 430,
            scale: 0.72,
            rotate: -40,
            opacity: 0.45,
        },
    };

    const current = positions[offset];

    return (
        <motion.div
            drag={offset === 0 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(e, info) => {
                if (info.offset.x < -80) next();
                if (info.offset.x > 80) prev();
            }}
            onClick={() => {
                if (offset !== 0 && typeof setActiveIndex === "function") {
                    setActiveIndex(index);
                }
            }}
            className="group absolute left-1/2 top-1/2 h-[470px] w-[320px] cursor-pointer overflow-hidden rounded-[32px]"
            animate={{
                x: current.x,
                y: offset === 0 ? "-52%" : "-50%",
                scale: current.scale,
                rotateY: current.rotate,
                opacity: current.opacity,
                zIndex: 100 - Math.abs(offset),
            }}
            transition={{
                type: "spring",
                stiffness: 240,
                damping: 24,
            }}
            whileHover={
                offset === 0
                    ? {
                        scale: 1.05,
                        y: "-54%",
                    }
                    : {
                        scale: current.scale + 0.03,
                    }
            }
            style={{
                marginLeft: "-160px",
                transformStyle: "preserve-3d",
                boxShadow:
                    offset === 0
                        ? "0 40px 90px rgba(0,0,0,.35)"
                        : "0 20px 40px rgba(0,0,0,.18)",
            }}
        >
            {/* Background */}

            <Image
                src={service.heroImage}
                alt={service.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Hover Glow */}

            <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 via-transparent to-indigo-500/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Content */}

            <div className="absolute bottom-5 left-5 right-5 rounded-3xl
border border-white/20
bg-white/[0.06]
backdrop-blur-md
p-6
shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_8px_32px_rgba(0,0,0,0.15)]
transition-all duration-500
group-hover:bg-white/[0.10]">

                <h3 className="text-2xl font-bold tracking-tight text-white">
                    {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-200">
                    {service.subtitle}
                </p>

                <Link href={`/services/${service.slug}`} className="mt-6 inline-flex items-center gap-2 font-semibold text-white transition-all duration-300 group-hover:gap-3">

                    Learn More

                    <ArrowUpRight
                        size={18}
                        className="transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-1 group-hover:rotate-12"
                    />

                </Link>

            </div>

            {/* Shine */}

            <div className="absolute -left-40 top-0 h-full w-24 -skew-x-12 bg-white/20 opacity-0 blur-xl transition-all duration-900 group-hover:left-[170%] group-hover:opacity-100" />
        </motion.div>
    );
}