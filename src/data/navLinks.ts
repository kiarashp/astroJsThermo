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
          { label: "Molybdenum Elements", href: "/products/heating-elements/molybdenum" },
          { label: "Silicon Carbide Elements", href: "/products/heating-elements/silicon-carbide" },
          { label: "Thermal Shock Resistant Elements", href: "/products/heating-elements/thermal-shock-resistant" },
        ],
      },
      {
        label: "Ceramic Pieces",
        href: "#",
        children: [
          { label: "Ceramic Rollers", href: "/products/ceramic-pieces/ceramic-rollers" },
          { label: "Ceramic Foam Filters", href: "/products/ceramic-pieces/ceramic-foam-filters" },
          { label: "Industrial Ceramic Parts", href: "/products/ceramic-pieces/industrial-ceramic-parts" },
        ],
      },
      {
        label: "Ceramic Insulation",
        href: "#",
        children: [
          { label: "Ceramic Boards", href: "/products/ceramic-insulation/ceramic-boards" },
          { label: "Ceramic Paper", href: "/products/ceramic-insulation/ceramic-paper" },
          { label: "Ceramic Blankets", href: "/products/ceramic-insulation/ceramic-blankets" },
          { label: "Types of Ceramic Insulation", href: "/products/ceramic-insulation/types" },
          { label: "Fireproof Insulation", href: "/products/ceramic-insulation/fireproof" },
          { label: "Furnace Insulation", href: "/products/ceramic-insulation/furnace" },
        ],
      },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
  { label: "About Us", href: "/about" },
];
