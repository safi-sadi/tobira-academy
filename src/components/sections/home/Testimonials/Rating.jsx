import { Star } from "lucide-react";

export default function Rating({ rating }) {
  return (
    <div className="flex gap-1 text-yellow-400">
      {[...Array(rating)].map((_, index) => (
        <Star
          key={index}
          size={18}
          fill="currentColor"
        />
      ))}
    </div>
  );
}