import ContactForm from "@/components/contact/ContactForm";

/**
 * Contact Page
 * ----------------
 * Business inquiry and consultation page
 */

export default function ContactPage() {
  return (
    <main>
      {/* Page Intro */}
      <section className="bg-gray-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Contact Us
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
            Tell us about your project, business challenge, or idea.
            Our team will review your request and get back to you promptly.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid gap-16 lg:grid-cols-2">
          
          {/* Form */}
          <ContactForm />

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Reach Us Directly
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Prefer direct communication? You can reach us through the
              channels below. We are available during standard business hours.
            </p>

            <ul className="mt-8 space-y-4 text-gray-700">
              <li>
                <strong>Email:</strong> info@makovicstechnologies.com
              </li>
              <li>
                <strong>Phone:</strong> +254 708500398
              </li>
              <li>
                <strong>phone:</strong> +254 719648585
              </li>
              <li>
                <strong>Location:</strong> Nairobi, Kenya
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

