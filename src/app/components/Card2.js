import Link from 'next/link';
export default function Card({ produk }) {
  return (
    <div className="bg-white hover:shadow-lg border border-gray-200 rounded-md overflow-hidden h-full w-[20em]">
      <Link href="/">
        <div className="relative">
          <div class="w-full h-[10em] bg-white flex items-center justify-center overflow-hidden">
            <img
              src={produk.img}
              alt={produk.nama}
              onError={(e) => {
                e.target.src = 'https://placehold.co/600x400?text=Blank+Image';
              }}
              class="object-contain h-full w-full"
            />
          </div>
          <p
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
          >
            <Link
              href={`/toko/katalog/${produk.id}`}
              className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              title="view product"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </Link>
          </p>
        </div>
      </Link>
      <div className="flex flex-col justify-around h-fit">
        <div className="flex flex-col gap-2 my-4 mx-4">
          <div className="-space-y-1">
            <div className="flex flex-col md:flex-row items-baseline md:space-x-2">
              <p className="text-lg md:text-2xl text-primary font-bold text-dark">
                Rp{Number(produk.harga).toLocaleString('id-ID')}
              </p>
              <p className="text-xs text-gray-400 line-through">
                Rp{Number(produk.harga).toLocaleString('id-ID')}
              </p>
            </div>
            <h4 className="uppercase font-medium text-base md:text-lg text-gray-800 hover:text-primary transition">
              {produk.nama}
            </h4>
          </div>
          <div className="flex flex-wrap gap-2 mt-5">
            <div className="bg-blue-600 w-fit px-2 py-1">
              <p className="text-xs md:text-sm font-bold text-white flex gap-1 items-center">
                <i className="fa-solid fa-truck-pickup"></i>Kategori{' '}
                {produk.kategori.toUpperCase()}
              </p>
            </div>
            <div className="bg-orange-600 w-fit px-2 py-1">
              <p className="text-sm font-bold text-white flex gap-1 items-center">
                <i className="fa-solid fa-handshake"></i>Bisa COD
              </p>
            </div>
            <div className="bg-green-700 w-fit px-2 py-1">
              <p className="text-sm font-bold text-white flex gap-1 items-center">
                <i className="fa-solid fa-repeat"></i>Tukar Tambah
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
