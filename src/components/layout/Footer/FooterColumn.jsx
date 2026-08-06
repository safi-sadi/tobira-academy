import Link from "next/link";

export default function FooterColumn({
  title,
  items,
}) {
  return (
    <div>

      <h3 className="mb-8 text-xl font-semibold">

        {title}

      </h3>

      <ul className="space-y-4">

        {items.map((item) => (

          <li key={item.title}>

            <Link
              href={item.href}
              className="group flex items-center gap-2 text-slate-400 transition hover:text-red-500"
            >
              <span className="transition group-hover:translate-x-1">
                →
              </span>

              {item.title}

            </Link>

          </li>

        ))}

      </ul>

    </div>
  );
}