import type { Metadata } from 'next';

import { SectionHeading } from '@/components/home/section-heading';
import { Badge } from '@/components/ui/badge';
import { ButtonLink } from '@/components/ui/button-link';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { homeContent } from '@/config/home';
import { createMetadata } from '@/lib/seo';
import { withBasePath } from '@/lib/utils';

export const metadata: Metadata = createMetadata({
  title: 'Design Verification Portfolio',
  description:
    'Portfolio of Walid Akash, a Design Verification Engineer focused on ASIC, FPGA, SystemVerilog, UVM, assertions, and coverage-driven verification.',
  path: '/',
});

export default function Home() {
  const { hero, about, skills, projects, experience, contact } = homeContent;

  return (
    <>
      <Section className="py-16 sm:py-20 lg:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <Badge>{hero.eyebrow}</Badge>
            <h1 className="text-foreground mt-5 text-4xl leading-tight font-semibold sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
            <p className="text-accent-strong mt-4 font-mono text-lg font-semibold tracking-[0.12em] uppercase">
              {hero.role}
            </p>
            <p className="text-muted mt-6 max-w-2xl text-lg leading-8">
              {hero.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {hero.actions.map((action) => (
                <ButtonLink
                  key={action.href}
                  href={action.href}
                  variant={action.variant}
                >
                  {action.label}
                </ButtonLink>
              ))}
            </div>
            <div className="border-line bg-surface/80 mt-10 grid overflow-hidden border shadow-lg shadow-black/5 sm:max-w-2xl sm:grid-cols-3 dark:shadow-black/20">
              {hero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-line border-t p-5 first:border-t-0 sm:border-t-0 sm:border-l sm:first:border-l-0"
                >
                  <p className="text-accent-strong font-mono text-lg font-semibold">
                    {stat.value}
                  </p>
                  <p className="text-muted mt-2 text-sm font-semibold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside
            aria-label="Walid Bin Ataur Rahman Akash profile photo"
            className="relative mx-auto aspect-square w-full max-w-sm sm:max-w-md lg:max-w-lg"
          >
            <div
              aria-hidden="true"
              className="bg-surface-strong border-line absolute inset-8 rounded-full border"
            />
            <div className="border-line bg-surface relative h-full overflow-hidden rounded-full border shadow-lg shadow-black/5 dark:shadow-black/20">
              {/* Using a plain image here keeps the exported asset path correct on GitHub Pages. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBasePath(hero.image.src)}
                alt={hero.image.alt}
                width={1440}
                height={2160}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </aside>
        </Container>
      </Section>

      <Section aria-labelledby="home-about-heading">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            id="home-about-heading"
            level="h2"
            eyebrow={about.eyebrow}
            title={about.title}
            description={about.description}
          />
          <div className="grid gap-4">
            {about.points.map((point) => (
              <Card key={point} className="p-5">
                <p className="text-muted leading-7">{point}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="home-skills-heading" className="bg-surface/40">
        <Container>
          <SectionHeading
            id="home-skills-heading"
            level="h2"
            eyebrow={skills.eyebrow}
            title={skills.title}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {skills.groups.map((group) => (
              <Card key={group.label} className="p-6">
                <h3 className="text-xl font-semibold">{group.label}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="home-projects-heading">
        <Container>
          <SectionHeading
            id="home-projects-heading"
            level="h2"
            eyebrow={projects.eyebrow}
            title={projects.title}
          />
          <div className="mt-8 grid gap-4">
            {projects.items.map((project) => (
              <Card key={project.title} as="article" className="p-6">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-muted mt-4 max-w-4xl leading-7">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section
        aria-labelledby="home-experience-heading"
        className="bg-surface/40"
      >
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            id="home-experience-heading"
            level="h2"
            eyebrow={experience.eyebrow}
            title={experience.title}
          />
          <Card className="p-6">
            <p className="text-accent font-mono text-sm tracking-[0.18em] uppercase">
              {experience.duration}
            </p>
            <h3 className="mt-4 text-2xl font-semibold">{experience.role}</h3>
            <p className="text-muted mt-1">{experience.company}</p>
            <p className="text-muted mt-5 leading-7">{experience.summary}</p>
          </Card>
        </Container>
      </Section>

      <Section aria-labelledby="home-contact-heading">
        <Container>
          <Card className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <SectionHeading
              id="home-contact-heading"
              level="h2"
              eyebrow={contact.eyebrow}
              title={contact.title}
              description={contact.description}
            />
            <div className="flex flex-col gap-3 lg:w-52 lg:flex-col">
              <ButtonLink href={contact.email}>Email Walid</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact page
              </ButtonLink>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}
