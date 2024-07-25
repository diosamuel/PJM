import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pardi Jaya Motor",
  description: "Pardi Jaya Motor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link rel="icon" href="/icon.ico" sizes="any" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet"/>
        {/*<script async src="https://www.googletagmanager.com/gtag/js?id=G-76PX9JGG3V"></script>*/}
        <Script strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}/>
        <Script id='' strategy='lazyOnload'>
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
{/*        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-76PX9JGG3V');
        </script>*/}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
