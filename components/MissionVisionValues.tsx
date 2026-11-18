export default function MissionVisionValues() {
  const values = [
    {
      title: "Integridade",
      desc: "Conduzir todos os processos de forma estritamente ética, confidencial e transparente perante clientes e instituições reguladoras.",
    },
    {
      title: "Inovação",
      desc: "Implementar melhorias e ferramentas modernas de gestão para assegurar rigor técnico e celeridade nos serviços corporativos.",
    },
    {
      title: "Trabalho em Equipa",
      desc: "Valorizar e capacitar continuamente o capital humano e os nossos profissionais para superar os objetivos dos nossos clientes.",
    },
  ];

  return (
    <section id="pacto" className="bg-[#042618] py-20 px-4 sm:px-6 lg:px-8 border-t border-[#D4AF37]/20 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-[#D4AF37] uppercase tracking-[0.2em] font-mono mb-3">
            Pacto Institucional
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Missão, Visão e Valores da Elite Assessoria, S.A.
          </h2>
          <p className="mt-4 text-[#CBD5E1] text-sm sm:text-base leading-relaxed">
            A governação corporativa da Elite assenta em princípios sólidos de transparência, responsabilidade técnica e compromisso inequívoco com o empresariado moçambicano.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Missão */}
          <div className="border border-[#D4AF37]/20 bg-[#073824] p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#D4AF37]" />
            <div>
              <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider block mb-3">
                Compromisso Operacional
              </span>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight">
                Missão
              </h3>
              <p className="text-sm text-[#CBD5E1] leading-relaxed">
                Aprimorar diariamente a entrega e execução de serviços contábeis, fiscais e empresariais com transparência e responsabilidade técnica, superando continuamente as expectativas dos empresários em Moçambique.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 text-[11px] font-mono text-[#D4AF37]">
              FOCO NO EMPRESÁRIO MOÇAMBICANO
            </div>
          </div>

          {/* Card 2: Visão */}
          <div className="border border-[#D4AF37]/20 bg-[#073824] p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#F1B814]" />
            <div>
              <span className="text-xs font-mono font-bold text-[#F1B814] uppercase tracking-wider block mb-3">
                Liderança de Mercado
              </span>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight">
                Visão
              </h3>
              <p className="text-sm text-[#CBD5E1] leading-relaxed">
                Consolidar e expandir a posição como a referência incontestável em contabilidade organizada, oferecendo assessoria e consultoria de excelência para empresas, investidores e profissionais em todo o território nacional.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 text-[11px] font-mono text-[#F1B814]">
              COBERTURA E REFERÊNCIA NACIONAL
            </div>
          </div>

          {/* Card 3: Valores */}
          <div className="border border-[#D4AF37]/20 bg-[#073824] p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#16A34A]" />
            <div>
              <span className="text-xs font-mono font-bold text-[#86EFAC] uppercase tracking-wider block mb-3">
                Pilares Inegociáveis
              </span>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight">
                Valores
              </h3>
              <div className="space-y-4">
                {values.map((val, idx) => (
                  <div key={idx} className="border-l-2 border-[#D4AF37] pl-3">
                    <span className="text-xs font-bold text-white uppercase tracking-wide block">
                      {val.title}
                    </span>
                    <span className="text-xs text-[#CBD5E1] leading-relaxed block mt-0.5">
                      {val.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 text-[11px] font-mono text-[#86EFAC]">
              CONDUTA ÉTICA E RIGOR
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}