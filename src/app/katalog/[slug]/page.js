"use client"
import create from 'zustand';
import ReactDOM from 'react-dom';
import Swal from 'sweetalert2'
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Breadcrumb from '@/app/components/Breadcrumb';
import Tabs from '@/app/components/Tabs';
import Spinner from '@/app/components/Spinner';
import useCartStore from "@/app/components/cart/cart"
import axios from 'axios'

export default function Page({ params }) {

    const { cart, removeFromCart, clearCart,addToCart } = useCartStore();
    let [ jumlah, setJumlah] = useState(1)
    const [produk,setProduk] = useState({
        images:[],
        harga:0,
    })
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const handleIncrement = () => {
      setJumlah((prevJumlah) => prevJumlah >= produk.stok ? prevJumlah : prevJumlah + 1);
    };
    
    const handleDecrement = () => {
      setJumlah((prevJumlah) => (prevJumlah > 1 ? prevJumlah - 1 : 1));
    };

    useEffect(() => {
      const fetchData = async () => {
        try {
          await axios.put(`${process.env.NEXT_PUBLIC_API_HOST}/api/statistik/${params.slug}`);
          const res = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/api/posts/${params.slug}`);
          if (res.status!=200) {
            throw new Error('Failed to fetch');
          }
          const result = await res.data;
          setProduk({...result,quantity:1})
        } catch (error) {
          throw error
          setError(true);
        } finally {
          setLoading(false);
        }
      };
    
      fetchData();
    }, []);

    const router = useRouter();
    function fireAlert(produk){
        Swal.fire({
            title: "Sukses",
            text: `Berhasil menambahkan ${produk.nama} ke Keranjang`,
            icon: "success",
            confirmButtonText: "Buka Keranjang",
        }).then((result) => {
            if (result.isConfirmed) {
                router.push("/keranjang")
            }
        });
    }

  return (
  	<>
  	  <Navbar/>
        {loading ? <Spinner />:<></>}
      {!error ? <>
      <div className="flex flex-col justify-center items-center mt-20 lg:mt-24">
      <div className="container lg:grid lg:grid-cols-2 gap-10">
        <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} showStatus={false} showThumbs={false}>
            {produk.images.map((image,index)=>(
                <div key={index}>
                    <img src={image?`${process.env.NEXT_PUBLIC_API_HOST}/image/${image}`:`https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png`} className="md:rounded-lg h-[20em] lg:h-[30em] object-cover object-center"/>
                </div>
            ))}
        </Carousel>

        <div className="lg:m-0 m-5">
            <h2 className="text-2xl md:text-3xl font-bold uppercase mb-2">{produk.nama}</h2>
            <div className="space-y-2">
                <p className="space-x-2">
                    <span className="text-gray-800 font-semibold">Kategori: </span>
                    <span className="uppercase">{produk.kategori}</span>
                </p>
                <div className="flex gap-2">
                    <div className="bg-orange-500 w-fit rounded px-2 py-1">
                        <p className="text-sm font-bold text-white flex gap-1 items-center"><i className="fa-solid fa-handshake"></i>Bisa COD</p>
                    </div>
                    <div className="bg-green-700 w-fit rounded px-2 py-1">
                        <p className="text-sm font-bold text-white flex gap-1 items-center"><i className="fa-solid fa-repeat"></i>Tukar Tambah</p>
                    </div>
                </div>
            </div>
            <div className="flex items-baseline my-4 space-x-2">
                <p className="text-2xl md:text-3xl text-black font-bold">Rp{Number(produk.harga*jumlah).toLocaleString('id-ID')}</p>
                <p className="text-base text-gray-400 line-through">Rp{Number(produk.harga).toLocaleString('id-ID')}</p>
            </div>
            {/*<p className="hidden md:block mt-4 text-gray-600">{produk.deskripsi}</p>*/}
            {/*Counter*/}
            <div className="flex flex-col gap-2">
                <div className="flex items-center border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max rounded">
                    <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none border-none" onClick={handleDecrement}>-</div>
                    <div className="h-8 w-8 text-md flex items-center justify-center text-xl border-none">{jumlah}</div>
                    <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none border-none" onClick={handleIncrement}>+</div>
                </div>
                <p className="text-sm">Stok: <span className="font-bold">{produk.stok}</span></p>
            </div>

            <div className="mt-3 flex flex-col lg:flex-row gap-3 border-b border-gray-200 py-5 text-center">
              <button className="w-full bg-green-600 rounded-lg px-2 py-3 text-white text-md border border-green-600 hover:bg-white hover:text-green-600"><i className="fa-brands fa-whatsapp"></i> Beli via Whatsapp</button>
              <button className="w-full border border-blue-800 rounded-lg px-2 py-3 text-blue-800 text-md border border-blue-800 hover:bg-white hover:text-blue-800" onClick={() => {addToCart({...produk,quantity:jumlah});fireAlert(produk)}}>+ Tambah Keranjang</button>
            </div>

            <div className="flex gap-3 mt-4 items-center">
                <p>Bagikan ke</p>
                <Link href="#"
                    className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <i className="fa-brands fa-facebook-f"></i>
                </Link>
                <Link href="#"
                    className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <i className="fa-brands fa-twitter"></i>
                </Link>
                <Link href="#"
                    className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <i className="fa-brands fa-instagram"></i>
                </Link>
            </div>
        </div>
      </div>
      
      <div className="container mt-5 gap-10 grid grid-row-1 lg:grid-cols-2 md:flex-row mb-10 w-full">
        <Tabs className="mr-5 w-full" deskripsi={produk.deskripsi} warna={produk.warna} berat={produk.berat}/>
        <div className="m-5 md:m-0 w-100">
          <h1 className="text-xl pb-4 font-semibold">Lokasi Barang</h1>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d506.51571714265623!2d106.60786319199144!3d-6.223958838880772!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ffc9c2297359%3A0xfa4e86c9e3b1caae!2sPardi%20Jaya%20Motor%20Jual%20Bak%20Pick%20Up%20Tangerang!5e1!3m2!1sid!2sid!4v1713675145084!5m2!1sid!2sid" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            className="border border-gray-300 rounded-lg w-full h-[10em] lg:h-[400px]"></iframe>
        </div>
      </div>

      </div>
      </>:<div className="flex flex-col justify-center items-center h-screen gap-3">
        <h1 className="text-2xl font-semibold">Barang Tidak Ditemukan</h1>
        <Link href="/katalog" className="bg-blue-800 rounded-lg px-3 py-2 text-white text-md border border-blue-800 hover:bg-white hover:text-blue-800">
          Cari Katalog
        </Link>
      </div>}
      <Footer/>
  	</>
  	)
}