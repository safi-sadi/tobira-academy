import Container from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { client } from "@/sanity/lib/client";
import { featuredGalleryQuery } from "@/sanity/lib/queries";

import GalleryGrid from "./GalleryGrid";

export default async function Gallery() {
  const gallery = await client.fetch(featuredGalleryQuery);

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-white via-red-50/30 to-white" />

      <Container>
        <div className="relative">
          {/* Heading */}

          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-red-100 px-5 py-2 text-sm font-semibold text-red-600">
              Photo Gallery
            </span>

            <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
              Capturing Every Step Towards Japan
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore memorable moments from our Japanese language classes,
              seminars, visa success celebrations, graduation ceremonies,
              and student activities.
            </p>
          </div>

          {/* Gallery */}

          <div className="mt-20">
            <GalleryGrid gallery={gallery} />
          </div>

          {/* Button */}

          <div className="mt-16 text-center">
            <Link
              href="/gallery"
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-red-600
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-red-700
                hover:shadow-xl
                hover:shadow-red-200
              "
            >
              View Full Gallery

              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}