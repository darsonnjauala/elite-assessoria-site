export default function ContactLocation() {
  return (
    <section id="contactos" className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-[#996515] uppercase tracking-[0.2em] font-mono mb-3">
            Sede e Atendimento
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#032115] tracking-tight leading-tight">
            Canais Oficiais da Elite Assessoria, S.A.
          </h2>
          <p className="mt-4 text-[#475569] text-sm sm:text-base leading-relaxed">
            Atendimento presencial na capital e linhas dedicadas para assessoria empresarial, cursos de formação e crédito público.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Linha Telefónica */}
          <div className="bg-[#F8FAF9] border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-[#D4AF37] transition-colors">
            <div>
              <span className="text-xs font-mono font-bold text-[#996515] uppercase tracking-wider block mb-2">
                Linha Telefónica
              </span>
              <h3 className="text-lg font-bold text-[#032115] mb-2">
                85 140 8538
              </h3>
              <p className="text-xs text-[#475569] mb-4">
                Segunda a Sexta-feira, das 08h00 às 17h00.
              </p>
            </div>
            <a
              href="tel:+258851408538"
              className="border-2 border-[#032115] bg-white hover:bg-[#032115] hover:text-white text-[#032115] text-center font-bold text-xs uppercase tracking-wider py-3 rounded-none transition-colors whitespace-nowrap"
            >
              Ligar para a Linha Direta
            </a>
          </div>

          {/* Card 2: WhatsApp Comercial */}
          <div className="bg-[#F8FAF9] border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-[#D4AF37] transition-colors">
            <div>
              <span className="text-xs font-mono font-bold text-[#996515] uppercase tracking-wider block mb-2">
                WhatsApp Oficial
              </span>
              <h3 className="text-lg font-bold text-[#032115] mb-2">
                85 140 8538
              </h3>
              <p className="text-xs text-[#475569] mb-4">
                Envio de documentos, cotações e inscrições em cursos.
              </p>
            </div>
            <a
              href="https://wa.me/258851408538?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20atendimento%20corporativo."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AF37] hover:bg-[#C59B27] text-[#032115] text-center font-bold text-xs uppercase tracking-wider py-3.5 rounded-none transition-colors whitespace-nowrap shadow-xs"
            >
              Falar no WhatsApp
            </a>
          </div>

          {/* Card 3: E-mail Corporativo */}
          <div className="bg-[#F8FAF9] border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-[#D4AF37] transition-colors">
            <div>
              <span className="text-xs font-mono font-bold text-[#996515] uppercase tracking-wider block mb-2">
                E-mail Institucional
              </span>
              <h3 className="text-sm font-bold text-[#032115] mb-2 break-all">
                eliteassessoriacontabile@gmail.com
              </h3>
              <p className="text-xs text-[#475569] mb-4">
                Envio de propostas e expediente corporativo.
              </p>
            </div>
            <a
              href="mailto:eliteassessoriacontabile@gmail.com"
              className="border-2 border-[#032115] bg-white hover:bg-[#032115] hover:text-white text-[#032115] text-center font-bold text-xs tracking-wider py-3 rounded-none transition-colors whitespace-nowrap"
            >
              Enviar E-mail Formal
            </a>
          </div>

          {/* Card 4: Sede Física Maputo */}
          <div className="bg-[#F8FAF9] border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-[#D4AF37] transition-colors">
            <div>
              <span className="text-xs font-mono font-bold text-[#996515] uppercase tracking-wider block mb-2">
                Sede Executiva
              </span>
              <h3 className="text-base font-bold text-[#032115] mb-2">
                Avenida Maguiguana
              </h3>
              <p className="text-xs text-[#475569] mb-4">
                Bairro Central A, Cidade de Maputo. Casa/prédio NR 688.
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Avenida+Maguiguana+688+Maputo"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#032115] bg-white hover:bg-[#032115] hover:text-white text-[#032115] text-center font-bold text-xs uppercase tracking-wider py-3 rounded-none transition-colors whitespace-nowrap"
            >
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
