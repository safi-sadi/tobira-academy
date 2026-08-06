import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const features = [
  "University Admission Assistance",
  "Student Visa Processing",
  "Japanese Language Courses",
  "Scholarship Guidance",
];

export default function AboutContent({ data }) {
  return (
    <div>
      <span className="text-red-600 font-semibold uppercase tracking-[3px]">
        About Us
      </span>

      <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
        {data?.title || "Your Gateway to Global Education"}
      </h2>

      <p className="mt-6 text-lg text-slate-600 leading-8">
        {data?.description || "asdhflkjhajsdfjkasjcdsbghrrubsbhafgblahhrbgasfhgbfvbbbtehewifbbaqowdvbffbvfv"}
      </p>

      <div className="mt-8 space-y-4">
        {features.map((item) => (
          <div key={item} className="flex items-center gap-3">
            <CheckCircle2 className="text-red-600" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <Link
        href="/about"
        className="inline-block mt-10 rounded-xl bg-red-600 px-8 py-4 text-white font-semibold hover:bg-red-700 transition"
      >
        Learn More
      </Link>
    </div>
  );
}