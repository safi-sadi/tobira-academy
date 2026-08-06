"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import FAQItem from "./FAQItem";

export default function FAQ({ service }) {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-red-500/10 blur-[120px]" />

      <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <Container>

        <div className="relative mx-auto max-w-4xl">

          <div className="mb-16 text-center">

            <span className="font-semibold uppercase tracking-[4px] text-red-600">
              FAQ
            </span>

            <h2 className="mt-5 text-5xl font-bold">
              Frequently Asked Questions
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Everything you need to know before starting your study journey.
            </p>

          </div>

          <div className="space-y-5">

            {service.faq.map((faq, index) => (

              <FAQItem
                key={index}
                faq={faq}
                index={index}
                active={active}
                setActive={setActive}
              />

            ))}

          </div>

        </div>

      </Container>

    </section>
  );
}