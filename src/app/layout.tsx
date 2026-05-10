import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import type { ReactNode } from 'react';

import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { createSiteMetadata } from '@/lib/seo';
import { siteConfig } from '@/config/site';
import { withBasePath } from '@/lib/utils';
import './globals.css';

const sans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = createSiteMetadata();

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f7f2' },
    { media: '(prefers-color-scheme: dark)', color: '#0c0f0d' },
  ],
};

function ThemeScript() {
  const code = `
    (function() {
      try {
        var stored = window.localStorage.getItem('${siteConfig.themeStorageKey}');
        var theme = stored === 'light' || stored === 'dark'
          ? stored
          : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.documentElement.dataset.theme = theme;
      } catch (_) {}
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="shortcut icon" href={withBasePath('/favicon.svg')} />
        <link
          rel="icon"
          href={withBasePath('/favicon.svg')}
          type="image/svg+xml"
        />
        <link rel="apple-touch-icon" href={withBasePath('/favicon.svg')} />
        <ThemeScript />
      </head>
      <body className={`${sans.variable} ${mono.variable} antialiased`}>
        <a
          href="#main-content"
          className="bg-surface text-foreground focus-visible:outline-accent sr-only fixed top-4 left-4 z-[60] border px-4 py-2 focus:not-sr-only focus:outline focus:outline-2 focus:outline-offset-4"
        >
          Skip to main content
        </a>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
