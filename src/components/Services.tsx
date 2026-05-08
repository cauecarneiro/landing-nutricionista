const WHATSAPP_NUMBER = "[TELEFONE]";

const plans = [
  {
    name: "Consulta Online",
    description: "Atendimento por videochamada com suporte via WhatsApp.",
    price: "[VALOR_ONLINE]",
    highlight: false,
    cta: "Agendar Online",
    features: [
      "Anamnese detalhada",
      "Plano alimentar personalizado",
      "Análise de exames",
      "Suporte via WhatsApp por 7 dias",
    ],
    message: "Olá%2C%20gostaria%20de%20agendar%20uma%20consulta%20online.",
  },
  {
    name: "Consulta Presencial",
    description: "Avaliação completa no consultório em Brasília DF.",
    price: "[VALOR_PRESENCIAL]",
    highlight: true,
    badge: "Mais procurado",
    cta: "Agendar Presencial",
    features: [
      "Avaliação corporal completa",
      "Bioimpedância inclusa",
      "Plano alimentar detalhado",
      "Suporte via WhatsApp por 15 dias",
      "Material educativo exclusivo",
    ],
    message: "Olá%2C%20gostaria%20de%20agendar%20uma%20consulta%20presencial.",
  },
  {
    name: "Plano Alimentar",
    description: "Plano alimentar personalizado sem necessidade de consulta.",
    price: "[VALOR_PLANO]",
    highlight: false,
    cta: "Solicitar Plano",
    features: [
      "Questionário completo online",
      "Cardápio semanal personalizado",
      "Lista de compras inclusa",
      "1 revisão inclusa",
    ],
    message: "Olá%2C%20gostaria%20de%20solicitar%20um%20plano%20alimentar.",
  },
];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-pm-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="servicos" className="bg-pm-sand py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-6 justify-center">
            <div className="h-px w-8 bg-pm-gold" />
            <span className="text-pm-gold text-xs font-medium tracking-[0.2em] uppercase">Consultas</span>
            <div className="h-px w-8 bg-pm-gold" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-pm-brown leading-tight">
            Como posso{" "}
            <em className="text-pm-green font-display">te atender.</em>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col ${
                plan.highlight
                  ? "bg-pm-dark text-white border-2 border-pm-gold shadow-2xl scale-[1.02]"
                  : "bg-white border border-pm-border shadow-sm"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-pm-gold text-white text-xs font-medium px-4 py-1 tracking-widest uppercase">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                {/* Plan header */}
                <div className="mb-6 pb-6 border-b border-pm-border/50">
                  <h3 className={`font-display text-xl mb-1 ${plan.highlight ? "text-white" : "text-pm-brown"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm leading-relaxed ${plan.highlight ? "text-white/60" : "text-pm-muted"}`}>
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <p className={`text-xs uppercase tracking-wider mb-1 ${plan.highlight ? "text-white/40" : "text-pm-muted"}`}>
                    A partir de
                  </p>
                  <p className={`font-display text-3xl font-bold ${plan.highlight ? "text-pm-gold" : "text-pm-brown"}`}>
                    R$ {plan.price}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className={`text-sm ${plan.highlight ? "text-white/80" : "text-pm-brown"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${plan.message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center py-4 text-sm font-medium tracking-wide transition-colors duration-200 ${
                    plan.highlight
                      ? "bg-pm-gold text-white hover:bg-pm-green"
                      : "border border-pm-dark text-pm-dark hover:bg-pm-dark hover:text-white"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-pm-muted text-sm mt-8">
          Todos os planos incluem retorno para acompanhamento de resultados. Fale comigo para tirar dúvidas.
        </p>
      </div>
    </section>
  );
}
