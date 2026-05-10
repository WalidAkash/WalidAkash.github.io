import type { Metadata } from 'next';

import { PageHeader } from '@/components/ui/page-header';
import { SectionShell } from '@/components/ui/section-shell';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Projects',
  description:
    'Selected ASIC, FPGA, RTL, and verification projects by Walid Akash.',
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <SectionShell>
      <PageHeader
        eyebrow="Projects"
        title="Verification work placeholder"
        description="A structured space for project case studies, testbench architecture, coverage goals, and results."
      />
    </SectionShell>
  );
}
