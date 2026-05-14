const blocks = [
  {
    number: "01",
    title: "Rotina real",
    description:
      "Sua alimentação precisa caber na sua rotina, vida social, horários e preferências alimentares.",
  },
  {
    number: "02",
    title: "Construção em conjunto",
    description:
      "Nada é imposto. As estratégias são definidas junto com você para aumentar adesão e sustentabilidade.",
  },
  {
    number: "03",
    title: "Adesão acima de perfeição",
    description:
      "A melhor dieta não é a mais restritiva. É a que você consegue seguir com consistência.",
  },
  {
    number: "04",
    title: "Estratégia prática",
    description:
      "Ajustes de rotina, organização, sono, hidratação e planejamento fazem parte do processo.",
  },
];

export default function Philosophy() {
  return (
    <section className="bg-pm-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="max-w-3xl mb-6">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-pm-gold" />
            <span className="text-pm-gold text-xs font-medium tracking-[0.2em] uppercase">Filosofia</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-pm-brown leading-tight mb-4">
            Não acredito em dietas perfeitas.{" "}
            <em className="text-pm-gold font-display">Acredito em dietas possíveis.</em>
          </h2>
          <p className="text-pm-muted text-lg leading-relaxed max-w-2xl">
            A dieta precisa funcionar para a pessoa, não a pessoa funcionar para a dieta.
            Por isso, cada estratégia é construída junto com você, respeitando sua rotina,
            sua realidade e sua vida.
          </p>
        </div>

        {/* Blocks grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12 mb-16">
          {blocks.map((block) => (
            <div key={block.number} className="relative p-8 bg-white border border-pm-border hover:shadow-md transition-shadow duration-300">
              <div className="font-display text-6xl font-bold text-pm-gold/20 leading-none mb-4 select-none">
                {block.number}
              </div>
              <h3 className="font-display text-lg text-pm-brown mb-3">
                {block.title}
              </h3>
              <p className="text-pm-muted leading-relaxed text-sm">
                {block.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing quote */}
        <div className="border-l-2 border-pm-gold pl-8 max-w-2xl">
          <p className="text-pm-brown text-lg lg:text-xl font-display italic leading-relaxed mb-3">
            &ldquo;Não é você que precisa se adequar à minha conduta.
            Sou eu que preciso adequar a estratégia à sua vida e à sua rotina.&rdquo;
          </p>
          <span className="text-pm-gold text-sm font-medium tracking-wider uppercase">Pablo Moreira, Nutricionista</span>
        </div>

      </div>
    </section>
  );
}
