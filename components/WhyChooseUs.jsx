"use client";

import { motion } from "framer-motion";
import { Headphones, Layers, Package, ShieldCheck, Truck } from "lucide-react";

const icons = {
  ShieldCheck,
  Truck,
  Layers,
  Headset: Headphones,
  Package,
};

export default function WhyChooseUs({ items }) {
  return (
    <section id="why-vinbiotech" className="section-pad bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Why vinbiotech</span>
          <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
            Built for Professional B2B Healthcare Supply
          </h2>
          <p className="mt-4 text-muted">
            A practical partner for buyers who need quality products, clear
            communication and dependable fulfilment.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = icons[item.icon] || ShieldCheck;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="card-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                  <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
