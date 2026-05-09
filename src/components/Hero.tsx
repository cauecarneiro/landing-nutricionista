import Image from "next/image";

const WHATSAPP_NUMBER = "5561991711408";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta.`;

  return (
    <section className="relative min-h-screen bg-pm-dark flex items-center overflow-hidden">
      {/* Background texture / subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pm-dark via-pm-dark to-pm-darker opacity-90" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-80px)]">

          {/* Text content */}
          <div className="order-2 flex flex-col justify-center">
            {/* Credencial badge */}
            <div className="inline-flex items-center gap-2 mb-8 w-fit">
              <div className="h-px w-8 bg-pm-gold" />
              <span className="text-pm-gold text-xs font-medium tracking-[0.2em] uppercase">
                CRN-3 · 27515 · Brasília DF
              </span>
            </div>

            {/* Subtitle */}
            <p className="text-white/50 text-sm font-medium tracking-[0.15em] uppercase mb-4">
              Nutrição Clínica &amp; Comportamental
            </p>

            {/* Main headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-6">
              Comida que{" "}
              <em className="text-pm-gold not-italic font-display">transforma</em>{" "}
              vidas, não apenas corpos.
            </h1>

            {/* Tagline */}
            <p className="text-white/60 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg">
              Ciência, escuta e presença em cada consulta. Uma abordagem que vai além da dieta
              e constrói uma relação saudável com a comida para a vida toda.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-pm-green text-white font-medium px-8 py-4 hover:bg-pm-gold transition-colors duration-200 text-sm tracking-wide"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Agendar Consulta
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white/80 font-medium px-8 py-4 hover:border-white hover:text-white transition-all duration-200 text-sm tracking-wide"
              >
                Saiba Mais
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-white/10">
              <div>
                <p className="text-white font-display text-2xl font-bold">+200</p>
                <p className="text-white/40 text-xs tracking-wide uppercase mt-1">Pacientes atendidos</p>
              </div>
              <div>
                <p className="text-white font-display text-2xl font-bold">5 anos</p>
                <p className="text-white/40 text-xs tracking-wide uppercase mt-1">De experiência</p>
              </div>
              <div>
                <p className="text-white font-display text-2xl font-bold">Online</p>
                <p className="text-white/40 text-xs tracking-wide uppercase mt-1">e Presencial</p>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 flex justify-center lg:justify-start">
            <div className="relative w-72 sm:w-80 lg:w-[420px] xl:w-[480px]">
              {/* Decorative frame */}
              <div className="absolute -inset-3 border border-pm-gold/20" />
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-pm-gold/40" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-pm-gold/40" />

              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/hero.jpg"
                  alt="Pablo Moreira — Nutricionista Clínico e Comportamental"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 320px, (max-width: 1024px) 380px, 480px"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-pm-dark/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-white animate-pulse" />
      </div>
    </section>
  );
}
