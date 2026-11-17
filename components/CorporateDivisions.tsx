"use client";

import { useState } from "react";

export default function CorporateDivisions() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const divisions = [
    {
      id: "financas",
      code: "DIVISÃO 01",
      division: "Elite Finance & Audit",
      title: "Contabilidade Organizada, Fiscalidade & Auditoria Independente",
      confidenceParagraph:
        "Manter a conformidade tributária em Moçambique exige precisão cirúrgica. A nossa equipa assegura o fecho analítico de contas, processamento salarial e planeamento fiscal preventivo, blindando a sua organização contra coimas e contingências junto da Autoridade Tributária.",
      competencies: [
        {
          index: "I",
          title: "Contabilidade Geral & Analítica",
          desc: "Escrituração formal contínua sob o plano de contas e normas PGC-NIRF em vigor em Moçambique.",
        },
        {
          index: "II",
          title: "Gestão Fiscal & Apuramento Tributário",
          desc: "Liquidação atempada de IRPC, IRPS, IVA e cumprimento rigoroso das retenções na fonte.",
        },
        {
          index: "III",
          title: "Processamento Salarial & INSS",
          desc: "Gestão operacional de folhas de remuneração e regularização com o Instituto Nacional de Segurança Social.",
        },
        {
          index: "IV",
          title: "Auditoria Financeira Independente",
          desc: "Revisão independente de demonstrações financeiras para validação perante bancos e auditores externos.",
        },
      ],
      ctaText: "Solicitar Diagnóstico Fiscal",
      ctaLink: "https://wa.me/258846992501?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20um%20diagn%C3%B3stico%20cont%C3%A1bil%20e%20fiscal%20para%20a%20minha%20empresa.",
    },
    {
      id: "legal",
      code: "DIVISÃO 02",
      division: "Elite Legal & Business Setup",
      title: "Constituição de Empresas, Licenciamento & Assessoria Jurídica",
      confidenceParagraph:
        "Elimine a morosidade e a incerteza no arranque do seu negócio. Orientamos o enquadramento societário mais eficiente, elaboramos estatutos sólidos e conduzimos todos os registos no Balcão Único para que a sua empresa nasça legalmente protegida e pronta a faturar.",
      competencies: [
        {
          index: "I",
          title: "Constituição no Balcão Único (BAU)",
          desc: "Formalização burocrática integral, certidão de registo comercial e publicação no Boletim da República.",
        },
        {
          index: "II",
          title: "Licenciamento & Alvarás Comerciais",
          desc: "Tramitação célere de alvarás de atividade, enquadramento de setor e emissão de NUIT corporativo.",
        },
        {
          index: "III",
          title: "Contratos Comerciais & Acordos de Sócios",
          desc: "Redação de contratos mercantis, acordos parassociais e proteção de responsabilidade patrimonial.",
        },
        {
          index: "IV",
          title: "Direito Laboral & Regularização de Quadros",
          desc: "Assistência legal na contratação de trabalhadores nacionais e estrangeiros e conformidade laboral.",
        },
      ],
      ctaText: "Formalizar Nova Empresa",
      ctaLink: "https://wa.me/258846992501?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20apoio%20para%20abertura%20e%20formaliza%C3%A7%C3%A3o%20de%20empresa.",
    },
    {
      id: "domiciliacao-servicos",
      code: "DIVISÃO 03",
      division: "Elite Virtual Office & Operations",
      title: "Sede Comercial em Maputo, Atendimento & Infraestrutura",
      confidenceParagraph:
        "Uma presença institucional de prestígio na capital sem os custos fixos de um escritório tradicional. Disponibilizamos morada fiscal reconhecida para registo de empresas nacionais e internacionais, com atendimento telefónico bilingue e encaminhamento ágil de correspondência.",
      competencies: [
        {
          index: "I",
          title: "Domiciliação Fiscal Oficial na Capital",
          desc: "Endereço corporativo válido para Conservatória, Autoridade Tributária e documentação societária.",
        },
        {
          index: "II",
          title: "Linha Telefónica Fixa de Maputo (+258 21)",
          desc: "Atendimento secretarial profissional e bilingue em nome da sua empresa durante o horário comercial.",
        },
        {
          index: "III",
          title: "Gestão & Digitalização Documental",
          desc: "Receção, digitalização segura e reencaminhamento imediato de correspondência e notificações oficiais.",
        },
        {
          index: "IV",
          title: "Infraestrutura Digital & E-mails Oficiais",
          desc: "Configuração de caixas postais profissionais (@empresa.co.mz) e apoio técnico de imagem corporativa.",
        },
      ],
      ctaText: "Ver Planos de Domiciliação",
      ctaLink: "#domiciliacao",
    },
  ];

  return (
    <section className="bg-[#080E1A] py-24 px-4 sm:px-6 lg:px-8 hairline-b">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-[#C59B27] uppercase tracking-[0.2em] font-mono mb-3">
            Estrutura Corporativa
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            As Três Divisões Especializadas da Elite Assessoria, S.A.
          </h2>
          <p className="mt-4 text-[#94A3B8] text-sm sm:text-base leading-relaxed">
            Operamos como uma parceira multidisciplinar sob a mesma governação corporativa, eliminando a fragmentação de contratar múltiplos prestadores avulsos.
          </p>
        </div>

        {/* Divisions Editorial Layout */}
        <div className="space-y-20">
          {divisions.map((div, dIdx) => (
            <div
              key={div.id}
              id={div.id}
              className="hairline-t pt-10 scroll-mt-24"
            >
              {/* Division Header Row */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6">
                <div className="max-w-3xl">
                  <span className="text-xs font-semibold text-[#C59B27] uppercase tracking-[0.18em] font-mono block mb-2">
                    {div.code} — {div.division}
                  </span>
                  <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight">
                    {div.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-[#CBD5E1] leading-relaxed max-w-2xl border-l-2 border-[#C59B27] pl-4">
                    {div.confidenceParagraph}
                  </p>
                </div>
                <div className="shrink-0">
                  <a
                    href={div.ctaLink}
                    target={div.ctaLink.startsWith("http") ? "_blank" : undefined}
                    rel={div.ctaLink.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center justify-center bg-[#C59B27] hover:bg-[#D4AF37] text-[#080E1A] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-none transition-colors whitespace-nowrap"
                  >
                    {div.ctaText}
                  </a>
                </div>
              </div>

              {/* Editorial Competencies List (Replaces Container Bloat & Yellow Dots) */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 hairline-t pt-6">
                {div.competencies.map((comp, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-4 py-2">
                    <span className="text-xs font-mono font-bold text-[#C59B27] tracking-wider pt-0.5 shrink-0">
                      [{comp.index}]
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-white tracking-tight">
                        {comp.title}
                      </h4>
                      <p className="mt-1 text-xs text-[#94A3B8] leading-relaxed">
                        {comp.desc}
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
