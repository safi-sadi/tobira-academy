import Link from "next/link";
import { Mail } from "lucide-react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

export default function SocialLinks({ social }) {
  return (
    <div className="flex justify-center gap-3">
      <Link
        href={social.facebook}
        className="rounded-full border border-slate-200 p-2 transition hover:bg-red-600 hover:text-white"
      >
        <FaFacebookF size={18} />
      </Link>

      <Link
        href={social.linkedin}
        className="rounded-full border border-slate-200 p-2 transition hover:bg-red-600 hover:text-white"
      >
        <FaLinkedinIn size={18} />
      </Link>

      <Link
        href={social.email}
        className="rounded-full border border-slate-200 p-2 transition hover:bg-red-600 hover:text-white"
      >
        <Mail size={18} />
      </Link>
    </div>
  );
}