'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
const links = [['品牌故事','/about'],['產地好蕉','/shop'],['熟度指南','/ripeness'],['蕉園體驗','/experience'],['旗山散步','/culture'],['蕉香食譜','/recipes']];
export function SiteHeader(){const [open,setOpen]=useState(false);return <header className="header"><Link href="/" className="brand"><span className="brand-mark">蕉</span><span><b>蕉山・蕉香</b><small>BANANA ORIGIN.</small></span></Link><nav className={open?'nav open':'nav'}>{links.map(([n,h])=><Link key={h} href={h} onClick={()=>setOpen(false)}>{n}</Link>)}</nav><div className="header-actions"><Link className="cart-link" href="/cart" aria-label="購物車"><ShoppingBag size={19}/><span>購物車</span></Link><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="切換選單">{open?<X/>:<Menu/>}</button></div></header>}
