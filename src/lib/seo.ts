import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';
import { withBasePath } from '@/lib/utils';

const defaultSocialImage = '/walid-akash-profile.jpg';

type SeoOptions = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
};

export function absoluteUrl(path = '/'): string {
  return new URL(path, siteConfig.url).toString();
}

export function buildTitle(title?: string): string {
  return title ? `${title} | ${siteConfig.name}` : siteConfig.name;
}

export function createMetadata({
  title,
  description = siteConfig.description,
  path = '/',
  image = defaultSocialImage,
}: SeoOptions = {}): Metadata {
  const canonicalPath = path || '/';
  const url = absoluteUrl(canonicalPath);
  const socialImage = absoluteUrl(withBasePath(image));

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: buildTitle(title),
      description,
      url,
      siteName: siteConfig.name,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: socialImage,
          alt: `${siteConfig.name} preview image`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: buildTitle(title),
      description,
      images: [socialImage],
    },
  };
}

export function createSiteMetadata(): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    keywords: [...siteConfig.keywords],
    robots: {
      index: true,
      follow: true,
    },
    ...createMetadata(),
  };
}
