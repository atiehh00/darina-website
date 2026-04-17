export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const mainNav: NavItem[] = [
  {
    label: "nav.legal",
    href: "/legal",
    children: [
      { label: "nav.legal_support", href: "/legal/support" },
      { label: "nav.certificates", href: "/legal/certificates" },
      { label: "nav.real_estate", href: "/legal/real-estate" },
    ],
  },
  {
    label: "nav.immigration",
    href: "/immigration",
    children: [
      { label: "nav.rwr_plus", href: "/immigration/rwr-plus" },
      { label: "nav.settlement", href: "/immigration/settlement" },
      { label: "nav.family", href: "/immigration/family-reunification" },
      { label: "nav.student", href: "/immigration/student-visa" },
    ],
  },
  {
    label: "nav.integration",
    href: "/integration",
    children: [
      { label: "nav.german_rwr", href: "/integration/german-rwr" },
      { label: "nav.legal_courses", href: "/integration/legal-courses" },
    ],
  },
  { label: "nav.prices", href: "/prices" },
  { label: "nav.about", href: "/about" },
  { label: "nav.contact", href: "/contact" },
];
