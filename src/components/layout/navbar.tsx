'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { navItems, siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { useTheme } from '@/providers/theme-provider';

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
          <button
            type="button"
            onClick={toggleTheme}
            className="border-line bg-surface text-foreground hover:border-accent focus-visible:outline-accent min-h-10 border px-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            suppressHydrationWarning
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>

          <button
            type="button"
            className="border-line bg-surface flex h-10 w-10 flex-col items-center justify-center gap-1.5 border md:hidden"
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
                className="text-muted hover:text-foreground py-3 text-base transition"
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
