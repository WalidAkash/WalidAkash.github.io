export const homeContent = {
  hero: {
    eyebrow: 'Design Verification Engineer',
    title: 'Verifying complex silicon with disciplined, coverage-driven flows.',
    description:
      'Walid Bin Ataur Rahman Akash is a Design Verification Engineer focused on SystemVerilog, UVM, SVA, RTL debug, and reusable verification environments for digital IPs and SoCs.',
    image: {
      src: '/walid-akash-profile.jpg',
      alt: 'Walid Bin Ataur Rahman Akash',
    },
    actions: [
      { href: '/projects', label: 'View projects', variant: 'primary' },
      { href: '/contact', label: 'Contact Walid', variant: 'secondary' },
    ],
    stats: [
      { label: 'Experience', value: '3+ years' },
      { label: 'Methodology', value: 'UVM / SVA' },
      { label: 'Focus', value: 'IP & SoC DV' },
    ],
  },
  about: {
    eyebrow: 'About',
    title: 'Full-lifecycle verification for reliable digital systems.',
    description:
      'Experienced across spec review, verification planning, testbench architecture, constrained-random and directed testing, assertions, regression triage, waveform debug, and signoff support.',
    points: [
      'Builds reusable verification components including agents, monitors, scoreboards, and sequences.',
      'Drives functional and code coverage closure through structured plans and regression analysis.',
      'Collaborates with RTL, architecture, and backend teams to improve design quality and release confidence.',
    ],
  },
  skills: {
    eyebrow: 'Skills',
    title: 'Verification stack',
    groups: [
      {
        label: 'Methodology',
        items: ['UVM', 'SVA', 'CDV', 'Regression triage', 'RTL debug'],
      },
      {
        label: 'Languages',
        items: ['SystemVerilog', 'Verilog', 'Python', 'C/C++', 'Bash'],
      },
      {
        label: 'Tools',
        items: ['VCS', 'Questa', 'Verdi', 'Spyglass', 'Vivado'],
      },
    ],
  },
  projects: {
    eyebrow: 'Featured Projects',
    title: 'Selected engineering work',
    items: [
      {
        title: 'RISC-V Vector Processor for Edge Computing',
        description:
          'Verified an RV64 scalar processor with RVV 1.0 vector co-processor support, custom instructions, protocol interfaces, and CI-integrated regression workflows.',
        tags: ['RISC-V', 'RVV 1.0', 'UVM', 'AXI/AHB/APB', 'FPGA emulation'],
      },
    ],
  },
  experience: {
    eyebrow: 'Experience',
    title: 'Current role',
    role: 'Design & Verification Engineer',
    company: 'Dynamic Solution Innovators Ltd.',
    duration: 'April 2023 - Present',
    summary:
      'Develops verification environments, tests, assertions, coverage plans, debug flows, and FPGA emulation support for complex processor and SoC projects.',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Open to verification-focused engineering conversations.',
    description:
      'Best fit: ASIC/FPGA verification teams, processor/IP verification groups, semiconductor startups, and engineering managers hiring for hands-on DV roles.',
    email: 'mailto:walidakash070@gmail.com',
  },
} as const;
