import AboutHero from "@/components/sections/about/AboutHero";
import AboutCompany from "@/components/sections/about/AboutCompany";
import MissionVission from "@/components/sections/about/MissionVission";
import AboutDifference from "@/components/sections/about/AboutDifference";
import WhatSetsUsApart from "@/components/sections/about/WhatSetsUsApart/WhenSetsUsAprt";
import Offices from "@/components/sections/about/Offices/Offices";
import AboutOffices from "@/components/sections/about/AboutOffices";

export const metadata = {
  title: "About Tobira Language Academy",
  description:
    "Learn about Tobira Language Academy, our mission, Japanese language education and study abroad consultancy services in Bangladesh.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutCompany />
      <MissionVission />
      {/* <WhatSetsUsApart /> */}
      <AboutDifference />
      <AboutOffices />
    </>
  );
}