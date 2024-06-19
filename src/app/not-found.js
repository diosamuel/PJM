import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center mt-5 gap-4">
      <h1 className="text-8xl text-blue-800 font-bold">404</h1>
      <p className="text-2xl">Halaman ini tidak ditemukan</p>
      <Link href="/" className="text-blue-600">Kembali ke Halaman Utama</Link>
    </div>
  )
}