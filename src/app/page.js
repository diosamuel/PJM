'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/NavbarLanding';
import Card from '@/app/components/Card2';
import ServiceCard from '@/app/components/ServiceCard';
import TestimonialCard from '@/app/components/TestimonialCard';
import WhatsappFloat from '@/app/components/WhatsappFloat';
import React, { useState, useEffect } from 'react';
import Slideshow from '@/app/components/Slideshow';

export default function Tentang() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
    AOS.init();
  }, []);

  const barang = [
    {
      img: '/assets/IMG-20230821-WA0009.jpg',
      nama: 'Bak Levia Hitam',
      harga: 35000,
      awal: 400000,
      deskripsi: 'Jual Bak/Box Pick Up Tangerang Terima Tukar-Tambah Bak/Box',
      kategori:"bak",
    },
    {
      img: '/assets/bak_kargo_super.jpg',
      nama: 'BAK PICK UP GRANMAX HITAM',
      harga: 300000,
      awal: 400000,
      deskripsi: 'Jual Bak/Box Pick Up Tangerang Terima Tukar-Tambah Bak/Box',
      kategori:"bak",
    },
    {
      img: '/assets/produk.jpg',
      nama: 'BAK FJ45 HIJAU',
      harga: 1090000,
      awal: 400000,
      deskripsi: 'Jual Bak/Box Pick Up Tangerang Terima Tukar-Tambah Bak/Box',
      kategori:"bak",
    },
    {
      img: '/assets/565_mm_22_inchx_3cm_dop_roda_bus_belakang.jpg',
      nama: 'Roda Bus Belakang Tesla',
      harga: 120000,
      awal: 49900,
      deskripsi: 'Jual Bak/Box Pick Up Tangerang Terima Tukar-Tambah Bak/Box',
      kategori:"Sparepart",
    },
  ];

  return (
    <>
      {domLoaded && (
        <>
          <Navbar />
          <WhatsappFloat />
          <div className="flex flex-col items-start justify-center h-[80vh] lg:h-[100vh] bg-[url('/assets/landing-banner.jpg')] bg-cover bg-center lg:bg-left gap-6 md:gap-0 pl-5 md:pl-20">
            <h1
              className="text-4xl md:text-5xl font-bold text-white md:w-6/12 md:h-44 leading-tight"
              data-aos="fade-up"
            >
              Beli Box, Bak, dan Sparepart Mobil disini!
            </h1>
            <div className="flex gap-3" data-aos="fade-up">
              <Link
                href="https://wa.me/6281310893418"
                className="p-3 rounded-lg bg-green-500 text-white font-semibold flex gap-2 items-center"
              >
                <i className="fa-brands fa-whatsapp"></i>Chat Whatsapp
              </Link>
              <Link
                href="/toko"
                className="p-3 rounded-lg bg-blue-800 text-white font-semibold"
              >
                Buka Toko
              </Link>
            </div>
          </div>

          <section className="flex flex-col justify-center items-center md:h-[100vh] gap-6">
            <h1
              className="text-2xl md:text-3xl font-semibold mt-10 md:mb-10 md:my-0"
              data-aos="fade-up"
            >
              Kami Menyediakan
            </h1>
            <div className="flex flex-col md:justify-center md:items-center md:flex-col lg:flex-row">
              <div
                className="flex flex-col md:flex-row gap-3 text-center"
                data-aos="fade-up"
              >
                <ServiceCard
                  title="Jual Bak Pickup dan Truk"
                  description="Jual Bak Pickup Dengan Mudah dan Aman"
                  icon="fa-solid fa-truck-pickup"
                  className="text-green-500"
                />
                <ServiceCard
                  title="Tukar Tambah Bak Pickup"
                  description="Tukar Tambah Bak Pickup"
                  icon="fa-solid fa-repeat"
                  className="text-blue-500"
                />
              </div>
              <div
                className="flex flex-col md:flex-row gap-3 text-center"
                data-aos="fade-up"
              >
                <ServiceCard
                  title="Menjual Sparepart Pendukung"
                  description="Menjual Sparepart Pendukung"
                  icon="fa-solid fa-screwdriver-wrench"
                  className="text-green-500"
                />
                <ServiceCard
                  title="Jasa Potong Angkot"
                  description="Jasa Potong Angkot"
                  icon="fa-solid fa-car"
                  className="text-blue-500"
                />
              </div>
            </div>
          </section>

          <section
            className="flex flex-col justify-center items-center h-[100vh] gap-6"
            data-aos="fade-up"
          >
            <h1 className="text-2xl md:text-3xl font-semibold">
              Banyak Pilihan Jenis Barang
            </h1>
            <div className="flex flex-wrap gap-2 items-center justify-center">
              {[
                'Bak Rakitan',
                'Bak Cat',
                'Kepala Kabin',
                'Bak Original',
                'Box Mobil',
                'Sparepart Lainnya',
              ].map((kategori, p) => (
                <Link
                  href="/toko"
                  key={p}
                  className="px-3 py-2 text-sm border border-blue-800 text-blue-800 bg-white rounded-full"
                >
                  {kategori}
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-4 w-full overflow-x-auto gap-[21em] lg:gap-2 pl-3 md:pl-0 md:w-fit">
              {barang.slice(0, 4).map((produk, n) => (
                <Card key={n} produk={produk} />
              ))}
            </div>
            <button className="rounded-full px-4 py-3 bg-blue-800 text-white mb-10 flex gap-2 items-center hover:shadow">
              Lihat Semua Barang<i className="fa-solid fa-arrow-right"></i>
            </button>
          </section>

          <section
            className="flex flex-col justify-center items-center md:h-[100vh] gap-6"
            data-aos="fade-up"
          >
            <h1 className="text-2xl md:text-3xl font-semibold mt-10 md:my-0 text-center">
              Dipercayai Oleh Banyak Konsumen
            </h1>
            <p className="md:mb-10">
              Sudah lebih dari 5+ tahun usaha kami berjalan
            </p>
            <div className="grid grid-cols-4 w-full gap-[21em] lg:gap-2 overflow-x-auto pl-3 lg:pl-0 lg:w-fit">
              <TestimonialCard
                name="Remitha Angkat"
                stars={5}
                description="Bagus banget,terpercaya juga mungkin untuk harga bisa dibicarakan tapi pelayanannya ramah"
              />
              <TestimonialCard
                name="Pardi Sitorus"
                stars={5}
                description="Bagus banget,terpercaya juga mungkin untuk harga bisa dibicarakan tapi pelayanannya ramah"
              />
              <TestimonialCard
                name="Jungkook Newjeans"
                stars={5}
                description="Bagus banget,terpercaya juga mungkin untuk harga bisa dibicarakan tapi pelayanannya ramah"
              />
              <TestimonialCard
                name="Jihyo Twice"
                stars={5}
                description="Bagus banget,terpercaya juga mungkin untuk harga bisa dibicarakan tapi pelayanannya ramah"
              />
            </div>
          </section>

          <section
            className="flex flex-col justify-center items-center gap-3 my-10"
            data-aos="fade-up"
          >
            <h1 className="text-2xl md:text-3xl font-semibold my-10 md:mb-10 md:my-0">
              Galeri Foto
            </h1>
            <Slideshow />
          </section>

          <section
            className="flex flex-col text-center items-center justify-center md:mx-5 md:rounded-lg m-0 mt-20 md:mb-10 rounded-none h-[40vh] lg:h-[70vh] bg-[url('/assets/landing-banner-2.jpg')] bg-cover bg-center lg:bg-left gap-6 lg:gap-3"
            data-aos="zoom-in"
          >
            <h1 className="text-3xl md:text-5xl text-white font-semibold md:w-6/12 md:h-44 leading-tight">
              Pardi Jaya Motor Siap Melayani Seluruh Indonesia
            </h1>
            <div className="flex gap-3">
              <Link
                href="https://wa.me/6281310893418"
                className="p-3 rounded-lg bg-green-500 text-white font-semibold flex gap-2 items-center"
              >
                <i className="fa-brands fa-whatsapp"></i>Chat Whatsapp
              </Link>
              <button className="p-3 rounded-lg bg-blue-800 text-white font-semibold">
                Buka Toko
              </button>
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
}
