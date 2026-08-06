import { Quote } from "lucide-react";

export default function QuoteBlock() {
  return (
    <div className="mb-10 rounded-3xl border border-red-100 bg-red-50 p-8">
      <Quote
        size={42}
        className="text-red-500"
      />

      <p className="mt-5 text-2xl font-semibold italic leading-relaxed text-slate-800">
        "We don't just help students study abroad.
        We help them build a better future."
      </p>
    </div>
  );
}