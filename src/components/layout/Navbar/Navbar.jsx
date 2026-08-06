"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { navLinks } from "./navData";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${scrolled
                ? "py-3"
                : "py-6"
                }`}
        >
            <div
                className={`mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full px-10 transition-all duration-500 ${scrolled
                    ? "border border-white/60 bg-white/80 shadow-2xl backdrop-blur-2xl"
                    : "border border-white/20 bg-white/30 backdrop-blur-xl"
                    }`}
            >
                {/* Logo */}

                <motion.div
                    whileHover={{
                        scale: 1.03,
                    }}
                    transition={{
                        duration: 0.2,
                    }}
                >
                    <Link
                        href="/"
                        className="flex items-center gap-3 py-3"
                    >
                        <Image
                            src="/logo.png"
                            alt="TW Education"
                            width={48}
                            height={48}
                            className="rounded-full"
                        />

                        <div>
                            <h2 className="text-xl font-bold">
                                TW Education
                            </h2>

                            <p className="text-xs text-gray-500">
                                Study in Japan
                            </p>
                        </div>

                    </Link>
                </motion.div>

                {/* Desktop */}

                <DesktopMenu />

                {/* CTA */}

                <div className="hidden lg:block">
                    <Link
                        href="/contact"
                        className="grouprounded-fullbg-gradient-to-r from-red-600
to-red-500
px-7
py-3
font-semibold
text-white
shadow-lg
transition-all
duration-300
hover:-translate-y-1
hover:shadow-red-500/40
"
                    >
                        Book Consultation
                        <motion.span
                            whileHover={{ x: 3 }}
                        >
                            →
                        </motion.span>
                    </Link>
                </div>

                {/* Mobile */}

                <button
                    className="lg:hidden"
                    onClick={() =>
                        setMobileOpen(!mobileOpen)
                    }
                >
                    {mobileOpen ? (
                        <X size={28} />
                    ) : (
                        <Menu size={28} />
                    )}
                </button>

                <AnimatePresence>
                    {mobileOpen && (
                        <MobileMenu
                            close={() => setMobileOpen(false)}
                        />
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}