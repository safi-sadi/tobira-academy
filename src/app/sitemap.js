export default function sitemap() {
  const baseUrl = "https://tobira-academy.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/student-visa-processing`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/university-admission-support`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/language-preparation`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/scholarship-assistance`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/accommodation-support`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/pre-departure-support`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/courses/japanese-language-n5`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/courses/japanese-language-n4`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}