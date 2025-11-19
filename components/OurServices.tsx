import { Star } from "lucide-react";

export default function OurServices() {
  return (
    <section>
      <div className="flex items-center justify-center flex-col px-mobile md:px-tablet lg:px-laptop xl:px-desktop 2xl:px-big py-16">
        <p className="text-sm md:text-lg font-sans mb-12 font-light tracking-[1rem] uppercase text-center">
          Nossos Serviços
        </p>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full gap-12 lg:gap-0">
          <div className="flex flex-col items-start gap-4 w-full lg:w-auto">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-black/15 stroke-transparent"></Star>
              <Star className="w-5 h-5 fill-black/15 stroke-transparent"></Star>
              <Star className="w-5 h-5 fill-black/15 stroke-transparent"></Star>
              <Star className="w-5 h-5 fill-black/15 stroke-transparent"></Star>
            </div>
            <div className="flex items-start flex-col gap-4">
              <h2 className="text-xl md:text-5xl font-sans font-medium">
                Identidade Visual
              </h2>
              <p className="font-sans text-lg max-w-[24ch] leading-relaxed">
                Criamos a identidade visual que traduz a essência do seu negócio
                e torna sua marca inconfundível.
              </p>
            </div>
          </div>
          
          {/* Separator - horizontal on mobile, vertical on desktop */}
          <div className="flex lg:hidden items-center justify-center w-full py-6">
            <div className="h-px w-full bg-black/20"></div>
          </div>
          <div className="hidden lg:flex items-center justify-center px-8">
            <div className="w-px h-60 bg-black/20"></div>
          </div>
          
          <div className="flex flex-col items-start gap-4 w-full lg:w-auto">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-black/15 stroke-transparent"></Star>
              <Star className="w-5 h-5 fill-black/15 stroke-transparent"></Star>
              <Star className="w-5 h-5 fill-black/15 stroke-transparent"></Star>
              <Star className="w-5 h-5 fill-black/15 stroke-transparent"></Star>
              <Star className="w-5 h-5 fill-black/15 stroke-transparent"></Star>
            </div>
            <div className="flex items-start flex-col gap-4">
              <h2 className="text-xl md:text-5xl font-sans font-medium">
                Social Media
              </h2>
              <p className="font-sans text-lg max-w-[25ch] leading-relaxed">
                Social Media Estratégico para o seu crescimento. Transformamos
                seguidores em clientes fiéis e lucrativos.
              </p>
            </div>
          </div>
          
          {/* Separator - horizontal on mobile, vertical on desktop */}
          <div className="flex lg:hidden items-center justify-center w-full py-6">
            <div className="h-px w-full bg-black/20"></div>
          </div>
          <div className="hidden lg:flex items-center justify-center px-8">
            <div className="w-px h-60 bg-black/20"></div>
          </div>
          
          <div className="flex flex-col items-start gap-4 w-full lg:w-auto">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-black/15 stroke-transparent"></Star>
              <Star className="w-5 h-5 fill-black/15 stroke-transparent"></Star>
              <Star className="w-5 h-5 fill-black/15 stroke-transparent"></Star>
              <Star className="w-5 h-5 fill-black/15 stroke-transparent"></Star>
              <Star className="w-5 h-5 fill-black/15 stroke-transparent"></Star>
            </div>
            <div className="flex items-start flex-col gap-4">
              <h2 className="text-xl md:text-5xl font-sans font-medium">
                Landing Pages
              </h2>
              <p className="font-sans text-lg max-w-[25ch] leading-relaxed">
                Construímos sites e landing pages que colocam sua empresa no
                Google e transformam visitantes em clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}