import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative">
      <Image
        src="/images/hero/hero.jpg"
        alt="Study Abroad"
        width={700}
        height={700}
        priority
        className="w-full rounded-3xl"
      />
    </div>
  );
}