import { whyUs } from "@/components/data/whyUs";
import ValueCard from "@/components/ui/ValueCard";

/**
 * Why Us Section
 * --------------
 * Builds trust and credibility with potential clients.
 */

export default function WhyUs() {
  return (
    <section
      aria-labelledby="why-us-heading"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            id="why-us-heading"
            className="text-3xl md:text-4xl font-extrabold text-gray-900"
          >
            Why Makovics Technologies
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We combine technical excellence with a deep understanding of
            business operations to deliver systems that truly work.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {whyUs.map((item) => (
            <ValueCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
