"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import ProcessCard from "./ProcessCard";

export default function Process({ service }) {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden py-28">
      <Container>
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[4px] text-red-600">
            Our Process
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Your Journey Starts Here
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            We guide you through every stage until you arrive in Japan.
          </p>
        </div>

        <div className="relative">
          {service.process.map((item, index) => (
            <ProcessCard
              key={index}
              item={item}
              index={index}
              last={index === service.process.length - 1}
              active={active}
              setActive={setActive}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}