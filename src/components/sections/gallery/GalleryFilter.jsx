"use client";

const categories = [
  "All",
  "Classroom",
  "Events",
  "Graduation",
  "Visa Success",
  "Japan",
];

export default function GalleryFilter({
  activeCategory,
  setActiveCategory,
}) {
  return (
    <div className="mb-14 flex flex-wrap items-center justify-center gap-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`
            rounded-full
            px-6
            py-3
            text-sm
            font-semibold
            transition-all
            duration-300
            ${
              activeCategory === category
                ? "bg-red-600 text-white shadow-lg shadow-red-200"
                : "bg-white text-gray-700 shadow hover:-translate-y-1 hover:bg-red-50"
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
}