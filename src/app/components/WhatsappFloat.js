import Link from 'next/link';
import React, { useState, useEffect } from 'react';
export default function WhatsappFloat({ name, description, stars }) {
  return (
    <Link href="https://wa.me/6281310893418?text=Halo+Bosq">
      <div className="fixed bottom-0 right-0 z-50 m-5 flex items-center gap-2">
        <p className="bg-white py-2 px-3 rounded-full shadow">Hubungi Kami</p>
        <img
          src="/assets/whatsapp.png"
          className="w-14 h-14 shadow rounded-full animate-pulse"
        />
      </div>
    </Link>
  );
}
