import Image from "next/image";

export default function AboutImage({ data }) {
  return (
    <div className="relative">
      {/* <Image
        src="/images/about/about.jpg"
        alt="About TW Education"
        width={700}
        height={700}
        className="rounded-3xl shadow-xl"
      /> */}
      <Image
        src={data.imageUrl}
        alt={data.title}
        width={700}
        height={700}
        className="rounded-3xl shadow-xl"
      />
    </div>
  );
}