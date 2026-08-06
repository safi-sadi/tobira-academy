"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Navlinks from "./Navlinks";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <Container>
        <div
          className="
          flex
          h-20
          items-center
          justify-between
          rounded-2xl
          border
          border-white/60
          bg-white/85
          px-6
          backdrop-blur-xl
          shadow-[0_10px_40px_rgba(0,0,0,.08)]
        "
        >
          {/* Logo */}

          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/logo.jpeg"
              alt="TW Education"
              width={170}
              height={60}
              priority
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}

          <Navlinks />

          {/* Right Side */}

          <div className="flex items-center gap-4">

            <Link
              href="/contact"
              className="
              hidden
              lg:inline-flex
              items-center
              rounded-full
              bg-gradient-to-r
              from-red-600
              to-red-500
              px-6
              py-3
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              hover:shadow-red-200
            "
            >
              Free Consultation
            </Link>

            {/* Mobile Menu */}

            <div className="lg:hidden">
              <MobileMenu
                open={open}
                setOpen={setOpen}
              />
            </div>

          </div>
        </div>
      </Container>
    </header>
  );
}