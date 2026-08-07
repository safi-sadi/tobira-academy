// export const courses = [
//   {
//     title: "Japanese Language N5",
//     slug: "japanese-language-n5",
//     level: "Beginner",
//     duration: "6 Months",
//     image: "/images/courses/n5.jpg",
//     description:
//       "Start your Japanese journey from scratch with our JLPT N5 preparation course.",
//   },
//   {
//     title: "Japanese Language N4",
//     slug: "japanese-language-n4",
//     level: "Intermediate",
//     duration: "6 Months",
//     image: "/images/courses/n4.jpg",
//     description:
//       "Advance your Japanese skills and prepare confidently for the JLPT N4 examination.",
//   },
// ];
import {
  BookOpen,
  Clock3,
  Users,
  FileCheck,
  Award,
} from "lucide-react";

const courses = [
  {
    id: "n5",

    title: "Japanese Language N5",

    level: "Beginner Level",

    route: "/courses/japanese-language-n5",

    image: "/images/courses/n5.jpg",

    duration: "6 Months",

    badge: "Most Popular",

    description:
      "Start your Japanese language journey with our JLPT N5 course. Learn essential vocabulary, grammar, speaking, listening, reading, and writing from experienced instructors in a supportive classroom environment.",

    features: [
      {
        icon: BookOpen,
        title: "Complete JLPT N5 Syllabus",
      },
      {
        icon: Users,
        title: "Small Interactive Classes",
      },
      {
        icon: FileCheck,
        title: "Weekly Mock Exams",
      },
      {
        icon: Award,
        title: "Course Completion Certificate",
      },
      {
        icon: Clock3,
        title: "Flexible Class Schedule",
      },
    ],
  },

  {
    id: "n4",

    title: "Japanese Language N4",

    level: "Intermediate Level",

    route: "/courses/japanese-language-n4",

    image: "/images/courses/n4.jpg",

    duration: "8 Months",

    badge: "Career Focused",

    description:
      "Advance your Japanese skills with our JLPT N4 preparation course. Improve grammar, vocabulary, conversation, comprehension, and exam techniques required for studying and working in Japan.",

    features: [
      {
        icon: BookOpen,
        title: "Complete JLPT N4 Curriculum",
      },
      {
        icon: Users,
        title: "Conversation Practice Sessions",
      },
      {
        icon: FileCheck,
        title: "Regular Practice Tests",
      },
      {
        icon: Award,
        title: "JLPT Exam Preparation",
      },
      {
        icon: Clock3,
        title: "Weekend & Evening Batches",
      },
    ],
  },
];

export default courses;