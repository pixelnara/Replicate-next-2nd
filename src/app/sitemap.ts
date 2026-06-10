import type { MetadataRoute } from 'next'
import { locales } from '@/lib/i18n'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://k-beauty-medical-tour.vercel.app'

  return locales.map((lang) => ({
    url: `${baseUrl}/${lang}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: lang === 'ko' ? 1 : 0.9,
  }))
}
