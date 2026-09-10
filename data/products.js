export const categories = [
  {
    id: "urine-containers",
    slug: "urine-containers",
    name: "Urine Containers",
    shortName: "Urine Containers",
    description: "Secure and reliable specimen collection containers.",
    image: "/images/products/urine-container/main.png",
  },
  {
    id: "masks",
    slug: "3-ply-masks",
    name: "3-Ply Masks",
    shortName: "3-Ply Masks",
    description: "Comfortable and hygienic disposable face masks.",
    image: "/images/products/masks/main.png",
  },
  {
    id: "gloves",
    slug: "medical-gloves",
    name: "Medical Gloves",
    shortName: "Gloves",
    description:
      "Protective gloves suitable for healthcare and hygiene applications.",
    image: "/images/products/gloves/main.png",
  },
  {
    id: "bandages",
    slug: "bandages",
    name: "Bandages",
    shortName: "Bandages",
    description: "Reliable wound-care and first-aid solutions.",
    image: "/images/products/bandages/main.png",
  },
  {
    id: "gel-packs",
    slug: "gel-packs",
    name: "Gel Packs",
    shortName: "Gel Packs",
    description: "Reusable and convenient hot/cold therapy solutions.",
    image: "/images/products/gel-packs/main.png",
  },
  // {
  //   id: "disposables",
  //   slug: "medical-disposables",
  //   name: "Medical Disposables",
  //   shortName: "Medical Disposables",
  //   description: "Essential disposable products for healthcare environments.",
  //   image: "/images/products/disposables/main.png",
  // },
  // {
  //   id: "hygiene",
  //   slug: "hygiene-products",
  //   name: "Hygiene Products",
  //   shortName: "Hygiene Products",
  //   description:
  //     "Everyday hygiene solutions for clinical and commercial settings.",
  //   image: "/images/products/hygiene/main.png",
  // },
  // {
  //   id: "accessories",
  //   slug: "healthcare-accessories",
  //   name: "Healthcare Accessories",
  //   shortName: "Healthcare Accessories",
  //   description: "Supporting accessories for medical and care environments.",
  //   image: "/images/products/accessories/main.png",
  // },
];

