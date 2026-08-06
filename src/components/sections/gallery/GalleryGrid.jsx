"use client";

import { useMemo, useState } from "react";

import GalleryCard from "./GalleryCard";
import GalleryFilter from "./GalleryFilter";
import GalleryLightbox from "./GalleryLightbox";

export default function GalleryGrid({ gallery = [] }) {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredGallery = useMemo(() => {
    if (activeCategory === "All") return gallery;

    return gallery.filter(
      (item) =>
        item.category?.toLowerCase() ===
        activeCategory.toLowerCase().replace(/\s+/g, "-")
    );
  }, [gallery, activeCategory]);

  if (!gallery.length) {
    return (
      <div className="py-24 text-center">
        <h3 className="text-2xl font-bold">
          No Gallery Images Found
        </h3>

        <p className="mt-3 text-gray-500">
          Gallery images will appear here after they are added in Sanity.
        </p>
      </div>
    );
  }

  return (
    <>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">

          {/* Filter */}

          <GalleryFilter
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          {/* Gallery */}

          <div
            
  className="
    mx-auto
    mt-12
    max-w-6xl
    columns-1
    gap-6
    sm:columns-2
    lg:columns-3
  "
>
            {filteredGallery.map((item, index) => (
              <div
                key={item._id}
                className="mb-8 break-inside-avoid"
              >
                <GalleryCard
                  item={item}
                  onClick={() => setCurrentIndex(index)}
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox */}

      <GalleryLightbox
        gallery={filteredGallery}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        onClose={() => setCurrentIndex(null)}
      />
    </>
  );
}