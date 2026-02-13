import { solutions } from "@/components/data/solutions";
import SolutionLayout from "@/components/solutions/SolutionLayout";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry Solutions",
  description:
    "We provide tailored digital solutions for schools, hospitals, HR management, retail POS, and enterprise operations.",
  alternates: {
    canonical: "/solutions",
  },
};
export default function SolutionsPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="bg-gray-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Our Software Solutions
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
            Comprehensive software systems built to support businesses,
            institutions, and organizations across multiple industries.
          </p>
        </div>
      </section>

      {/* Render All Solutions */}
      {solutions.map((solution) => (
        <SolutionLayout
          key={solution.title}
          badge={solution.badge}
          title={solution.title}
          description={solution.description}
          features={solution.features}
        />
      ))}

    </main>
  );
}
