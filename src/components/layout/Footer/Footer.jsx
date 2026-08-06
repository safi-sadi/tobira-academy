import Container from "@/components/ui/Container";

import FooterLogo from "./FooterLogo";
import FooterColumn from "./FooterColumn";
import FooterContact from "./FooterContact";
import FooterBottom from "./FooterBottom";

import { footerData } from "@/data/footer";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <Container>

        <div className="grid gap-14 py-20 md:grid-cols-2 lg:grid-cols-4">

          <FooterLogo />

          <FooterColumn
            title="Quick Links"
            items={footerData.quickLinks}
          />

          <FooterColumn
            title="Our Services"
            items={footerData.services}
          />

          <FooterContact />

        </div>

      </Container>

      <FooterBottom />

    </footer>
  );
}