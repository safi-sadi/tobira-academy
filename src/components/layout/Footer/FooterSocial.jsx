import Link from "next/link";

import {
 FaFacebookF,
 FaLinkedinIn,
 FaYoutube,
 FaInstagram,
} from "react-icons/fa";

import { footerData } from "@/data/footer";

const socials = [
  {
    icon: FaFacebookF,
    href: footerData.company.social.facebook,
  },
  {
    icon: FaLinkedinIn,
    href: footerData.company.social.linkedin,
  },
  {
    icon: FaYoutube,
    href: footerData.company.social.youtube,
  },
  {
    icon: FaInstagram,
    href: footerData.company.social.instagram,
  },
];

export default function FooterSocial() {
  return (
    <div className="mt-8 flex gap-4">

      {socials.map((item, index) => {

        const Icon = item.icon;

        return (
          <Link
            key={index}
            href={item.href}
            className="rounded-full bg-slate-900 p-3 transition hover:bg-red-600"
          >
            <Icon size={18} />
          </Link>
        );

      })}

    </div>
  );
}