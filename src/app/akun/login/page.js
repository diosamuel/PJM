'use client';
import Image from "next/image"
import Link from "next/link"
import React from 'react';
export default function Login() {
	return (
		<div className="flex flex-col justify-center items-center h-screen w-full bg-blue-900">
			<div className="w-11/12 md:w-4/12 text-white mb-3">
				<Link href="/">Kembali</Link>
			</div>
			<form className="items-center flex flex-col gap-5 p-5 w-11/12 md:w-4/12 border rounded shadow-xl bg-white" action={`${process.env.NEXT_PUBLIC_API_HOST}/api/auth/login`} method="POST">
				<img src="/logo.jpg" className="w-20 h-20 rounded-full"/>
				<h1 className="text-xl font-bold mb-3 text-center">Login Dashboard</h1>
				<div className="space-y-1 w-full">
					<p className="text-sm">Username</p>
					<input type="text" name="username" placeholder="Username" className="w-full p-2 border rounded"/>
				</div>
				<div className="space-y-1 w-full">
					<p className="text-sm">Password</p>
					<input type="password" name="password" placeholder="Password" className="w-full p-2 border rounded"/>
				</div>
				<button className="w-full flex gap-3 items-center justify-center bg-blue-800 rounded-lg px-3 py-2 text-white text-md">
					Masuk ke Dashboard
              </button>
			</form>
		</div>
	)
}