export default function HeroGateway() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200 overflow-hidden">
      {/* Top / Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Editorial Eyebrow in Dark Rich Gold (WCAG AA Compliant on White) */}
        <div className="text-[11px] sm:text-xs font-bold tracking-[0.22em] text-[#996515] uppercase mb-6 font-mono">
          Assessoria Empresarial, Formação e Soluções Financeiras
        </div>

        {/* Hero Sovereign Headline in Noble Deep Emerald */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#032115] tracking-tight leading-[1.12] max-w-4xl">
          Contabilidade Organizada, Formação Executiva e Domiciliação na Capital.
        </h1>

        {/* Psychological Anchoring Paragraph in Dark Slate */}
        <p className="mt-6 text-base sm:text-lg text-[#334155] max-w-3xl leading-relaxed font-normal">
          Estruturamos a contabilidade da sua empresa segundo as normas PGC-NIRF, capacitamos quadros em fiscalidade prática e disponibilizamos morada fiscal com secretariado completo na Avenida Maguiguana.
        </p>

        {/* Dual Actions - Active, Concise, High Conversion */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="https://wa.me/258851408538?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20uma%20cota%C3%A7%C3%A3o%20r%C3%A1pida%20para%20a%20minha%20empresa."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#D4AF37] hover:bg-[#C59B27] text-[#032115] font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-none transition-colors whitespace-nowrap shadow-md shadow-[#D4AF37]/20"
          >
            Pedir Cotação Rápida
          </a>
          <a
            href="#formacao"
            className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-[#032115] text-[#032115] hover:bg-[#032115] hover:text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-none transition-colors whitespace-nowrap"
          >
            Ver Cursos e Formação
          </a>
        </div>
      </div>
    </section>
  );
}
