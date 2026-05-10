import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

type BadgeProps = ComponentPropsWithoutRef<'span'>;

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'border-line bg-surface text-accent inline-flex w-fit items-center border px-3 py-1 font-mono text-xs font-semibold tracking-[0.18em] uppercase',
        className,
      )}
      {...props}
    />
  );
}
