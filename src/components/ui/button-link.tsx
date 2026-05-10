import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'sm';
};

export function ButtonLink({
  className,
  size = 'default',
  variant = 'primary',
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        'focus-visible:outline-accent inline-flex w-full items-center justify-center border text-center text-sm font-semibold text-balance transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 sm:w-auto',
        size === 'default' && 'min-h-11 px-5 py-3',
        size === 'sm' && 'min-h-10 px-4 py-2',
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
