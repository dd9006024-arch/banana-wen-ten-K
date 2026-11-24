'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, ArrowUpRight } from 'lucide-react';
import { useCart } from '@/lib/use-cart';
import type { Product } from '@/lib/content';
export function ProductCard({product:p}:{product:Product}){const {add}=useCart();return <article className="product-card"><Link className="product-image" href={`/shop/${p.id}`}><Image src={p.image} alt={p.alt} fill sizes="(max-width: 700px) 90vw, 30vw"/><span className="product-category">{p.badge||p.category}</span><span className="image-arrow"><ArrowUpRight size={17}/></span></Link><div className="product-info"><div><span className="product-kind">{p.category}</span><h3>{p.name}</h3></div><strong>NT$ {p.price}</strong></div><p className="product-description">{p.description}</p><div className="product-bottom"><span className={p.stock?'in-stock':'sold-out'}>{p.stock?`現貨 ${p.stock} 件`:'本季完售'}</span>{p.stock?<button className="add-button" onClick={()=>add(p.id)}><ShoppingBag size={16}/>加入購物車</button>:<Link className="preorder-link" href="/shop">了解下一季 <ArrowUpRight size={14}/></Link>}</div></article>}
