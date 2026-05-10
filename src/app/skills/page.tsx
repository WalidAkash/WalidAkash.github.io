import type { Metadata } from 'next';

import { SectionHeading } from '@/components/home/section-heading';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { PageHeader } from '@/components/ui/page-header';
import { Section } from '@/components/ui/section';
import { portfolioContent } from '@/config/portfolio';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Verification Skills',
  description:
    'Technical skills of Walid Akash in SystemVerilog, UVM, SVA, RTL debug, verification tools, protocols, and FPGA platforms.',
  path: '/skills',
});

export default function SkillsPage() {
  const { skills } = portfolioContent;

  return (
    <>
      <Section>
        <Container>
          <PageHeader
            eyebrow="Skills"
            title="Technical skill map"
            description={skills.intro}
          />
        </Container>
      </Section>

      <Section aria-label="Skill groups" className="pt-0">
        <Container className="grid gap-6">
          {skills.groups.map((group) => (
            <Card key={group.title} className="p-6">
              <SectionHeading
                level="h2"
                eyebrow="Category"
                title={group.title}
              />
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </Container>
      </Section>
    </>
  );
}
