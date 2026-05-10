export const siteConfig = {
  name: 'Walid Akash Portfolio',
  author: 'Walid Akash',
  description:
    'Personal portfolio for Walid Akash, a Design and Verification Engineer focused on ASIC, FPGA, SystemVerilog, UVM, and coverage-driven verification.',
  url: 'https://WalidAkash.github.io',
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
    github: 'https://github.com/WalidAkash',
    linkedin: 'https://www.linkedin.com/in/walid-bin-ataur-rahman-akash',
    email: 'mailto:walidakash070@gmail.com',
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
