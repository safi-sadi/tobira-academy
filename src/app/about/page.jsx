import AboutHero from "@/components/sections/about/AboutHero";
import AboutCompany from "@/components/sections/about/AboutCompany";
import MissionVission from "@/components/sections/about/MissionVission";
import WhatSetsUsApart from "@/components/sections/about/WhatSetsUsApart/WhenSetsUsAprt";
import Offices from "@/components/sections/about/Offices/Offices";

export const metadata = {
  title: "About Us | TW Education",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutCompany />
      <MissionVission />
      <WhatSetsUsApart />
      <Offices />
    </>
  );
}