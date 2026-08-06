import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header/Header";
// import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";

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
    >
      <body className="font-sans bg-white text-gray-900 overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}