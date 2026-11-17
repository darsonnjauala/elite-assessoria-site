export default function HeroGateway() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-26 sm:pt-32 pb-8 px-4 sm:px-6 lg:px-8 bg-[#080E1A] hairline-b overflow-hidden">
      {/* Top / Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto my-auto text-center flex flex-col items-center">
        {/* Editorial Eyebrow (Category & Positioning, Zero Redundant Clutter) */}
        <div className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#C59B27] uppercase mb-6 font-mono">
          Assessoria Empresarial e Soluções Financeiras
        </div>

        {/* Hero Sovereign Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl">
          Contabilidade Organizada, Apoio Jurídico e Domiciliação na Capital.
        </h1>

        {/* Psychological Anchoring Paragraph (Actionable, Zero Repetitive Filler) */}
        <p className="mt-6 text-base sm:text-lg text-[#94A3B8] max-w-3xl leading-relaxed font-normal">
          Estruturamos a contabilidade da sua empresa segundo o PGC-NIRF, asseguramos apoio jurídico contínuo e disponibilizamos morada fiscal com secretariado completo.
        </p>

        {/* Dual Actions - Active, Concise, High Conversion */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="https://wa.me/258846992501?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20uma%20cota%C3%A7%C3%A3o%20r%C3%A1pida."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#C59B27] hover:bg-[#D4AF37] text-[#080E1A] font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-none transition-colors whitespace-nowrap"
          >
            Pedir Cotação Rápida
          </a>
          <a
            href="#domiciliacao"
            className="w-full sm:w-auto inline-flex items-center justify-center border border-white/20 hover:border-[#C59B27] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-none bg-white/5 transition-colors whitespace-nowrap"
          >
            Conhecer Pacotes
          </a>
        </div>

        {/* Integrated Authority Baseline Strip (Replaces Floating Chips, No Geographic Echo) */}
        <div className="mt-12 pt-6 hairline-t w-full max-w-2xl flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs text-[#94A3B8] font-medium tracking-wide">
          <span className="text-[#CBD5E1]">Auditores Certificados OCAM</span>
          <span className="text-white/20 hidden sm:inline">│</span>
          <span className="text-[#CBD5E1]">Normas PGC-NIRF e Fiscalidade</span>
          <span className="text-white/20 hidden sm:inline">│</span>
          <span className="text-[#CBD5E1]">Gestão e Domiciliação Fiscal</span>
        </div>
      </div>

      {/* Bottom Assurance Strip */}
      <div className="relative z-10 max-w-6xl mx-auto w-full pt-8 hairline-t flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-4 text-center sm:text-left">
        <div>
          <span className="text-[#94A3B8] font-semibold">Elite Assessoria Contábil e Empresarial, S.A.</span>, parceira estratégica para empresas nacionais e estrangeiras.
        </div>
        <div className="flex items-center gap-4 text-[#94A3B8] font-mono text-[11px]">
          <span>ATENDIMENTO PRESENCIAL E COBERTURA NACIONAL</span>
        </div>
      </div>
    </section>
  );
}
