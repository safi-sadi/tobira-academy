import Container from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA({ service }) {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-orange-50" />

      {/* Decorative Blur */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-red-200/30 blur-[120px]" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-orange-200/30 blur-[120px]" />

      <Container>

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[40px] border border-red-100 bg-white shadow-2xl">

          {/* Top Gradient */}
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-red-500 via-orange-400 to-red-500" />

          <div className="px-10 py-16 text-center lg:px-20 lg:py-20">

            <span className="inline-block rounded-full bg-red-100 px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-red-600">
              Need Assistance?
            </span>

            <h2 className="mt-8 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              {service.cta?.title}
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              {service.cta?.description}
            </p>

            <Link
              href="/contact"
              className="
                mt-10
                inline-flex
                items-center
                gap-3
                rounded-2xl
                bg-gradient-to-r
                from-red-600
                to-red-500
                px-8
                py-4
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-red-300
              "
            >
              {service.cta?.button}

              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>

        </div>

      </Container>

    </section>
  );
}