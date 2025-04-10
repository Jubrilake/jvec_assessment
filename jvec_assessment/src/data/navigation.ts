export interface SubNavItem {
  name: string;
  path: string;
}

export interface NavItem {
  name: string;
  path: string;
  dropdown?: boolean;
  subItems?: SubNavItem[];
}
export const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Services",
    path: "/services",
    dropdown: true,
    subItems: [
      { name: "IT Consulting", path: "/services/it-consulting" },
      { name: "Cloud Solutions", path: "/services/cloud-solutions" },
      { name: "Cybersecurity", path: "/services/cybersecurity" },
      {
        name: "Digital Transformation",
        path: "/services/digital-transformation",
      },
    ],
  },
  { name: "Contact", path: "/contact" },
];
