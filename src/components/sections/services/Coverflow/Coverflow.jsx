"use client";

import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { services } from "@/data/servicesData";
import CoverflowCard from "./CoverflowCard";

export default function Coverflow() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const prev = () => {
        setActiveIndex((prev) =>
            prev === 0 ? services.length - 1 : prev - 1
        );
    };

    const next = () => {
        setActiveIndex((prev) =>
            prev === services.length - 1 ? 0 : prev + 1
        );
    };

    // Auto Play
    useEffect(() => {
        if (isPaused) return;

        const timer = setTimeout(() => {
            next();
        }, 2500);

        return () => clearTimeout(timer);
    }, [activeIndex, isPaused]);

    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <section className="relative overflow-hidden ">

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

            {/* Decorative Blur */}
            <div className="absolute left-20 top-24 h-72 w-72 rounded-full bg-red-500/10 blur-[120px]" />
            <div className="absolute right-20 bottom-24 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

            <Container>

                {/* Heading */}
                <div className="mx-auto mb-20 max-w-3xl text-center">

                    <span className="font-semibold uppercase tracking-[4px] text-red-600">
                        Our Services
                    </span>

                    <h2 className="mt-5 text-5xl font-bold lg:text-6xl">
                        Everything You Need
                        <br />
                        To Study In Japan
                    </h2>

                    <p className="mt-8 text-lg leading-8 text-gray-600">
                        From university admission to visa processing and
                        pre-departure support, we guide you through every
                        stage of your international education journey.
                    </p>

                </div>

                {/* Carousel */}
                <div
                    className="relative flex h-[600px] items-center justify-center"
                    style={{
                        perspective: "1800px",
                    }}
                >

                    {/* Left Button */}
                    <button
                        onClick={prev}
                        className="absolute left-0 z-50 flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/60 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-white hover:shadow-red-500/20"
                    >
                        <ChevronLeft size={26} />
                    </button>

                    {/* Cards */}
                    <div
                        className="relative h-[500px] w-full"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {services.map((service, index) => (
                            <CoverflowCard
                                key={service.slug}
                                service={service}
                                index={index}
                                activeIndex={activeIndex}
                                next={next}
                                prev={prev}
                                setActiveIndex={setActiveIndex}
                                total = {services.length}
                            />
                        ))}
                    </div>

                    {/* Right Button */}
                    <button
                        onClick={next}
                        className="absolute right-0 z-50 flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/60 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-white hover:shadow-red-500/20"
                    >
                        <ChevronRight size={26} />
                    </button>

                </div>

                {/* Progress Indicators */}
                <div className="mt-14 flex justify-center gap-3">
                    {services.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`rounded-full transition-all duration-500 ${activeIndex === index
                                ? "h-2 w-12 bg-red-600"
                                : "h-2 w-2 bg-gray-300 hover:bg-gray-400"
                                }`}
                        />
                    ))}
                </div>

            </Container>

        </section>
    );
}