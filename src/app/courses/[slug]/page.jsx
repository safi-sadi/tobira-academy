import { notFound } from "next/navigation";

import { courses } from "@/data/courseData";

import CourseHero from "@/components/sections/courseDetails/CourseHero";
import CourseOverview from "@/components/sections/courseDetails/CourseOverview";
import CourseCurriculum from "@/components/sections/courseDetails/CourseCurriculum";
import CourseExamDetails from "@/components/sections/courseDetails/CourseExamDetails";
import CourseFeatures from "@/components/sections/courseDetails/CourseFeatures";
import CourseFAQ from "@/components/sections/courseDetails/CourseFAQ";
import CourseCTA from "@/components/sections/courseDetails/CourseCTA";

export default async function CourseDetailsPage({ params }) {
  // ✅ Next.js 15/16 requires this
  const { slug } = await params;

  const course = courses.find(
    (course) => course.slug === slug
  );

  if (!course) {
    notFound();
  }

  return (
    <>
      <CourseHero course={course} />
      <CourseOverview course={course} />
      <CourseCurriculum course={course} />
      <CourseExamDetails course={course} />
      <CourseFeatures course={course} />
      <CourseFAQ course={course} />
      <CourseCTA course={course} />
    </>
  );
}