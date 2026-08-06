import HeroContent from "./HeroContent";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero({ data }) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${data?.imageUrl})`,
        }}
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl px-6">
        <HeroContent data={data} />
      </div>

      <ScrollIndicator />
    </section>
  );
}