import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pardi Jaya Motor',
  description: 'Pardi Jaya Motor',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="title"
          content="Pardi Jaya Motor Jual Bak/Box Pick Up kirim seluruh indonesia "
        />
        <meta
          name="description"
          content="Pardi Jaya Motor di Tangerang menjual bak pick-up dengan layanan COD dan tukar-tambah di JABODETABEK. Hubungi WhatsApp: 081310893418."
        />
        <meta
          name="keywords"
          content="pardi jaya motor, pardi, jaya, motor, bak, pickup, bak pickup, box, sparepart, potong angkot,jual beli bak,jual beli box"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Pardi Jaya Motor" />
        {/*<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.2/css/fontawesome.min.css" integrity="sha384-BY+fdrpOd3gfeRvTSMT+VUZmA728cfF9Z2G42xpaRkUGu2i3DyzpTURDo5A6CaLK" crossorigin="anonymous"/>*/}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link rel="icon" href="/icon.ico" sizes="any" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
        {/*<script async src="https://www.googletagmanager.com/gtag/js?id=G-76PX9JGG3V"></script>*/}
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
        />
        <Script id="" strategy="lazyOnload">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              });
          `}
        </Script>
        <Script async src="https://www.tiktok.com/embed.js"></Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
