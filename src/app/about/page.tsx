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
  title: 'About Walid Akash',
  description:
    'Background, verification focus areas, education, and research profile of Walid Akash, a Design Verification Engineer.',
  path: '/about',
});

export default function AboutPage() {
  const { about, person } = portfolioContent;

  return (
    <>
      <Section>
        <Container>
          <PageHeader
            eyebrow="About"
            title={about.title}
            description={about.description}
          />
        </Container>
      </Section>

      <Section className="pt-0">
        <Container className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-4">
            {about.summary.map((item) => (
              <Card key={item} className="p-6">
                <p className="text-muted leading-7">{item}</p>
              </Card>
            ))}
          </div>

          <Card className="p-6">
            <p className="text-accent font-mono text-sm tracking-[0.18em] uppercase">
              Profile
            </p>
            <h2 className="mt-4 text-2xl font-semibold">{person.role}</h2>
            <div className="mt-5 grid gap-4">
              <div>
                <p className="text-muted text-sm">Current company</p>
                <p className="mt-1">{person.company}</p>
              </div>
              <div>
                <p className="text-muted text-sm">Location</p>
                <p className="mt-1">{person.location}</p>
              </div>
              <div>
                <p className="text-muted text-sm">Languages</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {about.languages.map((language) => (
                    <Badge key={language}>{language}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      <Section aria-labelledby="about-focus-heading" className="bg-surface/40">
        <Container>
          <SectionHeading
            id="about-focus-heading"
            level="h2"
            eyebrow="Focus Areas"
            title="Where the work goes deepest"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {about.focusAreas.map((area) => (
              <Card key={area.title} className="p-6">
                <h3 className="text-xl font-semibold">{area.title}</h3>
                <p className="text-muted mt-4 leading-7">{area.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="about-credentials-heading">
        <Container className="grid gap-4 lg:grid-cols-2">
          <Card className="p-6">
            <p className="text-accent font-mono text-sm tracking-[0.18em] uppercase">
              Education
            </p>
            <h2
              id="about-credentials-heading"
              className="mt-4 text-2xl font-semibold"
            >
              {about.education.school}
            </h2>
            <p className="text-muted mt-2 leading-7">
              {about.education.degree}
            </p>
            <p className="text-muted mt-3 text-sm">{about.education.period}</p>
          </Card>

          <Card className="p-6">
            <p className="text-accent font-mono text-sm tracking-[0.18em] uppercase">
              Publication
            </p>
            <h2 className="mt-4 text-2xl font-semibold">Research work</h2>
            <p className="text-muted mt-4 leading-7">{about.publication}</p>
          </Card>
        </Container>
      </Section>
    </>
  );
}
