"use client";

import { useState } from "react";
import { Menu, Search, ShoppingBag } from "lucide-react";
import type { Locale } from "@/lib/i18n";

interface HeaderProps {
  lang: Locale;
  t: Record<string, string>;
}

export default function Header({ lang, t }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Black Bar */}
      <div className="bg-black text-white text-xs">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-8">
            <div className="flex items-center gap-6">
              <span>Tokyo 16:43</span>
              <span>Zürich 09:39</span>
              <span>Singapore 15:39</span>
              <span>New York 03:39</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:opacity-60 transition">
                {t.login}
              </a>
              <a href="#" className="hover:opacity-60 transition">
                {t.search}
              </a>
              <a href="#" className="hover:opacity-60 transition">
                {t.subscribe}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Top Navigation */}
      <nav className="border-b border-neutral-200">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 hover:bg-neutral-100 rounded-sm lg:hidden"
                aria-label="메뉴 열기"
              >
                <Menu className="w-5 h-5" />
              </button>
              <a href={`/${lang}`} className="text-2xl font-bold tracking-tight">
                KMEDITOUR
              </a>
              <div className="hidden lg:flex items-center gap-6 text-sm">
                <a href="#" className="hover:text-[#087eec] transition">
                  Magazine
                </a>
                <a href="#" className="hover:text-[#087eec] transition">
                  Radio
                </a>
                <a href="#" className="hover:text-[#087eec] transition">
                  Shop
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 text-xs">
                <a href="/ko" className={`px-1 hover:text-[#087eec] transition ${lang === "ko" ? "font-bold underline" : ""}`}>
                  KO
                </a>
                <span className="text-neutral-300">|</span>
                <a href="/en" className={`px-1 hover:text-[#087eec] transition ${lang === "en" ? "font-bold underline" : ""}`}>
                  EN
                </a>
                <span className="text-neutral-300">|</span>
                <a href="/zh" className={`px-1 hover:text-[#087eec] transition ${lang === "zh" ? "font-bold underline" : ""}`}>
                  ZH
                </a>
              </div>
              <button className="p-2 hover:bg-neutral-100 rounded-sm" aria-label="검색">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-neutral-100 rounded-sm" aria-label="장바구니">
                <ShoppingBag className="w-5 h-5" />
              </button>
              <button className="hidden sm:block px-4 py-2 bg-[#087eec] text-white text-sm hover:bg-[#0668c4] transition">
                {t.subscribe}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-neutral-200 px-4 py-4">
            <div className="flex flex-col gap-3 text-sm">
              <a href="#" className="hover:text-[#087eec] transition">
                Magazine
              </a>
              <a href="#" className="hover:text-[#087eec] transition">
                Radio
              </a>
              <a href="#" className="hover:text-[#087eec] transition">
                Shop
              </a>
              <hr className="border-neutral-200" />
              <a href="#" className="hover:text-[#087eec] transition">
                Affairs
              </a>
              <a href="#" className="hover:text-[#087eec] transition">
                Business
              </a>
              <a href="#" className="hover:text-[#087eec] transition">
                Culture
              </a>
              <a href="#" className="hover:text-[#087eec] transition">
                Design
              </a>
              <a href="#" className="hover:text-[#087eec] transition">
                Fashion
              </a>
              <a href="#" className="hover:text-[#087eec] transition">
                Travel
              </a>
              <a href="#" className="hover:text-[#087eec] transition">
                City Guides
              </a>
            </div>
          </div>
        )}

        {/* Secondary Navigation */}
        <div className="border-t border-neutral-200 hidden lg:block">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-6 text-sm py-3">
              <a href="#" className="hover:text-[#087eec] transition">
                Affairs
              </a>
              <a href="#" className="hover:text-[#087eec] transition">
                Business
              </a>
              <a href="#" className="hover:text-[#087eec] transition">
                Culture
              </a>
              <a href="#" className="hover:text-[#087eec] transition">
                Design
              </a>
              <a href="#" className="hover:text-[#087eec] transition">
                Fashion
              </a>
              <a href="#" className="hover:text-[#087eec] transition">
                Travel
              </a>
              <a href="#" className="hover:text-[#087eec] transition">
                City Guides
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
