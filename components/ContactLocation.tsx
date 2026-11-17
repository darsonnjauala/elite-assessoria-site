export default function ContactLocation() {
  return (
    <section id="contactos" className="bg-[#080E1A] py-24 px-4 sm:px-6 lg:px-8 hairline-b scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-[#C59B27] uppercase tracking-[0.2em] font-mono mb-3">
            Sede e Atendimento
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Canais Oficiais da Elite Assessoria, S.A.
          </h2>
          <p className="mt-4 text-[#94A3B8] text-sm sm:text-base leading-relaxed">
            Atendimento presencial na capital e linhas dedicadas para assessoria empresarial, escritório virtual e crédito público.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Linha Telefónica */}
          <div className="border border-white/10 bg-[#0D1627] p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider block mb-2">
                Linha Telefónica
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                Atendimento Direto
              </h3>
              <p className="text-xs text-[#94A3B8] mb-4">
                Segunda a Sexta-feira, das 08h00 às 17h00.
              </p>
            </div>
            <a
              href="tel:+258846992501"
              className="border border-white/20 bg-[#0A111F] hover:border-[#C59B27] text-white text-center font-bold text-xs uppercase tracking-wider py-3 rounded-none transition-colors whitespace-nowrap"
            >
              Ligar para a Linha Direta
            </a>
          </div>

          {/* Card 2: WhatsApp Comercial */}
          <div className="border border-white/10 bg-[#0D1627] p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider block mb-2">
                WhatsApp Oficial
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                Triagem Imediata
              </h3>
              <p className="text-xs text-[#94A3B8] mb-4">
                Envio de documentos, cotações e simulações.
              </p>
            </div>
            <a
              href="https://wa.me/258846992501?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20atendimento%20corporativo."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C59B27] hover:bg-[#D4AF37] text-[#080E1A] text-center font-bold text-xs uppercase tracking-wider py-3 rounded-none transition-colors whitespace-nowrap"
            >
              Falar no WhatsApp
            </a>
          </div>

          {/* Card 3: E-mail Corporativo */}
          <div className="border border-white/10 bg-[#0D1627] p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider block mb-2">
                E-mail Institucional
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                Correspondência Formal
              </h3>
              <p className="text-xs text-[#94A3B8] mb-4">
                Envio de propostas e pedidos de auditoria.
              </p>
            </div>
            <a
              href="mailto:geral@eliteassessoria.co.mz"
              className="border border-white/20 bg-[#0A111F] hover:border-[#C59B27] text-white text-center font-bold text-xs tracking-wider py-3 rounded-none transition-colors whitespace-nowrap"
            >
              geral@eliteassessoria.co.mz
            </a>
          </div>

          {/* Card 4: Sede Física Maputo */}
          <div className="border border-white/10 bg-[#0D1627] p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider block mb-2">
                Sede Executiva
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                Cidade de Maputo
              </h3>
              <p className="text-xs text-[#94A3B8] mb-4">
                Avenida 24 de Julho / Sommerschield, Maputo, Moçambique.
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Maputo+Mocambique"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 bg-[#0A111F] hover:border-[#C59B27] text-white text-center font-bold text-xs uppercase tracking-wider py-3 rounded-none transition-colors whitespace-nowrap"
            >
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
