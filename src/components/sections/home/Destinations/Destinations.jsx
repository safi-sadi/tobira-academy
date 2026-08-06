import Container from "@/components/ui/Container";
import DestinationCard from "./DestinationCard";
import { destinations } from "@/data/destinations";

export default function Destinations() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[4px] text-red-600">
            Study Destinations
          </span>

          <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
            Explore Your Dream Destination
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose from top study destinations around the world. We help
            you find the right university, program, and career path.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}