import Container from "@/components/ui/Container";
import { courses } from "@/data/courseData";
import CourseCard from "./CourseCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Courses() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-white via-red-50/30 to-white" />

      <Container>

        <div className="relative">

          {/* Heading */}

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-red-100 px-5 py-2 text-sm font-semibold text-red-600">
              Japanese Language Courses
            </span>

            <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
              Start Your Japanese Learning Journey
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Learn Japanese from experienced instructors through our
              structured JLPT preparation courses. Whether you're just
              beginning with N5 or advancing to N4, we'll help you build
              the language skills needed for studying and living in Japan.
            </p>

          </div>

          {/* Cards */}

          <div className="mt-20 grid gap-10 lg:grid-cols-2">

            {courses.map((course) => (

              <CourseCard
                key={course.slug}
                course={course}
              />

            ))}

          </div>

          {/* Bottom CTA */}

          <div className="mt-20 text-center">

            <Link
              href="/courses"
              className="
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-red-600
              px-8
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-red-700
              hover:shadow-xl
              hover:shadow-red-200
              "
            >
              View All Courses

              <ArrowRight size={20} />

            </Link>

          </div>

        </div>

      </Container>

    </section>
  );
}