export default function HeroGateway() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-32 pb-8 px-4 sm:px-6 lg:px-8 bg-[#0A111F] bg-grid-pattern border-b border-[#1E293B] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C59B27]/8 blur-[120px] pointer-events-none rounded-full" />

      {/* Top / Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto my-auto text-center flex flex-col items-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 border border-[#C59B27]/40 bg-[#C59B27]/10 px-3.5 py-1.5 mb-6 text-[11px] sm:text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
          <span className="w-1.5 h-1.5 bg-[#C59B27]" />
          Sociedade Anónima Moçambicana · Maputo
        </div>

        {/* Hero Sovereign Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl">
          Rigor Contábil, Segurança Jurídica e Domiciliação Estratégica em Maputo.
        </h1>

        {/* Psychological Anchoring Paragraph (System 2 Reassurance) */}
        <p className="mt-6 text-base sm:text-lg text-[#94A3B8] max-w-3xl leading-relaxed font-normal">
          Como Sociedade Anónima moçambicana, a Elite estrutura a contabilidade organizada da sua empresa sob normas PGC-NIRF, protege o seu património com assessoria jurídica contínua e assegura uma sede comercial de prestígio no coração empresarial da capital.
        </p>

        {/* 3 Authority Badges (System 1 Scanability) */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
          <div className="border border-[#1E293B] bg-[#0F172A] px-3.5 py-2 text-xs font-semibold text-[#E2E8F0] tracking-wide">
            Técnicos e Auditores OCAM
          </div>
          <div className="border border-[#1E293B] bg-[#0F172A] px-3.5 py-2 text-xs font-semibold text-[#E2E8F0] tracking-wide">
            Conformidade PGC-NIRF &amp; Fiscalidade
          </div>
          <div className="border border-[#1E293B] bg-[#0F172A] px-3.5 py-2 text-xs font-semibold text-[#E2E8F0] tracking-wide">
            Sede Executiva em Maputo
          </div>
        </div>

        {/* Dual Actions - Zero Icons, Rounded-None */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="https://wa.me/258846992501?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20solicitar%20uma%20cota%C3%A7%C3%A3o%20corporativa."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#C59B27] hover:bg-[#D4AF37] text-[#0A111F] font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-none transition-colors"
          >
            Solicitar Cotação Corporativa
          </a>
          <a
            href="#domiciliacao"
            className="w-full sm:w-auto inline-flex items-center justify-center border border-[#1E293B] bg-[#0F172A] hover:border-[#C59B27] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-none transition-colors"
          >
            Ver Pacotes de Domiciliação
          </a>
        </div>
      </div>

      {/* Bottom Assurance Strip */}
      <div className="relative z-10 max-w-6xl mx-auto w-full pt-8 border-t border-[#1E293B]/70 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-4 text-center sm:text-left">
        <div>
          <span className="text-[#94A3B8] font-semibold">Elite Assessoria Contábil e Empresarial, S.A.</span> — Parceira Estratégica para PMEs, Multinacionais e Servidores Públicos.
        </div>
        <div className="flex items-center gap-4 text-[#94A3B8] font-mono text-[11px]">
          <span>MAPUTO</span>
          <span>·</span>
          <span>MATOLA</span>
          <span>·</span>
          <span>COBERTURA NACIONAL</span>
        </div>
      </div>
    </section>
  );
}
