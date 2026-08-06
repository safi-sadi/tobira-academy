import Container from "@/components/ui/Container";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[4px] text-red-600">
            Student Success Stories
          </span>

          <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
            Our Students Are Studying Around The World
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            More than 500 students have achieved their dreams with TW
            Education. Here's what some of them have to say.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-3xl bg-red-600 px-10 py-16 text-center text-white">
          <h3 className="text-3xl font-bold">
            Ready To Become Our Next Success Story?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-red-100">
            Start your journey today with expert guidance from our
            experienced education consultants.
          </p>

          <button className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-red-600 transition hover:bg-slate-100">
            Start Your Journey
          </button>
        </div>
      </Container>
    </section>
  );
}
