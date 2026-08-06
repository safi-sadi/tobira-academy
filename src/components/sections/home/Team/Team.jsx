import Container from "@/components/ui/Container";
import TeamCard from "./TeamCard";
import { team } from "@/data/team";

export default function Team() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[4px] text-red-600">
            Our Professional Team
          </span>

          <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
            Meet The Experts Behind Your Success
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our experienced consultants are dedicated to helping students
            achieve their dream of studying abroad through expert guidance
            and personalized support.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <TeamCard
              key={member.id}
              member={member}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}