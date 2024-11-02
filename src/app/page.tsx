import Hero from "@/lib/components/hero";
import Header from "@/lib/components/layout/header";
import Products from "@/lib/components/product";
import Services from "@/lib/components/services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex-1 relative ">
      <Image
        className="absolute top-0 right-0"
        src="/boldo/side-bg.svg"
        alt="bg-side image"
        width={604}
        height={500}
        priority
      />
      <div className='mx-auto z-[1000] absolute top-0 w-full flex flex-col items-center justify-center'>
      <Header />
      <Hero />
      <Services />
      <Products />
      </div>
    </div>
  );
}
