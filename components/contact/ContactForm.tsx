"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const formAction =
    process.env.NEXT_PUBLIC_CONTACT_FORM_ACTION ||
    "https://makovics-technologies.vercel.app/api/contact";
  const fallbackRecipient =
    process.env.NEXT_PUBLIC_CONTACT_RECEIVER || "info@makovicstech.com";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      service: String(formData.get("service") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      if (formAction) {
        const res = await fetch(formAction, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error("Failed to send");
      } else {
        const subject = encodeURIComponent(
          `New Contact Request - ${payload.service || "General"}`
        );
        const body = encodeURIComponent(
          `Name: ${payload.name}\nEmail: ${payload.email}\nService: ${payload.service}\n\nMessage:\n${payload.message}`
        );
        window.location.href = `mailto:${fallbackRecipient}?subject=${subject}&body=${body}`;
      }

      setSuccess(true);
      form.reset();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gray-50 rounded-2xl border border-gray-200 p-8"
      onSubmit={handleSubmit}
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
            name="name"
            required
            type="text"
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            name="email"
            required
            type="email"
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Service of Interest
          </label>
          <select
            name="service"
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3"
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
            name="message"
            required
            rows={4}
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-70"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && (
          <p className="text-green-600 text-sm mt-2">
            Message sent successfully!
          </p>
        )}

        {error && (
          <p className="text-red-600 text-sm mt-2">
            {error}
          </p>
        )}
      </div>
    </motion.form>
  );
}
