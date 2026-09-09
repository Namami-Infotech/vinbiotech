"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import ProductGrid from "@/components/ProductGrid";
import { categories, products } from "@/data/products";

export default function ProductsCatalog() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "all";

  const filtered = useMemo(() => {
    if (category === "all") return products;
    return products.filter((product) => product.categorySlug === category);
  }, [category]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <FilterChip href="/products" active={category === "all"}>
          All Products
        </FilterChip>
        {categories.map((item) => (
          <FilterChip
            key={item.id}
            href={`/products?category=${item.slug}`}
            active={category === item.slug}
          >
            {item.shortName}
          </FilterChip>
        ))}
      </div>

      <div className="mt-8">
        <ProductGrid products={filtered} />
      </div>
    </div>
  );
}

function FilterChip({ href, active, children }) {
  return (
    <Link
      href={href}
      className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition ${
        active
          ? "border-primary bg-primary text-white"
          : "border-border bg-white text-muted hover:border-primary hover:text-primary"
      }`}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
