import ContactHero from "@/components/sections/contact/ContactHero";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactMap from "@/components/sections/contact/ContactMap";
import ContactFAQ from "@/components/sections/contact/ContactFAQ";

export const metadata = {
  title: "Contact Us | Tobira Language Academy",
  description:
    "Contact Tobira Language Academy for Japanese language courses, student visa support, and study in Japan consultation.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

       <ContactMap /> 

      <ContactFAQ /> 
    </>
  );
}