import { services } from "@/components/data/services";
import ServiceCard from "@/components/ui/ServiceCard";

/**
 * Services Section
 * ----------------
 * Displays core services offered by the company.
 */

export default function Services() {
  return (
    <section
      aria-labelledby="services-heading"
      className="bg-gray-50 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-extrabold text-gray-900"
          >
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We provide end-to-end digital services that help businesses
            innovate, scale, and operate more efficiently.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
