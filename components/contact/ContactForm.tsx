"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gray-50 rounded-2xl border border-gray-200 p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);

        // Backend/API integration goes here later
        setTimeout(() => setLoading(false), 1200);
      }}
    >
      <h2 className="text-2xl font-bold text-gray-900">
        Start a Conversation
      </h2>

      <p className="mt-2 text-gray-600">
        Fill in the form below and we’ll respond within one business day.
      </p>

      <div className="mt-8 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            required
            type="text"
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            required
            type="email"
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Service of Interest
          </label>
          <select
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option>Software Development</option>
            <option>Web Design & Development</option>
            <option>Mobile App Development</option>
            <option>POS / Business System</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            required
            rows={4}
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 transition disabled:opacity-70"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>
    </motion.form>
  );
}
