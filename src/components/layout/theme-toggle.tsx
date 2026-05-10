'use client';

import { useEffect, useState } from 'react';

import { siteConfig } from '@/config/site';

type Theme = 'light' | 'dark';

function getPreferredTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  const storedTheme = window.localStorage.getItem(siteConfig.themeStorageKey);

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => getPreferredTheme());

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(siteConfig.themeStorageKey, theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() =>
        setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
      }
      className="border-line bg-surface text-foreground hover:border-accent focus-visible:outline-accent min-h-10 border px-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      suppressHydrationWarning
    >
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
}
