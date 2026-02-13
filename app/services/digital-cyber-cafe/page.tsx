import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Cyber Cafe Services",
  description:
    "Online applications, printing, scanning, CV writing, eLearning access, and cyber security awareness training.",
  alternates: {
    canonical: "/services/digital-cyber-cafe",
  },
};

const serviceItems = [
  "Online Application (eCitizen, KRA, NTSA, HELB, NSSF, SHIF)",
  "Passport and ID Application Assistance",
  "Job Applications and CV Writing",
  "Online Exams and eLearning Access",
  "Printing, Scanning, and Photocopying Services",
  "Cyber Security Awareness and Training",
];

export default function DigitalCyberCafePage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gray-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-300">
            Digital Cyber Cafe
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold">
            Fast, Reliable, and Secure Cyber Services
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
            We provide professional cyber cafe services for individuals and
            institutions, ensuring quick access to online services, printing,
            and digital support when you need it most.
          </p>
        </div>
      </section>

      {/* DETAILS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Our Cyber Cafe Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From online applications to security awareness training, we help
              you complete digital tasks efficiently and confidently.
            </p>
            <ul className="mt-8 space-y-4">
              {serviceItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <h3 className="text-xl font-semibold text-gray-900">
              Why Choose Our Cyber Cafe
            </h3>
            <ul className="mt-6 space-y-4 text-gray-600">
              <li>Dedicated support for applications and submissions.</li>
              <li>High-quality printing, scanning, and copying.</li>
              <li>Secure browsing guidance and cyber safety awareness.</li>
              <li>Comfortable, professional environment.</li>
            </ul>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
            >
              Talk to Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
