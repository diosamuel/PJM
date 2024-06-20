import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="bg-black p-10 border-t border-gray-100 w-100">
      <div className="container flex flex-col lg:flex-row justify-around gap-5">
        <div className="space-y-4 w-[20em]">
          <img src="/logo.png" alt="logo" className="w-20" />
          <div className="mr-2">
            <h1 className="font-semibold text-2xl text-white">
              Pardi Jaya Motor
            </h1>
            <p className="text-white w-fit">
              Jual Bak/Box Pick Up Tangerang Terima Tukar-Tambah Bak/Box
            </p>
            <p className="text-white w-fit">+628483726378</p>
          </div>
          <div className="flex space-x-4 text-3xl">
            <Link href="#" className="text-gray-400">
              <i className="fa-brands fa-facebook-square"></i>
            </Link>
            <Link href="#" className="text-gray-400">
              <i className="fa-brands fa-instagram-square"></i>
            </Link>
            <Link href="#" className="text-gray-400">
              <i className="fa-brands fa-twitter-square"></i>
            </Link>
          </div>
        </div>
        <div className="md:max-w-[15em]">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            Lokasi
          </h3>
          {/*<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d506.51571714265623!2d106.60786319199144!3d-6.223958838880772!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ffc9c2297359%3A0xfa4e86c9e3b1caae!2sPardi%20Jaya%20Motor%20Jual%20Bak%20Pick%20Up%20Tangerang!5e1!3m2!1sid!2sid!4v1713675145084!5m2!1sid!2sid" width="600" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="rounded-lg w-fit mt-4"></iframe>*/}
          <span className="text-white">
            Jl. Kavling Perkebunan III, Panunggangan Bar., Kec. Cibodas,
            Kabupaten Tangerang, Banten 15810, Tangerang 15810
          </span>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            Halaman
          </h3>
          <div className="mt-2">
            <Link href="#" className="text-base text-white block">
              Beli Produk
            </Link>
            <Link href="#" className="text-base text-white block">
              Toko Online
            </Link>
            <Link href="#" className="text-base text-white block">
              Tentang Kami
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            Toko Online
          </h3>
          <div className="mt-2">
            <Link href="#" className="text-base text-white block">
              Tokopedia
            </Link>
            <Link href="#" className="text-base text-white block">
              Shopee
            </Link>
            <Link href="#" className="text-base text-white block">
              Lazada
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
