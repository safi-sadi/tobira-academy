import { client } from "@/sanity/lib/client";
import { allGalleryQuery } from "@/sanity/lib/queries";

import GalleryHero from "@/components/sections/gallery/GalleryHero";
import GalleryStats from "@/components/sections/gallery/GalleryStats";
import GalleryGrid from "@/components/sections/gallery/GalleryGrid";

export default async function GalleryPage() {
  const gallery = await client.fetch(allGalleryQuery);

  return (
    <>
      <GalleryHero />

      <GalleryStats />

      <GalleryGrid gallery={gallery} />
    </>
  );
}