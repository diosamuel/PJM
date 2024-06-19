"use client"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/app/components/Navbar"
import SidebarCategory from "@/app/components/SidebarCategory"
import Breadcrumb from "@/app/components/Breadcrumb"
import Katalog from "@/app/components/Katalog"
import Card from "@/app/components/Card"
import Footer from "@/app/components/Footer"
import Spinner from "@/app/components/Spinner"
import {useEffect, useState, Suspense} from "react"
import { useSearchParams } from "next/navigation"

// Create a separate component for fetching and displaying products
const ProductDisplay = () => {
  const searchParams = useSearchParams()
  const keywordBarang = searchParams.get('cari')
  const kategoriBarang = searchParams.get('kategori')
  const [barang, setBarang] = useState([])
  const [semuaBarang, setSemuaBarang] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchString = (fullString, subString) => {
    return subString.length === 0 ? false : fullString.toLowerCase().includes(subString.toLowerCase());
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/posts/`);
        if (!res.ok) throw new Error('Failed to fetch');
        const result = await res.json();
        let tempBarang = []
        //pencocokan keyword
        if(keywordBarang){
          result.forEach(produk=>{
            if(searchString(produk.nama.toLowerCase(), keywordBarang)){
              tempBarang.push(produk);
            }
          })
        }
        setBarang(tempBarang)
        setSemuaBarang(result)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [keywordBarang]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {barang.length && keywordBarang ? (
        <>
          <h1 className="text-lg lg:text-xl font-medium mb-5">
            Hasil pencarian untuk <span className="font-semibold">"{keywordBarang}"</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
            {barang.map((produk, n) => (
              <Card key={n} produk={produk} />
            ))}
          </div>
        </>
      ) : (
        <>
          {!!keywordBarang ? (
            <div className="h-screen m-5">
              <h1 className="flex-col justify-center items-center text-xl text-center lg:text-2xl font-medium mb-5">
                Maaf, barang <span className="font-semibold">"{keywordBarang}"</span> tidak ditemukan!
              </h1>
              <Link href="/katalog" className="bg-blue-800 rounded-lg px-3 py-2 text-white text-md border border-blue-800 hover:bg-white hover:text-blue-800">
                Lihat Semua Katalog
              </Link>
            </div>
          ) : (
            <>
              <h1 className="text-lg lg:text-xl font-medium mb-5">Semua Barang Pardi Jaya Motor</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
                {semuaBarang.map((produk, n) => (
                  <Card key={n} produk={produk} />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default function Produk() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-between items-center mt-20 lg:mt-24 mb-10">
        <div className="container flex flex-col lg:flex-row gap-3">
          <SidebarCategory className="md:sticky md:top-20 md:w-3/12 hidden md:block bg-[#fafafa]" />
          <div className="m-3 lg:m-0">
            <Suspense fallback={<Spinner />}>
              <ProductDisplay />
            </Suspense>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
