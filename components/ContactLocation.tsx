export default function ContactLocation() {
  return (
    <section id="contactos" className="bg-[#032115] py-24 px-4 sm:px-6 lg:px-8 border-b border-[#D4AF37]/20 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-[#D4AF37] uppercase tracking-[0.2em] font-mono mb-3">
            Sede e Atendimento
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Canais Oficiais da Elite Assessoria, S.A.
          </h2>
          <p className="mt-4 text-[#CBD5E1] text-sm sm:text-base leading-relaxed">
            Atendimento presencial na capital e linhas dedicadas para assessoria empresarial, cursos de formação e crédito público.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Linha Telefónica */}
          <div className="border border-[#D4AF37]/20 bg-[#073824] p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider block mb-2">
                Linha Telefónica
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                85 140 8538
              </h3>
              <p className="text-xs text-[#CBD5E1] mb-4">
                Segunda a Sexta-feira, das 08h00 às 17h00.
              </p>
            </div>
            <a
              href="tel:+258851408538"
              className="border border-[#D4AF37]/30 bg-[#032115] hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 text-white text-center font-bold text-xs uppercase tracking-wider py-3 rounded-none transition-colors whitespace-nowrap"
            >
              Ligar para a Linha Direta
            </a>
          </div>

          {/* Card 2: WhatsApp Comercial */}
          <div className="border border-[#D4AF37]/20 bg-[#073824] p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider block mb-2">
                WhatsApp Oficial
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                85 140 8538
              </h3>
              <p className="text-xs text-[#CBD5E1] mb-4">
                Envio de documentos, cotações e inscrições em cursos.
              </p>
            </div>
            <a
              href="https://wa.me/258851408538?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20atendimento%20corporativo."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AF37] hover:bg-[#F1B814] text-[#032115] text-center font-bold text-xs uppercase tracking-wider py-3 rounded-none transition-colors whitespace-nowrap"
            >
              Falar no WhatsApp
            </a>
          </div>

          {/* Card 3: E-mail Corporativo */}
          <div className="border border-[#D4AF37]/20 bg-[#073824] p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider block mb-2">
                E-mail Institucional
              </span>
              <h3 className="text-sm font-bold text-white mb-2 break-all">
                eliteassessoriacontabile@gmail.com
              </h3>
              <p className="text-xs text-[#CBD5E1] mb-4">
                Envio de propostas e expediente corporativo.
              </p>
            </div>
            <a
              href="mailto:eliteassessoriacontabile@gmail.com"
              className="border border-[#D4AF37]/30 bg-[#032115] hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 text-white text-center font-bold text-xs tracking-wider py-3 rounded-none transition-colors whitespace-nowrap"
            >
              Enviar E-mail Formal
            </a>
          </div>

          {/* Card 4: Sede Física Maputo */}
          <div className="border border-[#D4AF37]/20 bg-[#073824] p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider block mb-2">
                Sede Executiva
              </span>
              <h3 className="text-base font-bold text-white mb-2">
                Avenida Maguiguana
              </h3>
              <p className="text-xs text-[#CBD5E1] mb-4">
                Bairro Central A, Cidade de Maputo. Casa/prédio NR 688.
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Avenida+Maguiguana+688+Maputo"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#D4AF37]/30 bg-[#032115] hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 text-white text-center font-bold text-xs uppercase tracking-wider py-3 rounded-none transition-colors whitespace-nowrap"
            >
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
