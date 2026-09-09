import Image from "next/image";
import Link from "next/link";
import QuoteCTA from "@/components/QuoteCTA";
import { aboutStats } from "@/data/site";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Vinboitech — a B2B supplier of medical, healthcare, hygiene and disposable products focused on quality and reliable supply.",
};

export default function AboutPage() {
  return (
    <>
      <section className="gradient-mesh pt-28 pb-16 sm:pt-32">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="section-eyebrow">About Vinboitech</span>
            <h1 className="mt-4 text-4xl font-bold text-ink sm:text-5xl">
              Healthcare Products You Can Rely On
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Vinboitech is a B2B supplier focused on medical, healthcare, hygiene and
              disposable products for hospitals, clinics, distributors and businesses.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="btn-primary focus-ring">
                Explore Products
              </Link>
              <Link href="/contact" className="btn-secondary focus-ring">
                Request a Quote
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-border shadow-[var(--shadow)]">
            <Image
              src="/images/about/supply-environment.png"
              alt="Modern healthcare medical supply environment"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-ink">Our Focus</h2>
            <div className="mt-6 space-y-4 text-muted leading-relaxed">
              <p>
                We emphasise quality, reliability, consistent supply, professional service
                and customer satisfaction in every enquiry we receive.
              </p>
              <p>
                Whether you are sourcing specimen containers, protective disposables,
                wound-care items or hygiene products, our catalogue is structured to support
                practical procurement conversations for institutional and commercial buyers.
              </p>
              <p>
                Company history, facility details and certifications can be added here once
                confirmed. Until then, contact our team for product information and bulk
                requirements.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 content-start">
            {aboutStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-surface-alt/70 p-4"
              >
                <p className="text-lg font-semibold text-primary sm:text-xl">{stat.label}</p>
                <p className="mt-1 text-xs text-muted sm:text-sm">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteCTA />
    </>
  );
}
