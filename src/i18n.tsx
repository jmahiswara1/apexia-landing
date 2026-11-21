import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Locale = 'id' | 'en';

const STORAGE_KEY = 'apexia-landing:lang';

function detectLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'id' || saved === 'en') return saved;
  } catch {
    // ignore storage errors
  }
  const tag = (navigator.languages?.[0] ?? navigator.language ?? 'id').toLowerCase();
  return tag.startsWith('id') || tag.startsWith('in') ? 'id' : 'en';
}

const dict = {
  id: {
    // Navbar
    'nav.home': 'Beranda',
    'nav.features': 'Fitur',
    'nav.download': 'Unduh',
    'nav.getApp': 'Unduh App',

    // Hero (HomePage)
    'hero.titleBefore': 'Atur',
    'hero.titleAfter': 'turnamen,',
    'hero.titleLine2': 'main lebih seru bersama teman',
    'hero.subtitle':
      'Susun bagan, catat skor langsung per rack, dan undi giliran break dalam satu aplikasi ringan — langsung dari perangkat Anda tanpa ribet.',
    'hero.ctaPrimary': 'Unduh Apexia',
    'hero.ctaSecondary': 'Lihat Fitur',
    'hero.pill1': 'Mode Pemain & Panitia',
    'hero.pill2': 'Skor Langsung per Rack',
    'hero.pill3': '100% Offline & Privat',
    'hero.pill4': 'Roda Undian Break',
    'hero.pill5': 'Cadangan Data JSON',
    'hero.stat1Tag': 'Format',
    'hero.stat1Value': '6 Format',
    'hero.stat2Tag': 'Kapasitas',
    'hero.stat2Value': '64 Pemain',

    // Features Page
    'features.title': 'Semua yang Anda butuhkan dari meja ke juara',
    'features.subtitle':
      'Baik main santai bareng teman maupun mengelola turnamen klub, Apexia menjaga jadwal, skor, dan klasemen tetap rapi bahkan tanpa koneksi internet.',
    'features.cta': 'Unduh sekarang',
    'features.item1Title': 'Mode Pemain & Mode Panitia',
    'features.item1Desc':
      'Ganti mode kapan saja. Mode Pemain ringkas untuk main bareng teman; Mode Panitia lengkap dengan antrean 4 meja dan kontrol jadwal.',
    'features.item2Title': '6 Format Turnamen Lengkap',
    'features.item2Desc':
      'Single Match, Knockout, Double Elimination dengan bracket reset, Liga hingga 10 putaran, Grup + Knockout, hingga Swiss System.',
    'features.item3Title': 'Skor Langsung per Rack',
    'features.item3Desc':
      'Papan skor besar yang nyaman ditekan dengan tombol + / −, otomatis tersimpan tiap rack, dan validasi target Race to secara instan.',
    'features.item4Title': 'Roda Undian & Undi Break',
    'features.item4Desc':
      'Tentukan siapa break pertama secara adil dengan roda undian berfisika jarum realistis, atau pakai bebas hingga 16 pilihan acak.',
    'features.item5Title': 'Perayaan Juara & Klasemen Otomatis',
    'features.item5Desc':
      'Klasemen, selisih rack, head-to-head, dan tiebreak dihitung otomatis — ditutup dengan animasi perayaan saat juara dinobatkan.',
    'features.item6Title': '100% Offline, Backup JSON & Dwi Bahasa',
    'features.item6Desc':
      'Seluruh data tersimpan lokal di perangkat. Ekspor atau pulihkan semua turnamen dalam satu file JSON, tersedia dalam Bahasa Indonesia & English.',

    // Download Page
    'download.title': 'Pasang Apexia di perangkat Anda',
    'download.subtitle':
      'Gratis, ringan, dan langsung berjalan offline. Pilih platform yang paling nyaman untuk Anda gunakan.',
    'download.pwaBadge': 'Disarankan · iOS & Android',
    'download.pwaTitle': 'Web App (PWA)',
    'download.pwaDesc':
      'Langsung buka dari Safari iPhone atau Chrome Android lalu pasang ke Layar Utama — tampil layar penuh tanpa lewat App Store.',
    'download.pwaCta': 'Buka Web App',
    'download.androidBadge': 'Native Android',
    'download.androidTitle': 'Android APK',
    'download.androidDesc':
      'Paket pemasangan langsung untuk perangkat Android dengan performa native penuh dan penyimpanan lokal.',
    'download.androidCta': 'Unduh APK (Segera)',
    'download.iosBadge': 'Panduan iPhone & iPad',
    'download.iosTitle': 'Pasang di iOS via Safari',
    'download.iosDesc':
      'Nikmati Apexia di iPhone tanpa App Store dan tanpa masa kedaluwarsa lewat fitur Add to Home Screen Safari.',
    'download.iosCta': 'Buka di Safari',
    'download.guideTitle': 'Cara memasang PWA di HP (3 langkah)',
    'download.step1Title': '1. Buka Web App',
    'download.step1Desc': 'Buka tautan Web App Apexia di Safari (iPhone) atau Chrome (Android).',
    'download.step2Title': '2. Pilih Tambahkan ke Layar Utama',
    'download.step2Desc': 'Ketuk ikon Share di Safari lalu pilih "Add to Home Screen" (atau "Install App" di Chrome).',
    'download.step3Title': '3. Siap dipakai offline',
    'download.step3Desc': 'Ikon Apexia muncul di Home Screen dan siap dipakai kapan saja, bahkan tanpa internet.',
    'download.placeholderNote': 'Tautan unduhan saat ini masih menggunakan placeholder dan dapat diperbarui kapan saja melalui src/config.ts.',

    // Footer
    'footer.tagline': 'Turnamen biliar dalam genggaman.',
    'footer.rights': '© {year} apexia. Semua hak dilindungi.',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.download': 'Download',
    'nav.getApp': 'Get App',

    // Hero (HomePage)
    'hero.titleBefore': 'Run',
    'hero.titleAfter': 'tournaments,',
    'hero.titleLine2': 'play sharper with every rack',
    'hero.subtitle':
      'Build brackets, track live rack-by-rack scores, and spin for first break in one sleek offline app — right from your pocket.',
    'hero.ctaPrimary': 'Download Apexia',
    'hero.ctaSecondary': 'Explore Features',
    'hero.pill1': 'Player & Organizer Modes',
    'hero.pill2': 'Live Rack Scoreboard',
    'hero.pill3': '100% Offline & Private',
    'hero.pill4': 'Spin Wheel Break Draw',
    'hero.pill5': 'Local JSON Backup',
    'hero.stat1Tag': 'Formats',
    'hero.stat1Value': '6 Formats',
    'hero.stat2Tag': 'Capacity',
    'hero.stat2Value': '64 Players',

    // Features Page
    'features.title': 'Everything you need from rack one to champion',
    'features.subtitle':
      'Whether playing casually with friends or running a club cup, Apexia keeps fixtures, scores, and standings effortless — even offline.',
    'features.cta': 'Download now',
    'features.item1Title': 'Player & Organizer Modes',
    'features.item1Desc':
      'Switch modes anytime. Player Mode keeps friendly sessions effortless; Organizer Mode adds a 4-table queue and full schedule control.',
    'features.item2Title': '6 Complete Tournament Formats',
    'features.item2Desc':
      'Single Match, Single Elimination, Double Elimination with reset final, League up to 10 cycles, Groups + Knockout, and Swiss System.',
    'features.item3Title': 'Live Rack-by-Rack Scoring',
    'features.item3Desc':
      'Large thumb-friendly scoreboard with + / − controls, auto-saved on every rack with instant Race-to target validation.',
    'features.item4Title': 'Spin Wheel & First Break Draw',
    'features.item4Desc':
      'Decide first break fairly with a realistic flapper-physics wheel, or spin custom lists with up to 16 random choices.',
    'features.item5Title': 'Champion Celebration & Standings',
    'features.item5Desc':
      'Standings, rack difference, head-to-head, and tiebreakers update automatically — crowned with a celebratory trophy motion.',
    'features.item6Title': '100% Offline, JSON Backup & Bilingual',
    'features.item6Desc':
      'All data stays privately on your device. Export or restore every tournament in one JSON file, available in English & Bahasa Indonesia.',

    // Download Page
    'download.title': 'Install Apexia on your device',
    'download.subtitle':
      'Free, lightweight, and works completely offline. Choose the option that fits your device best.',
    'download.pwaBadge': 'Recommended · iOS & Android',
    'download.pwaTitle': 'Web App (PWA)',
    'download.pwaDesc':
      'Open in iPhone Safari or Android Chrome and add to your Home Screen — full-screen app experience with no App Store required.',
    'download.pwaCta': 'Launch Web App',
    'download.androidBadge': 'Native Android',
    'download.androidTitle': 'Android APK',
    'download.androidDesc':
      'Direct install package for Android devices with full native performance and local offline storage.',
    'download.androidCta': 'Download APK (Soon)',
    'download.iosBadge': 'iPhone & iPad Guide',
    'download.iosTitle': 'Install on iOS via Safari',
    'download.iosDesc':
      'Run Apexia on iPhone without the App Store and with no expiration via Safari Add to Home Screen.',
    'download.iosCta': 'Open in Safari',
    'download.guideTitle': 'How to install the PWA on mobile (3 steps)',
    'download.step1Title': '1. Open the Web App',
    'download.step1Desc': 'Visit the Apexia Web App link in Safari (iPhone) or Chrome (Android).',
    'download.step2Title': '2. Tap Add to Home Screen',
    'download.step2Desc': 'Tap Share in Safari and pick "Add to Home Screen" (or "Install App" in Chrome).',
    'download.step3Title': '3. Play offline anytime',
    'download.step3Desc': 'Apexia appears on your Home Screen and works anywhere, even without internet.',
    'download.placeholderNote': 'Download links currently use placeholders and can be updated anytime in src/config.ts.',

    // Footer
    'footer.tagline': 'Billiard tournaments in your pocket.',
    'footer.rights': '© {year} apexia. All rights reserved.',
  },
} as const;

export type TranslationKey = keyof typeof dict.id;

type I18nValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  t: (key: TranslationKey, params?: Record<string, string | number>) => string;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore storage errors
    }
  };

  const t = (key: TranslationKey, params?: Record<string, string | number>) => {
    let text: string = dict[locale][key] ?? dict.id[key];
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        text = text.replaceAll(`{${k}}`, String(v));
      }
    }
    return text;
  };

  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider');
  return ctx;
}
