import { Play } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getTranslation, locales } from "@/lib/i18n";
import Header from "@/app/components/Header";

interface PageProps {
  params: Promise<{ lang: Locale }>;
}

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;
  const t = getTranslation(lang);

  return (
    <div className="min-h-screen bg-white">
      <Header lang={lang} t={t} />

      {/* Ticker Bar */}
      <div className="bg-[#3b33d9] text-white overflow-hidden relative h-8">
        <div className="absolute whitespace-nowrap animate-scroll">
          <span className="inline-block px-8">
            <span className="font-bold">MARKETS</span> | European indices open mixed ahead of rate decision
          </span>
          <span className="inline-block px-8">
            <span className="font-bold">BUSINESS</span> | Tech sector sees record growth in Q2 earnings
          </span>
          <span className="inline-block px-8">
            <span className="font-bold">GLOBAL</span> | International summit addresses climate policy reform
          </span>
          <span className="inline-block px-8">
            <span className="font-bold">MARKETS</span> | European indices open mixed ahead of rate decision
          </span>
          <span className="inline-block px-8">
            <span className="font-bold">BUSINESS</span> | Tech sector sees record growth in Q2 earnings
          </span>
          <span className="inline-block px-8">
            <span className="font-bold">GLOBAL</span> | International summit addresses climate policy reform
          </span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative h-screen w-full overflow-hidden border-b border-black">
        <img
          src="https://images.unsplash.com/photo-1602479185195-32f5cd203559?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYSUyMHNlb3VsJTIwdHJhZGl0aW9uYWwlMjBwYWxhY2UlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzgwNDczOTgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Korean traditional palace"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-20"></div>
        <div
          className="relative h-full flex items-center justify-center text-center text-white"
          style={{ fontFamily: 'Optima, Candara, "Noto Sans", source-sans-pro, sans-serif' }}
        >
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="text-2xl md:text-3xl mb-4 uppercase tracking-wider">{t.heroSubtitle}</div>
            <p className="text-6xl md:text-8xl mb-6 font-bold">{t.heroTitle}</p>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">{t.heroDesc}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mb-16 border-t border-black">
          <FeaturedArticle
            category="MEDICAL"
            title="The New Luxury: Sustainable Style for Modern Living"
            readTime="5 min read"
            image="https://images.unsplash.com/photo-1769305171851-897e01aa095c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxlZGl0b3JpYWwlMjBmYXNoaW9uJTIwbWFnYXppbmUlMjBsdXh1cnl8ZW58MXx8fHwxNzgwNDcxMTY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
          />
          <FeaturedArticle
            category="TOUR"
            title="Urban Renewal: Cities Reimagining Public Spaces"
            readTime="8 min read"
            image="https://images.unsplash.com/photo-1522069365959-25716fb5001a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBjaXR5c2NhcGUlMjB1cmJhbnxlbnwxfHx8fDE3ODA0NzExNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          />
          <FeaturedArticle
            category="MEDICAL"
            title="The Future of Work: Leading in a Hybrid World"
            readTime="6 min read"
            image="https://images.unsplash.com/photo-1763739530672-4aadafbd81ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBlb3BsZSUyMHByb2Zlc3Npb25hbCUyMG9mZmljZXxlbnwxfHx8fDE3ODA0NzExNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          />
          <FeaturedArticle
            category="TOUR"
            title="Editorial Excellence: The Art of Visual Storytelling"
            readTime="7 min read"
            image="https://images.unsplash.com/photo-1777828828769-c8fe6bc61c8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxlZGl0b3JpYWwlMjBmYXNoaW9uJTIwbWFnYXppbmUlMjBsdXh1cnl8ZW58MXx8fHwxNzgwNDcxMTY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
          />
          <FeaturedArticle
            category="MEDICAL"
            title="Minimalist Aesthetics: Less is More in Contemporary Design"
            readTime="4 min read"
            image="https://images.unsplash.com/photo-1512591290618-904e04936827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBjaXR5c2NhcGUlMjB1cmJhbnxlbnwxfHx8fDE3ODA0NzExNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          />
          <FeaturedArticle
            category="TOUR"
            title="City Guide: Discovering Hidden Gems in Global Capitals"
            readTime="10 min read"
            image="https://images.unsplash.com/photo-1604302880008-a1db633602ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBjaXR5c2NhcGUlMjB1cmJhbnxlbnwxfHx8fDE3ODA0NzExNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          />
        </div>

        {/* Radio Section */}
        <section className="border-t border-black pt-12 mb-16">
          <h2 className="text-3xl font-bold mb-8">{t.radioTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RadioShow title="The Globalist" duration="55 min" description="International news and analysis with live interviews" />
            <RadioShow
              title="The Entrepreneurs"
              duration="28 min"
              description="Business insights from startup founders and industry leaders"
            />
            <RadioShow title="Culture with KMEDITOUR" duration="42 min" description="Art, design, and cultural conversations" />
          </div>
        </section>

        {/* Longer Reads Section */}
        <section className="border-t border-black pt-12 mb-16">
          <h2 className="text-3xl font-bold mb-8">{t.longerReadsTitle}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <LongRead
              category="TOUR"
              title="The Changing Face of European Politics: A Deep Dive"
              excerpt="An in-depth examination of political shifts across the continent and what they mean for the future of international cooperation."
              readTime="15 min read"
              image="https://images.unsplash.com/photo-1758518727077-ffb66ffccced?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMHBlb3BsZSUyMHByb2Zlc3Npb25hbCUyMG9mZmljZXxlbnwxfHx8fDE3ODA0NzExNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            />
            <LongRead
              category="MEDICAL"
              title="The Rise of Conscious Capitalism: Profit with Purpose"
              excerpt="How businesses are balancing financial success with social responsibility and environmental stewardship."
              readTime="12 min read"
              image="https://images.unsplash.com/photo-1758518729463-0bb73ed899ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMHBlb3BsZSUyMHByb2Zlc3Npb25hbCUyMG9mZmljZXxlbnwxfHx8fDE3ODA0NzExNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            />
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="border-t border-black pt-12 mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{t.newsletterTitle}</h2>
            <p className="text-neutral-600 mb-6">{t.newsletterDesc}</p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                className="flex-1 px-4 py-3 border border-neutral-300 focus:outline-none focus:border-black"
              />
              <button className="px-6 py-3 bg-[#087eec] text-white hover:bg-[#0668c4] transition">{t.subscribe}</button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-black bg-neutral-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Topics</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>
                  <a href="#" className="hover:text-[#087eec]">
                    Affairs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#087eec]">
                    Business
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#087eec]">
                    Culture
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#087eec]">
                    Design
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Discover</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>
                  <a href="#" className="hover:text-[#087eec]">
                    Magazine
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#087eec]">
                    Radio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#087eec]">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#087eec]">
                    City Guides
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Our Brand</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>
                  <a href="#" className="hover:text-[#087eec]">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#087eec]">
                    Locations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#087eec]">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#087eec]">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>
                  <a href="#" className="hover:text-[#087eec]">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#087eec]">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#087eec]">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-200 text-center text-sm text-neutral-600">
            <p>&copy; 2026 K-Beauty Medical Tour. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeaturedArticle({ category, title, readTime, image }: { category: string; title: string; readTime: string; image: string }) {
  const categoryColor = category === "MEDICAL" ? "text-[#087eec]" : "text-[#10b981]";

  return (
    <article className="group cursor-pointer border-r border-b border-black p-4">
      <div className="aspect-[4/3] overflow-hidden mb-4 bg-neutral-100">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
      </div>
      <div className={`text-xs uppercase tracking-wider font-semibold mb-2 ${categoryColor}`}>{category}</div>
      <h3 className="text-xl font-bold mb-2 group-hover:underline transition">{title}</h3>
      <div className="text-sm text-neutral-500">{readTime}</div>
    </article>
  );
}

function RadioShow({ title, duration, description }: { title: string; duration: string; description: string }) {
  return (
    <div className="group cursor-pointer">
      <div className="flex items-center gap-4 mb-3">
        <div className="w-12 h-12 bg-[#087eec] rounded-full flex items-center justify-center group-hover:bg-[#0668c4] transition">
          <Play className="w-5 h-5 text-white fill-white" />
        </div>
        <div>
          <h3 className="font-bold group-hover:underline transition">{title}</h3>
          <div className="text-sm text-neutral-500">{duration}</div>
        </div>
      </div>
      <p className="text-sm text-neutral-600">{description}</p>
    </div>
  );
}

function LongRead({
  category,
  title,
  excerpt,
  readTime,
  image,
}: {
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  image: string;
}) {
  const categoryColor = category === "MEDICAL" ? "text-[#087eec]" : "text-[#10b981]";

  return (
    <article className="group cursor-pointer flex gap-6 pb-8 border-b border-black mb-8">
      <div className="w-1/3 aspect-[3/4] overflow-hidden bg-neutral-100 flex-shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
      </div>
      <div className="flex-1">
        <div className={`text-xs uppercase tracking-wider font-semibold mb-2 ${categoryColor}`}>{category}</div>
        <h3 className="text-2xl font-bold mb-3 group-hover:underline transition">{title}</h3>
        <p className="text-neutral-600 mb-3">{excerpt}</p>
        <div className="text-sm text-neutral-500">{readTime}</div>
      </div>
    </article>
  );
}
