import Image from "next/image";

import FooterSocial from "./FooterSocial";

import { footerData } from "@/data/footer";

export default function FooterLogo() {
  return (
    <div>

      <Image
        src="/images/logo/logo.jpeg"
        width={180}
        height={60}
        alt="TW Education"
      />

      <p className="mt-8 leading-8 text-slate-400">
        {footerData.company.description}
      </p>

      <FooterSocial />

    </div>
  );
}