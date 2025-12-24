"use client";

import { motion, type Variants } from "framer-motion";
import { services } from "@/components/data/services";

/**
 * ServicesList
 * -------------
 * Animated service cards for the Services page.
 */

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ServicesList() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            What We Offer
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our services are designed to help organizations build reliable,
            scalable, and secure digital systems that support long-term growth.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group rounded-2xl bg-white border border-gray-200 p-8 shadow-sm transition hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6">
                <span className="text-sm font-semibold text-blue-600">
                  Learn more →
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
