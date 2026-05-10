import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: 'primary' | 'secondary';
};

export function ButtonLink({
  className,
  variant = 'primary',
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        'focus-visible:outline-accent inline-flex min-h-11 items-center justify-center border px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4',
        variant === 'primary' &&
          'border-accent bg-accent text-background hover:bg-accent-strong',
        variant === 'secondary' &&
          'border-line bg-surface text-foreground hover:border-accent hover:text-accent-strong',
        className,
      )}
      {...props}
    />
  );
}
