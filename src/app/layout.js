
// import { Inter, Poppins } from "next/font/google";
// import Script from "next/script";

// import "./globals.css";
// import Header from "@/components/layout/Header/Header";
// import Footer from "@/components/layout/Footer/Footer";
// import LanguageSwitcher from "@/components/LanguageSwitcher";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

// const poppins = Poppins({
//   subsets: ["latin"],
//   variable: "--font-poppins",
//   weight: ["300", "400", "500", "600", "700"],
// });

// export const metadata = {
//   metadataBase: new URL("https://tobira-academy.vercel.app"),

//   verification: {
//     google: "qS1Z3lJzKhLCtaKrRTAwAqLFEQ-ubit6C1yrUkK3_mQ",
//   },

//   title: {
//     default: "Tobira Language Academy | Study in Japan from Bangladesh",
//     template: "%s | Tobira Language Academy",
//   },
//   description:
//     "Tobira Language Academy is a trusted study abroad consultancy in Bangladesh helping students study in Japan through Japanese language courses, university admission, student visa processing, scholarships, and career guidance.",

//   keywords: [
//     "Study in Japan Bangladesh",
//     "Tobira Language Academy",
//     "Japanese Language Course Bangladesh",
//     "JLPT Course Bangladesh",
//     "Japan Student Visa",
//     "Japan Scholarship",
//     "Study Abroad Consultancy Bangladesh",
//     "Japan University Admission",
//     "Study in Japan Consultancy",
//     "Japanese Language Institute",
//     "Tobira",
//   ],

//   authors: [{ name: "Tobira Language Academy" }],
//   creator: "Tobira Language Academy",
//   publisher: "Tobira Language Academy",

//   robots: {
//     index: true,
//     follow: true,
//     nocache: false,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },

//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://tobira-academy.vercel.app",
//     siteName: "Tobira Language Academy",
//     title: "Tobira Language Academy | Study in Japan from Bangladesh",
//     description:
//       "Japanese language courses, university admission, student visa and scholarship guidance for Bangladeshi students.",
//     images: [
//       {
//         url: "/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Tobira Language Academy - Study in Japan",
//       },
//     ],
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "Tobira Language Academy | Study in Japan",
//     description:
//       "Your trusted consultancy for studying in Japan from Bangladesh.",
//     images: ["/og-image.jpg"],
//   },

//   icons: {
//     icon: "images/logo/logo.jpeg",
//     apple: "/apple-touch-icon.png",
//   },
// };



// export default function RootLayout({ children }) {
//   return (
//     <html
//       lang="en"
//       className={`${inter.variable} ${poppins.variable}`}
//       suppressHydrationWarning
//     >
//       <body className="font-sans bg-white text-gray-900 overflow-x-hidden">

//         <div id="google_translate_element" className="hidden"></div>

//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@graph": [
//                 {
//                   "@type": "EducationalOrganization",
//                   "@id": "https://tobira-academy.vercel.app/#organization",

//                   name: "Tobira Language Academy",

//                   alternateName: "Tobira Academy",

//                   url: "https://tobira-academy.vercel.app",

//                   logo: "https://tobira-academy.vercel.app/logo.png",

//                   image: "https://tobira-academy.vercel.app/og-image.jpg",

//                   description:
//                     "Tobira Language Academy is a Japanese language academy and study abroad consultancy in Bangladesh helping students study in Japan through JLPT preparation, university admission, scholarships, and student visa guidance.",

//                   email: "info@tobira-academy.com", // নিজের email বসাও

//                   telephone: "+8801XXXXXXXXX", // নিজের ফোন নাম্বার বসাও

//                   areaServed: {
//                     "@type": "Country",
//                     name: "Bangladesh",
//                   },

//                   knowsAbout: [
//                     "Study in Japan",
//                     "Japanese Language",
//                     "JLPT Preparation",
//                     "Student Visa",
//                     "Scholarships in Japan",
//                     "University Admission in Japan",
//                   ],

//                   sameAs: [
//                     "https://facebook.com/yourpage",
//                     "https://instagram.com/yourpage",
//                     "https://youtube.com/@yourchannel",
//                   ],
//                 },

//                 {
//                   "@type": "WebSite",
//                   "@id": "https://tobira-academy.vercel.app/#website",

//                   url: "https://tobira-academy.vercel.app",

//                   name: "Tobira Language Academy",

//                   publisher: {
//                     "@id":
//                       "https://tobira-academy.vercel.app/#organization",
//                   },

//                   inLanguage: "en",
//                 },
//               ],
//             }),
//           }}
//         />

//         <Header />

//         {children}

//         <Footer />

//         {/* Floating Language Button */}
//         <LanguageSwitcher />

//         {/* Google Translate Initialization */}
//         <Script id="google-translate-init" strategy="afterInteractive">
//           {`
//             function googleTranslateElementInit() {
//               new google.translate.TranslateElement(
//                 {
//                   pageLanguage: "en",
//                   includedLanguages: "en,bn,ja",
//                   autoDisplay: false
//                 },
//                 "google_translate_element"
//               );
//             }

