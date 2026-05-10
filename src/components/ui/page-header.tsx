type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="max-w-3xl py-20 sm:py-24">
      <p className="text-accent font-mono text-sm tracking-[0.22em] uppercase">
        {eyebrow}
      </p>
      <h1 className="text-foreground mt-5 text-4xl leading-tight font-semibold sm:text-5xl">
        {title}
      </h1>
      <p className="text-muted mt-5 text-lg leading-8">{description}</p>
    </header>
  );
}
