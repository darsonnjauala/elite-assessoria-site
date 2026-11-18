export default function CoursesFormation() {
  const modules = [
    {
      code: "CURSO 01",
      title: "Contabilidade Prática PGC-NIRF",
      badge: "Inscrições Abertas",
      desc: "Da escrituração diária e conciliações bancárias ao balancete e fecho analítico de contas, preparando quadros técnicos para o mercado corporativo.",
      topics: [
        "Plano Geral de Contabilidade PGC-NIRF Moçambicano",
        "Lançamentos Analíticos e Conciliações Periódicas",
        "Balanço, Demonstração de Resultados e Fluxos de Caixa",
        "Dossiê Contábil de Fecho Anual de Exercício",
      ],
    },
    {
      code: "CURSO 02",
      title: "Fiscalidade Moçambicana na Prática",
      badge: "Mais Solicitado",
      desc: "Domínio prático das obrigações tributárias e modelos oficiais junto da Autoridade Tributária para blindar empresas contra multas e coimas.",
      topics: [
        "Apuramento e Liquidação de IRPC e IRPS",
        "Regime de IVA e Declarações Mensais (M/02, M/20)",
        "Técnicas de Retenções na Fonte e Quitações Fiscais",
        "Planeamento Fiscal Preventivo e Auditoria Tributária",
      ],
    },
    {
      code: "CURSO 03",
      title: "Processamento Salarial & INSS (Folhaweb)",
      badge: "Turma Reduzida",
      desc: "Capacitação completa na gestão operacional de remunerações, encargos sociais e submissão digital no sistema Folhaweb do INSS.",
      topics: [
        "Estrutura da Folha de Vencimentos e Subsídios",
        "Cálculo de Horas Extras, Férias e Rescisões Laborais",
        "Retenção de IRPS sobre Rendimentos de Trabalho (2ª Categoria)",
        "Parametrização e Submissão Mensal no Folhaweb / INSS",
      ],
    },
    {
      code: "CURSO 04",
      title: "Softwares de Gestão e Faturação AT",
      badge: "Laboratório Prático",
      desc: "Formação técnica em sistemas de gestão e faturação eletrónica certificados para emissão rigorosa de documentos comerciais.",
      topics: [
        "Parametrização de Séries e Registo de Artigos",
        "Emissão de Faturas, Guias de Transporte e Recibos",
        "Gestão de Contas Correntes de Clientes e Fornecedores",
        "Exportação de Mapas Fiscais e Relatórios de Gestão",
      ],
    },
  ];

  return (
    <section id="formacao" className="bg-[#F8FAF9] py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold text-[#996515] uppercase tracking-[0.2em] font-mono mb-3">
              Capacitação Profissional
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#032115] tracking-tight leading-tight">
              Cursos Práticos e Formação Executiva Contábil
            </h2>
            <p className="mt-4 text-[#475569] text-sm sm:text-base leading-relaxed">
              Formações práticas ministradas por técnicos de contas e consultores seniores da Elite Assessoria, S.A., vocacionadas para profissionais, recém-formados e gestores que exigem competência real no mercado de trabalho.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="https://wa.me/258851408538?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20saber%20as%20datas%20e%20vagas%20dos%20pr%C3%B3ximos%20cursos."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#D4AF37] hover:bg-[#C59B27] text-[#032115] font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-none transition-colors whitespace-nowrap shadow-xs"
            >
              Consultar Calendário e Vagas
            </a>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((mod, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 p-8 flex flex-col justify-between shadow-sm hover:border-[#D4AF37] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-mono font-bold text-[#996515] tracking-wider uppercase">
                    {mod.code}
                  </span>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 bg-[#D4AF37]/15 text-[#996515] border border-[#D4AF37]/30 uppercase tracking-wider">
                    {mod.badge}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#032115] tracking-tight mb-3">
                  {mod.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed mb-6">
                  {mod.desc}
                </p>

                {/* Practical Topics List */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-mono text-[#073824] uppercase tracking-wider block mb-2 font-bold">
                    Conteúdo Programático Prático:
                  </span>
                  {mod.topics.map((t, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2.5 text-xs text-[#475569]">
                      <span className="text-[#073824] font-bold">•</span>
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                <span className="text-xs text-[#64748B] font-mono">
                  Sede: Av. Maguiguana 688, Maputo
                </span>
                <a
                  href={`https://wa.me/258851408538?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20inscri%C3%A7%C3%A3o%20no%20curso%20de%20${encodeURIComponent(mod.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border-2 border-[#032115] bg-white hover:bg-[#032115] hover:text-white text-[#032115] font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-none transition-colors whitespace-nowrap"
                >
                  Inscrever no Curso
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
