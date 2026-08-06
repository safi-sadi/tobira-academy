"use client";
import StatCard from "./StatCard";
import { serviceStats } from "@/data/serviceStats";

export default function StatsGrid() {
  return (
    <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {serviceStats.map((stat, index) => (

        <StatCard
          key={stat.id}
          stat={stat}
          index={index}
        />

      ))}

    </div>
  );
}