"use client";

import CountUp from "react-countup";
import { Camera, GraduationCap, Plane, Calendar } from "lucide-react";

const stats = [
  {
    icon: Camera,
    value: 500,
    suffix: "+",
    label: "Gallery Photos",
  },
  {
    icon: Plane,
    value: 300,
    suffix: "+",
    label: "Visa Success",
  },
  {
    icon: GraduationCap,
    value: 1500,
    suffix: "+",
    label: "Students Guided",
  },
  {
    icon: Calendar,
    value: 8,
    suffix: "+",
    label: "Years Experience",
  },
];

export default function GalleryStats() {
  return (
    <section className="py-20">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="
                group
                rounded-3xl
                border
                border-red-100
                bg-white
                p-8
                text-center
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-red-300
                hover:shadow-2xl
              "
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition group-hover:rotate-6 group-hover:scale-110">
                <Icon size={30} />
              </div>

              <h3 className="text-5xl font-bold text-gray-900">
                <CountUp
                  end={item.value}
                  duration={2}
                />
                {item.suffix}
              </h3>

              <p className="mt-3 text-gray-600">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}