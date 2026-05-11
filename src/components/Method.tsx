const steps = [
  {
    number: "01",
    title: "Avaliação Profunda",
    description:
      "Vou além dos exames laboratoriais. Mergulho na sua história, rotina, relação emocional com a comida e objetivos reais de vida.",
  },
  {
    number: "02",
    title: "Plano Personalizado",
    description:
      "Nada de protocolos genéricos. Cada plano alimentar é construído como uma roupa sob medida para o seu corpo, horários e cultura.",
  },
  {
    number: "03",
    title: "Acompanhamento Contínuo",
    description:
      "O processo não para na consulta. Estou junto nos ajustes, nas dúvidas do dia a dia e na celebração de cada conquista.",
  },
  {
    number: "04",
    title: "Resultado Duradouro",
    description:
      "Construímos autonomia. O objetivo não é você depender de mim para sempre, é você entender seu corpo e fazer escolhas livres.",
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
            O método que{" "}
            <em className="text-pm-green font-display">transforma</em>{" "}
            em vez de restringir.
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
