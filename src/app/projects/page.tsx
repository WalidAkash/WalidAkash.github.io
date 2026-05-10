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
  title: 'Verification Projects',
  description:
    'Project experience from Walid Akash covering RISC-V processor verification, protocol validation, UVM environments, and FPGA emulation support.',
  path: '/projects',
});

export default function ProjectsPage() {
  const { projects } = portfolioContent;

  return (
    <>
      <Section>
        <Container>
          <PageHeader
            eyebrow="Projects"
            title="Verification project highlights"
            description={projects.intro}
          />
        </Container>
      </Section>

      <Section aria-label="Project list" className="pt-0">
        <Container className="grid gap-6">
          {projects.items.map((project) => (
            <Card key={project.title} as="article" className="p-6 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="text-accent font-mono text-sm tracking-[0.18em] uppercase">
                    {project.client}
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
                    {project.title}
                  </h2>
                  <p className="text-muted mt-4 leading-7">{project.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <SectionHeading
                    level="h3"
                    eyebrow="Scope"
                    title="Key responsibilities"
                    description="Project bullets are structured to be easy to replace with client-safe, metrics-backed portfolio copy later."
                  />
                  <div className="mt-6 grid gap-3">
                    {project.responsibilities.map((item) => (
                      <div
                        key={item}
                        className="border-line bg-background/60 border p-4"
                      >
                        <p className="text-muted leading-7">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </Container>
      </Section>
    </>
  );
}
