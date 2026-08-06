export default function LevelBadge({ level }) {
  return (
    <div className="inline-flex items-center rounded-full bg-red-100 px-4 py-2">
      <span className="text-lg font-bold text-red-600">
        JLPT {level}
      </span>
    </div>
  );
}