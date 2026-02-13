"use client";

import { motion } from "framer-motion";
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

import { services } from "@/components/data/services";
import ServiceCard from "@/components/ui/ServiceCard";

/**
 * Maps service titles to Lucide icons.
 */
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

export default function HomeServices() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our Core Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We design, build, and maintain digital solutions that help
            businesses scale with confidence.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
