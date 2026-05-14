const steps = [
  {
    number: "01",
    title: "Consulta Inicial",
    description:
      "A consulta inicial dura cerca de 1h30 para mapear sua alimentação, rotina, sono, atividade física, exames, comportamento alimentar e dificuldades reais do dia a dia. A composição corporal é avaliada por antropometria padronizada pela ISAK, protocolo reconhecido internacionalmente pela confiabilidade técnica na análise corporal.",
  },
  {
    number: "02",
    title: "Plano Construído Junto",
    description:
      "O plano alimentar não é imposto, é construído junto com você. Nada de protocolos genéricos: cada estratégia respeita seus horários, preferências, vida social e objetivos reais.",
  },
  {
    number: "03",
    title: "Acompanhamento Ativo",
    description:
      "A cada 15 dias, realizamos check-ins estruturados para avaliar adesão, dificuldades, sono, hidratação e evolução, com ajustes contínuos no plano. O suporte próximo ajuda você a se sentir mais seguro e consistente.",
  },
  {
    number: "04",
    title: "Educação Nutricional",
    description:
      "O objetivo não é apenas entregar uma dieta, mas ajudar você a entender a alimentação de forma clara, prática e baseada em evidências, construindo autonomia e resultados que duram.",
  },
];

export default function Method() {
  return (
    <section id="metodo" className="bg-pm-sand py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-pm-gold" />
            <span className="text-pm-gold text-xs font-medium tracking-[0.2em] uppercase">Meu Método</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-pm-brown leading-tight">
            Como funciona o{" "}
            <em className="text-pm-green font-display">acompanhamento.</em>
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative p-8 lg:p-12 border border-pm-border ${
                i % 2 === 0 ? "border-r-0" : ""
              } ${i < 2 ? "border-b-0" : ""} bg-white/40 hover:bg-white/70 transition-colors duration-300 group`}
            >
              {/* Step number */}
              <div className="font-display text-7xl lg:text-8xl font-bold text-pm-gold/20 group-hover:text-pm-gold/30 transition-colors leading-none mb-4 select-none">
                {step.number}
              </div>
              <h3 className="font-display text-xl lg:text-2xl text-pm-brown mb-3">
                {step.title}
              </h3>
              <p className="text-pm-muted leading-relaxed text-sm lg:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
