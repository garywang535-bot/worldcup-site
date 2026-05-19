export type GearItem = {
  id: string;
  title: string;
  priceLabel: string;
  imageAlt: string;
  /** 替换为你的亚马逊联盟链接 */
  href: string;
};

export const GEAR_ITEMS: GearItem[] = [
  {
    id: "g-1",
    title: "Neutral training football (size 5)",
    priceLabel: "See price on Amazon",
    imageAlt: "Generic size five football on neutral studio background",
    href: "https://www.amazon.com/dp/example-football?tag=youraffiliate-20",
  },
  {
    id: "g-2",
    title: "Portable pop-up goal set",
    priceLabel: "See price on Amazon",
    imageAlt: "Portable mini football goals folded beside carrying bag",
    href: "https://www.amazon.com/dp/example-goals?tag=youraffiliate-20",
  },
  {
    id: "g-3",
    title: "Stadium seat cushion (compact)",
    priceLabel: "See price on Amazon",
    imageAlt: "Foldable stadium cushion with carry strap",
    href: "https://www.amazon.com/dp/example-seat?tag=youraffiliate-20",
  },
  {
    id: "g-4",
    title: "Insulated water bottle (750ml)",
    priceLabel: "See price on Amazon",
    imageAlt: "Stainless steel insulated bottle with sport lid",
    href: "https://www.amazon.com/dp/example-bottle?tag=youraffiliate-20",
  },
];
