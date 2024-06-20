import Image from "next/image";
import Navbar from "@/app/components/Navbar"
import Banner from "@/app/components/Banner"
import Katalog from "@/app/components/Katalog"
import Footer from "@/app/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Banner className="m-3 mt-20"/>
      <Katalog/>
      <Footer/>
    </main>
  );
}
