import Container from "@/components/ui/Container";
import FeatureCard from "./FeatureCard";
import { whyChooseUs } from "@/data/whyChooseUs";

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[4px] text-red-600">
            Why Choose TW Education
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
            Helping Students Build Successful Futures
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We provide complete guidance throughout your study abroad journey,
            ensuring every step is simple, transparent, and successful.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}