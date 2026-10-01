import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Contact / Request a Quote",
  description:
    "Request a quote or product enquiry from vinbiotech for medical, healthcare, hygiene and disposable products.",
};

export default function ContactPage() {
  const { contact } = siteConfig;

  return (
    <>
      <section className="gradient-mesh pt-28 pb-12 sm:pt-32">
        <div className="container-page max-w-3xl">
          <span className="section-eyebrow">Contact</span>
          <h1 className="mt-4 text-4xl font-bold text-ink sm:text-5xl">
            Request a Quote
          </h1>
          <p className="mt-4 text-lg text-muted">
            Share your product requirements and our team will help with
            information, availability and bulk order discussions.
          </p>
        </div>
      </section>

      <section className="section-pad pt-4">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="card-surface h-fit space-y-5 p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-ink">Contact Details</h2>
            <p className="text-sm text-muted">
              Placeholder details are configurable in <code>data/site.js</code>.
            </p>
            <ContactItem label="Email" value={contact.email} />
            <ContactItem label="Phone" value={contact.phone} />
            <ContactItem label="Address" value={contact.address} />
            <ContactItem label="Business hours" value={contact.businessHours} />
          </aside>

          <Suspense
            fallback={
              <div className="card-surface p-8 text-muted">
                Loading enquiry form…
              </div>
            }
          >
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}

function ContactItem({ label, value }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
        {label}
      </p>
      <p className="mt-1 text-sm text-ink">{value}</p>
    </div>
  );
}
