import Image from "next/image";

const specialties = [
  "Nutrição Funcional",
  "Comportamento Alimentar",
  "Nutrição Esportiva",
  "Saúde da Mulher",
  "Emagrecimento Saudável",
  "Nutrição Clínica",
];

const education = [
  { title: "Graduação em Nutrição", year: "2025", institution: "IESB – Asa Sul" },
  { title: "Certificação Internacional em Antropometria", year: "2025", institution: "Instituto ISAK" },
];

export default function About() {
  return (
    <section id="sobre" className="bg-pm-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Photos */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="Pablo Moreira em consulta"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Secondary photo overlay */}
            <div className="absolute -bottom-8 -right-6 w-40 h-48 lg:w-52 lg:h-64 overflow-hidden border-4 border-pm-cream shadow-xl">
              <Image
                src="/images/about-2.jpg"
                alt="Pablo Moreira"
                fill
                className="object-cover object-center"
                sizes="220px"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-pm-gold/20 border border-pm-gold/30" />
          </div>

          {/* Content */}
          <div className="lg:pl-8 pb-12 lg:pb-0">
            {/* Section label */}
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-pm-gold" />
              <span className="text-pm-gold text-xs font-medium tracking-[0.2em] uppercase">Sobre mim</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-pm-brown leading-tight mb-6">
              Ciência,{" "}
              <em className="text-pm-green font-display">escuta</em>{" "}
              e presença.
            </h2>

            <div className="space-y-4 text-pm-muted leading-relaxed mb-8">
              <p>
                Sou nutricionista clínico e comportamental com paixão por entender o ser humano além da
                dieta. Acredito que cada pessoa carrega uma história única com a comida — e que essa
                história merece ser ouvida, respeitada e transformada com cuidado.
              </p>
              <p>
                Minha abordagem combina ciência da nutrição funcional com psicologia do comportamento
                alimentar, criando planos que funcionam na vida real — não apenas no papel.
                Atendo em Brasília DF e online para todo o Brasil.
              </p>
            </div>

            {/* Specialties */}
            <div className="mb-8">
              <p className="text-pm-brown text-sm font-medium tracking-wider uppercase mb-4">
                Especialidades
              </p>
              <div className="grid grid-cols-2 gap-2">
                {specialties.map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-pm-gold flex-shrink-0" />
                    <span className="text-pm-brown text-sm">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="border-t border-pm-border pt-6">
              <p className="text-pm-brown text-sm font-medium tracking-wider uppercase mb-4">
                Formação
              </p>
              <div className="space-y-3">
                {education.map((e) => (
                  <div key={e.title} className="flex gap-4">
                    <span className="text-pm-gold text-xs font-medium mt-0.5 flex-shrink-0">{e.year}</span>
                    <div>
                      <p className="text-pm-brown text-sm font-medium">{e.title}</p>
                      <p className="text-pm-muted text-xs">{e.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
