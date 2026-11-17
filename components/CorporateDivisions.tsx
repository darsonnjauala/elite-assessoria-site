export default function CorporateDivisions() {
  const divisions = [
    {
      id: "financas",
      tag: "Divisão 01",
      division: "Elite Finance & Audit",
      title: "Contabilidade Organizada, Fiscalidade & Auditoria Independente",
      // Parágrafo psicológico de confiança (redução de ansiedade fiscal)
      confidenceParagraph:
        "Manter a conformidade tributária em Moçambique exige precisão cirúrgica. A nossa equipa assegura o fecho analítico de contas, processamento salarial e planeamento fiscal preventivo, blindando a sua organização contra coimas e contingências junto da Autoridade Tributária.",
      bullets: [
        { title: "Contabilidade Geral & Analítica", desc: "Escrituração formal sob o plano de contas e normas PGC-NIRF em vigor." },
        { title: "Gestão Fiscal & Impostos", desc: "Apuramento tempestivo de IRPC, IRPS, IVA e cumprimento de retenções na fonte." },
        { title: "Processamento Salarial & INSS", desc: "Gestão operacional de folhas de pagamento e regularização com a segurança social." },
        { title: "Auditoria Financeira Independente", desc: "Exames detalhados de balanços para assegurar transparência perante investidores e bancos." },
      ],
      ctaText: "Solicitar Diagnóstico Fiscal",
      ctaLink: "https://wa.me/258846992501?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20um%20diagn%C3%B3stico%20cont%C3%A1bil%20e%20fiscal%20para%20a%20minha%20empresa.",
    },
    {
      id: "legal",
      tag: "Divisão 02",
      division: "Elite Legal & Business Setup",
      title: "Constituição de Empresas, Alvarás & Assessoria Jurídica",
      // Parágrafo psicológico de alívio burocrático
      confidenceParagraph:
        "Elimine a morosidade e a incerteza no arranque do seu negócio. Orientamos o enquadramento societário mais eficiente, elaboramos estatutos sólidos e conduzimos todos os registos no Balcão Único para que a sua empresa nasça legalmente protegida e pronta a faturar.",
      bullets: [
        { title: "Constituição no Balcão Único (BAU)", desc: "Formalização burocrática integral, certidão comercial e publicação oficial." },
        { title: "Licenciamento & NUIT Corporativo", desc: "Tramitação célere de alvarás de atividade, enquadramento sectorial e NUIT." },
        { title: "Assessoria Jurídica Comercial", desc: "Redação de contratos mercantis, acordos de sócios e proteção de património." },
        { title: "Direito do Trabalho & Relações Laborais", desc: "Assistência legal na contratação, contratos de trabalho e conformidade laboral." },
      ],
      ctaText: "Formalizar Nova Empresa",
      ctaLink: "https://wa.me/258846992501?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20apoio%20para%20abertura%20e%20formaliza%C3%A7%C3%A3o%20de%20empresa.",
    },
    {
      id: "domiciliacao-servicos",
      tag: "Divisão 03",
      division: "Elite Virtual Office & Operations",
      title: "Sede Comercial em Maputo, Atendimento & Infraestrutura",
      // Parágrafo psicológico de prestígio e expansão sem custo fixo
      confidenceParagraph:
        "Uma presença institucional de prestígio na capital sem os custos fixos de um escritório tradicional. Disponibilizamos morada fiscal reconhecida para registo de empresas nacionais e internacionais, com atendimento telefónico bilingue e encaminhamento ágil de correspondência.",
      bullets: [
        { title: "Domiciliação Fiscal na Capital", desc: "Endereço corporativo válido para Conservatória, Finanças e documentação legal." },
        { title: "Call Center & Secretariado Local", desc: "Linha telefónica fixa de Maputo com atendimento profissional em nome da sua empresa." },
        { title: "Gestão Física & Digital de Documentos", desc: "Receção, digitalização segura e reencaminhamento imediato de notificações fiscais." },
        { title: "E-mails Corporativos & Imagem", desc: "Configuração de caixas postais profissionais (@empresa.co.mz) e presença institucional." },
      ],
      ctaText: "Ver Planos de Domiciliação",
      ctaLink: "#domiciliacao",
    },
  ];

  return (
    <section className="bg-[#0A111F] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 border border-[#C59B27]/40 bg-[#C59B27]/10 px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-[#D4AF37] uppercase">
            Estrutura Corporativa
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            As Três Divisões Especializadas da Elite Assessoria, S.A.
          </h2>
          <p className="mt-4 text-[#94A3B8] text-sm sm:text-base leading-relaxed">
            Operamos como uma parceira multidisciplinar sob a mesma governação corporativa, eliminando a fragmentação de contratar múltiplos prestadores avulsos.
          </p>
        </div>

        {/* Divisions List */}
        <div className="space-y-16">
          {divisions.map((div) => (
            <div
              key={div.id}
              id={div.id}
              className="border border-[#1E293B] bg-[#0F172A] p-6 sm:p-10 scroll-mt-24"
            >
              {/* Division Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1E293B] pb-6">
                <div>
                  <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block mb-1">
                    {div.tag} · {div.division}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {div.title}
                  </h3>
                </div>
                <div className="shrink-0">
                  <a
                    href={div.ctaLink}
                    target={div.ctaLink.startsWith("http") ? "_blank" : undefined}
                    rel={div.ctaLink.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-block bg-[#C59B27] hover:bg-[#D4AF37] text-[#0A111F] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-none transition-colors"
                  >
                    {div.ctaText}
                  </a>
                </div>
              </div>

              {/* Psychological Anchoring Paragraph */}
              <div className="mt-6 border-l-2 border-[#D4AF37] pl-4 bg-[#131E35]/40 py-3 pr-4">
                <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                  {div.confidenceParagraph}
                </p>
              </div>

              {/* Micro-bullets Grid (System 1) */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {div.bullets.map((b, bIdx) => (
                  <div
                    key={bIdx}
                    className="border border-[#1E293B] bg-[#0A111F] p-4 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-2 h-2 bg-[#C59B27] mb-2" />
                      <h4 className="text-sm font-bold text-white mb-1.5">
                        {b.title}
                      </h4>
                      <p className="text-xs text-[#94A3B8] leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
