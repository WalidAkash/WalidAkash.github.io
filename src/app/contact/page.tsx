import type { Metadata } from 'next';
import Link from 'next/link';

import { SectionHeading } from '@/components/home/section-heading';
import { ButtonLink } from '@/components/ui/button-link';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { PageHeader } from '@/components/ui/page-header';
import { Section } from '@/components/ui/section';
import { portfolioContent } from '@/config/portfolio';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Contact Walid Akash',
  description:
    'Contact Walid Akash for design verification, ASIC, FPGA, processor verification, and hardware engineering opportunities.',
  path: '/contact',
});

export default function ContactPage() {
  const { contact, person } = portfolioContent;

  return (
    <>
      <Section>
        <Container>
          <PageHeader
            eyebrow="Contact"
            title={contact.title}
            description={contact.description}
          />
        </Container>
      </Section>

      <Section className="pt-0">
        <Container className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="p-6 sm:p-8">
            <p className="text-accent font-mono text-sm tracking-[0.18em] uppercase">
              Direct contact
            </p>
            <div className="mt-6 grid gap-5">
              <div>
                <p className="text-muted text-sm">Email</p>
                <Link
                  href={`mailto:${person.email}`}
                  className="focus-visible:outline-accent mt-1 block text-lg font-semibold break-all hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  {person.email}
                </Link>
              </div>
              <div>
                <p className="text-muted text-sm">LinkedIn</p>
                <Link
                  href={person.linkedin}
                  className="focus-visible:outline-accent mt-1 block text-lg font-semibold break-words hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  walid-bin-ataur-rahman-akash
                </Link>
              </div>
              <div>
                <p className="text-muted text-sm">GitHub</p>
                <Link
                  href={person.github}
                  className="focus-visible:outline-accent mt-1 block text-lg font-semibold break-words hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  github.com/WalidAkash
                </Link>
              </div>
              <div>
                <p className="text-muted text-sm">Location</p>
                <p className="mt-1 text-lg font-semibold">{person.location}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 sm:p-8">
            <SectionHeading
              level="h2"
              eyebrow="Opportunity Fit"
              title="Good matches for outreach"
              description="The page is intentionally specific so recruiters and technical teams can quickly tell where the fit is strongest."
            />
            <div className="mt-6 grid gap-3">
              {contact.availability.map((item) => (
                <div
                  key={item}
                  className="border-line bg-background/60 border p-4"
                >
                  <p className="text-muted leading-7">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 xl:flex-row">
              <ButtonLink href={`mailto:${person.email}`}>
                Send email
              </ButtonLink>
              <ButtonLink href={person.linkedin} variant="secondary">
                View LinkedIn
              </ButtonLink>
              <ButtonLink href={person.github} variant="secondary">
                View GitHub
              </ButtonLink>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}
