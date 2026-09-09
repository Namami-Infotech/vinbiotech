import ProductCard from "@/components/ProductCard";

export default function ProductGrid({ products }) {
  if (!products?.length) {
    return (
      <p className="rounded-2xl border border-dashed border-border bg-white p-8 text-center text-muted">
        No products found in this category yet.
      </p>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}
