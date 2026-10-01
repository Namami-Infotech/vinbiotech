"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";

const initialState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  product: "",
  quantity: "",
  message: "",
};

export default function ContactForm() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product") || "";

  const [form, setForm] = useState(() => ({
    ...initialState,
    product: productParam,
  }));
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const productOptions = useMemo(
    () => products.map((product) => product.name),
    [],
  );

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Unable to send your enquiry. Please try again.");
      }

      setSubmitted(true);
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="card-surface p-8 text-center sm:p-10" role="status">
        <h3 className="text-2xl font-semibold text-ink">Enquiry received</h3>
        <p className="mt-3 text-muted">
          Thank you for contacting vinbiotech. Your enquiry has been sent to our
          team, and we will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface space-y-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" required>
          <input
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="field-input"
            autoComplete="name"
          />
        </Field>
        <Field label="Company Name" htmlFor="company" required>
          <input
            id="company"
            name="company"
            required
            value={form.company}
            onChange={handleChange}
            className="field-input"
            autoComplete="organization"
          />
        </Field>
        <Field label="Email" htmlFor="email" required>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="field-input"
            autoComplete="email"
          />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="field-input"
            autoComplete="tel"
          />
        </Field>
        <Field label="Product Interested In" htmlFor="product">
          <select
            id="product"
            name="product"
            value={form.product}
            onChange={handleChange}
            className="field-input"
          >
            <option value="">Select a product (optional)</option>
            {productOptions.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Quantity" htmlFor="quantity">
          <input
            id="quantity"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            className="field-input"
            placeholder="Approx. quantity / MOQ interest"
          />
        </Field>
      </div>

      <Field label="Message" htmlFor="message" required>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="field-input resize-y"
          placeholder="Share product requirements, packaging preferences or delivery needs"
        />
      </Field>

      {submitError ? (
        <p className="text-sm text-red-700" role="alert">
          {submitError}
        </p>
      ) : null}
      <button
        type="submit"
        className="btn-primary focus-ring w-full sm:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending…" : "Send Enquiry"}
      </button>
    </form>
  );
}

function Field({ label, htmlFor, required, children }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-ink">
      <span className="mb-2 block">
        {label}
        {required ? <span className="text-primary"> *</span> : null}
      </span>
      {children}
    </label>
  );
}
