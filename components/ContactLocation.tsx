export default function ContactLocation() {
  return (
    <section id="contactos" className="bg-[#0F172A] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#1E293B] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 border border-[#C59B27]/40 bg-[#C59B27]/10 px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-[#D4AF37] uppercase">
            Sede &amp; Atendimento
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Canais Oficiais da Elite Assessoria, S.A.
          </h2>
          <p className="mt-4 text-[#94A3B8] text-sm sm:text-base leading-relaxed">
            Atendimento presencial em Maputo e linhas dedicadas para assessoria empresarial, domiciliação e crédito público.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Linha Telefónica */}
          <div className="border border-[#1E293B] bg-[#0A111F] p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-2">
                Linha Telefónica
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                Atendimento Maputo
              </h3>
              <p className="text-xs text-[#94A3B8] mb-4">
                Segunda a Sexta-feira, das 08h00 às 17h00.
              </p>
            </div>
            <a
              href="tel:+258846992501"
              className="border border-[#1E293B] bg-[#0F172A] hover:border-[#C59B27] text-white text-center font-bold text-xs uppercase tracking-wider py-2.5 rounded-none transition-colors"
            >
              Ligar: +258 84 699 2501
            </a>
          </div>

          {/* Card 2: WhatsApp Comercial */}
          <div className="border border-[#1E293B] bg-[#0A111F] p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-2">
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
              className="bg-[#C59B27] hover:bg-[#D4AF37] text-[#0A111F] text-center font-bold text-xs uppercase tracking-wider py-2.5 rounded-none transition-colors"
            >
              Iniciar Conversa WhatsApp
            </a>
          </div>

          {/* Card 3: E-mail Corporativo */}
          <div className="border border-[#1E293B] bg-[#0A111F] p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-2">
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
              className="border border-[#1E293B] bg-[#0F172A] hover:border-[#C59B27] text-white text-center font-bold text-xs tracking-wider py-2.5 rounded-none transition-colors"
            >
              geral@eliteassessoria.co.mz
            </a>
          </div>

          {/* Card 4: Sede Física Maputo */}
          <div className="border border-[#1E293B] bg-[#0A111F] p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-2">
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
              className="border border-[#1E293B] bg-[#0F172A] hover:border-[#C59B27] text-white text-center font-bold text-xs uppercase tracking-wider py-2.5 rounded-none transition-colors"
            >
              Ver no Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
