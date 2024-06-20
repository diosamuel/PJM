'use client';
import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Card from '@/app/components/Card';
import Footer from '@/app/components/Footer';
import Spinner from '@/app/components/Spinner';

const fetchProducts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/posts/`);
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
  const filteredProducts = filterProducts(products, keyword, categories);

  if (keyword && !filteredProducts.length) {
    return (
      <div className="h-screen m-5">
        <h1 className="flex-col justify-center items-center text-xl text-center lg:text-2xl font-medium mb-5">
          Maaf, barang <span className="font-semibold">"{keyword}"</span> tidak
          ditemukan!
        </h1>
        <Link
          href="/katalog"
          className="bg-blue-800 rounded-lg px-3 py-2 text-white text-md border border-blue-800 hover:bg-white hover:text-blue-800"
        >
          Lihat Semua Katalog
        </Link>
      </div>
    );
  }

  return (
    <>
      {keyword ? (
        <h1 className="text-lg lg:text-xl font-medium mb-5">
          Hasil pencarian untuk{' '}
          <span className="font-semibold">"{keyword}"</span>
        </h1>
      ) : (
        <div className="flex justify-between mb-3 text-xl">
          <h1 className="font-semibold">Semua Barang</h1>
          <h1 className="block md:hidden">Filter</h1>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
        {filteredProducts.map((product, index) => (
          <Card key={index} produk={product} />
        ))}
      </div>
    </>
  );
};

const Produk = () => {
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
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-between items-center mt-20 lg:mt-24 mb-10">
        <div className="container flex flex-col lg:flex-row gap-3">
          <div className="space-y-5 border border-gray-300 shadow p-3 rounded-lg h-full md:sticky md:top-20 md:w-2/12 hidden md:block bg-white">
            <div>
              <p className="text-sm">Filter</p>
              <h3 className="text-xl mb-3 uppercase font-semibold">Kategori</h3>
              <div className="space-y-2">
                {['Bak', 'Box', 'Sparepart'].map((kategori, index) => (
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
          <div className="m-3 lg:m-0">
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
