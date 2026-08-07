// import {
//   GraduationCap,
//   Languages,
//   Plane,
//   Home,
//   BadgeDollarSign,
//   Briefcase,
// } from "lucide-react";

// const services = [
//   {
//     icon: GraduationCap,
//     title: "University Admission",
//     description:
//       "Professional guidance for selecting and applying to top Japanese universities.",
//     color: "from-red-500 to-orange-500",
//   },
//   {
//     icon: Languages,
//     title: "Japanese Language",
//     description:
//       "JLPT N5–N1 preparation with experienced instructors and practical learning.",
//     color: "from-blue-500 to-cyan-500",
//   },
//   {
//     icon: Plane,
//     title: "Student Visa",
//     description:
//       "Complete visa documentation and application support with high success rates.",
//     color: "from-green-500 to-emerald-500",
//   },
//   {
//     icon: Home,
//     title: "Accommodation",
//     description:
//       "Safe and affordable housing arrangements before your arrival in Japan.",
//     color: "from-purple-500 to-pink-500",
//   },
//   {
//     icon: BadgeDollarSign,
//     title: "Scholarship Guidance",
//     description:
//       "Explore scholarship opportunities and maximize your chances of financial aid.",
//     color: "from-yellow-500 to-orange-500",
//   },
//   {
//     icon: Briefcase,
//     title: "Career Support",
//     description:
//       "Career counseling and part-time job guidance for students studying in Japan.",
//     color: "from-indigo-500 to-violet-500",
//   },
// ];

// export default services;

import {
  GraduationCap,
  FileCheck,
  Languages,
  School,
  Plane,
  BriefcaseBusiness,
} from "lucide-react";

export const services = [
  {
    number: "01",
    icon: GraduationCap,
    title: "University Admission",
    description:
      "Get professional guidance for admission into top Japanese universities and colleges with complete document support.",
    href: "/services/university-admission",
  },

  {
    number: "02",
    icon: FileCheck,
    title: "Visa Processing",
    description:
      "From documentation to embassy preparation, we ensure a smooth and successful student visa process.",
    href: "/services/visa-processing",
  },

  {
    number: "03",
    icon: Languages,
    title: "Japanese Language",
    description:
      "JLPT-focused Japanese language programs from N5 to N1 taught by experienced instructors.",
    href: "/courses",
  },

  {
    number: "04",
    icon: School,
    title: "University Selection",
    description:
      "Choose the right university based on your academic profile, budget, and future career goals.",
    href: "/services/university-selection",
  },

  {
    number: "05",
    icon: Plane,
    title: "Pre Departure",
    description:
      "Receive complete guidance before flying to Japan, including accommodation and travel preparation.",
    href: "/services/pre-departure",
  },

  {
    number: "06",
    icon: BriefcaseBusiness,
    title: "Career Guidance",
    description:
      "Expert counseling for higher education, internships, and long-term career opportunities in Japan.",
    href: "/services/career-guidance",
  },
];