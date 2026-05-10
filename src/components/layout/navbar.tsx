'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { ThemeToggle } from '@/components/layout/theme-toggle';
import { navItems, siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-line bg-background/85 sticky top-0 z-50 border-b backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          className="text-foreground focus-visible:outline-accent font-mono text-sm font-semibold tracking-[0.18em] uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
          onClick={() => setIsOpen(false)}
        >
          {siteConfig.author}
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? 'page' : undefined}
              className={cn(
                'text-muted hover:text-foreground focus-visible:outline-accent px-3 py-2 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4',
                pathname === item.href && 'text-foreground',
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <button
            type="button"
            className="border-line bg-surface focus-visible:outline-accent flex h-10 w-10 flex-col items-center justify-center gap-1.5 border transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span className="bg-foreground h-0.5 w-5" />
            <span className="bg-foreground h-0.5 w-5" />
            <span className="bg-foreground h-0.5 w-5" />
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="border-line bg-background border-t px-5 py-4 md:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
                className={cn(
                  'text-muted hover:text-foreground focus-visible:outline-accent py-3 text-base transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4',
                  pathname === item.href && 'text-foreground',
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