export const products = [
  {
    id: 1,
    slug: "urine-container",
    name: "Urine Specimen Container",
    category: "Urine Containers",
    categorySlug: "urine-containers",
    featured: true,
    shortDescription:
      "Leak-resistant specimen container designed for reliable sample collection and transport.",
    description:
      "Our urine specimen containers are designed for secure collection, storage and transport of laboratory samples. Built for clarity and practical handling, they support routine clinical workflows across hospitals, clinics and diagnostic laboratories.",
    image: "/images/products/urine-container/main.png",
    features: [
      "Clear container for easy sample visibility",
      "Secure screw-cap design to help reduce leakage risk",
      "Practical sizing for routine specimen collection",
      "Suitable for institutional and laboratory use",
    ],
    applications: [
      "Hospitals and diagnostic laboratories",
      "Clinics and outpatient centres",
      "Pathology and sample collection points",
    ],
    packaging:
      "Available in bulk packaging suitable for institutional procurement. Exact pack sizes available on enquiry.",
    moq: "Available on enquiry — suitable for bulk B2B orders",
  },
  {
    id: 2,
    slug: "3-ply-surgical-mask",
    name: "3-Ply Surgical Mask",
    category: "3-Ply Masks",
    categorySlug: "3-ply-masks",
    featured: true,
    shortDescription:
      "Comfortable disposable 3-ply face masks for everyday healthcare and hygiene protection.",
    description:
      "These 3-ply surgical masks are designed for comfortable wear and hygienic disposable use. Suitable for healthcare environments, clinics, and commercial settings that require consistent protective supply.",
    image: "/images/products/masks/main.png",
    features: [
      "Three-layer construction for everyday protective use",
      "Soft ear loops for comfortable wear",
      "Breathable design for extended shifts",
      "Disposable format for hygienic single use",
    ],
    applications: [
      "Hospitals and clinics",
      "Laboratories and pharmacies",
      "Commercial and institutional hygiene programmes",
    ],
    packaging:
      "Boxed quantities available for bulk procurement. Pack configurations shared on enquiry.",
    moq: "Available on enquiry — bulk supply supported",
  },
  {
    id: 3,
    slug: "disposable-medical-gloves",
    name: "Disposable Medical Gloves",
    category: "Medical Gloves",
    categorySlug: "medical-gloves",
    featured: true,
    shortDescription:
      "Protective disposable gloves for healthcare, hygiene and examination applications.",
    description:
      "Disposable medical gloves provide a practical barrier for examination, hygiene and care procedures. Suitable for healthcare facilities, laboratories and commercial buyers requiring dependable bulk supply.",
    image: "/images/products/gloves/main.png",
    features: [
      "Designed for examination and hygiene applications",
      "Flexible fit for practical handling",
      "Disposable for single-use clinical workflows",
      "Available for recurring B2B procurement",
    ],
    applications: [
      "Medical examination and patient care",
      "Laboratory handling",
      "Hygiene and sanitation tasks",
    ],
    packaging:
      "Standard boxed packing for institutional distribution. Size assortments available on request.",
    moq: "Available on enquiry",
  },
  {
    id: 4,
    slug: "adhesive-bandage",
    name: "Adhesive Bandage",
    category: "Bandages",
    categorySlug: "bandages",
    featured: true,
    shortDescription:
      "Reliable adhesive bandages for everyday wound care and first-aid kits.",
    description:
      "Adhesive bandages support everyday wound protection and first-aid readiness. A practical addition to clinic, pharmacy and workplace first-aid inventories.",
    image: "/images/products/bandages/main.png",
    features: [
      "Secure adhesive backing",
      "Comfortable protective dressing",
      "Suitable for first-aid kits and clinical use",
      "Available for bulk institutional supply",
    ],
    applications: [
      "Clinics and pharmacies",
      "Hospital first-aid stations",
      "Workplace and commercial first-aid kits",
    ],
    packaging:
      "Assorted pack formats available. Bulk carton options on enquiry.",
    moq: "Available on enquiry",
  },
  {
    id: 5,
    slug: "reusable-gel-ice-pack",
    name: "Reusable Gel Ice Pack",
    category: "Gel Packs",
    categorySlug: "gel-packs",
    featured: true,
    shortDescription:
      "Reusable gel packs for convenient hot and cold therapy support.",
    description:
      "Reusable gel ice packs offer a practical hot/cold therapy option for clinics, physiotherapy settings and home-care programmes. Designed for repeated use with proper handling.",
    image: "/images/products/gel-packs/main.png",
    features: [
      "Reusable gel construction",
      "Suitable for hot or cold therapy use",
      "Flexible form for comfortable application",
      "Practical for clinical and retail supply",
    ],
    applications: [
      "Physiotherapy and rehabilitation",
      "Clinics and outpatient care",
      "Pharmacy and healthcare retail",
    ],
    packaging: "Individual and multi-pack options available on enquiry.",
    moq: "Available on enquiry",
  },
  // {
  //   id: 6,
  //   slug: "medical-disposable-assortment",
  //   name: "Medical Disposable Assortment",
  //   category: "Medical Disposables",
  //   categorySlug: "medical-disposables",
  //   featured: false,
  //   shortDescription:
  //     "Essential disposable supplies for everyday healthcare environments.",
  //   description:
  //     "A practical range of medical disposable products to support clinical hygiene, patient care and facility readiness. Ideal for buyers consolidating disposable supply under one vendor.",
  //   image: "/images/products/disposables/main.png",
  //   features: [
  //     "Core disposable items for healthcare environments",
  //     "Designed for everyday clinical utility",
  //     "Supports consolidated B2B purchasing",
  //     "Scalable for recurring orders",
  //   ],
  //   applications: [
  //     "Hospitals and clinics",
  //     "Laboratories",
  //     "Healthcare organisations",
  //   ],
  //   packaging: "Category-wise packing details shared based on selected items.",
  //   moq: "Available on enquiry",
  // },
  // {
  //   id: 7,
  //   slug: "hygiene-care-kit",
  //   name: "Hygiene Care Products",
  //   category: "Hygiene Products",
  //   categorySlug: "hygiene-products",
  //   featured: false,
  //   shortDescription:
  //     "Hygiene solutions for clinical, commercial and institutional environments.",
  //   description:
  //     "Hygiene products designed to support clean, safe environments across healthcare and commercial facilities. Suitable for buyers seeking consistent hygiene supply.",
  //   image: "/images/products/hygiene/main.png",
  //   features: [
  //     "Practical hygiene formats for daily use",
  //     "Suitable for clinical and commercial settings",
  //     "Supports facility cleanliness programmes",
  //     "Available for bulk procurement",
  //   ],
  //   applications: [
  //     "Healthcare facilities",
  //     "Commercial workplaces",
  //     "Institutional buyers",
  //   ],
  //   packaging: "Pack formats shared according to selected hygiene items.",
  //   moq: "Available on enquiry",
  // },
  // {
  //   id: 8,
  //   slug: "healthcare-accessories-set",
  //   name: "Healthcare Accessories",
  //   category: "Healthcare Accessories",
  //   categorySlug: "healthcare-accessories",
  //   featured: false,
  //   shortDescription:
  //     "Supporting accessories that complement medical and care workflows.",
  //   description:
  //     "Healthcare accessories that help round out procurement needs for clinics, pharmacies and care environments. Useful for buyers looking for complementary products alongside core disposables.",
  //   image: "/images/products/accessories/main.png",
  //   features: [
  //     "Complementary products for care environments",
  //     "Practical everyday clinical utility",
  //     "Supports broader catalogue procurement",
  //     "Available for institutional orders",
  //   ],
  //   applications: [
  //     "Clinics and pharmacies",
  //     "Healthcare organisations",
  //     "Distributors expanding accessory ranges",
  //   ],
  //   packaging: "Packaging depends on selected accessory items. Details on enquiry.",
  //   moq: "Available on enquiry",
  // },
];

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}

export function getProductsByCategory(categorySlug) {
  return products.filter((product) => product.categorySlug === categorySlug);
}

export function getCategoryBySlug(slug) {
  return categories.find((category) => category.slug === slug);
}

export function getAllProductSlugs() {
  return products.map((product) => product.slug);
}
