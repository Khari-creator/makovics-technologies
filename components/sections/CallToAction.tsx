/**
 * Call To Action Section
 * ----------------------
 * Final conversion section encouraging users
 * to initiate contact or request a consultation.
 */

export default function CallToAction() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative bg-gradient-to-br from-blue-600 to-blue-800 py-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2
          id="cta-heading"
          className="text-3xl md:text-4xl font-extrabold tracking-tight"
        >
          Let’s Build Something That Works
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-3xl mx-auto text-lg text-blue-100 leading-relaxed">
          Whether you need a custom software system, a scalable web platform,
          or a complete digital transformation, Makovics Technologies is ready
          to partner with you.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex justify-center items-center rounded-lg bg-white px-8 py-3 font-semibold text-blue-700 hover:bg-blue-100 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Request a Consultation
          </a>

          <a
            href="/services"
            className="inline-flex justify-center items-center rounded-lg border border-blue-200 px-8 py-3 font-semibold text-white hover:bg-blue-700 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            View Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
