const WHATSAPP_NUMBER = "5561991711408";

const plans = [
  {
    name: "Consulta Individual",
    subtitle: "Para quem quer começar com clareza e direcionamento.",
    pitch: "Indicada para quem quer iniciar com clareza: diagnóstico completo, avaliação de composição corporal e construção de um plano alimentar personalizado para o seu objetivo.",
    highlight: false,
    badge: undefined,
    cta: "Conversar no WhatsApp",
    features: [
      "Avaliação de composição corporal (Antropometria ISAK)",
      "Análise de rotina, objetivos e alinhamento estratégico",
      "Plano alimentar personalizado",
      "Orientações práticas na entrega",
      "Acesso ao aplicativo",
    ],
    message: "Olá%2C%20Pablo%21%20Gostaria%20de%20saber%20mais%20sobre%20a%20Consulta%20Individual.",
  },
  {
    name: "Plano Trimestral",
    subtitle: "Estrutura e acompanhamento para gerar consistência.",
    pitch: "Formato pensado para acompanhar a execução do plano e ajustar conforme a sua evolução física, resposta ao treino e rotina ao longo dos 3 meses.",
    highlight: true,
    badge: "Mais procurado",
    cta: "Conversar no WhatsApp",
    features: [
      "Tudo da Consulta Individual",
      "2 retornos mensais",
      "Check-in quinzenal estruturado",
      "Checklist mensal de adesão",
      "Ajustes contínuos no plano",
    ],
    message: "Olá%2C%20Pablo%21%20Gostaria%20de%20saber%20mais%20sobre%20o%20Plano%20Trimestral.",
  },
  {
    name: "Plano Semestral",
    subtitle: "Consolidação de hábitos e resultados sustentáveis.",
    pitch: "A opção de maior custo-benefício. Tempo estendido para consolidar hábitos, com todas as ferramentas práticas que facilitam a execução no dia a dia.",
    highlight: false,
    badge: "Melhor custo-benefício",
    cta: "Conversar no WhatsApp",
    features: [
      "Tudo do Plano Trimestral",
      "5 retornos ao longo dos 6 meses",
      "Manual do Paciente",
      "Lista de compras + Guia de marcas",
      "Checklist mensal de adesão",
    ],
    message: "Olá%2C%20Pablo%21%20Gostaria%20de%20saber%20mais%20sobre%20o%20Plano%20Semestral.",
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
            <div key={plan.name} className="flex flex-col">
              {/* Badge row — always reserves space so all cards align */}
              <div className="h-7 flex items-center justify-center">
                {plan.badge && (
                  <span className={`text-white text-xs font-medium px-4 py-1 tracking-widest uppercase whitespace-nowrap ${plan.highlight ? "bg-pm-gold" : "bg-pm-green"}`}>
                    {plan.badge}
                  </span>
                )}
              </div>

              <div
                className={`relative flex flex-col flex-1 ${
                  plan.highlight
                    ? "bg-pm-dark text-white border-2 border-pm-gold shadow-2xl"
                    : "bg-white border border-pm-border shadow-sm"
                }`}
              >

              <div className="p-8 flex flex-col flex-1">
                {/* Plan header */}
                <div className="mb-6 pb-6 border-b border-pm-border/50">
                  <h3 className={`font-display text-xl mb-1 ${plan.highlight ? "text-white" : "text-pm-brown"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs mb-3 ${plan.highlight ? "text-pm-gold" : "text-pm-gold"}`}>
                    {plan.subtitle}
                  </p>
                  <p className={`text-sm leading-relaxed ${plan.highlight ? "text-white/70" : "text-pm-brown/80"}`}>
                    {plan.pitch}
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
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-pm-muted text-sm mt-8">
          Todos os planos incluem avaliação de composição corporal por antropometria ISAK e plano alimentar personalizado. Fale comigo para tirar dúvidas.
        </p>
      </div>
    </section>
  );
}
