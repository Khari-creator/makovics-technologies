"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const products = [
  {
    title: "Point of Sale (POS)",
    description:
      "A complete sales, inventory, and reporting system for retail and wholesale businesses.",
    features: ["Inventory Tracking", "Sales Reports", "User Roles", "Receipts"],
    price: "From KES 50,000",
    href: "/solutions/pos",
  },
  {
    title: "School Management System",
    description:
      "Manage students, teachers, exams, fees, and communication in one centralized platform.",
    features: ["Student Records", "Fees Management", "Exams & Results", "SMS Alerts"],
    price: "From KES 70,000",
    href: "/solutions/school-management-system",
  },
  {
    title: "Hospital Management System",
    description:
      "Digitize patient records, appointments, billing, and staff operations.",
    features: ["Patient Records", "Appointments", "Billing", "Pharmacy"],
    price: "From KES 60,000",
    href: "/solutions/hospital-management-system",
  },
  {
    title: "HR Management System",
    description:
      "Streamline employee records, payroll, leave, and performance management.",
    features: ["Employee Records", "Payroll", "Leave Management", "Reports"],
    price: "From KES 50,000",
    href: "/solutions/hr-management-system",
  },
];

export default function ShopPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Ready-to-Use Software Solutions
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose from our professionally built software systems designed to scale
          with your business.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition bg-white flex flex-col"
          >
            <h3 className="text-xl font-bold mb-2">{product.title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{product.description}</p>

            <ul className="text-sm text-gray-700 mb-6 space-y-2">
              {product.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>

            <div className="mt-auto">
              <p className="font-semibold mb-4 text-blue-600">{product.price}</p>

              <Link
                href={product.href}
                className="block text-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

