import { services } from "@/data/servicesData";

export function getService(slug) {
  return services.find(
    (service) => service.slug === slug
  );
}