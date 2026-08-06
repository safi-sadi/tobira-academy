import {
  Home,
  Info,
  Briefcase,
  Phone,
  GraduationCap,
  FileCheck,
  Landmark,
  Languages,
  HomeIcon,
  Plane,
} from "lucide-react";

export const navLinks = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "About",
    href: "/about",
    icon: Info,
  },
  {
    title: "Services",
    href: "/services",
    icon: Briefcase,
    dropdown: true,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: Phone,
  },
];

export const serviceLinks = [
  {
    title: "Student Visa Processing",
    href: "/services/student-visa-processing",
    description: "Professional visa guidance",
    icon: FileCheck,
  },
  {
    title: "University Admission",
    href: "/services/university-admission",
    description: "Admission to Japanese universities",
    icon: GraduationCap,
  },
  {
    title: "Scholarship Guidance",
    href: "/services/scholarship-guidance",
    description: "Funding opportunities",
    icon: Landmark,
  },
  {
    title: "Japanese Language",
    href: "/services/japanese-language",
    description: "JLPT & language schools",
    icon: Languages,
  },
  {
    title: "Accommodation Support",
    href: "/services/accommodation-support",
    description: "Housing & dormitory",
    icon: HomeIcon,
  },
  {
    title: "Pre Departure Support",
    href: "/services/pre-departure-support",
    description: "Travel & airport assistance",
    icon: Plane,
  },
];