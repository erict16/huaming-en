import productsDoc from "../../content/products.json";
import downloadsDoc from "../../content/downloads.json";
import officesDoc from "../../content/offices.json";

export type Family = (typeof productsDoc.families)[number];
export type Product = (typeof productsDoc.types)[number];
export type Download = (typeof downloadsDoc)[number] & { bytes?: number };
export type Office = (typeof officesDoc)[number] & {
  phone?: string;
  email?: string;
  web?: string | null;
  creditCode?: string;
  note?: string;
};

export const families = productsDoc.families;
export const products = productsDoc.types;
export const offices = officesDoc;

export function productBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function productsInFamily(familyId: string): Product[] {
  return products.filter((p) => p.family === familyId);
}

export function familyById(id: string): Family | undefined {
  return families.find((f) => f.id === id);
}

export function downloadsFor(slug: string): Download[] {
  return downloadsDoc.filter((d) => d.products.includes(slug));
}

export const downloadRows: Download[] = downloadsDoc;

export const familyGroups = {
  oltc: ["oltc-oil", "oltc-vacuum", "oltc-dry", "oltc-gas", "oltc-reactive", "regulator"],
  octc: ["octc"],
  accessories: ["mdu", "monitor", "other"],
} as const;

export const groupCopy = {
  oltc: {
    title: "On-load tap changers",
    blurb: "An OLTC changes taps while the transformer is live. Oil types break the arc in oil. Vacuum types break it in a bottle. HWV sits on the tank; the rest sit in it.",
  },
  octc: {
    title: "De-energized tap changers",
    blurb: "Change taps only with the transformer off. WSL / WDL, WDG, and ZWC.",
  },
  accessories: {
    title: "Accessories",
    blurb: "Motor drives, monitors, oil-filter plant, and the rest of the shop list.",
  },
} as const;

export function productsInGroup(group: keyof typeof familyGroups): Product[] {
  return familyGroups[group].flatMap((id) => productsInFamily(id));
}

export function productsForListSlug(slug: string): Product[] {
  if (slug === "oltc") return productsInGroup("oltc");
  if (slug === "accessories") return productsInGroup("accessories");
  return productsInFamily(slug);
}

export function listHref(id: string): string {
  return `/products/${id}/`;
}
