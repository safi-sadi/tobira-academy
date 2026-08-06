import Link from "next/link";

export default function FooterBottom() {
  return (
    <div className="border-t border-slate-800">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-400 md:flex-row">

        <p>
          © {new Date().getFullYear()} TW Education.
          All rights reserved.
        </p>

        <div className="flex gap-6">

          <Link href="/privacy-policy">
            Privacy Policy
          </Link>

          <Link href="/terms">
            Terms & Conditions
          </Link>

          <Link href="/sitemap">
            Sitemap
          </Link>

        </div>

      </div>

    </div>
  );
}