"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Industries({ industries }) {
  return (
    <section className="section-pad bg-surface-alt/60">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="section-eyebrow">Industries We Serve</span>
          <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
            Supporting Healthcare Buyers Across Segments
          </h2>
          <p className="mt-4 text-muted">
            From clinical facilities to distribution partners, Vinboitech supports
            professional buyers with practical medical and hygiene product supply.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((industry, index) => (
            <motion.article
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group overflow-hidden rounded-[1.25rem] border border-border bg-white shadow-sm"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />
                <h3 className="absolute bottom-3 left-3 right-3 text-lg font-semibold text-white">
                  {industry.name}
                </h3>
              </div>
              <p className="p-4 text-sm leading-relaxed text-muted">{industry.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
