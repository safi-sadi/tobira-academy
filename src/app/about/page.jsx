import AboutHero from "@/components/sections/about/AboutHero";
import AboutCompany from "@/components/sections/about/AboutCompany";
import MissionVission from "@/components/sections/about/MissionVission";
import AboutDifference from "@/components/sections/about/AboutDifference";
import WhatSetsUsApart from "@/components/sections/about/WhatSetsUsApart/WhenSetsUsAprt";
import Offices from "@/components/sections/about/Offices/Offices";
import AboutOffices from "@/components/sections/about/AboutOffices";

export const metadata = {
  title: "About Us | TW Education",
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