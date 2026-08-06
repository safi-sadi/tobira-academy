"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
    CheckCircle2,
    ChevronDown,
    ArrowUpRight,
    Clock,
} from "lucide-react";

export default function ProcessCard({
    item,
    index,
    last,
    active,
    setActive,
}) {
    const open = active === index;

    return (
        <div
            className={`relative mb-16 flex ${index % 2 === 0
                ? "justify-start"
                : "justify-end"
                }`}
        >

            {/* Timeline */}

            {!last && (
                <div className="absolute left-1/2 top-20 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-red-600 via-red-400 to-transparent" />
            )}

            {/* Timeline Dot */}

            <motion.div
                whileHover={{ scale: 1.2 }}
                className="
absolute
left-1/2
top-10
z-20
flex
h-10
w-10
-translate-x-1/2
items-center
justify-center
rounded-full
bg-red-600
shadow-xl
shadow-red-500/40
ring-8
ring-red-100
"
            >
                <div className="h-3 w-3 rounded-full bg-white" />
            </motion.div>

            {/* Card */}

            <div className="w-full max-w-2xl">

                <motion.div
                    whileHover={{
                        y: -8,
                        scale: 1.01,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 250,
                    }}
                    className={`
group
relative
overflow-hidden
rounded-[36px]
border
bg-white/80
backdrop-blur-xl
transition-all
duration-500

${open
                            ? "border-red-500 shadow-2xl shadow-red-500/20 scale-[1.02]"
                            : "border-gray-200 hover:border-red-200 hover:shadow-xl"
                        }
`}
                >

                    {/* Glow */}

                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-blue-500/0 opacity-0 transition duration-500 group-hover:opacity-100" />

                    {/* Big Number */}

                    <div className="absolute right-8 top-2 text-[170px] font-black text-black/[0.03]">
                        {item.number}
                    </div>

                    <div
                        onClick={() => setActive(open ? -1 : index)}
                        className="relative cursor-pointer p-10"
                    >

                        <div className="flex items-start justify-between">

                            <div>

                                <span className="rounded-full bg-red-50 px-4 py-2 text-xs font-bold tracking-[2px] text-red-600">

                                    {item.step}

                                </span>

                                <h3 className="mt-6 text-3xl font-bold">

                                    {item.title}

                                </h3>

                                <p className="mt-5 max-w-2xl leading-8 text-gray-600">

                                    {item.description}

                                </p>

                            </div>

                            <motion.div
                                animate={{
                                    rotate: open ? 180 : 0,
                                }}
                            >
                                <ChevronDown
                                    size={30}
                                    className="text-red-600"
                                />
                            </motion.div>

                        </div>

                        {/* Footer */}

                        <div className="mt-10 flex items-center justify-between">

                            <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm">

                                <Clock size={16} />

                                {item.duration}

                            </div>

                            <motion.div
                                whileHover={{
                                    x: 6,
                                    y: -2,
                                }}
                                className="flex items-center gap-2 font-semibold text-red-600"
                            >
                                {open ? "Show Less" : "Learn More"}

                                <motion.div
                                    animate={{
                                        rotate: open ? -45 : 0,
                                    }}
                                >
                                    <ArrowUpRight size={18} />
                                </motion.div>
                            </motion.div>

                        </div>

                    </div>

                    {/* Expand */}

                    <AnimatePresence>

                        {open && (

                            <motion.div
                                initial={{
                                    height: 0,
                                    opacity: 0,
                                }}
                                animate={{
                                    height: "auto",
                                    opacity: 1,
                                }}
                                exit={{
                                    height: 0,
                                    opacity: 0,
                                }}
                                transition={{
                                    duration: 0.4,
                                }}
                                className="overflow-hidden"
                            >

                                <div className="border-t bg-slate-50 p-10">

                                    <h4 className="mb-8 text-xl font-bold">

                                        Included Services

                                    </h4>

                                    <div className="grid gap-5 md:grid-cols-2">

                                        {item.details.map((detail, index) => (

                                            <motion.div
                                                key={index}
                                                initial={{
                                                    x: -20,
                                                    opacity: 0,
                                                }}
                                                animate={{
                                                    x: 0,
                                                    opacity: 1,
                                                }}
                                                transition={{
                                                    delay: index * 0.08,
                                                }}
                                                className="
flex
items-center
gap-4
rounded-2xl
border
border-gray-100
bg-white
p-5
shadow-sm
transition
duration-300
hover:-translate-y-1
hover:shadow-lg
"
                                            >

                                                <CheckCircle2
                                                    className="text-green-500"
                                                />

                                                {detail}

                                            </motion.div>

                                        ))}

                                    </div>

                                </div>

                            </motion.div>

                        )}

                    </AnimatePresence>

                </motion.div>

            </div>
        </div>
            );
}