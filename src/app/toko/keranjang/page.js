'use client';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import WhatsappMessage from '@/app/components/WhatsappMessage';
import CardKeranjang from '@/app/components/CardKeranjang';
import useCartStore from '@/app/components/cart/cart';
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';

export default function Keranjang() {
  let [check, setCheckbox] = useState({});
  let [ringkasan, showRingkasan] = useState(false);
  let [total, setTotal] = useState(0);
  let [realTotal, setRealTotal] = useState(0);
  const { cart, clearCart } = useCartStore();

  useEffect(() => {
    const totalPrice = cart.reduce(
      (sum, product) => (sum += product.diskon * product.quantity),
      0
    );
    const totalRealPrice = cart.reduce(
      (sum, product) => (sum += product.harga * product.quantity),
      0
    );
    setTotal(totalPrice);
    setRealTotal(totalRealPrice);
  }, [cart]);

  let fireAlert = () => {
    Swal.fire({
      text: `Hapus Semua Barang?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Hapus',
      cancelButtonText: 'Batal',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Hapus!',
          text: 'Sukses dihapus',
          icon: 'success',
        });
        return clearCart();
      }
    });
  };
  return (
    <>
      <Navbar />
      <div className="md:m-10">
        {/* <h1 className="text-lg md:text-xl font-semibold mt-20 ml-5 md:ml-0 mb-3">
          Keranjang Saya
        </h1> */}
        <div className="flex flex-col md:flex-row w-full gap-5 my-20">
          {!!cart.length ? (
            <div className="w-full md:w-10/12">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between border p-5 bg-gray-100 md:rounded-t-lg">
                  <label className="inline-flex items-center cursor-pointer">
                    <span className="text-base ml-2 text-gray-700">
                      Semua Barang ({cart.length})
                    </span>
                  </label>
                  <button
                    className="flex gap-1 items-center align-middle text-sm font-medium cursor-pointer"
                    onClick={fireAlert}
                  >
                    <i className="fa-solid fa-trash"></i>Hapus Semua
                  </button>
                </div>

                {cart.map((produk, n) => (
                  <CardKeranjang produk={produk} checked={true} key={n} />
                ))}
              </div>
            </div>
          ) : (
            <div className="w-full md:w-10/12">
              <div className="w-full h-fit flex flex-col text-left p-5 shadow gap-5">
                <h1 className="text-xl font-semibold">
                  Wah, keranjang belanjamu masih kosong
                </h1>
                <Link
                  href="/toko/katalog"
                  className="w-fit bg-blue-800 rounded-lg px-3 py-2 text-white text-md border border-blue-800 hover:bg-white hover:text-blue-800"
                >
                  Cari Katalog
                </Link>
              </div>
            </div>
          )}

          <div className="w-full fixed bottom-0 lg:w-4/12 md:w-6/12 md:sticky md:top-20 md:h-full bg-blue-800 text-white md:rounded-lg border shadow">
            <div className="flex flex-col gap-4 p-5">
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => showRingkasan(!ringkasan)}
              >
                <h3 className="font-medium">Ringkasan Belanja</h3>
                {!ringkasan ? (
                  <i className="fa-solid fa-chevron-down"></i>
                ) : (
                  <i className="fa-solid fa-chevron-up"></i>
                )}
              </div>

              <div
                className={`flex flex-col gap-4 ${!ringkasan ? 'hidden' : 'block'}`}
              >
                <div className="space-y-1">
                  {cart.map((produk, n) => (
                    <div className="flex justify-between gap-2" key={n}>
                      <p className="text-sm">{produk.nama}</p>
                      <p className="text-lg">x{produk.quantity}</p>
                      <p>Rp{Number(produk.diskon).toLocaleString('id-ID')}</p>
                    </div>
                  ))}
                </div>

                <hr />
                <div className="flex gap-3 align-middle items-center">
                  <p>Total</p>
                  <strong className="text-2xl md:text-2xl">
                    Rp{Number(total).toLocaleString('id-ID')}
                  </strong>
                  <span className="line-through text-sm">Rp{Number(realTotal).toLocaleString('id-ID')}</span>
                </div>
                <div className="flex gap-2 items-center bg-blue-600 p-2 rounded">
                  <p className="text-sm">Anda Menghemat</p>
                  <span className="font-semibold text-sm">Rp{Number(realTotal-total).toLocaleString('id-ID')}</span>
                </div>
                <Link
                  href={WhatsappMessage(cart)}
                  className="flex gap-3 items-center justify-center bg-white rounded-lg px-3 py-2 text-blue-800 text-md border border-white hover:bg-white hover:text-blue-800"
                  target="_blank"
                >
                  <i className="fa-brands fa-whatsapp"></i> Beli Sekarang
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
