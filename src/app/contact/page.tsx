import type { Metadata } from 'next';

import { PageHeader } from '@/components/ui/page-header';
import { SectionShell } from '@/components/ui/section-shell';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Contact',
  description:
    'Contact Walid Akash for design verification, ASIC, FPGA, and hardware engineering opportunities.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <SectionShell>
      <PageHeader
        eyebrow="Contact"
        title="Recruiter contact placeholder"
        description="A future contact page for email, professional profiles, resume access, and hiring availability."
      />
    </SectionShell>
  );
}
