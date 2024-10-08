'use client';
import Image from 'next/image';
import Card from '@/app/components/Card';
import Spinner from '@/app/components/Spinner';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
export default function Katalog() {
	const [barang, setBarang] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(
					`${process.env.NEXT_PUBLIC_API_HOST}/api/posts`
				);
				if (!res.ok) {
					throw new Error('Failed to fetch');
				}
				const result = await res.json();
				setBarang(result);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	const listKategori = [
		{
			nama: 'Bak Pickup/Mobil',
			link: 'bak',
		},
		{
			nama: 'Box Pickup/Mobil',
			link: 'box',
		},
		{
			nama: 'Sparepart',
			link: 'sparepart',
		},
		{
			nama: 'Bekas',
			link: 'bekas',
		},
	];

	return (
		<div className="flex items-center justify-center mb-10">
			{loading ? <Spinner /> : <></>}
			<div className="container lg:flex lg:flex-col lg:gap-10">
				<div className="m-3 md:m-0">
					<div className="flex items-center justify-between items-center align-middle">
						<h2 className="text-xl font-semibold text-gray-800 capitalize my-4">
							barang terlaris pardi jaya motor!
						</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4">
						{barang.length ? (
							barang
								.slice(0, 4)
								.map((produk, n) => <Card key={n} produk={produk} />)
						) : (
							<h1>Kosong</h1>
						)}
					</div>
				</div>

				<div className="m-3 md:m-0">
					<div className="flex items-center justify-between items-center align-middle">
						<h2 className="text-xl font-semibold text-gray-800 capitalize my-4">
							Kategori
						</h2>
					</div>
					<div className="flex flex-wrap gap-3">
						{listKategori.map((kategori) => (
							<Link
								href={`/toko/katalog?kategori=${kategori.link}`}
								className="px-3 py-2 bg-blue-800 text-white rounded-full"
							>
								{kategori.nama}
							</Link>
						))}
					</div>
				</div>

				<div className="m-3 md:m-0">
					<div className="flex items-center justify-between items-center align-middle">
						<h2 className="text-xl font-semibold text-gray-800 capitalize my-4">
							Cek Semua Barang!
						</h2>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4">
						{barang.length ? (
							barang.map((produk, n) => <Card produk={produk} />)
						) : (
							<h1>Kosong</h1>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
