import { instagram, x, facebook, linkedIn } from "@/assets";

export const footerData = {
  services: [
    "Core refresh",
    "Application management services",
    "Evolution & enhancement services",
    "Solution Assurance & validation",
    "Digital Banking & financial inclusion",
    "Online/mobile lending solution",
    "Staff augmentation solutions",
    "Risk management & Internal audit solutions",
    "Data Warehouse & Business Intelligence (BI)",
    "Enterprise Document Management Solutions",
    "KeySystem software testing",
    "Cybersecurity Solutions",
  ],
  quickLinks: [
    { title: "About Us", href: "#" },
    { title: "Sitemap", href: "#" },
  ],
  locations: [
    {
      name: "Nigeria",
      address: ["55G Adebisi Omotola Close,", "Off Samuel Adedoyin Street,", "Victoria Island"],
    },
    {
      name: "United Kingdom",
      address: ["39 Kenyon Lane, Off Moston Lane,", "Moston, Manchester,", "United Kingdom, M40 9JG"],
    },
  ],
  contactGrid: {
    row1: [
      { title: "United Kingdom", value: "+44 161 948 1444" },
      { title: "United Arab Emirates", value: "+971 50 423 8817" },
      { title: "Canada", value: "+1 647 977 1435" },
    ],
    row2: [
      { title: "Nigeria", value: "+234 818 444 1404" },
      { title: "Email", value: "enquiries@keysystemltd.com", isEmail: true },
      { empty: true }, // Empty cell for grid alignment
    ],
  },
  socialMedia: [
    { name: "Instagram", icon: instagram, href: "#" },
    { name: "Twitter", icon: x, href: "#" },
    { name: "LinkedIn", icon: linkedIn, href: "#" },
    { name: "Facebook", icon: facebook, href: "#" },
  ],
  email: "enquiries@keysystemltd.com",
};
