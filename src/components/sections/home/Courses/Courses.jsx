import Container from "@/components/ui/Container";
import { courses } from "@/data/courses";
import CourseCard from "./CourseCard";

export default function Courses() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[4px] text-red-600">
            Japanese Language Courses
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
            Learn Japanese From N5 To N1
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our JLPT-focused language programs are designed to help students
            build confidence, improve communication skills, and prepare for
            academic and professional opportunities in Japan.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl bg-red-600 p-10 text-center text-white">
          <h3 className="text-3xl font-bold">
            Ready to Start Learning Japanese?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-red-100">
            Join our JLPT preparation courses and take the first step toward
            studying or working in Japan.
          </p>

          <button className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-red-600 transition hover:bg-slate-100">
            Enroll Now
          </button>
        </div>
      </Container>
    </section>
  );
}