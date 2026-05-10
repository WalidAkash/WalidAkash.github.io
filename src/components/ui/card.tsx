import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

type CardProps = ComponentPropsWithoutRef<'div'> & {
  as?: 'article' | 'aside' | 'div';
};

export function Card({
  as: Component = 'div',
  className,
  ...props
}: CardProps) {
  return (
    <Component
      className={cn(
        'border-line bg-surface/80 border shadow-lg shadow-black/5 dark:shadow-black/20',
        className,
      )}
      {...props}
    />
  );
}
