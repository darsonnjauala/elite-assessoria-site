export default function DomiciliationMatrix() {
  const features = [
    { name: "Endereço Fiscal de Prestígio na Av. Maguiguana 688, Maputo", fiscal: true, virtual: true, corporate: true },
    { name: "Registo Válido para Conservatória, BAU e Finanças", fiscal: true, virtual: true, corporate: true },
    { name: "Receção e Guarda de Correspondência Oficial", fiscal: true, virtual: true, corporate: true },
    { name: "Notificação Imediata por E-mail e WhatsApp", fiscal: true, virtual: true, corporate: true },
    { name: "Digitalização de Notificações e Documentos Fiscais", fiscal: false, virtual: true, corporate: true },
    { name: "Linha Telefónica Fixa Dedicada (+258 21 ...)", fiscal: false, virtual: true, corporate: true },
    { name: "Atendimento Telefónico em Nome da Sua Empresa", fiscal: false, virtual: true, corporate: true },
    { name: "Acesso Mensal a Sala de Reuniões Executiva", fiscal: false, virtual: false, corporate: "8 Horas / Mês" },
  ];

  return (
    <section id="domiciliacao" className="bg-[#032115] py-24 px-4 sm:px-6 lg:px-8 border-b border-[#D4AF37]/20 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-[#D4AF37] uppercase tracking-[0.2em] font-mono mb-3">
            Escritório Virtual
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Pacotes de Domiciliação Fiscal e Representação Comercial
          </h2>
          <p className="mt-4 text-[#CBD5E1] text-sm sm:text-base leading-relaxed">
            Sede corporativa formal na Avenida Maguiguana, Bairro Central A, Cidade de Maputo (NR 688) para empresas nacionais e estrangeiras.
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto border border-[#D4AF37]/20 bg-[#073824]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#D4AF37]/20 bg-[#032115]">
                <th className="p-5 text-xs font-mono font-bold text-[#CBD5E1] uppercase tracking-wider w-2/5">
                  Serviços Incluídos
                </th>
                <th className="p-5 text-xs font-mono font-bold text-white uppercase tracking-wider text-center border-l border-[#D4AF37]/20">
                  Domicílio Fiscal
                </th>
                <th className="p-5 text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider text-center border-l border-[#D4AF37]/20 bg-[#D4AF37]/10">
                  Escritório Virtual
                </th>
                <th className="p-5 text-xs font-mono font-bold text-white uppercase tracking-wider text-center border-l border-[#D4AF37]/20">
                  Full Corporate Hub
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D4AF37]/10 text-sm">
              {features.map((feat, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 text-[#E2E8F0] text-xs sm:text-sm font-medium">
                    {feat.name}
                  </td>
                  <td className="p-4 text-center border-l border-[#D4AF37]/20">
                    {feat.fiscal ? (
                      <span className="text-[#CBD5E1] text-xs font-medium uppercase tracking-wider">Incluído</span>
                    ) : (
                      <span className="text-white/20">Não incluído</span>
                    )}
                  </td>
                  <td className="p-4 text-center border-l border-[#D4AF37]/20 bg-[#D4AF37]/5">
                    {feat.virtual ? (
                      <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider">Incluído</span>
                    ) : (
                      <span className="text-white/20">Não incluído</span>
                    )}
                  </td>
                  <td className="p-4 text-center border-l border-[#D4AF37]/20">
                    {typeof feat.corporate === "string" ? (
                      <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider">{feat.corporate}</span>
                    ) : feat.corporate ? (
                      <span className="text-[#CBD5E1] text-xs font-medium uppercase tracking-wider">Incluído</span>
                    ) : (
                      <span className="text-white/20">Não incluído</span>
                    )}
                  </td>
                </tr>
              ))}
              <tr className="bg-[#032115] border-t border-[#D4AF37]/20">
                <td className="p-5 text-xs text-[#CBD5E1] font-medium">
                  Ativação formal com contrato de domiciliação comercial na capital.
                </td>
                <td className="p-5 text-center border-l border-[#D4AF37]/20">
                  <a
                    href="https://wa.me/258851408538?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20escolher%20o%20pacote%20de%20Domic%C3%ADlio%20Fiscal."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 text-white font-semibold text-xs uppercase tracking-wider py-3 rounded-none transition-colors whitespace-nowrap"
                  >
                    Escolher Domicílio Fiscal
                  </a>
                </td>
                <td className="p-5 text-center border-l border-[#D4AF37]/20 bg-[#D4AF37]/10">
                  <a
                    href="https://wa.me/258851408538?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20escolher%20o%20pacote%20de%20Escrit%C3%B3rio%20Virtual."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-[#D4AF37] hover:bg-[#F1B814] text-[#032115] font-bold text-xs uppercase tracking-wider py-3 rounded-none transition-colors whitespace-nowrap"
                  >
                    Escolher Escritório Virtual
                  </a>
                </td>
                <td className="p-5 text-center border-l border-[#D4AF37]/20">
                  <a
                    href="https://wa.me/258851408538?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20escolher%20o%20pacote%20Full%20Corporate%20Hub."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 text-white font-semibold text-xs uppercase tracking-wider py-3 rounded-none transition-colors whitespace-nowrap"
                  >
                    Escolher Corporate Hub
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Editorial Cards View (Optimized for 390px, Zero Cutoffs) */}
        <div className="md:hidden space-y-6">
          {/* Card 1: Domicílio Fiscal */}
          <div className="bg-[#073824] border border-[#D4AF37]/20 p-6">
            <span className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-1">
              Opção 01
            </span>
            <h3 className="text-xl font-bold text-white">Domicílio Fiscal</h3>
            <p className="text-xs text-[#CBD5E1] mt-2 mb-4 leading-relaxed">
              Para empresas que necessitam de morada oficial para cumprimento legal junto das Finanças e Conservatória.
            </p>
            <ul className="space-y-2 text-xs text-[#CBD5E1] mb-6">
              <li>• Morada Fiscal na Av. Maguiguana 688, Maputo</li>
              <li>• Registo na Conservatória, BAU e Finanças</li>
              <li>• Receção de Notificações e Correspondência</li>
              <li>• Alerta Imediato por WhatsApp</li>
            </ul>
            <a
              href="https://wa.me/258851408538?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20escolher%20o%20pacote%20de%20Domic%C3%ADlio%20Fiscal."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center border border-[#D4AF37]/30 hover:border-[#D4AF37] text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-none whitespace-nowrap"
            >
              Escolher Domicílio Fiscal
            </a>
          </div>

          {/* Card 2: Escritório Virtual */}
          <div className="bg-[#073824] border-2 border-[#D4AF37] p-6">
            <span className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-1">
              Opção 02: Mais Solicitado
            </span>
            <h3 className="text-xl font-bold text-white">Escritório Virtual</h3>
            <p className="text-xs text-[#CBD5E1] mt-2 mb-4 leading-relaxed">
              Morada fiscal somada a atendimento telefónico bilingue com linha fixa dedicada.
            </p>
            <ul className="space-y-2 text-xs text-[#CBD5E1] mb-6">
              <li>• Tudo do Plano Domicílio Fiscal</li>
              <li>• Linha Telefónica Fixa Dedicada (+258 21 ...)</li>
              <li>• Atendimento em Nome da Sua Empresa</li>
              <li>• Digitalização Imediata de Documentos</li>
            </ul>
            <a
              href="https://wa.me/258851408538?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20escolher%20o%20pacote%20de%20Escrit%C3%B3rio%20Virtual."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#D4AF37] hover:bg-[#F1B814] text-[#032115] font-bold text-xs uppercase tracking-wider py-3.5 rounded-none whitespace-nowrap"
            >
              Escolher Escritório Virtual
            </a>
          </div>

          {/* Card 3: Full Corporate Hub */}
          <div className="bg-[#073824] border border-[#D4AF37]/20 p-6">
            <span className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-1">
              Opção 03
            </span>
            <h3 className="text-xl font-bold text-white">Full Corporate Hub</h3>
            <p className="text-xs text-[#CBD5E1] mt-2 mb-4 leading-relaxed">
              Estrutura integral para reuniões presenciais e representação executiva de alto nível na capital.
            </p>
            <ul className="space-y-2 text-xs text-[#CBD5E1] mb-6">
              <li>• Tudo do Plano Escritório Virtual</li>
              <li>• 8 Horas Mensais em Sala de Reuniões Executiva</li>
              <li>• Apoio Secretarial Presencial para Clientes</li>
              <li>• Prioridade em Assessoria Contábil e Legal</li>
            </ul>
            <a
              href="https://wa.me/258851408538?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20escolher%20o%20pacote%20Full%20Corporate%20Hub."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center border border-[#D4AF37]/30 hover:border-[#D4AF37] text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-none whitespace-nowrap"
            >
              Escolher Corporate Hub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
