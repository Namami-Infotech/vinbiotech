"use client";

import ProductCard from "@/components/ProductCard";

export default function FeaturedProducts({ products }) {
  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="section-eyebrow">Featured</span>
            <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
              Featured Products
            </h2>
            <p className="mt-3 text-muted">
              Popular items from our medical and healthcare range. Request a quote for
              pricing, availability and bulk supply.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
