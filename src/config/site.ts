export const siteConfig = {
  name: 'Walid Akash Portfolio',
  author: 'Walid Akash',
  description:
    'Personal portfolio for Walid Akash, a Design and Verification Engineer focused on ASIC, FPGA, SystemVerilog, UVM, and coverage-driven verification.',
  url: 'https://example.com',
  keywords: [
    'Design Verification Engineer',
    'ASIC verification',
    'FPGA verification',
    'SystemVerilog',
    'UVM',
    'RTL',
    'Semiconductor',
  ],
  links: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
    email: 'mailto:hello@example.com',
  },
  themeStorageKey: 'walid-akash-theme',
} as const;

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/skills', label: 'Skills' },
  { href: '/contact', label: 'Contact' },
] as const;
