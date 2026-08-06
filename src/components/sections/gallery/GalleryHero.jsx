import Container from "@/components/ui/Container";

export default function GalleryHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-red-100 py-28">
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,.08),transparent_45%)]" />

      <Container>
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="rounded-full bg-red-100 px-5 py-2 text-sm font-semibold text-red-600">
            Our Gallery
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight lg:text-7xl">
            Every Moment
            <span className="block text-red-600">
              Tells a Story
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600">
            Explore memorable moments from Japanese language classes,
            visa success celebrations, seminars, student activities,
            graduation ceremonies, and our journey towards Japan.
          </p>
        </div>
      </Container>
    </section>
  );
}