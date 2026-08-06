
import Container from "@/components/ui/Container";
import ServiceCard from "./ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[4px] text-red-600">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
            Everything You Need To Study Abroad
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            From choosing the right university to visa processing and
            Japanese language training, we guide you through every step
            of your international education journey.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}