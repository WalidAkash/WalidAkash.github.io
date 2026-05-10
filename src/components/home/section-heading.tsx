import { Badge } from '@/components/ui/badge';

type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  level?: 'h2' | 'h3';
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  level = 'h2',
}: SectionHeadingProps) {
  const HeadingTag = level;

  return (
    <div className="max-w-3xl">
      <Badge>{eyebrow}</Badge>
      <HeadingTag
        id={id}
        className="text-foreground mt-4 text-3xl leading-tight font-semibold sm:text-4xl"
      >
        {title}
      </HeadingTag>
      {description ? (
        <p className="text-muted mt-4 max-w-2xl text-base leading-7 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
