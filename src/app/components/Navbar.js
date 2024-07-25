'use client';
import Image from 'next/image';
import Link from 'next/link';
import Swal from 'sweetalert2';
import useCartStore from '@/app/components/cart/cart';
import Hamburger from '@/app/components/Hamburger';
import React, { useRef, useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Spinner from '@/app/components/Spinner';

const SearchForm = ({ searchInput }) => {
  const searchParams = useSearchParams();
  const keywordBarang = searchParams.get('cari');

  useEffect(() => {
    if (searchInput.current) {
      searchInput.current.value = keywordBarang || '';
    }
  }, [keywordBarang, searchInput]);

  return (
    <form
      className="p-3 max-w-xl relative flex"
      method="get"
      action="/toko/katalog"
    >
      <input
        type="text"
        name="cari"
        id="search"
        className="w-[30em] rounded-l-lg border border-gray-300 px-5 text-black focus:outline-none"
        placeholder="Cari Barang Disini..."
        minLength={0}
        ref={searchInput}
      />
      <button
        className="text-lg text-white bg-blue-800 px-3 rounded-r"
        type="submit"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default function Navbar() {
  const { cart } = useCartStore();
  const searchInput = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const jualBakModal = () => {
    Swal.fire({
      title: 'Tukar Tambah Bak',
      text: `Anda ingin menukar bak anda? chat whatsapp dibawah`,
      icon: 'success',
      confirmButtonText: 'Kirim Whatsapp',
      customClass: {
        confirmButton: 'bg-blue-600',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        let nomorTelepon = '6281310893418';
        let pesan = encodeURIComponent(
          'Halo, saya tertarik dengan Tukar Tambah Bak'
        );
        let url = `https://wa.me/${nomorTelepon}?text=${pesan}`;
        window.location.href = url;
      }
    });
  };

  return (
    <>
      <header className="bg-white fixed top-0 z-30 w-full shadow-md border-b-4 border-white hidden lg:block">
        <div className="flex justify-between mx-10">
          <div className="flex items-center gap-5 font-regular">
            <Link href="/toko" className="hidden lg:block">
              <Image
                src="/logo.jpg"
                alt="Logo"
                className="w-10"
                width={100}
                height={100}
              />
            </Link>
            <Link
              href="/toko"
              className="text-black hover:text-black transition hover:font-medium"
            >
              Home
            </Link>
            <Link
              href="/toko/katalog"
              className="text-black hover:text-black transition hover:font-medium"
            >
              Semua Katalog
            </Link>
            <Link
              href="/"
              className="text-black hover:text-black transition hover:font-medium"
            >
              Tentang Kami
            </Link>
          </div>

          <div className="flex">
            <Suspense fallback={<Spinner />}>
              <SearchForm searchInput={searchInput} />
            </Suspense>
            <button
              className="w-100 bg-white border-2 border-orange-500 text-orange-500 transition m-3 p-2 px-3 rounded-full font-semibold text-sm hover:bg-orange-500 hover:text-white"
              onClick={jualBakModal}
            >
              JUAL BAK ANDA <i className="fa-solid fa-plus"></i>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/toko/keranjang"
              className="text-center text-black hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <i className="fa-solid fa-bag-shopping"></i>
              </div>
              <div className="text-sm leading-3">Keranjang</div>
              <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-blue-600 text-white text-sm">
                {cart.length || 0}
              </div>
            </Link>
{/*            <Link
              href={`${process.env.NEXT_PUBLIC_API_DASHBOARD}/login`}
              className="text-center text-black hover:text-primary transition relative hidden lg:block"
            >
              <div className="text-2xl">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text-sm leading-3">Akun</div>
            </Link>*/}
          </div>
        </div>
      </header>

      {/* Navbar Mobile */}
      <header className="bg-white fixed top-0 z-30 w-full shadow-md border-b-4 border-white px-2 text-center lg:hidden">
        <div className="flex p-2 gap-3 items-center w-full">
          <div className="w-1/12">
            <button className="py-3" onClick={() => setOpen(!isOpen)}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
          <form
            className="flex items-center w-full"
            method="get"
            action="/toko/katalog"
          >
            <input
              placeholder="Cari Barang Disini..."
              className="border border-gray-400 p-2 px-5 rounded w-full"
              name="cari"
            />
            <span className="relative right-10">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </form>
          <Link
            href="/toko/keranjang"
            className="text-center text-black hover:text-primary transition w-1/12 relative"
          >
            <div className="text-xl absolute">
              <i className="fa-solid fa-bag-shopping"></i>
            </div>
            <span className="relative -right-2 -top-2 w-5 h-5 rounded-full flex items-center justify-center bg-blue-600 text-white text-sm">
              {cart.length || 0}
            </span>
          </Link>
        </div>
      </header>
      <Hamburger open={isOpen} />
    </>
  );
}
