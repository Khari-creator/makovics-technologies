import ServicesList from "@/components/sections/ServicesList";
import CallToAction from "@/components/sections/CallToAction";

/**
 * Services Page
 * --------------------------------
 * Detailed overview of Makovics Technologies' core services.
 */

export default function ServicesPage() {
  return (
    <main>
      {/* Page Intro */}
      <section className="bg-gray-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Our Services
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
            We deliver end-to-end digital services focused on building secure,
            scalable, and high-performance systems that solve real business
            problems.
          </p>
        </div>
      </section>

      {/* Services Breakdown */}
      <ServicesList />

      {/* Page CTA */}
      <CallToAction />
    </main>
  );
}
