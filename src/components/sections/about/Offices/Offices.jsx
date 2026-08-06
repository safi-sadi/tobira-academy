import Container from "@/components/ui/Container";
import OfficeCard from "./OfficeCard";
import { offices } from "./officeData";

export default function Offices() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="font-semibold uppercase tracking-[4px] text-red-600">
            Our Offices
          </span>

          <h2 className="mt-5 text-5xl font-bold">
            Visit Our Offices
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet our experienced counselors in Bangladesh or connect
            with our support team in Japan.
          </p>

        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {offices.map((office) => (
            <OfficeCard
              key={office.id}
              office={office}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}