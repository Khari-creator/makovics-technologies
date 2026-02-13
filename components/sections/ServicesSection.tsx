"use client";

import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/components/data/services";
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
  type LucideIcon,
} from "lucide-react";

const serviceIcons: Record<string, LucideIcon> = {
  "Software Development": Code2,
  "Web Design & Development": Globe,
  "Mobile App Development": Smartphone,
  "API Integrations": Plug,
  "Software Installation": Download,
  "CCTV Installation": Shield,
  "IT Consultancy": Users,
  "IT Infrastructure Audit": Server,
  "Security Penetration Testing": ShieldCheck,
  "System Quality Assurance": CheckCircle2,
  "Bulk SMS": MessageSquare,
};

export default function ServicesSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We provide end-to-end digital services that help businesses
            innovate, scale, and operate more efficiently.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.title];
            return (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                tags={service.tags}
                Icon={Icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
