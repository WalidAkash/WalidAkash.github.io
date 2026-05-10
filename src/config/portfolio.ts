export const portfolioContent = {
  person: {
    name: 'Walid Bin Ataur Rahman Akash',
    role: 'Design Verification Engineer',
    company: 'Dynamic Solution Innovators Ltd.',
    location: 'Dhaka, Bangladesh',
    email: 'walidakash070@gmail.com',
    linkedin: 'https://www.linkedin.com/in/walid-bin-ataur-rahman-akash',
    github: 'https://github.com/WalidAkash',
  },
  about: {
    title: 'Engineer profile',
    description:
      'Design Verification Engineer with over 3 years of experience in functional verification of complex digital IPs and SoCs, with a strong focus on reusable environments, disciplined debug, and coverage-driven signoff.',
    summary: [
      'Works across the verification lifecycle from specification review and planning to testbench implementation, simulation debug, and signoff support.',
      'Builds reusable UVM infrastructure including agents, monitors, scoreboards, sequences, and assertion-driven checks for scalable block and subsystem verification.',
      'Partners closely with RTL, architecture, and backend teams to shorten debug cycles and improve confidence in design releases.',
    ],
    focusAreas: [
      {
        title: 'Verification methodology',
        description:
          'Coverage-driven verification, constrained-random stimulus, assertion-based verification, and reusable component design.',
      },
      {
        title: 'Debug and analysis',
        description:
          'RTL and waveform debug, regression triage, root-cause analysis, and protocol/interface failure investigation.',
      },
      {
        title: 'System scope',
        description:
          'Processor, IP, subsystem, and SoC verification with support for FPGA prototyping and emulation workflows.',
      },
    ],
    education: {
      school: 'Military Institute of Science and Technology (MIST)',
      degree: 'B.Sc. in Electrical, Electronic and Communication Engineering',
      period: 'February 2019 - February 2023',
    },
    publication:
      'Improved Channel Model of UAV to UAV Millimeter Wave Link Under Hovering Fluctuations and Doppler Effect',
    languages: ['Bengali', 'English'],
  },
  projects: {
    intro:
      'Representative project experience drawn from client-safe resume content.',
    items: [
      {
        title: 'RISC-V Vector Processor for Edge Computing',
        client: 'California-based fabless semiconductor company',
        summary:
          'Contributed to development and verification of an RV64 scalar processor with an RVV 1.0-compliant vector co-processor and custom instructions.',
        responsibilities: [
          'Applied assertions for simulation-time condition checking.',
          'Developed coverage-driven verification plans and tracked metrics.',
          'Verified AXI, AHB, APB, TileLink, and custom interfaces.',
          'Managed regression automation and CI-integrated verification workflows.',
          'Designed and implemented out-of-order execution for vector instructions.',
          'Performed RTL bug root-cause analysis and debugged corner cases, protocol violations, and reset or clocking issues.',
          'Developed and maintained UVM testbenches and reusable verification components.',
          'Supported coverage analysis, closure, FPGA RTL development, bitstream generation, and FPGA emulation.',
          'Coordinated multi-team RTL releases and collaborated in full-chip or block-level verification flows.',
        ],
        tags: [
          'RISC-V',
          'RVV 1.0',
          'UVM',
          'SystemVerilog',
          'AXI/AHB/APB',
          'FPGA emulation',
        ],
      },
    ],
  },
  experience: {
    intro:
      'A concise career view centered on current verification responsibilities and working style.',
    roles: [
      {
        company: 'Dynamic Solution Innovators Ltd.',
        title: 'Design & Verification Engineer',
        period: 'April 2023 - Present',
        tenure: '3 years 2 months total tenure',
        summary:
          'Works on digital processor and SoC verification efforts with responsibilities spanning environment development, coverage planning, debug, regression support, and FPGA-assisted validation.',
        highlights: [
          'Develops and maintains UVM testbenches, reusable agents, scoreboards, monitors, and sequences.',
          'Creates directed and constrained-random tests, assertions, and protocol checks for block and subsystem verification.',
          'Coordinates debug, release readiness, and verification workflow improvements across collaborating teams.',
        ],
      },
    ],
    workflow: [
      'Specification review and verification planning',
      'Environment architecture and testbench development',
      'Simulation debug, waveform analysis, and bug triage',
      'Coverage closure, regression stability, and signoff support',
    ],
  },
  skills: {
    intro:
      'Core tools, methodologies, and platform knowledge relevant to ASIC, FPGA, and processor verification work.',
    groups: [
      {
        title: 'Core competencies',
        items: [
          'Processor design and verification',
          'Universal Verification Methodology (UVM)',
          'Constrained-random verification',
          'Functional and code coverage closure',
          'Assertion-based verification',
          'Scoreboards, monitors, agents, sequences',
          'RTL debug and waveform analysis',
          'Regression triage and bug tracking',
          'Verification planning and testbench architecture',
          'FPGA prototyping and verification',
          'FPGA emulation',
        ],
      },
      {
        title: 'Languages and scripting',
        items: [
          'SystemVerilog/Verilog',
          'Python',
          'C/C++',
          'Cocotb',
          'Bash/Perl',
        ],
      },
      {
        title: 'Tools and platforms',
        items: [
          'Synopsys VCS',
          'Mentor Questa',
          'Xilinx Vivado',
          'Verilator',
          'Synopsys Verdi',
          'Synopsys Spyglass',
          'GTKWave',
          'AWS EC2 F1/F2',
          'Git',
        ],
      },
      {
        title: 'Protocols and standards',
        items: ['PCIe', 'UART', 'SPI', 'I2C', 'AXI4', 'APB', 'JTAG'],
      },
      {
        title: 'FPGA devices',
        items: [
          'AMD Virtex UltraScale+ VU19P',
          'AMD Virtex UltraScale+ VU47P+HBM',
          'AMD Virtex UltraScale+ VU9P',
        ],
      },
    ],
  },
  contact: {
    title: 'Start the conversation',
    description:
      'Best suited for roles and collaborations involving processor verification, reusable UVM environments, interface verification, regression stability, and coverage-driven signoff.',
    availability: [
      'ASIC and FPGA verification opportunities',
      'Processor, IP, and SoC DV roles',
      'Engineering manager and recruiter outreach',
    ],
  },
} as const;
