"use client";

import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
    X,
    ChevronLeft,
    ChevronRight,
    CalendarDays,
    MapPin,
} from "lucide-react";

import { urlFor } from "@/sanity/lib/image";

export default function GalleryLightbox({
    gallery = [],
    currentIndex,
    setCurrentIndex,
    onClose,
}) {
    // -----------------------------
    // Navigation
    // -----------------------------

    const nextImage = useCallback(() => {
        if (currentIndex === null) return;

        setCurrentIndex((prev) =>
            prev === gallery.length - 1 ? 0 : prev + 1
        );
    }, [currentIndex, gallery.length, setCurrentIndex]);

    const previousImage = useCallback(() => {
        if (currentIndex === null) return;

        setCurrentIndex((prev) =>
            prev === 0 ? gallery.length - 1 : prev - 1
        );
    }, [currentIndex, gallery.length, setCurrentIndex]);

    // -----------------------------
    // Keyboard Controls
    // -----------------------------

    useEffect(() => {
        if (currentIndex === null) return;

        const handleKeyDown = (e) => {
            switch (e.key) {
                case "Escape":
                    onClose();
                    break;

                case "ArrowRight":
                    nextImage();
                    break;

                case "ArrowLeft":
                    previousImage();
                    break;

                default:
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [currentIndex, nextImage, previousImage, onClose]);

    // -----------------------------
    // Lock body scroll
    // -----------------------------

    useEffect(() => {
        if (currentIndex === null) return;

        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [currentIndex]);

    // -----------------------------
    // Nothing Selected
    // -----------------------------

    if (currentIndex === null) return null;

    const item = gallery[currentIndex];

    if (!item) return null;

    const category = item.category
        ?.replace(/-/g, " ")
        ?.replace(/\b\w/g, (l) => l.toUpperCase());
    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {/* Background Click */}
                <div
                    className="absolute inset-0"
                    onClick={onClose}
                />

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="
            absolute
            top-6
            right-6
            z-50
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-white/15
            text-white
            backdrop-blur-xl
            transition
            hover:bg-red-600
            hover:scale-110
          "
                >
                    <X size={22} />
                </button>

                {/* Previous */}
                <button
                    onClick={previousImage}
                    className="
            absolute
            left-5
            top-1/2
            z-50
            -translate-y-1/2
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-white/15
            text-white
            backdrop-blur-xl
            transition
            hover:bg-red-600
            hover:scale-110
          "
                >
                    <ChevronLeft size={28} />
                </button>

                {/* Next */}
                <button
                    onClick={nextImage}
                    className="
            absolute
            right-5
            top-1/2
            z-50
            -translate-y-1/2
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-white/15
            text-white
            backdrop-blur-xl
            transition
            hover:bg-red-600
            hover:scale-110
          "
                >
                    <ChevronRight size={28} />
                </button>

                {/* Counter */}
                <div
                    className="
            absolute
            top-6
            left-1/2
            z-50
            -translate-x-1/2
            rounded-full
            bg-white/15
            px-5
            py-2
            text-sm
            font-semibold
            text-white
            backdrop-blur-xl
          "
                >
                    {currentIndex + 1} / {gallery.length}
                </div>

                {/* Main */}
                <div className="flex h-screen items-center justify-center p-8">

                    <motion.div
                        key={item._id}
                        initial={{
                            opacity: 0,
                            scale: .92
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1
                        }}
                        exit={{
                            opacity: 0,
                            scale: .92
                        }}
                        transition={{
                            duration: .35
                        }}
                        className="
              relative
              w-full
              max-w-6xl
            "
                        onClick={(e) => e.stopPropagation()}
                    >

                        {/* Image */}

                        <div
                            className="
                relative
                overflow-hidden
                rounded-3xl
                bg-black
              "
                        >

                            <Image
                                src={urlFor(item.image).width(1800).url()}
                                alt={item.title}
                                width={1800}
                                height={1200}
                                priority
                                className="
                  max-h-[72vh]
                  w-full
                  object-contain
                "
                            />

                        </div>

                        {/* Information */}

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: .15 }}
                            className="
                mt-6
                rounded-3xl
                bg-white/10
                p-6
                backdrop-blur-xl
              "
                        >

                            <span
                                className="
                  inline-block
                  rounded-full
                  bg-red-600
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-widest
                  text-white
                "
                            >
                                {category}
                            </span>

                            <h2
                                className="
                  mt-4
                  text-3xl
                  font-bold
                  text-white
                "
                            >
                                {item.title}
                            </h2>

                            {item.description && (

                                <p
                                    className="
                    mt-4
                    max-w-3xl
                    text-gray-300
                    leading-8
                  "
                                >
                                    {item.description}
                                </p>

                            )}

                            <div
                                className="
                  mt-6
                  flex
                  flex-wrap
                  gap-6
                  text-gray-200
                "
                            >

                                {item.location && (

                                    <div className="flex items-center gap-2">

                                        <MapPin size={18} />

                                        {item.location}

                                    </div>

                                )}

                                {item.date && (

                                    <div className="flex items-center gap-2">

                                        <CalendarDays size={18} />

                                        {new Date(item.date).toLocaleDateString()}

                                    </div>

                                )}

                            </div>

                        </motion.div>

                    </motion.div>

                </div>

            </motion.div>

        </AnimatePresence>

    );
}