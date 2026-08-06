"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import QuoteBlock from "./QuoteBlock";
import { ceo } from "@/data/ceo";

export default function CEOMessage() {
  return (
    <section className="relative overflow-hidden bg-white py-28">

      {/* Decorative Background */}
      <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-red-50 blur-3xl"></div>
      <div className="absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-slate-100 blur-3xl"></div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">

          <span className="font-semibold uppercase tracking-[4px] text-red-600">
            A Personal Message
          </span>

          <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
            To Every Student & Parent
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Thank you for considering TW Education as your trusted
            partner in your study abroad journey.
          </p>

        </div>

        <div className="mt-20 grid items-center gap-20 lg:grid-cols-2">

          {/* CEO IMAGE */}

          <motion.div
            initial={{ opacity:0,x:-50 }}
            whileInView={{ opacity:1,x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.8 }}
            className="relative mx-auto"
          >

            <div className="absolute -left-6 -top-6 h-full w-full rounded-[40px] border-2 border-red-600"></div>

            <Image
              src={ceo.image}
              alt={ceo.name}
              width={500}
              height={620}
              className="relative rounded-[40px] shadow-2xl"
            />

          </motion.div>

          {/* MESSAGE */}

          <motion.div
            initial={{ opacity:0,x:50 }}
            whileInView={{ opacity:1,x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.8 }}
          >

            <QuoteBlock />

            <div className="space-y-6 text-lg leading-8 text-slate-600">

              {ceo.message
                .trim()
                .split("\n")
                .map((paragraph,index)=>(
                  <p key={index}>{paragraph}</p>
                ))}

            </div>

            <div className="mt-12 border-l-4 border-red-600 pl-6">

              <h3 className="text-3xl font-bold">
                {ceo.name}
              </h3>

              <p className="mt-2 text-red-600 font-medium">
                {ceo.position}
              </p>

              <p className="mt-1 text-slate-500">
                TW Education
              </p>

            </div>

          </motion.div>

        </div>

      </Container>

    </section>
  );
}