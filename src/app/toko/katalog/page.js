'use client';
import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Card from '@/app/components/Card';
import Footer from '@/app/components/Footer';
import Spinner from '@/app/components/Spinner';

const fetchProducts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/posts/`, {
    headers: {
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
      Expires: '0',
    },
  });

  if (!res.ok) throw new Error('Failed to fetch');
  return await res.json();
};

const filterProducts = (products, keyword, categories) => {
  return products.filter((product) => {
    const matchesKeyword = keyword
      ? product.nama.toLowerCase().includes(keyword.toLowerCase())
      : true;
    const matchesCategory =
      categories.length > 0 ? categories.includes(product.kategori) : true;
    return matchesKeyword && matchesCategory;
  });
};

const ProductDisplay = ({ products, keyword, categories }) => {
  const randomProducts = [...products]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
  const filteredProducts = filterProducts(products, keyword, categories);
  if (keyword && !filteredProducts.length) {
    return (
      <div className="m-5 flex flex-col">
        <div className="flex flex-col p-5 shadow-md rounded border">
          <h1 className="text-xl lg:text-2xl font-medium mb-5">
            Maaf, barang <span className="font-semibold">"{keyword}"</span>{' '}
            {!!categories.length && `di kategori ${categories}`} tidak
            ditemukan!
          </h1>
          <Link
            href="/toko/katalog"
            className="w-fit bg-blue-800 rounded-lg px-3 py-2 text-white text-md border border-blue-800 hover:bg-white hover:text-blue-800"
          >
            Lihat Semua Katalog
          </Link>
        </div>

        <h1 className="my-5 font-bold text-xl">Rekomendasi untukmu</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
          {randomProducts.map((product, index) => (
            <Card key={index} produk={product} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      {keyword ? (
        <h1 className="text-lg lg:text-xl font-medium p-3 mb-5">
          Hasil pencarian untuk{' '}
          <span className="font-semibold">"{keyword}"</span>
        </h1>
      ) : (
        <div className="flex justify-between mb-3 text-xl hidden md:block">
          <h1 className="font-semibold">Semua Barang</h1>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full mb-10">
        {!!filteredProducts.length ? filteredProducts.map((product, index) => (
          <Card key={index} produk={product} />
        )):<h1>Barang Masih Kosong</h1>}
      </div>
    </>
  );
};

const Produk = () => {
  const [sidebarMobile, toggleSidebarMobile] = useState(false);
  const searchParams = useSearchParams();
  const keywordBarang = searchParams.get('cari');
  const kategoriBarang = searchParams.get('kategori');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState(
    kategoriBarang ? [kategoriBarang] : []
  );

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchProducts();
        setProducts(products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const kategoriBarang = searchParams.get('kategori');
    if (kategoriBarang) {
      setSelectedCategories([kategoriBarang]);
    }
  }, [searchParams]);

  if (loading) return <Spinner />;
  if (error) {
    setError("Server Error")
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-between items-center mt-20 lg:mt-24">
        <div className="container flex flex-col md:flex-row gap-3">
          <div className="flex justify-between text-md fixed md:static w-full md:w-fit z-10 px-5 md:p-0 py-4 top-16 bg-blue-800 text-white shadow">
            <h1 className="font-semibold block md:hidden">Semua Barang</h1>
            {error && <h1>Error, Muat Ulang</h1>}
            <button
              onClick={() => toggleSidebarMobile(!sidebarMobile)}
              className="block md:hidden flex gap-2 text-sm items-center"
            >
              <i class="fa-solid fa-filter text-md"></i> Filter
            </button>
          </div>
          <div
            className={`z-50 mb-10 space-y-5 shadow-lg p-3 rounded-lg h-full ${!sidebarMobile ? `-left-48` : `left-0`} transition-all md:top-20 md:w-2/12 bg-white fixed md:sticky top-16 z-10`}
          >
            <div>
              <h3 className="text-md my-3 uppercase font-semibold">
                Kategori
              </h3>
              <div className="space-y-1">
                {['Bak', 'Box', 'Sparepart', 'Bekas'].map((kategori, index) => (
                  <div className="flex items-center" key={index}>
                    <input
                      type="checkbox"
                      name={kategori}
                      id={`cat-${index}`}
                      className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                      checked={selectedCategories.includes(
                        kategori.toLowerCase()
                      )}
                      onChange={() =>
                        handleCategoryChange(kategori.toLowerCase())
                      }
                    />
                    <label
                      htmlFor={`cat-${index}`}
                      className="text-gray-600 ml-3 cursor-pointer"
                    >
                      {kategori}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="m-3 mt-14 mb-10 md:m-0 md:w-10/12">
            <ProductDisplay
              products={products}
              keyword={keywordBarang}
              categories={selectedCategories}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const ProdukPage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Produk />
    </Suspense>
  );
};

export default ProdukPage;
