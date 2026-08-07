
import Hero from "@/components/sections/home/Hero/Hero";
import About from "@/components/sections/home/About/About";
import Services from "@/components/sections/home/Services/Services";
import Destinations from "@/components/sections/home/Destinations/Destinations";
import WhyChooseUs from "@/components/sections/home/whychoose/WhyChooseUs";
import TestimonialsSection from "@/components/sections/home/Testimonials/TestimonialsSection";
import TeamSection from "@/components/sections/home/team/TeamSection";
// import Courses from "@/components/sections/home/Courses/Courses";
import CoursesSection from "@/components/sections/home/Courses/CoursesSection";
import CEOMessage from "@/components/sections/home/CEOMessage/CEOMessage";
import CEOSection from "@/components/sections/home/CEOMessage/CEOSection";

import { client } from "@/sanity/lib/client";
import { heroQuery } from "@/sanity/queries/heroQuery";
import { urlFor } from "@/sanity/lib/image";
import { aboutQuery } from "@/sanity/queries/aboutQuery";

const about = await client.fetch(aboutQuery);

const aboutData = {
  ...about,
  imageUrl: about?.image
    ? urlFor(about.image).width(900).url()
    : null,
};

export default async function Home() {
  const hero = await client.fetch(heroQuery);

  if (hero?.image) {
    hero.imageUrl = urlFor(hero.image).width(1920).url();
  }

  const heroData = {
    ...hero,
    imageUrl: hero?.image ? urlFor(hero.image).width(1920).url() : null,
  };

  return (
    <>
      
      <Hero data={heroData} />
      <About data={aboutData} />
      <Services />
      <CoursesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <TeamSection />
      <CEOSection />
      
    </>
  );
}
// import { client } from "@/sanity/lib/client";
// import { aboutQuery } from "@/sanity/queries/aboutQuery";

// export default async function Home() {
//   const about = await client.fetch(aboutQuery);

//   return (
//     <pre>{JSON.stringify(about, null, 2)}</pre>
//   );
// }