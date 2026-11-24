import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  title: { default: '蕉山・蕉香｜旗山香蕉，從土地到生活', template: '%s｜蕉山・蕉香' },
  description: '走進高雄旗山蕉園，認識友善栽培、產地故事與當季鮮蕉。探索蕉園體驗、在地文化與香蕉風味。',
  openGraph: { title: '蕉山・蕉香｜旗山香蕉，從土地到生活', description: '一口旗山香，品味土地的故事。', locale: 'zh_TW', type: 'website' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant-TW"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}
