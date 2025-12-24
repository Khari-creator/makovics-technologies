import Link from "next/link";
import CallToAction from "@/components/sections/CallToAction";

/**
 * Solutions Page
 * ----------------
 * Overview of enterprise software solutions offered
 * by Makovics Technologies.
 */

const solutions = [
  {
    title: "Point of Sale (POS) System",
    slug: "pos",
    description:
      "A complete sales, inventory, and reporting system designed for retail stores, supermarkets, and service businesses.",
  },
  {
    title: "HR Management System",
    slug: "hr",
    description:
      "A centralized platform for employee records, payroll, attendance tracking, and performance management.",
  },
  {
    title: "Hospital Management System",
    slug: "hospital",
    description:
      "An integrated system for patient records, appointments, billing, pharmacy, and medical workflows.",
  },
  {
    title: "School Management System",
    slug: "school",
    description:
      "A digital platform for student records, fees management, exams, staff, and parent communication.",
  },
];

export default function SolutionsPage() {
  return (
    <main>
      {/* Page Intro */}
      <section className="bg-gray-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Software Solutions
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
            Our solutions are built as scalable systems, not just applications.
            Each product is designed to solve operational challenges and support
            long-term growth.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {solutions.map((solution) => (
              <Link
                key={solution.slug}
                href={`/solutions/${solution.slug}`}
                className="block rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition"
              >
                <h2 className="text-2xl font-bold text-gray-900">
                  {solution.title}
                </h2>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {solution.description}
                </p>

                <div className="mt-6 text-blue-600 font-semibold">
                  View solution →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}

