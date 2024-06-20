"use client"
import Image from "next/image"
import Link from "next/link"
import Hamburger from "@/app/components/Hamburger"
import React, { useRef,useState,useEffect } from 'react';

export default function NavbarLanding() {

  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

	return (
    <>
        <Hamburger open={isOpen}/>
        <header className={`fixed top-0 z-30 w-full px-2 text-center ${scrolled ? 'text-black bg-white shadow-xl' : 'text-white bg-transparent'}`}>
            <div className="flex p-2 gap-3 justify-between items-center w-100">
                <h1 className="text-lg font-medium">Pardi Jaya Motor</h1>
                <div className="flex gap-5 hidden lg:inline-flex">
                    <Link href="#">Home</Link>
                    <Link href="#">Tentang</Link>
                    <Link href="https://wa.me/6281310893418">Chat Whatsapp</Link>
                </div>
                <div className="flex hidden lg:inline-flex gap-3">
                    <Link href="/toko" className="font-medium py-2 bg-blue-800 px-4 text-white rounded-lg shadow">Buka Toko</Link>
                    {/*<button className="py-3 bg-blue-800 px-3 py-2 text-white rounded-lg">Login</button>*/}
                </div>
                <button className="py-3 lg:hidden" onClick={()=>setOpen(!isOpen)}><i className="fa-solid fa-bars"></i></button>
            </div>
        </header>

    </>
	)
}