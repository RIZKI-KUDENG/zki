import Image from "next/image";
import Navbar from "./components/fragments/Navbar";
import { About3 } from "./components/about3";
import Services from "./components/Services";

export default function HeroSection() {
  const dummyContent = {
    imageUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/015/274/044/small/banner-web-template-abstract-black-curved-shapes-with-lighting-on-dark-background-vector.jpg",
    textBlock: "Zona Kreatif Indonesia",
    microritm: "MULAI PROJEK ANDA SEKARANG",
  };

  return (
    <main>
      <section className="relative w-full min-h-screen bg-[#f4f1e1] p-4 md:p-8 flex flex-col justify-between font-sans overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={dummyContent.imageUrl}
            alt="Tim kreatif sedang berkolaborasi di studio modern"
            fill
            className="object-cover transition-opacity duration-300 opacity-90"
            priority
          />
        </div>

        <div className="relative z-10 flex flex-col h-full justify-between min-h-[calc(100vh-4rem)]">
          <header className="w-full text-white text-center py-4 font-bold tracking-[0.2em] text-sm md:text-base">
            <Navbar />
          </header>

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-6 mt-auto">
            <div className="text-white w-full md:w-112.5 md:max-w-[40%] h-50 md:h-auto md:min-h-55 p-6 md:p-8 flex items-center justify-center font-bold  text-4xl md:text-7xl leading-relaxed tracking-wider">
              <p>{dummyContent.textBlock}</p>
            </div>

            <div className= "text-white px-8 py-4 flex items-center justify-center font-bold tracking-[0.2em] text-xs md:text-sm whitespace-nowrap">
              {dummyContent.microritm}
            </div>
          </div>
        </div>
      </section>
        <About3  />
        <Services />
    </main>
  );
}
