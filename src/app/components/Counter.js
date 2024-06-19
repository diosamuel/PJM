"use client"
import {useState,useEffect} from "react"
import useCartStore from "@/app/components/cart/cart"

export default function Counter({className,produk}) {
    const { cart, removeFromCart, clearCart, seeQuantity,increaseQuantity,decreaseQuantity } = useCartStore();
    return (
        <>
        <div className={`flex flex-col gap-2 ${className}`}>
            <div className="flex items-center border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max rounded">
                <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none border-none" onClick={()=>decreaseQuantity(produk.id)}>-</div>
                <div className="h-8 w-8 text-md flex items-center justify-center text-xl border-none">{seeQuantity(produk.id)}</div>
                <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none border-none" onClick={()=>increaseQuantity(produk.id)}>+</div>
            </div>
            <p className="text-sm">Stok: <span className="font-bold">{produk.stok}</span></p>
        </div>
        </>
        )

}