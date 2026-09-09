import { Outfit, Source_Sans_3 } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/site";
import "./globals.css";

const display = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.shortName} | Medical & Healthcare Products Supplier`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.shortName} | Medical & Healthcare Products Supplier`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    type: "website",
    images: [
      {
        url: "/images/hero/hero-medical-products.png",
        width: 1200,
        height: 675,
        alt: "Vinboitech medical and healthcare products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.shortName} | Medical & Healthcare Products Supplier`,
    description: siteConfig.description,
    images: ["/images/hero/hero-medical-products.png"],
  },
  icons: {
    icon: [
      { url: "/images/logo/vinboitech-icon.png", type: "image/png", sizes: "512x512" },
      { url: "/images/logo/vinboitech-icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/images/logo/vinboitech-icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/images/logo/vinboitech-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
