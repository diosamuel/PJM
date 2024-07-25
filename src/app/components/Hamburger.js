import Link from 'next/link';
export default function Hamburger({ open }) {
  return (
    <div
      className={`w-full h-fit bg-white z-40 fixed top-16 transition shadow-xl px-5 py-5 ${open ? 'block' : 'hidden'}`}
    >
      <div className="flex flex-col gap-3 mb-6">
        <Link href="/" className="font-medium">
          Home
        </Link>
        <Link href="/toko/katalog" className="font-medium">
          Cari Katalog
        </Link>
        <Link href="#" className="font-medium">
          Hubungi Whatsapp
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        <Link
          href="/toko"
          className="font-medium py-2 bg-blue-800 px-4 text-white rounded-lg shadow w-full"
        >
          Lihat Katalog
        </Link>
      </div>
    </div>
  );
}
