import Image from "next/image";

const photos = [
  { src: "/images/atendimento/IMG_0469.jpg", alt: "Atendimento nutricional" },
  { src: "/images/atendimento/IMG_0294.jpg", alt: "Atendimento nutricional" },
  { src: "/images/atendimento/IMG_0307.jpg", alt: "Consulta presencial" },
  { src: "/images/atendimento/IMG_0481.jpg", alt: "Consulta presencial" },
  { src: "/images/atendimento/IMG_0429.jpg", alt: "Atendimento nutricional" },
  { src: "/images/atendimento/IMG_0435.jpg", alt: "Consulta com paciente" },
  { src: "/images/atendimento/IMG_0427.jpg", alt: "Detalhes do consultório" },
  { src: "/images/atendimento/IMG_0441.jpg", alt: "Consulta nutricional" },
  { src: "/images/atendimento/IMG_0282.jpg", alt: "Consulta com paciente" },
  { src: "/images/atendimento/IMG_0438.jpg", alt: "Atendimento presencial" },
  { src: "/images/atendimento/IMG_0488.jpg", alt: "Atendimento nutricional" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="bg-pm-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-pm-gold" />
            <span className="text-pm-gold text-xs font-medium tracking-[0.2em] uppercase">Galeria</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            O profissional por trás{" "}
            <em className="text-pm-gold font-display">do consultório.</em>
          </h2>
        </div>

        {/* Grid — todas as 15 fotos */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
          {photos.map((photo, i) => (
            <div
              key={photo.src}
              className={`relative overflow-hidden group ${i === 0 ? "col-span-2 lg:col-span-1 lg:row-span-2" : "col-span-1"
                }`}
            >
              <div
                className={`relative w-full ${i === 0 ? "h-64 lg:h-full lg:min-h-[520px]" : "aspect-square"
                  }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-pm-dark/20 group-hover:bg-pm-dark/0 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
