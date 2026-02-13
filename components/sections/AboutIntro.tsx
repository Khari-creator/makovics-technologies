"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Target,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";

export default function AboutIntro() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid gap-16 lg:grid-cols-2 items-start">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
            About Us
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Building the Future,
            <br />
            <span className="text-blue-600">
              One Solution at a Time
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            At Makovics Technologies, we are passionate about leveraging
            technology to solve real-world problems. Based in Kenya, we help
            businesses of all sizes embrace digital transformation and stay
            competitive in an ever-evolving market.
          </p>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Our team combines technical expertise with creative thinking to
            deliver solutions that not only meet requirements but exceed
            expectations.
          </p>

          {/* BULLET POINTS */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              "Experienced team of developers and designers",
              "End-to-end project management",
              "Proven track record with diverse clients",
              "Ongoing support and maintenance",
              "Competitive and transparent pricing",
              "Commitment to deadlines",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* CARD */}
          <InfoCard
            icon={Target}
            title="Mission-Driven"
            description="We’re committed to delivering solutions that truly make a difference for our clients."
          />

          <InfoCard
            icon={Lightbulb}
            title="Innovation First"
            description="We stay ahead of technology trends to deliver modern, scalable, and future-ready systems."
          />

          <InfoCard
            icon={ShieldCheck}
            title="Quality Assured"
            description="Every project undergoes rigorous testing to ensure reliability, security, and excellence."
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------------------------------
   Reusable Info Card
---------------------------------------- */
function InfoCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-900">
          {title}
        </h3>
        <p className="mt-2 text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
