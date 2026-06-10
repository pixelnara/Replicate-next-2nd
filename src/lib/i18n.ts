export const locales = ["ko", "en", "zh"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ko";

export const translations: Record<Locale, Record<string, string>> = {
  ko: {
    title: "K-Beauty Medical Tour | 세계가 선택한 K-뷰티",
    description: "전담 코디네이터가 당신만을 위한 맞춤형 뷰티 케어 경험을 설계합니다.",
    heroSubtitle: "K-Beauty Medical Tour",
    heroTitle: "세계가 선택한 K-뷰티",
    heroDesc: "전담 코디네이터가 당신만을 위한 최상의 뷰티 케어 경험을 설계합니다.",
    subscribe: "구독하기",
    login: "로그인",
    search: "검색",
    featuredTitle: "주요 기사",
    radioTitle: "KMEDITOUR Radio 최신 방송",
    longerReadsTitle: "심층 분석",
    newsletterTitle: "최신 소식 받기",
    newsletterDesc: "주간 인사이트, 스토리, 큐레이션 추천을 위해 뉴스레터를 구독하세요.",
    emailPlaceholder: "이메일 주소 입력",
  },
  en: {
    title: "K-Beauty Medical Tour | The World's Choice, K-Beauty",
    description: "Our dedicated coordinator will craft a personalized care experience to unlock your ultimate beauty.",
    heroSubtitle: "K-Beauty Medical Tour",
    heroTitle: "The World's Choice, K-Beauty",
    heroDesc: "Our dedicated coordinator will craft a personalized care experience to unlock your ultimate beauty.",
    subscribe: "Subscribe",
    login: "Login",
    search: "Search",
    featuredTitle: "Featured Stories",
    radioTitle: "Latest from KMEDITOUR Radio",
    longerReadsTitle: "Longer Reads",
    newsletterTitle: "Stay Informed",
    newsletterDesc: "Subscribe to our newsletter for weekly insights, stories, and curated recommendations.",
    emailPlaceholder: "Enter your email",
  },
  zh: {
    title: "K-美容医疗旅游 | 世界的选择，K-美容",
    description: "我们的专属协调员将为您量身定制护理体验，开启您的至美之旅。",
    heroSubtitle: "K-Beauty 医疗旅游",
    heroTitle: "世界的选择，K-美容",
    heroDesc: "我们的专属协调员将为您量身定制护理体验，开启您的至美之旅。",
    subscribe: "订阅",
    login: "登录",
    search: "搜索",
    featuredTitle: "精选文章",
    radioTitle: "KMEDITOUR Radio 最新节目",
    longerReadsTitle: "深度阅读",
    newsletterTitle: "获取最新资讯",
    newsletterDesc: "订阅我们的新闻通讯，每周获取洞察、故事和精选推荐。",
    emailPlaceholder: "输入您的电子邮件",
  },
};

export function getTranslation(locale: Locale) {
  return translations[locale] ?? translations[defaultLocale];
}
