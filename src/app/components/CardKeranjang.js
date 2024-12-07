'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Counter from '@/app/components/Counter';
import useCartStore from '@/app/components/cart/cart';
import Swal from 'sweetalert2';

export default function CardKeranjang({ className, produk, checked }) {
  let fireAlert = (produk) => {
    Swal.fire({
      text: `Hapus ${produk.nama}?`,
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
        return removeFromCart(produk.id);
      }
    });
  };
  const {
    cart,
    removeFromCart,
    clearCart,
    seeQuantity,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-3 bg-white p-5 shadow-sm hover:shadow-lg border border-gray-100 lg:rounded-md">
      <div className="flex md:gap-6 gap-3">
        {/*<input type="checkbox" className="form-checkbox w-5 bg-indigo-100" defaultChecked/>*/}
        <Link href={`/toko/katalog/${produk.id}`}>
          <img
            src={`${process.env.NEXT_PUBLIC_API_HOST}/images/${produk.images[0]}`}
            onError={(e) => {
              e.target.src = 'https://placehold.co/600x400?text=Blank+Image';
            }}
            className="w-32 h-32 object-cover object-center rounded-lg"
          />
        </Link>
        <div>
          <p className="text-sm lg:text-xl font-medium">{produk.nama}</p>
          <div className="flex flex-col justify-between gap-4">
            <div className="flex gap-2 items-end">
              <p className="text-xl lg:text-3xl font-semibold text-black">
                Rp
                {Number(produk.diskon * seeQuantity(produk.id)).toLocaleString(
                  'id-ID'
                )}
              </p>
              <p className="text-base text-gray-400 line-through">
                Rp{Number(produk.harga).toLocaleString('id-ID')}
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
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
            <Counter produk={produk} />
            <button
              className="flex gap-2 items-center align-middle text-sm"
              onClick={() => fireAlert(produk)}
            >
              <i className="fa-solid fa-trash text-xs"></i>Hapus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
