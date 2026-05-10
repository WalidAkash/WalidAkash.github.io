import type { Metadata } from 'next';

import { PageHeader } from '@/components/ui/page-header';
import { SectionShell } from '@/components/ui/section-shell';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Skills',
  description:
    'Technical skills in SystemVerilog, UVM, RTL, scripting, and verification methodology.',
  path: '/skills',
});

export default function SkillsPage() {
  return (
    <SectionShell>
      <PageHeader
        eyebrow="Skills"
        title="Technical skill map placeholder"
        description="A clear section for verification methodology, HDL experience, EDA tools, scripting, and debugging strengths."
      />
    </SectionShell>
  );
}
