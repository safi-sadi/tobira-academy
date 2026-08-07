"use client";

import BentoCard from "./BentoCard";
import whyChooseData from "./whyChooseData";

export default function BentoGrid() {
  return (
    <div className="mt-20 grid gap-6 lg:grid-cols-4">

      {/* Students */}
      <div className="lg:col-span-2">
        <BentoCard
          item={whyChooseData[0]}
          index={0}
        />
      </div>

      {/* Success */}
      <div className="lg:col-span-2">
        <BentoCard
          item={whyChooseData[1]}
          index={1}
        />
      </div>

      {/* Teachers */}
      <div>
        <BentoCard
          item={whyChooseData[2]}
          index={2}
        />
      </div>

      {/* Study in Japan */}
      <div>
        <BentoCard
          item={whyChooseData[3]}
          index={3}
        />
      </div>

      {/* Visa */}
      <div className="lg:col-span-2">
        <BentoCard
          item={whyChooseData[5]}
          index={5}
        />
      </div>

      {/* Career */}
      <div className="lg:col-span-4">
        <BentoCard
          item={whyChooseData[4]}
          index={4}
        />
      </div>

    </div>
  );
}