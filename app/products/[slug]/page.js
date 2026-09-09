import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import QuoteCTA from "@/components/QuoteCTA";
import ProductCard from "@/components/ProductCard";
import {
  getAllProductSlugs,
  getProductBySlug,
  products,
} from "@/data/products";

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | Vinboitech`,
      description: product.shortDescription,
      images: [{ url: product.image, alt: product.name }],
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = products
    .filter(
      (item) => item.categorySlug === product.categorySlug && item.slug !== product.slug
    )
    .slice(0, 3);

  return (
    <>
      <section className="gradient-mesh pt-28 pb-12 sm:pt-32">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-[var(--shadow)]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-primary">
              {product.category}
            </p>
            <h1 className="mt-3 text-4xl font-bold text-ink sm:text-5xl">{product.name}</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">{product.description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/contact?product=${encodeURIComponent(product.name)}`}
                className="btn-primary focus-ring"
              >
                Request Quote
              </Link>
              <Link href="/contact" className="btn-secondary focus-ring">
                Contact
              </Link>
            </div>

            <dl className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-white p-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                  Packaging
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink">{product.packaging}</dd>
              </div>
              <div className="rounded-2xl border border-border bg-white p-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                  MOQ
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink">{product.moq}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-ink">Key Features</h2>
            <ul className="mt-5 space-y-3">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-3 rounded-xl border border-border bg-surface-alt/50 px-4 py-3 text-sm text-ink"
                >
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-ink">Applications</h2>
            <ul className="mt-5 space-y-3">
              {product.applications.map((application) => (
                <li
                  key={application}
                  className="flex gap-3 rounded-xl border border-border bg-surface-alt/50 px-4 py-3 text-sm text-ink"
                >
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {application}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="section-pad pt-0">
          <div className="container-page">
            <h2 className="text-2xl font-bold text-ink">Related Products</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {related.map((item, index) => (
                <ProductCard key={item.id} product={item} index={index} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <QuoteCTA />
    </>
  );
}
