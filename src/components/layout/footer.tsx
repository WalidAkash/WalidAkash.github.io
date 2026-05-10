import Link from 'next/link';

import { siteConfig } from '@/config/site';

const socialLinks = [
  { href: siteConfig.links.github, label: 'GitHub' },
  { href: siteConfig.links.linkedin, label: 'LinkedIn' },
  { href: siteConfig.links.email, label: 'Email' },
].filter((link) => Boolean(link.href));

export function Footer() {
  return (
    <footer className="border-line border-t">
      <div className="text-muted mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-8 text-sm sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>
          (c) {new Date().getFullYear()} {siteConfig.author}. Built for static
          deployment.
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-3">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-foreground focus-visible:outline-accent min-h-10 px-1 py-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
