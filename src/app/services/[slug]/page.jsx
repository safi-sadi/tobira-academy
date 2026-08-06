import { notFound } from "next/navigation";
import { getService } from "@/lib/getService";
import ServiceLayout from "@/components/sections/serviceDetails/ServiceLayout";

export default async function ServicePage({ params }) {
  const { slug } = await params;

  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return <ServiceLayout service={service} />;
}
// import ServiceLayout from "@/components/sections/serviceDetails/ServiceLayout";

// export default function ServicePage() {
//   return (
//     <ServiceLayout
//       service={{
//         title: "Test Service",
//         process: [],
//         faq: [],
//       }}
//     />
//   );
// }
