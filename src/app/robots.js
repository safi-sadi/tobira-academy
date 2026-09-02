export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    sitemap: "https://www.tobirajla.com/sitemap.xml",
  };
}