"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  Icon: LucideIcon;
}

const testimonials: Testimonial[] = [
  {
    name: "Grace Mwangi",
    role: "Operations Manager",
    company: "Nairobi Logistics",
    quote:
      "Their systems streamlined our daily operations and reduced manual work by half.",
    Icon: TrendingUp,
  },
  {
    name: "Peter Otieno",
    role: "CTO",
    company: "MedCare Clinics",
    quote:
      "Rock-solid integrations and dependable support. Our workflows are now seamless.",
    Icon: ShieldCheck,
  },
  {
    name: "Aisha Noor",
    role: "Founder",
    company: "EduSmart",
    quote:
      "A great partner with clear communication and high-quality delivery.",
    Icon: BadgeCheck,
  },
  {
    name: "James Kariuki",
    role: "Head of Growth",
    company: "RetailHub",
    quote:
      "The team delivered a fast, modern experience that our customers love.",
    Icon: Sparkles,
  },
  {
    name: "Esther Wambui",
    role: "HR Lead",
    company: "PeopleFirst",
    quote:
      "Reliable, professional, and truly invested in solving our problems.",
    Icon: UsersRound,
  },
];

export default function Testimonials() {
  const looped = [...testimonials, ...testimonials];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            What Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Trusted by growing teams across industries for dependable delivery and
            long-term support.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex w-max gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 28,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {looped.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="relative w-[320px] rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600">
                  <item.Icon className="h-6 w-6" />
                </div>

                <p className="text-gray-600 leading-relaxed">“{item.quote}”</p>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {item.role} · {item.company}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
