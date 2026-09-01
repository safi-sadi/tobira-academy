// import { Inter, Poppins } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/layout/Header/Header";
// // import Navbar from "@/components/layout/Navbar/Navbar";
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
//   title: {
//     default: "TW Education",
//     template: "%s | TW Education",
//   },
//   description:
//     "Study abroad consultancy helping students achieve their international education goals.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html
//       lang="en"
//       className={`${inter.variable} ${poppins.variable}`}
//     >
//       <body className="font-sans bg-white text-gray-900 overflow-x-hidden">
//         <Header />
//         {children}
//         <Footer />
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
  ],

  authors: [{ name: "Tobira Language Academy" }],
  creator: "Tobira Language Academy",
  publisher: "Tobira Language Academy",

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

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tobira-academy.vercel.app",
    siteName: "TW Education",
    title: "TW Education | Study in Japan from Bangladesh",
    description:
      "Japanese language courses, university admission, student visa and scholarship guidance for Bangladeshi students.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TW Education - Study in Japan",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "TW Education | Study in Japan",
    description:
      "Your trusted consultancy for studying in Japan from Bangladesh.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
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

        <div id="google_translate_element" className="hidden"></div>

        <Header />

        {children}

        <Footer />

        {/* Floating Language Button */}
        <LanguageSwitcher />

        {/* Google Translate Initialization */}
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

            window.googleTranslateElementInit = googleTranslateElementInit;
          `}
        </Script>

        {/* Google Translate Script */}
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}