import { Badge } from '@/components/ui/badge';

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="max-w-3xl">
      <Badge>{eyebrow}</Badge>
      <h1 className="text-foreground mt-5 text-4xl leading-tight font-semibold sm:text-5xl">
        {title}
      </h1>
      <p className="text-muted mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
        {description}
      </p>
    </header>
  );
}