//             window.googleTranslateElementInit = googleTranslateElementInit;
//           `}
//         </Script>

//         {/* Google Translate Script */}
//         <Script
//           src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
//           strategy="afterInteractive"
//         />
//       </body>
//     </html>
//   );
// }


import { Inter, Poppins } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {

  metadataBase: new URL("https://www.tobirajla.com"),

  verification: {
    google: "MButaeMGyot9hBdhAHAO5HueFJn4t1WVi9F_ydwX_Eo",
  },

  title: {
    default: "Tobira Language Academy | Study in Japan from Bangladesh",
    template: "%s | Tobira Language Academy",
  },

 
  description:
    "Tobira Language Academy is a trusted study abroad consultancy in Bangladesh helping students study in Japan through Japanese language courses, university admission, student visa processing, scholarships, and career guidance.",


  keywords: [
    "Study in Japan Bangladesh",
    "Tobira Language Academy",
    "Japanese Language Course Bangladesh",
    "JLPT Course Bangladesh",
    "Japan Student Visa",
    "Japan Scholarship",
    "Study Abroad Consultancy Bangladesh",
    "Japan University Admission",
    "Study in Japan Consultancy",
    "Japanese Language Institute",
    "Tobira",
    "tobira",
  ],

  authors: [{ name: "Tobira Language Academy" }],
  creator: "Tobira Language Academy",
  publisher: "Tobira Language Academy",

  // =========================================================
  // ROBOTS
  // =========================================================
  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // =========================================================
  // OPEN GRAPH
  // =========================================================
  openGraph: {
    type: "website",
    locale: "en_US",

    url: "https://www.tobirajla.com",

    siteName: "Tobira Language Academy",

    title: "Tobira Language Academy | Study in Japan from Bangladesh",

    description:
      "Japanese language courses, university admission, student visa and scholarship guidance for Bangladeshi students.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tobira Language Academy - Study in Japan",
      },
    ],
  },

  // =========================================================
  // TWITTER / X
  // =========================================================
  twitter: {
    card: "summary_large_image",

    title: "Tobira Language Academy | Study in Japan",

    description:
      "Your trusted consultancy for studying in Japan from Bangladesh.",

    images: ["/og-image.jpg"],
  },

  // =========================================================
  // FAVICON / ICONS
  // =========================================================
  icons: {
    icon: "/images/logo/logo.jpeg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans bg-white text-gray-900 overflow-x-hidden">

        {/* =====================================================
            GOOGLE TRANSLATE CONTAINER
        ====================================================== */}
        <div id="google_translate_element" className="hidden"></div>

        {/* =====================================================
            ORGANIZATION + WEBSITE JSON-LD
        ====================================================== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@graph": [
                {
                  "@type": "EducationalOrganization",

                  "@id":
                    "https://www.tobirajla.com/#organization",

                  name: "Tobira Language Academy",

                  alternateName: "Tobira Academy",

                  url: "https://www.tobirajla.com",

                  logo: "https://www.tobirajla.com/logo.png",

                  image: "https://www.tobirajla.com/og-image.jpg",

                  description:
                    "Tobira Language Academy is a Japanese language academy and study abroad consultancy in Bangladesh helping students study in Japan through JLPT preparation, university admission, scholarships, and student visa guidance.",

                  areaServed: {
                    "@type": "Country",
                    name: "Bangladesh",
                  },

                  knowsAbout: [
                    "Study in Japan",
                    "Japanese Language",
                    "JLPT Preparation",
                    "Student Visa",
                    "Scholarships in Japan",
                    "University Admission in Japan",
                  ],
                },

                {
                  "@type": "WebSite",

                  "@id":
                    "https://www.tobirajla.com/#website",

                  url: "https://www.tobirajla.com",

                  name: "Tobira Language Academy",

                  publisher: {
                    "@id":
                      "https://www.tobirajla.com/#organization",
                  },

                  inLanguage: "en",
                },
              ],
            }),
          }}
        />

        {/* =====================================================
            HEADER
        ====================================================== */}
        <Header />

        {/* =====================================================
            PAGE CONTENT
        ====================================================== */}
        {children}

        {/* =====================================================
            FOOTER
        ====================================================== */}
        <Footer />

        {/* =====================================================
            FLOATING LANGUAGE BUTTON
        ====================================================== */}
        <LanguageSwitcher />

        {/* =====================================================
            GOOGLE TRANSLATE INITIALIZATION
        ====================================================== */}
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                {
                  pageLanguage: "en",
                  includedLanguages: "en,bn,ja",
                  autoDisplay: false
                },
                "google_translate_element"
              );
            }

            window.googleTranslateElementInit =
              googleTranslateElementInit;
          `}
        </Script>

        {/* =====================================================
            GOOGLE TRANSLATE SCRIPT
        ====================================================== */}
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />

      </body>
    </html>
  );
}

