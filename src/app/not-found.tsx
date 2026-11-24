import Link from 'next/link';
export default function NotFound(){return <main className="not-found"><p className="eyebrow">404 · PAGE NOT FOUND</p><h1 className="section-title">這條小路暫時走不到。</h1><p className="muted">頁面可能已經搬家，回首頁重新出發吧。</p><Link className="button button-green" href="/">回到蕉山首頁</Link></main>}
