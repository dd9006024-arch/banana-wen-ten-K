'use client';
import { useEffect, useState } from 'react';
export type CartLine={id:string,quantity:number};
const KEY='qishan-cart-v1';
export function useCart(){const [items,setItems]=useState<CartLine[]>([]);useEffect(()=>{try{setItems(JSON.parse(localStorage.getItem(KEY)||'[]'))}catch{setItems([])}},[]);function save(next:CartLine[]){setItems(next);localStorage.setItem(KEY,JSON.stringify(next))}function add(id:string,quantity=1){const old=items.find(x=>x.id===id);save(old?items.map(x=>x.id===id?{...x,quantity:x.quantity+quantity}:x):[...items,{id,quantity}])}function setQuantity(id:string,quantity:number){save(quantity<1?items.filter(x=>x.id!==id):items.map(x=>x.id===id?{...x,quantity}:x))}function remove(id:string){save(items.filter(x=>x.id!==id))}return {items,add,setQuantity,remove,clear:()=>save([])}}
