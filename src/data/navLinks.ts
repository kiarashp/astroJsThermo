// src/data/navLinks.ts
export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "#",
    children: [
      {
        label: "Heating Elements",
        href: "#",
        children: [
          { label: "Molybdenum Elements", href: "/product/molybdenum" },
          { label: "Silicon Carbide Elements", href: "/product/silicon-carbide" },
          { label: "Thermal Shock Resistant Elements", href: "/product/thermal-shock-resistant" },
        ],
      },
      {
        label: "Ceramic Pieces",
        href: "#",
        children: [
          { label: "Ceramic Rollers", href: "/product/ceramic-rollers" },
          { label: "Ceramic Foam Filters", href: "/product/ceramic-foam-filters" },
          { label: "Industrial Ceramic Parts", href: "/product/industrial-ceramic-parts" },
        ],
      },
      {
        label: "Ceramic Insulation",
        href: "#",
        children: [
          { label: "Ceramic Boards", href: "/product/ceramic-boards" },
          { label: "Ceramic Paper", href: "/product/ceramic-paper" },
          { label: "Ceramic Blankets", href: "/product/ceramic-blankets" },
          { label: "Types of Ceramic Insulation", href: "/product/types-of-ceramic-insulation" },
          { label: "Fireproof Insulation", href: "/product/fireproof-insulation" },
          { label: "Furnace Insulation", href: "/product/furnace-insulation" },
        ],
      },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
  { label: "About Us", href: "/about" },
];
