import type { Metadata } from 'next';

import { SectionHeading } from '@/components/home/section-heading';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { PageHeader } from '@/components/ui/page-header';
import { Section } from '@/components/ui/section';
import { portfolioContent } from '@/config/portfolio';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Verification Experience',
  description:
    'Professional experience of Walid Akash across design verification, regression workflows, debug, and coverage-driven signoff.',
  path: '/experience',
});

export default function ExperiencePage() {
  const { experience } = portfolioContent;

  return (
    <>
      <Section>
        <Container>
          <PageHeader
            eyebrow="Experience"
            title="Professional experience"
            description={experience.intro}
          />
        </Container>
      </Section>

      <Section className="pt-0">
        <Container className="grid gap-6">
          {experience.roles.map((role) => (
            <Card key={`${role.company}-${role.title}`} className="p-6 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-accent font-mono text-sm tracking-[0.18em] uppercase">
                    {role.period}
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold">{role.title}</h2>
                  <p className="text-muted mt-2">{role.company}</p>
                  <p className="text-muted mt-2 text-sm">{role.tenure}</p>
                  <p className="text-muted mt-5 leading-7">{role.summary}</p>
                </div>

                <div className="grid gap-3">
                  {role.highlights.map((item) => (
                    <div
                      key={item}
                      className="border-line bg-background/60 border p-4"
                    >
                      <p className="text-muted leading-7">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </Container>
      </Section>

      <Section
        aria-labelledby="experience-workflow-heading"
        className="bg-surface/40"
      >
        <Container>
          <SectionHeading
            id="experience-workflow-heading"
            level="h2"
            eyebrow="Workflow"
            title="How verification work typically progresses"
            description="A simple sequence that communicates process clearly to recruiters and engineering teams."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {experience.workflow.map((step, index) => (
              <Card key={step} className="p-6">
                <p className="text-accent font-mono text-sm tracking-[0.18em] uppercase">
                  Step {index + 1}
                </p>
                <h3 className="mt-4 text-lg font-semibold">{step}</h3>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
