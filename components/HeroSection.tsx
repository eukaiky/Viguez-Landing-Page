import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-hero-section.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover"
          quality={100}
        />{" "}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-start px-mobile md:px-tablet lg:px-laptop xl:px-desktop 2xl:px-big">
        <div className="max-w-4xl text-left">
          <p className="text-sm md:text-base text-black mb-4 font-light">
            Suba de nivel
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-black mb-8 leading-tight">
            Transformamos
            <br />
            ideias em
            <br />
            Sistemas de
            <br />
            qualidade
          </h1>
          <button className="px-6 py-3 border-2 border-black text-black font-light rounded-lg transition-all duration-300 hover:bg-black/10 flex items-center gap-2">
            Nossos serviços
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
