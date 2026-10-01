import { Suspense } from "react";
import ProductsCatalog from "@/components/ProductsCatalog";
import QuoteCTA from "@/components/QuoteCTA";

export const metadata = {
  title: "Products",
  description:
    "Browse vinbiotech medical and healthcare product categories including urine containers, masks, gloves, bandages, gel packs and disposables.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="gradient-mesh pt-28 pb-10 sm:pt-32">
        <div className="container-page max-w-3xl">
          <span className="section-eyebrow">Products</span>
          <h1 className="mt-4 text-4xl font-bold text-ink sm:text-5xl">
            Medical &amp; Healthcare Product Range
          </h1>
          <p className="mt-4 text-lg text-muted">
            Explore our categories and request a quote for product details,
            availability and bulk requirements. Pricing is provided on enquiry.
          </p>
        </div>
      </section>

      <section className="section-pad pt-8">
        <div className="container-page">
          <Suspense fallback={<CatalogFallback />}>
            <ProductsCatalog />
          </Suspense>
        </div>
      </section>

      <QuoteCTA />
    </>
  );
}

function CatalogFallback() {
  return (
    <div className="rounded-2xl border border-border bg-white p-10 text-center text-muted">
      Loading products…
    </div>
  );
}
