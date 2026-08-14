import Container from "@/components/ui/Container";
import HeroContent from "./HeroContent";
import StatsGrid from "./StatsGrid";

export default function Hero() {
  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-slate-50
        to-white

        pt-32
        md:pt-36
        lg:pt-40

        pb-16
        md:pb-20
      "
    >

      {/* ================= BACKGROUND ================= */}

      {/* Large red ambient glow */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-red-500/[0.08]
          blur-[130px]
        "
      />

      {/* Blue ambient glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-32
          h-[450px]
          w-[450px]
          rounded-full
          bg-blue-500/[0.07]
          blur-[140px]
        "
      />

      {/* Bottom glow */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-[300px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-red-500/[0.035]
          blur-[120px]
        "
      />


      {/* ================= DECORATIVE GRID ================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />


      {/* ================= TOP LINE ================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-24
          h-px
          w-[80%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-slate-300/40
          to-transparent
        "
      />


      {/* ================= CONTENT ================= */}

      <Container>

        <div className="relative z-10">

          <HeroContent />

          <StatsGrid />

        </div>

      </Container>


      {/* ================= BOTTOM FADE ================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-24
          bg-gradient-to-t
          from-white
          to-transparent
        "
      />

    </section>
  );
}