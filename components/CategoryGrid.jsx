"use client";

import CategoryCard from "@/components/CategoryCard";

export default function CategoryGrid({ categories }) {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Catalogue</span>
          <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
            Our Product Categories
          </h2>
          <p className="mt-4 text-muted">
            A focused range of medical, healthcare, hygiene and disposable products for
            professional buyers.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
