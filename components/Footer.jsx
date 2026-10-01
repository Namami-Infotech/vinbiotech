import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/products";
import { siteConfig } from "@/data/site";

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/#why-vinbiotech", label: "Why vinbiotech" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const productLinks = categories.slice(0, 6);

  return (
    <footer className="border-t border-border bg-ink text-white">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" aria-label="vinbiotech home">
            <Image
              src="/images/logo/vinbiotech1.png"
              alt={siteConfig.name}
              width={150}
              height={38}
              className="h-9 w-auto object-contain"
            />
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            {siteConfig.positioning}
          </p>
          <p className="mt-4 text-sm text-white/60">{siteConfig.tagline}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-white/55">
            Products
          </h2>
          <ul className="mt-4 space-y-2.5">
            {productLinks.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/products?category=${category.slug}`}
                  className="focus-ring rounded text-sm text-white/80 transition hover:text-white"
                >
                  {category.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-white/55">
            Company
          </h2>
          <ul className="mt-4 space-y-2.5">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="focus-ring rounded text-sm text-white/80 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-white/55">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li>
              <span className="block text-white/50">Email</span>
              {siteConfig.contact.email}
            </li>
            <li>
              <span className="block text-white/50">Phone</span>
              {siteConfig.contact.phone}
            </li>
            <li>
              <span className="block text-white/50">Address</span>
              {siteConfig.contact.address}
            </li>
            <li>
              <span className="block text-white/50">Business hours</span>
              {siteConfig.contact.businessHours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 vinbiotech. All Rights Reserved.</p>
          <p>Medical &amp; Healthcare Product Supplier</p>
        </div>
      </div>
    </footer>
  );
}
