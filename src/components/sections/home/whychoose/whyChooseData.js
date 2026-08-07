import {
  GraduationCap,
  Users,
  BadgeCheck,
  Plane,
  Briefcase,
  BookOpen,
} from "lucide-react";

const whyChooseData = [
  {
    id: 1,

    size: "large",

    icon: GraduationCap,

    number: 500,

    suffix: "+",

    title: "Students Guided",

    description:
      "Helping ambitious students achieve their dream of studying and building careers in Japan.",

    color: "from-red-500 to-red-600",
  },

  {
    id: 2,

    size: "small",

    icon: BadgeCheck,

    number: 98,

    suffix: "%",

    title: "Success Rate",

    description:
      "Outstanding visa and JLPT success through expert preparation.",

    color: "from-orange-500 to-red-500",
  },

  {
    id: 3,

    size: "small",

    icon: Users,

    title: "Certified Teachers",

    description:
      "Experienced instructors delivering practical Japanese language education.",

    color: "from-red-500 to-orange-500",
  },

  {
    id: 4,

    size: "medium",

    icon: Plane,

    title: "Study in Japan",

    description:
      "From consultation to university admission and visa support, we guide every step.",

    color: "from-red-600 to-pink-500",
  },

  {
    id: 5,

    size: "wide",

    icon: Briefcase,

    title: "Career & Visa Support",

    description:
      "Resume building, interview preparation, visa processing and career guidance for students planning their future in Japan.",

    color: "from-orange-500 to-red-600",
  },

  {
    id: 6,

    size: "small",

    icon: BookOpen,

    title: "JLPT Preparation",

    description:
      "Structured learning for N5 & N4 with mock exams and continuous assessment.",

    color: "from-red-500 to-orange-400",
  },
];

export default whyChooseData;