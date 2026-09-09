import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="gradient-mesh flex min-h-[70vh] items-center pt-28">
      <div className="container-page max-w-xl text-center">
        <h1 className="text-4xl font-bold text-ink">Page not found</h1>
        <p className="mt-4 text-muted">
          The page you are looking for does not exist or may have moved.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/" className="btn-primary focus-ring">
            Go Home
          </Link>
          <Link href="/products" className="btn-secondary focus-ring">
            Browse Products
          </Link>
        </div>
      </div>
    </section>
  );
}
