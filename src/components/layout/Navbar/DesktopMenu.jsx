"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { navLinks } from "./navData";
import ServicesDropdown from "./ServicesDropdown";
import { usePathname } from "next/navigation";

export default function DesktopMenu() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    return (
        <nav className="hidden lg:flex items-center gap-10">

            {navLinks.map((item) => {

                if (item.dropdown) {
                    return (
                        <div
                            key={item.title}
                            className="relative"
                            onMouseEnter={() => setOpen(true)}
                            onMouseLeave={() => setOpen(false)}
                        >
                            <button className="flex items-center gap-2 font-medium text-gray-700 transition hover:text-red-600">

                                {item.title}

                                <motion.div
                                    animate={{
                                        rotate: open ? 180 : 0,
                                    }}
                                >
                                    <ChevronDown size={18} />
                                </motion.div>

                            </button>

                            <AnimatePresence>

                                {open && (
                                    <ServicesDropdown />
                                )}

                            </AnimatePresence>

                        </div>
                    );
                }

                return (
                    <Link
                        key={item.title}
                        href={item.href}
                        className={`relativepy-2font-semiboldtransition${pathname === item.href ? "text-red-600" : "text-gray-700 hover:text-red-600"}`}
                    >
                        <motion.span
                            whileHover={{
                                y: -2
                            }}
                            transition={{
                                duration: .2
                            }}
                        >
                            {item.title}
                        </motion.span>

                        {
                            pathname === item.href && (

                                <motion.div
                                    layoutId="navbarIndicator"
                                    className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-red-600"
                                />

                            )
                        }
                    </Link>
                );
            })}

        </nav >
    );
}