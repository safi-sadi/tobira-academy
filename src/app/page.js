
import Hero from "@/components/sections/home/Hero/Hero";
import About from "@/components/sections/home/About/About";
import Services from "@/components/sections/home/Services/Services";
import WhyChooseUs from "@/components/sections/home/whychoose/WhyChooseUs";
import TestimonialsSection from "@/components/sections/home/Testimonials/TestimonialsSection";
import TeamSection from "@/components/sections/home/Team/TeamSection";
import CoursesSection from "@/components/sections/home/Courses/CoursesSection";
import CEOSection from "@/components/sections/home/CEOMessage/CEOSection";


export default async function Home() {

  return (
    <>
      
      <Hero  />
      <About  />
      <Services />
      <CoursesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <TeamSection />
      <CEOSection />
      
    </>
  );
}
