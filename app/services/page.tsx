import {
  Code2,
  Globe,
  Smartphone,
  Plug,
  Download,
  Shield,
  Users,
  Server,
  ShieldCheck,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";

const capabilities = [
  {
    title: "Software Development",
    description:
      "Custom software solutions designed to automate operations, improve efficiency, and support business growth.",
    tags: ["Custom Systems", "Enterprise Software", "Scalable Apps"],
    icon: Code2,
  },
  {
    title: "Web Design & Development",
    description:
      "Modern, responsive, and performance-optimized websites and web applications built with cutting-edge technologies.",
    tags: ["Responsive Design", "UI/UX", "E-commerce"],
    icon: Globe,
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications delivering seamless experiences on Android and iOS.",
    tags: ["Flutter", "React Native", "iOS & Android"],
    icon: Smartphone,
  },
  {
    title: "API Integrations",
    description:
      "MPESA API integrations and ETIMS API integrations for seamless payments and compliance workflows.",
    tags: ["MPESA API Integrations", "ETIMS API Integrations"],
    icon: Plug,
  },
  {
    title: "Software Installation",
    description:
      "Professional software deployment, configuration, and onboarding to ensure smooth operations.",
    tags: ["System Setup", "Configuration", "Training"],
    icon: Download,
  },
  {
    title: "CCTV Installation",
    description:
      "Comprehensive surveillance solutions for homes and businesses with modern monitoring systems.",
    tags: ["HD Cameras", "Remote Monitoring", "24/7 Support"],
    icon: Shield,
  },
  {
    title: "IT Consultancy",
    description:
      "Expert guidance to help businesses make informed technology decisions and scale confidently.",
    tags: ["Tech Strategy", "Digital Transformation", "Process Optimization"],
    icon: Users,
  },
  {
    title: "IT Infrastructure Audit",
    description:
      "Comprehensive audits to assess infrastructure health, performance, and readiness.",
    tags: ["Network Review", "Risk Assessment", "Optimization"],
    icon: Server,
  },
  {
    title: "Security Penetration Testing",
    description:
      "Proactive testing to identify vulnerabilities and strengthen your security posture.",
    tags: ["Vulnerability Testing", "Threat Analysis", "Remediation Guidance"],
    icon: ShieldCheck,
  },
  {
    title: "System Quality Assurance",
    description:
      "Rigorous QA to ensure systems are stable, reliable, and production-ready.",
    tags: ["Functional Testing", "Performance", "Release Validation"],
    icon: CheckCircle2,
  },
  {
    title: "Bulk SMS",
    description:
      "Scalable bulk messaging for alerts, notifications, and customer engagement.",
    tags: ["OTP & Alerts", "Campaigns", "Delivery Reports"],
    icon: MessageSquare,
  },
];

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore our services including software development, web and mobile solutions, API integrations, audits, security testing, QA, and bulk SMS.",
  alternates: {
    canonical: "/services",
  },
};


export default function ServicesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gray-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Our Services
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
            We design, build, and deploy technology solutions that help
            businesses scale, automate, and compete in the digital era.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Technology Driven. Business Focused.
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Makovics Technologies is a technology solutions company focused on
            delivering reliable software systems, modern websites, and digital
            infrastructure for growing businesses, institutions, and startups.
          </p>
        </div>
      </section>

      {/* CAPABILITIES GRID */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 mb-6">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Commitment
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            We believe in building long-term partnerships by delivering secure,
            scalable, and user-focused solutions that solve real business
            problems.
          </p>
        </div>

      </section>
    </main>
  );
}
