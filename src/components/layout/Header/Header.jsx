// "use client";

// import { useState } from "react";

// import Image from "next/image";
// import Link from "next/link";

// import Container from "@/components/ui/Container";
// import Navlinks from "./Navlinks";
// import MobileMenu from "./MobileMenu";

// export default function Header() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="fixed inset-x-0 top-4 z-50">
//       <Container>
//         <div
//           className="
//           flex
//           h-20
//           items-center
//           justify-between
//           rounded-2xl
//           border
//           border-white/60
//           bg-white/85
//           px-6
//           backdrop-blur-xl
//           shadow-[0_10px_40px_rgba(0,0,0,.08)]
//         "
//         >
//           {/* Logo */}

//           <Link href="/" className="flex items-center">
//             <Image
//               src="/images/logo/logo.jpeg"
//               alt="TW Education"
//               width={170}
//               height={60}
//               priority
//               className="h-14 w-auto"
//             />
//           </Link>

//           {/* Desktop Navigation */}

//           <Navlinks />

//           {/* Right Side */}

//           <div className="flex items-center gap-4">

//             <Link
//               href="/contact"
//               className="
//               hidden
//               lg:inline-flex
//               items-center
//               rounded-full
//               bg-gradient-to-r
//               from-red-600
//               to-red-500
//               px-6
//               py-3
//               font-semibold
//               text-white
//               transition-all
//               duration-300
//               hover:-translate-y-1
//               hover:shadow-xl
//               hover:shadow-red-200
//             "
//             >
//               Free Consultation
//             </Link>

//             {/* Mobile Menu */}

//             <div className="lg:hidden">
//               <MobileMenu
//                 open={open}
//                 setOpen={setOpen}
//               />
//             </div>

//           </div>
//         </div>
//       </Container>
//     </header>
//   );
// }
"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Navlinks from "./Navlinks";
import MobileMenu from "./MobileMenu";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 40);

      if (currentScrollY < 80) {
        setHidden(false);
        lastScrollY = currentScrollY;
        return;
      }

      // Scrolling down
      if (currentScrollY > lastScrollY + 5) {
        setHidden(true);
        setOpen(false);
      }

      // Scrolling up
      else if (currentScrollY < lastScrollY - 5) {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: hidden ? -130 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        fixed
        inset-x-0
        top-4
        z-[100]
        px-3
        md:px-0
      "
    >
      <Container>

        <motion.div
          animate={{
            scale: scrolled ? 0.985 : 1,
          }}
          transition={{
            duration: 0.4,
          }}
          className="
            relative
            z-[100]

            flex
            h-[76px]
            items-center
            justify-between

            rounded-[22px]
            border
            border-white/50

            bg-white/[0.58]

            px-4
            md:px-5

            shadow-[0_8px_40px_rgba(15,23,42,0.08)]

            backdrop-blur-[24px]
            backdrop-saturate-150

            transition-all
            duration-500

            overflow-visible
          "
        >

          {/* ================= GLASS EFFECT ================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-white
              to-transparent
              opacity-90
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-[22px]
              bg-gradient-to-b
              from-white/30
              via-transparent
              to-white/5
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              top-1/2
              h-32
              w-32
              -translate-y-1/2
              rounded-full
              bg-red-500/10
              blur-3xl
            "
          />


          {/* ================= LOGO ================= */}

          <Link
            href="/"
            className="
              relative
              z-[110]
              flex
              shrink-0
              items-center
            "
          >
            <Image
              src="/images/logo/logo.jpeg"
              alt="TW Education"
              width={170}
              height={60}
              priority
              className="
                h-12
                w-auto
                object-contain

                transition-transform
                duration-300

                hover:scale-[1.02]

                md:h-14
              "
            />
          </Link>


          {/* ================= NAVIGATION ================= */}

          <div
            className="
              relative
              z-[120]
              flex
              items-center
            "
          >
            <Navlinks />
          </div>


          {/* ================= RIGHT SIDE ================= */}

          <div
            className="
              relative
              z-[110]
              flex
              items-center
              gap-3
            "
          >

            {/* CTA */}

            <Link
              href="/contact"
              className="
                group
                hidden
                items-center
                gap-2

                rounded-full

                border
                border-red-500/20

                bg-gradient-to-r
                from-red-600
                to-red-500

                px-5
                py-2.5

                text-sm
                font-semibold
                text-white

                shadow-[0_8px_25px_rgba(220,38,38,0.18)]

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:border-red-400/30
                hover:shadow-[0_12px_35px_rgba(220,38,38,0.28)]

                lg:inline-flex
              "
            >
              Free Consultation

              <ArrowUpRight
                size={15}
                className="
                  transition-transform
                  duration-300

                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>


            {/* Mobile */}

            <div className="lg:hidden">
              <MobileMenu
                open={open}
                setOpen={setOpen}
              />
            </div>

          </div>

        </motion.div>

      </Container>
    </motion.header>
  );
}