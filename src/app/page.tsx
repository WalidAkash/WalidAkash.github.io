import { ButtonLink } from '@/components/ui/button-link';
import { SectionShell } from '@/components/ui/section-shell';
import { siteConfig } from '@/config/site';

const stats = [
  { label: 'Focus', value: 'ASIC / FPGA' },
  { label: 'Methods', value: 'UVM, SV, RTL' },
  { label: 'Delivery', value: 'Coverage-driven' },
];

const highlights = [
  'Verification plans, reusable testbenches, assertions, and coverage closure.',
  'RTL debug mindset with clean communication across design and validation teams.',
  'Portfolio structure ready for projects, experience, skills, and contact pages.',
];

export default function Home() {
  return (
    <SectionShell
      id="home"
      className="grid min-h-[calc(100svh-4rem)] items-center gap-12 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28"
    >
      <section aria-labelledby="hero-title" className="max-w-3xl">
        <p className="text-accent font-mono text-sm tracking-[0.22em] uppercase">
          Design & Verification Engineer
        </p>
        <h1
          id="hero-title"
          className="text-foreground mt-5 max-w-4xl text-4xl leading-tight font-semibold sm:text-5xl lg:text-6xl"
        >
          Building reliable silicon through disciplined verification.
        </h1>
        <p className="text-muted mt-6 max-w-2xl text-lg leading-8">
          A focused portfolio foundation for {siteConfig.author}, designed to
          present ASIC/FPGA verification work with clarity, technical depth, and
          recruiter-friendly navigation.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/resume.pdf">Download resume</ButtonLink>
          <ButtonLink href="#projects" variant="secondary">
            View project placeholders
          </ButtonLink>
        </div>
      </section>

      <aside
        aria-label="Portfolio status summary"
        className="border-line bg-surface/80 shadow-2xl shadow-black/5 backdrop-blur dark:shadow-black/30"
      >
        <div className="border-line border-b p-6">
          <p className="text-muted font-mono text-sm tracking-[0.2em] uppercase">
            Portfolio scaffold
          </p>
          <h2 className="mt-3 text-2xl font-semibold">
            Ready for engineering content
          </h2>
        </div>
        <div className="bg-line grid gap-px sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="bg-surface p-5">
              <p className="text-muted text-sm">{item.label}</p>
              <p className="text-accent-strong mt-2 font-mono text-lg">
                {item.value}
              </p>
            </div>
          ))}
        </div>
        <div className="space-y-4 p-6">
          {highlights.map((highlight) => (
            <p key={highlight} className="text-muted leading-7">
              {highlight}
            </p>
          ))}
        </div>
      </aside>

      <section
        id="projects"
        aria-label="Homepage content placeholders"
        className="border-line bg-surface/70 col-span-full grid gap-px border md:grid-cols-3"
      >
        {['About', 'Projects', 'Experience'].map((item) => (
          <div key={item} className="bg-background/70 p-6">
            <h2 className="text-xl font-semibold">{item}</h2>
            <p className="text-muted mt-3 leading-7">
              Placeholder area for production portfolio content and reusable
              page sections.
            </p>
          </div>
        ))}
      </section>
    </SectionShell>
  );
}
