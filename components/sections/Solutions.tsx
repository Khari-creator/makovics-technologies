import { solutions } from "@/components/data/solutions";
import SolutionCard from "@/components/ui/SolutionCard";

/**
 * Software Solutions Section
 * --------------------------
 * Highlights enterprise and business systems built by the company.
 */

export default function Solutions() {
  return (
    <section
      aria-labelledby="solutions-heading"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            id="solutions-heading"
            className="text-3xl md:text-4xl font-extrabold text-gray-900"
          >
            Software Solutions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We design and build robust software systems tailored to real-world
            business operations across multiple industries.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid gap-10 sm:grid-cols-2">
          {solutions.map((solution) => (
            <SolutionCard
              key={solution.slug}
              title={solution.title}
              description={solution.description}
              slug={solution.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
