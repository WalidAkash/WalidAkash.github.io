import type { Metadata } from 'next';

import { PageHeader } from '@/components/ui/page-header';
import { SectionShell } from '@/components/ui/section-shell';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Experience',
  description:
    'Professional experience for Walid Akash across design verification and hardware engineering.',
  path: '/experience',
});

export default function ExperiencePage() {
  return (
    <SectionShell>
      <PageHeader
        eyebrow="Experience"
        title="Career timeline placeholder"
        description="A future timeline for roles, responsibilities, technical environments, and engineering impact."
      />
    </SectionShell>
  );
}
