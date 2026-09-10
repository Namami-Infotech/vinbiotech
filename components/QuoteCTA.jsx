"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function QuoteCTA() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[1.75rem] border border-primary/15 bg-gradient-to-br from-primary via-primary to-primary-dark px-6 py-12 text-white shadow-[0_24px_60px_rgba(12,107,122,0.28)] sm:px-10 sm:py-14 lg:px-14"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight !text-white sm:text-4xl">
              Looking for Medical Products in Bulk?
            </h2>
            <p className="mt-4 text-base leading-relaxed !text-white/90 sm:text-lg">
              Tell us what you need and our team will help you with product
              information, availability and bulk requirements.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold !text-primary transition hover:bg-primary-soft"
              >
                Request a Quote
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="focus-ring inline-flex items-center rounded-full border border-white/40 px-5 py-3 text-sm font-semibold !text-white transition hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
