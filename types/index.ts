export type Template = {
  slug: string;
  name: string;
  style: string;
  description: string;
  image: string;
  price: number;
  accent: string;
};

export type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};
