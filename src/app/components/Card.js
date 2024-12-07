import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useCartStore from '@/app/components/cart/cart';
import Swal from 'sweetalert2';

export default function Card({ produk }) {
  const router = useRouter();
  const { addToCart } = useCartStore();
  function fireAlert(produk) {
    Swal.fire({
      title: 'Sukses',
      text: `Berhasil menambahkan ${produk.nama} ke Keranjang`,
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Buka Keranjang',
    }).then((result) => {
      if (result.isConfirmed) {
        router.push('/toko/keranjang');
      }
    });
  }
  return (
    <div className="bg-white hover:shadow-lg border border-gray-200 rounded-md overflow-hidden h-full flex flex-col justify-between">
      <Link href={`/toko/katalog/${produk.id}`}>
        <div className="relative">
          {/*          <img
            src={`${process.env.NEXT_PUBLIC_API_HOST}/images/${produk.images[0]}`}
            alt="Produk"
            className="w-full object-cover h-[10em]"
          />*/}
          <div class="w-full h-[15em] bg-white flex items-center justify-center overflow-hidden">
            <img
              src={`${process.env.NEXT_PUBLIC_API_HOST}/images/${produk.images[0]}`}
              onError={(e) => {
                e.target.src = 'https://placehold.co/600x400?text=Blank+Image';
              }}
              alt="Image description"
              class="object-contain h-full w-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 my-4 mx-3">
          <div className="-space-y-1">
            <div className="flex flex-col md:flex-row items-baseline md:space-x-2">
              <p className="text-lg md:text-2xl text-primary font-bold text-dark">
                Rp{Number(produk.diskon).toLocaleString('id-ID')}
              </p>
              <p className="text-xs text-gray-400 line-through">
                Rp{Number(produk.harga).toLocaleString('id-ID')}
              </p>
            </div>
            <h4 className="uppercase font-medium text-base md:text-lg text-gray-800 hover:text-primary transition">
              {produk.nama}
            </h4>
          </div>
          <div className="text-sm md:text-base text-gray-700">
            <p>{produk.deskripsi.slice(0, 40)}...</p>
          </div>
          <div className="flex flex-wrap md:flex-row gap-1 md:gap-2">
            <div className="bg-blue-700 w-fit px-2 py-1">
              <p className="text-xs md:text-sm font-bold text-white flex gap-1 items-center">
                <i className="fa-solid fa-truck-pickup"></i>Kategori{' '}
                {produk.kategori.toUpperCase()}
              </p>
            </div>
            <div className="bg-orange-600 w-fit px-2 py-1">
              <p className="text-xs md:text-sm font-bold text-white flex gap-1 items-center">
                <i className="fa-solid fa-handshake"></i>Bisa COD
              </p>
            </div>
            <div className="bg-green-700 w-fit px-2 py-1">
              <p className="text-xs md:text-sm font-bold text-white flex gap-1 items-center">
                <i className="fa-solid fa-repeat"></i>Tukar Tambah
              </p>
            </div>
          </div>
        </div>
      </Link>
      <div className="mx-3 my-2">
        <button
          href="#"
          className="text-sm block w-full p-2 text-center text-blue-800 bg-white border border-blue-800 rounded-lg hover:bg-blue-800 hover:text-white transition"
          onClick={() => {
            addToCart(produk);
            fireAlert(produk);
          }}
        >
          Tambah <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  );
}
