import Container from "@/components/ui/Container";
import FeatureCard from "./FeatureCard";
import { features } from "./FeatureData";
export default function WhatSetsUsApart() {
  return (
    <section className="bg-slate-50 py-24">

      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="font-semibold uppercase tracking-[4px] text-red-600">
            What Sets Us Apart
          </span>

          <h2 className="mt-5 text-5xl font-bold">
            Why Students Trust TW Education
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our commitment to quality education, personalized guidance,
            and student success makes us a trusted partner for students
            pursuing higher education in Japan.
          </p>

        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}