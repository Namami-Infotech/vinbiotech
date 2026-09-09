"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const floatItems = [
  {
    src: "/images/products/masks/main.png",
    alt: "3-ply surgical masks",
    className: "left-[-6%] top-[8%] w-[28%] sm:left-[-4%] sm:w-[22%]",
    delay: 0.2,
  },
  {
    src: "/images/products/gloves/main.png",
    alt: "Medical gloves",
    className: "right-[-4%] top-[2%] w-[26%] sm:right-[-2%] sm:w-[20%]",
    delay: 0.35,
  },
  {
    src: "/images/products/urine-container/main.png",
    alt: "Urine specimen container",
    className: "bottom-[6%] left-[-2%] w-[24%] sm:bottom-[10%] sm:w-[18%]",
    delay: 0.45,
  },
  {
    src: "/images/products/gel-packs/main.png",
    alt: "Gel packs",
    className: "bottom-[4%] right-[-3%] w-[25%] sm:bottom-[8%] sm:w-[19%]",
    delay: 0.55,
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden gradient-mesh pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-20 top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
          animate={{ x: [0, 24, 0], y: [0, 16, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 top-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, 22, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl"
        >
          <span className="section-eyebrow">Trusted Healthcare Product Supplier</span>
          <h1 className="mt-5 text-[2.15rem] font-bold leading-[1.12] text-ink sm:text-5xl lg:text-[3.35rem]">
            Reliable Medical &amp; Healthcare Products for Every Need
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            Vinboitech supplies quality medical, healthcare, hygiene and disposable
            products to hospitals, clinics, distributors and businesses.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/products" className="btn-primary focus-ring">
              Explore Products
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/contact" className="btn-secondary focus-ring">
              Request a Quote
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-white/70 bg-white shadow-[0_30px_60px_rgba(12,107,122,0.14)]">
            <Image
              src="/images/hero/hero-medical-products.png"
              alt="Professionally arranged medical supplies including masks, gloves, containers, bandages and gel packs"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 560px"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10" />
          </div>

          {floatItems.map((item) => (
            <motion.div
              key={item.alt}
              className={`absolute overflow-hidden rounded-2xl border border-white/80 bg-white/90 p-1.5 shadow-lg backdrop-blur-sm ${item.className}`}
              initial={{ opacity: 0, y: 16, scale: 0.94 }}
              animate={{ opacity: 1, y: [0, -8, 0], scale: 1 }}
              transition={{
                opacity: { duration: 0.5, delay: item.delay },
                scale: { duration: 0.5, delay: item.delay },
                y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: item.delay },
              }}
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                <Image src={item.src} alt={item.alt} fill sizes="120px" className="object-cover" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
