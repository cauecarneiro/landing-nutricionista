const testimonials = [
  {
    name: "Mariana Costa",
    duration: "1 ano de acompanhamento",
    area: "Emagrecimento",
    text: "Passei anos em dietas restritivas que nunca funcionavam. Com Pablo, aprendi que alimentação não é punição. Emagreci 14kg em 8 meses sem abrir mão da vida social.",
  },
  {
    name: "Rafael Mendonça",
    duration: "10 meses de acompanhamento",
    area: "Nutrição Esportiva",
    text: "Sou atleta amador e precisava de um plano que respeitasse meu treino e minha vida. Pablo entende de performance e de gente. Resultado: PR no primeiro meio maratona.",
  },
  {
    name: "Gabriela Nunes",
    duration: "1 ano e meio de acompanhamento",
    area: "Comportamento Alimentar",
    text: "Tinha uma relação complicada com a comida por causa da ansiedade. O trabalho comportamental nas consultas mudou minha relação com o prato e comigo mesma.",
  },
  {
    name: "Letícia Prado",
    duration: "2 anos de acompanhamento",
    area: "Pós-parto",
    text: "Depois da gravidez, meu corpo mudou muito. Pablo me ajudou a voltar ao meu peso com segurança, sem dietas malucas. Amamentei por 1 ano me sentindo ótima.",
  },
  {
    name: "André Lima",
    duration: "8 meses de acompanhamento",
    area: "Nutrição Clínica",
    text: "Tenho síndrome do intestino irritável e nenhum nutricionista tinha me ajudado de verdade. Pablo fez um protocolo específico e hoje tenho uma qualidade de vida que não tinha há anos.",
  },
  {
    name: "Fernanda Souza",
    duration: "6 meses de acompanhamento",
    area: "Consulta Online",
    text: "Faço consulta online e é incrível — parece que estamos no mesmo consultório. Pablo é extremamente atencioso e os planos realmente funcionam. Recomendo para qualquer pessoa.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-pm-gold" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="pacientes" className="bg-pm-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-6 justify-center">
            <div className="h-px w-8 bg-pm-gold" />
            <span className="text-pm-gold text-xs font-medium tracking-[0.2em] uppercase">Depoimentos</span>
            <div className="h-px w-8 bg-pm-gold" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-pm-brown leading-tight">
            Histórias que{" "}
            <em className="text-pm-green font-display">inspiram</em>{" "}
            e confirmam.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-pm-border p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <Stars />
              <p className="text-pm-brown leading-relaxed text-sm flex-1 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="border-t border-pm-border pt-4">
                <p className="text-pm-brown font-semibold text-sm">{t.name}</p>
                <p className="text-pm-muted text-xs mt-0.5">{t.duration}</p>
                <span className="inline-block mt-2 text-xs text-pm-green font-medium tracking-wide uppercase bg-pm-green/10 px-2 py-0.5">
                  {t.area}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
