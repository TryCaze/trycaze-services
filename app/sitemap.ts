import { allBlogPosts } from '@/data';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://trycaze-services.vercel.app';

  // Statične stranice
  const staticPages: MetadataRoute.Sitemap = [
    '',
    '/o-nama',
    '/usluge',
    '/poslovne',
    '/it-podrska',
    '/popravci',
    '/sastavljanje-racunala',
    '/3dprintanje',
    '/izrada-web-stranica',
    '/blog',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: path === '' ? 'daily' : 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));

  // Dinamične stranice — tvoji blog postovi iz data foldera
  const blogPages: MetadataRoute.Sitemap = allBlogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt
      ? new Date(post.updatedAt).toISOString()
      : new Date(post.date).toISOString(),
    changeFrequency: 'weekly',
    priority: post.featured ? 0.9 : 0.7,
  }));

  return [...staticPages, ...blogPages];
}