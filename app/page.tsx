import Image from "next/image";
import { Barlow } from "next/font/google";
import { Fraunces } from "next/font/google";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["600"],
});
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["700", "900"],
});


export default function Home( ) {
  return (
    <main className="container relative mx-auto max-w-screen-xl ">
      <Navbar />
      <HeroSection />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  );
}
