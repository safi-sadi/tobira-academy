import Container from "@/components/ui/Container";
import HeroContent from "./HeroContent";
import StatsGrid from "./StatsGrid";


export default function Hero() {
   return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white ">

      {/* Background Blur */}

      <div className="absolute left-20 top-20 h-80 w-80 rounded-full bg-red-500/10 blur-[120px]" />

      <div className="absolute right-20 bottom-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <Container>

        <HeroContent />

        <StatsGrid />

      </Container>

    </section>
  );
}