import Container from "@/components/ui/Container";
import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

export default function About({ data }) {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AboutImage data={data} />
          <AboutContent data={data} />
        </div>
      </Container>
    </section>
  );
}