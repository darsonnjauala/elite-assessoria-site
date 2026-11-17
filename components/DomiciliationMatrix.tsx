export default function DomiciliationMatrix() {
  const features = [
    { name: "Endereço Fiscal de Prestígio em Maputo", fiscal: true, virtual: true, corporate: true },
    { name: "Registo Válido para Conservatória, BAU e Finanças", fiscal: true, virtual: true, corporate: true },
    { name: "Receção e Guarda de Correspondência Oficial", fiscal: true, virtual: true, corporate: true },
    { name: "Notificação Imediata por E-mail e WhatsApp", fiscal: true, virtual: true, corporate: true },
    { name: "Digitalização de Notificações e Documentos Fiscais", fiscal: false, virtual: true, corporate: true },
    { name: "Linha Telefónica Fixa de Maputo (+258 21 ...)", fiscal: false, virtual: true, corporate: true },
    { name: "Atendimento Telefónico em Nome da Sua Empresa", fiscal: false, virtual: true, corporate: true },
    { name: "Acesso Mensal a Sala de Reuniões Executiva", fiscal: false, virtual: false, corporate: "8 Horas / Mês" },
  ];

  return (
    <section id="domiciliacao" className="bg-[#0F172A] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#1E293B] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 border border-[#C59B27]/40 bg-[#C59B27]/10 px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-[#D4AF37] uppercase">
            Escritório Virtual em Maputo
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pacotes de Domiciliação Fiscal &amp; Representação Comercial
          </h2>
          <p className="mt-4 text-[#94A3B8] text-sm sm:text-base leading-relaxed">
            Para empresas nacionais com sede noutras províncias e entidades estrangeiras que necessitam de presença legal e operacional formal no centro corporativo de Maputo.
          </p>
        </div>

        {/* Desktop Table View (Hidden on mobile) */}
        <div className="hidden md:block overflow-x-auto border border-[#1E293B] bg-[#0A111F]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#1E293B] bg-[#0F172A]">
                <th className="p-5 text-sm font-bold text-white uppercase tracking-wider w-2/5">
                  Serviços Incluídos
                </th>
                <th className="p-5 text-sm font-bold text-white uppercase tracking-wider text-center border-l border-[#1E293B]">
                  Domicílio Fiscal
                </th>
                <th className="p-5 text-sm font-bold text-[#D4AF37] uppercase tracking-wider text-center border-l border-[#1E293B] bg-[#C59B27]/10">
                  Escritório Virtual
                </th>
                <th className="p-5 text-sm font-bold text-white uppercase tracking-wider text-center border-l border-[#1E293B]">
                  Full Corporate Hub
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E293B] text-sm">
              {features.map((feat, idx) => (
                <tr key={idx} className="hover:bg-[#0F172A]/50 transition-colors">
                  <td className="p-4 text-[#E2E8F0] font-medium">
                    {feat.name}
                  </td>
                  <td className="p-4 text-center border-l border-[#1E293B]">
                    {feat.fiscal ? (
                      <span className="text-[#D4AF37] font-semibold text-xs uppercase tracking-wider">Incluído</span>
                    ) : (
                      <span className="text-[#475569]">—</span>
                    )}
                  </td>
                  <td className="p-4 text-center border-l border-[#1E293B] bg-[#C59B27]/5">
                    {feat.virtual ? (
                      <span className="text-[#D4AF37] font-semibold text-xs uppercase tracking-wider">Incluído</span>
                    ) : (
                      <span className="text-[#475569]">—</span>
                    )}
                  </td>
                  <td className="p-4 text-center border-l border-[#1E293B]">
                    {typeof feat.corporate === "string" ? (
                      <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-wider">{feat.corporate}</span>
                    ) : feat.corporate ? (
                      <span className="text-[#D4AF37] font-semibold text-xs uppercase tracking-wider">Incluído</span>
                    ) : (
                      <span className="text-[#475569]">—</span>
                    )}
                  </td>
                </tr>
              ))}
              <tr className="bg-[#0F172A]">
                <td className="p-5 text-xs text-[#94A3B8] font-medium">
                  Ativação formal com contrato de domiciliação comercial.
                </td>
                <td className="p-5 text-center border-l border-[#1E293B]">
                  <a
                    href="https://wa.me/258846992501?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20aderir%20ao%20pacote%20de%20Domic%C3%ADlio%20Fiscal%20em%20Maputo."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full border border-[#1E293B] bg-[#0A111F] hover:border-[#C59B27] text-white font-bold text-xs uppercase tracking-wider py-2.5 rounded-none transition-colors"
                  >
                    Aderir ao Fiscal
                  </a>
                </td>
                <td className="p-5 text-center border-l border-[#1E293B] bg-[#C59B27]/10">
                  <a
                    href="https://wa.me/258846992501?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20aderir%20ao%20pacote%20de%20Escrit%C3%B3rio%20Virtual%20em%20Maputo."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-[#C59B27] hover:bg-[#D4AF37] text-[#0A111F] font-bold text-xs uppercase tracking-wider py-2.5 rounded-none transition-colors"
                  >
                    Aderir ao Virtual
                  </a>
                </td>
                <td className="p-5 text-center border-l border-[#1E293B]">
                  <a
                    href="https://wa.me/258846992501?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20aderir%20ao%20pacote%20Full%20Corporate%20Hub%20em%20Maputo."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full border border-[#1E293B] bg-[#0A111F] hover:border-[#C59B27] text-white font-bold text-xs uppercase tracking-wider py-2.5 rounded-none transition-colors"
                  >
                    Aderir ao Corporate
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Cards View (Optimized for 390px, no cutoffs) */}
        <div className="md:hidden space-y-6">
          {/* Card 1: Domicílio Fiscal */}
          <div className="border border-[#1E293B] bg-[#0A111F] p-6">
            <span className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider">Pacote Básico</span>
            <h3 className="text-xl font-bold text-white mt-1">Domicílio Fiscal</h3>
            <p className="text-xs text-[#94A3B8] mt-2 mb-4">
              Para empresas que necessitam de morada oficial para cumprimento legal junto das Finanças e Conservatória.
            </p>
            <ul className="space-y-2 text-xs text-[#E2E8F0] mb-6 border-t border-[#1E293B] pt-4">
              <li>• Morada Fiscal de Prestígio em Maputo</li>
              <li>• Registo na Conservatória, BAU e Finanças</li>
              <li>• Receção de Notificações e Correspondência</li>
              <li>• Alerta Imediato por WhatsApp</li>
            </ul>
            <a
              href="https://wa.me/258846992501?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20aderir%20ao%20pacote%20de%20Domic%C3%ADlio%20Fiscal%20em%20Maputo."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center border border-[#1E293B] bg-[#0F172A] hover:border-[#C59B27] text-white font-bold text-xs uppercase tracking-wider py-3 rounded-none"
            >
              Aderir ao Fiscal
            </a>
          </div>

          {/* Card 2: Escritório Virtual */}
          <div className="border-2 border-[#C59B27] bg-[#0A111F] p-6 relative">
            <div className="absolute top-0 right-0 bg-[#C59B27] text-[#0A111F] text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1">
              Mais Solicitado
            </div>
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">Pacote Completo</span>
            <h3 className="text-xl font-bold text-white mt-1">Escritório Virtual</h3>
            <p className="text-xs text-[#94A3B8] mt-2 mb-4">
              Morada fiscal somada a atendimento telefónico bilingue com linha fixa dedicada de Maputo.
            </p>
            <ul className="space-y-2 text-xs text-[#E2E8F0] mb-6 border-t border-[#1E293B] pt-4">
              <li>• Tudo do Plano Domicílio Fiscal</li>
              <li>• Linha Telefónica Fixa de Maputo (+258 21 ...)</li>
              <li>• Atendimento em Nome da Sua Empresa</li>
              <li>• Digitalização Imediata de Documentos</li>
            </ul>
            <a
              href="https://wa.me/258846992501?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20aderir%20ao%20pacote%20de%20Escrit%C3%B3rio%20Virtual%20em%20Maputo."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#C59B27] hover:bg-[#D4AF37] text-[#0A111F] font-bold text-xs uppercase tracking-wider py-3 rounded-none"
            >
              Aderir ao Virtual
            </a>
          </div>

          {/* Card 3: Full Corporate Hub */}
          <div className="border border-[#1E293B] bg-[#0A111F] p-6">
            <span className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider">Pacote Executivo</span>
            <h3 className="text-xl font-bold text-white mt-1">Full Corporate Hub</h3>
            <p className="text-xs text-[#94A3B8] mt-2 mb-4">
              Estrutura integral para reuniões presenciais e representação executiva de alto nível na capital.
            </p>
            <ul className="space-y-2 text-xs text-[#E2E8F0] mb-6 border-t border-[#1E293B] pt-4">
              <li>• Tudo do Plano Escritório Virtual</li>
              <li>• 8 Horas Mensais em Sala de Reuniões Executiva</li>
              <li>• Apoio Secretarial Presencial para Clientes</li>
              <li>• Prioridade em Assessoria Contábil &amp; Legal</li>
            </ul>
            <a
              href="https://wa.me/258846992501?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20aderir%20ao%20pacote%20Full%20Corporate%20Hub%20em%20Maputo."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center border border-[#1E293B] bg-[#0F172A] hover:border-[#C59B27] text-white font-bold text-xs uppercase tracking-wider py-3 rounded-none"
            >
              Aderir ao Corporate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
