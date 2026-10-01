import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutPreview from "@/components/AboutPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Industries from "@/components/Industries";
import QuoteCTA from "@/components/QuoteCTA";
import { categories, getFeaturedProducts } from "@/data/products";
import { aboutStats, industries, whyChoose } from "@/data/site";

export const metadata = {
  title: "vinbiotech | Medical & Healthcare Products Supplier",
  description:
    "vinbiotech supplies quality medical, healthcare, hygiene and disposable products to hospitals, clinics, distributors and businesses.",
};

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      <Hero />
      <CategoryGrid categories={categories} />
      <FeaturedProducts products={featured} />
      <AboutPreview stats={aboutStats} />
      <WhyChooseUs items={whyChoose} />
      <Industries industries={industries} />
      <QuoteCTA />
    </>
  );
}
