import Hero from "./Hero/Hero";
import Process from "./Process/Process";
import FAQ from "./FAQ/FAQ";
import CTA from "./CTA/CTA";

export default function ServiceLayout({
  service,
}) {
  return (
    <>
      <Hero service={service} />

      <Process service={service} />

      <FAQ service={service} />

      <CTA service={service} />
    </>
  );
}
// import Hero from "./Hero/Hero";
// export default function ServiceLayout({ service }) {
//   return (
//     <>
//       <Hero service={service} />
//     </>
//   );
// }