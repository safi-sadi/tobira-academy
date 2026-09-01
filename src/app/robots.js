export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    sitemap: "https://tobira-academy.vercel.app/sitemap.xml",
  };
}