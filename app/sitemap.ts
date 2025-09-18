import type {MetadataRoute} from 'next';
import th from '@/messages/th.json';
import en from '@/messages/en.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://your-domain.com';
  const now = new Date();
  const locales = ['th','en'] as const;
  const pages = ['', '/about', '/projects', '/contact', '/resume'];
  const urls: MetadataRoute.Sitemap = [];
  for (const l of locales) {
    for (const p of pages) urls.push({ url: `${base}/${l}${p}`, lastModified: now });
  }
  const slugsTh = (th.projects?.items ?? []).map(i => i.slug);
  const slugsEn = (en.projects?.items ?? []).map(i => i.slug);
  for (const slug of slugsTh) urls.push({ url: `${base}/th/projects/${slug}`, lastModified: now });
  for (const slug of slugsEn) urls.push({ url: `${base}/en/projects/${slug}`, lastModified: now });
  return urls;
}
