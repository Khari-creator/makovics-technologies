"use client";

import { motion } from "framer-motion";

/**
 * Hero Section – Makovics Technologies
 * -----------------------------------
 * Purpose:
 * - Establish trust & authority
 * - Clearly communicate value
 * - Drive conversion (consultation / solutions)
 */

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 text-center">

        {/* Headline */}
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
        >
          Building Powerful
          <br />
          <span className="text-blue-500">Digital Solutions</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed"
        >
          Makovics Technologies is a software company delivering scalable
          systems, enterprise applications, modern websites, and mobile
          solutions designed to support growth, efficiency, and innovation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="/contact"
            className="inline-flex justify-center items-center rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Request a Consultation
          </a>

          <a
            href="/solutions"
            className="inline-flex justify-center items-center rounded-lg border border-gray-600 px-8 py-3 font-semibold text-gray-200 hover:border-gray-400 hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500"
          >
            View Our Solutions
          </a>
        </motion.div>
      </div>

      {/* Background Accent */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_60%)]"
      />
    </section>
  );
}
