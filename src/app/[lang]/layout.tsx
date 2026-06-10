import type { Metadata } from 'next'
import { locales, type Locale, getTranslation } from '@/lib/i18n'

interface LangLayoutProps {
  children: React.ReactNode
  params: Promise<{ lang: Locale }>
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>
}): Promise<Metadata> {
  const { lang } = await params
  const t = getTranslation(lang)

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://k-beauty-medical-tour.vercel.app'

  return {
    title: t.title,
    description: t.description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        ko: '/ko',
        en: '/en',
        zh: '/zh',
        'x-default': '/ko',
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      locale: lang === 'ko' ? 'ko_KR' : lang === 'zh' ? 'zh_CN' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
    },
  }
}

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default async function LangLayout({ children }: LangLayoutProps) {
  return <>{children}</>
}
