import type { Metadata } from 'next';

import { PageHeader } from '@/components/ui/page-header';
import { SectionShell } from '@/components/ui/section-shell';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'About',
  description:
    'About Walid Akash, a Design and Verification Engineer focused on reliable hardware systems.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <SectionShell>
      <PageHeader
        eyebrow="About"
        title="Engineer profile placeholder"
        description="A future home for biography, verification philosophy, domain focus, and career narrative."
      />
    </SectionShell>
  );
}
