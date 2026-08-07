"use client";

import { useRef, useState, useLayoutEffect, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Coverflow({
    items,
    renderCard,
    rotate = 44,
    depth = 0.6,
    perspective = 3,
    falloff = 0.56,
    fade = 0.1,
    cardWidth = "330px",
    gap = 0.05,
    loop = true,
}) {
    const count = items.length;
    const router = useRouter();
    const frameRef = useRef(null);
    const cardRefs = useRef([]);

    const posRef = useRef(0);
    const targetRef = useRef(0);
    const widthRef = useRef(0);

    const rafRef = useRef(null);

    const dragRef = useRef(null);

    const [selected, setSelected] = useState(0);

    const [paused, setPaused] = useState(false);

    const indexAt = useCallback(
        (pos) => ((Math.round(pos) % count) + count) % count,
        [count]
    );
    const paint = useCallback(() => {
        const width = widthRef.current;

        if (!width) return;

        const pitch = width * (1 + gap);

        const pos = posRef.current;

        cardRefs.current.forEach((card, index) => {

            if (!card) return;

            let offset = index - pos;

            if (loop) {

                offset = ((offset % count) + count) % count;

                if (offset > count / 2) offset -= count;

            }

            const distance = Math.abs(offset);

            const scale = Math.max(0.82, 1 - distance * 0.12);

            card.style.scale = scale;
            card.style.filter = `blur(${distance * 1.2}px)`;

            const ramp = Math.pow(distance, falloff);

            const tilt = Math.min(rotate * ramp, 82) * Math.sign(offset);

            card.style.transform =
                `translateX(calc(-50% + ${offset * pitch}px))
       translateZ(${-depth * width * ramp}px)
       rotateY(${-tilt}deg)`;

            const edge = loop
                ? Math.min(1, Math.max(0, count / 2 - distance))
                : 1;

            card.style.opacity = Math.max(0, 1 - fade * distance) * edge;

            card.style.zIndex = 100 - Math.round(distance);

        });

    }, [count, depth, fade, falloff, gap, loop, rotate]);
    const settle = useCallback(

        (target) => {

            if (rafRef.current) {

                cancelAnimationFrame(rafRef.current);

            }

            targetRef.current = target;

            setSelected(indexAt(target));

            const animate = () => {

                const remaining = target - posRef.current;

                if (Math.abs(remaining) < 0.0005) {

                    posRef.current = target;

                    paint();

                    rafRef.current = null;

                    return;

                }

                posRef.current += remaining * 0.16;

                paint();

                rafRef.current = requestAnimationFrame(animate);

            };

            rafRef.current = requestAnimationFrame(animate);

        },

        [indexAt, paint]

    );
    const clamp = useCallback(

        (pos) => {

            if (loop) return pos;

            return Math.max(0, Math.min(count - 1, pos));

        },

        [count, loop]

    );

    const goTo = useCallback(
        (index) => {
            const target = loop
                ? index +
                Math.round((targetRef.current - index) / count) * count
                : index;

            settle(clamp(target));
        },
        [clamp, count, loop, settle]
    );

    const next = () => {
        settle(clamp(Math.round(targetRef.current) + 1));
    };

    const prev = () => {
        settle(clamp(Math.round(targetRef.current) - 1));
    };
    useLayoutEffect(() => {

        const frame = frameRef.current;

        if (!frame) return;

        const measure = () => {

            const card = cardRefs.current[0];

            if (!card) return;

            widthRef.current = card.offsetWidth;

            paint();

        };

        measure();

        const observer = new ResizeObserver(measure);

        observer.observe(frame);

        return () => observer.disconnect();

    }, [paint]);

    useEffect(() => {

        return () => {

            if (rafRef.current) {

                cancelAnimationFrame(rafRef.current);

            }

        };

    }, []);

    useEffect(() => {

        if (paused) return;

        const interval = setInterval(() => {

            settle(targetRef.current + 1);

        }, 5000);

        return () => clearInterval(interval);

    }, [paused, settle]);
    return (
        <div className="relative group">

            {/* Left Click Area */}

            <div
                onClick={prev}
                className="
        absolute
        left-0
        top-0
        z-30
        h-full
        w-1/4
        cursor-pointer
      "
            />

            {/* Right Click Area */}

            <div
                onClick={next}
                className="
        absolute
        right-0
        top-0
        z-30
        h-full
        w-1/4
        cursor-pointer
      "
            />

            {/* Hover Left Arrow */}

            <div
                className="
        pointer-events-none
        absolute
        left-8
        top-1/2
        z-40
        -translate-y-1/2
        opacity-0
        transition-all
        duration-300
        group-hover:opacity-100
      "
            >
                <ChevronLeft
                    size={34}
                    className="text-red-600"
                />
            </div>

            {/* Hover Right Arrow */}

            <div
                className="
        pointer-events-none
        absolute
        right-8
        top-1/2
        z-40
        -translate-y-1/2
        opacity-0
        transition-all
        duration-300
        group-hover:opacity-100
      "
            >
                <ChevronRight
                    size={34}
                    className="text-red-600"
                />
            </div>

            {/* Carousel */}

            <div
                ref={frameRef}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                className="overflow-hidden py-16"
                style={{
                    perspective: `calc(${cardWidth} * ${perspective})`,
                }}
            >
                <div
                    className="relative"
                    style={{
                        height: "430px",
                        transformStyle: "preserve-3d",
                    }}
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardRefs.current[index] = el)}
                            onClick={() => {
                                if (selected === index) {
                                    router.push(item.href);
                                } else {
                                    goTo(index);
                                }
                            }}
                            className="absolute left-1/2 top-0 cursor-pointer transition-all duration-300"
                            style={{ width: cardWidth }}
                        >
                            {renderCard(item, selected === index)}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}