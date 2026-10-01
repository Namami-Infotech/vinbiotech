"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutPreview({ stats }) {
  return (
    <section className="section-pad bg-white">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-border shadow-[var(--shadow)]">
            <Image
              src="/images/about/supply-environment.png"
              alt="Modern healthcare medical supply environment"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-eyebrow">About Us</span>
          <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
            Healthcare Products You Can Rely On
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            vinbiotech focuses on supplying healthcare, medical, hygiene and
            disposable products with an emphasis on quality, reliability,
            consistent supply, professional service and customer satisfaction.
          </p>
          <p className="mt-3 text-muted leading-relaxed">
            We work with hospitals, clinics, distributors and businesses that
            need a clear, dependable B2B supply partner for everyday medical and
            hygiene requirements.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ stat, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="rounded-2xl border border-border bg-surface-alt/70 p-4"
    >
      <p className="text-lg font-semibold text-primary sm:text-xl">
        {stat.label}
      </p>
      <p className="mt-1 text-xs text-muted sm:text-sm">{stat.detail}</p>
    </motion.div>
  );
}
