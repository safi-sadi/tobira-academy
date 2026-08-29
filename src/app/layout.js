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
import Script from "next/script"; // 👈 এটা add করো

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
    default: "TW Education",
    template: "%s | TW Education",
  },
  description:
    "Study abroad consultancy helping students achieve their international education goals.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans bg-white text-gray-900 overflow-x-hidden">

        {/* Hidden Google Translate Container */}
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