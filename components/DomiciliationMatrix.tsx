export default function DomiciliationMatrix() {
  const features = [
    { name: "Endereço Fiscal de Prestígio no Centro de Maputo", fiscal: true, virtual: true, corporate: true },
    { name: "Registo Válido para Conservatória, BAU e Finanças", fiscal: true, virtual: true, corporate: true },
    { name: "Receção e Guarda de Correspondência Oficial", fiscal: true, virtual: true, corporate: true },
    { name: "Notificação Imediata por E-mail e WhatsApp", fiscal: true, virtual: true, corporate: true },
    { name: "Digitalização de Notificações e Documentos Fiscais", fiscal: false, virtual: true, corporate: true },
    { name: "Linha Telefónica Fixa de Maputo (+258 21 ...)", fiscal: false, virtual: true, corporate: true },
    { name: "Atendimento Telefónico em Nome da Sua Empresa", fiscal: false, virtual: true, corporate: true },
    { name: "Acesso Mensal a Sala de Reuniões Executiva", fiscal: false, virtual: false, corporate: "8 Horas / Mês" },
  ];

  return (
    <section id="domiciliacao" className="bg-[#080E1A] py-24 px-4 sm:px-6 lg:px-8 hairline-b scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-[#C59B27] uppercase tracking-[0.2em] font-mono mb-3">
            Escritório Virtual em Maputo
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Pacotes de Domiciliação Fiscal &amp; Representação Comercial
          </h2>
          <p className="mt-4 text-[#94A3B8] text-sm sm:text-base leading-relaxed">
            Para empresas nacionais com sede noutras províncias e entidades estrangeiras que necessitam de presença legal e operacional formal no centro corporativo de Maputo.
          </p>
        </div>

        {/* Desktop Table View (Editorial Hairline Grid) */}
        <div className="hidden md:block overflow-x-auto border border-white/10 bg-[#0A111F]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-[#0D1627]">
                <th className="p-5 text-xs font-mono font-bold text-[#94A3B8] uppercase tracking-wider w-2/5">
                  Serviços Incluídos
                </th>
                <th className="p-5 text-xs font-mono font-bold text-white uppercase tracking-wider text-center border-l border-white/10">
                  Domicílio Fiscal
                </th>
                <th className="p-5 text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider text-center border-l border-white/10 bg-[#C59B27]/10">
                  Escritório Virtual
                </th>
                <th className="p-5 text-xs font-mono font-bold text-white uppercase tracking-wider text-center border-l border-white/10">
                  Full Corporate Hub
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {features.map((feat, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 text-[#E2E8F0] text-xs sm:text-sm font-medium">
                    {feat.name}
                  </td>
                  <td className="p-4 text-center border-l border-white/10">
                    {feat.fiscal ? (
                      <span className="text-[#CBD5E1] text-xs font-medium uppercase tracking-wider">Incluído</span>
                    ) : (
                      <span className="text-white/20">—</span>
                    )}
                  </td>
                  <td className="p-4 text-center border-l border-white/10 bg-[#C59B27]/5">
                    {feat.virtual ? (
                      <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider">Incluído</span>
                    ) : (
                      <span className="text-white/20">—</span>
                    )}
                  </td>
                  <td className="p-4 text-center border-l border-white/10">
                    {typeof feat.corporate === "string" ? (
                      <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider">{feat.corporate}</span>
                    ) : feat.corporate ? (
                      <span className="text-[#CBD5E1] text-xs font-medium uppercase tracking-wider">Incluído</span>
                    ) : (
                      <span className="text-white/20">—</span>
                    )}
                  </td>
                </tr>
              ))}
              <tr className="bg-[#0D1627] hairline-t">
                <td className="p-5 text-xs text-[#94A3B8] font-medium">
                  Ativação formal com contrato de domiciliação comercial na capital.
                </td>
                <td className="p-5 text-center border-l border-white/10">
                  <a
                    href="https://wa.me/258846992501?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20aderir%20ao%20pacote%20de%20Domic%C3%ADlio%20Fiscal%20em%20Maputo."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full border border-white/20 hover:border-[#C59B27] text-white font-semibold text-xs uppercase tracking-wider py-3 rounded-none transition-colors whitespace-nowrap"
                  >
                    Aderir ao Fiscal
                  </a>
                </td>
                <td className="p-5 text-center border-l border-white/10 bg-[#C59B27]/10">
                  <a
                    href="https://wa.me/258846992501?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20aderir%20ao%20pacote%20de%20Escrit%C3%B3rio%20Virtual%20em%20Maputo."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-[#C59B27] hover:bg-[#D4AF37] text-[#080E1A] font-bold text-xs uppercase tracking-wider py-3 rounded-none transition-colors whitespace-nowrap"
                  >
                    Aderir ao Virtual
                  </a>
                </td>
                <td className="p-5 text-center border-l border-white/10">
                  <a
                    href="https://wa.me/258846992501?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20aderir%20ao%20pacote%20Full%20Corporate%20Hub%20em%20Maputo."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full border border-white/20 hover:border-[#C59B27] text-white font-semibold text-xs uppercase tracking-wider py-3 rounded-none transition-colors whitespace-nowrap"
                  >
                    Aderir ao Corporate
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Editorial Cards View (Optimized for 390px, Zero Cutoffs) */}
        <div className="md:hidden space-y-8">
          {/* Card 1: Domicílio Fiscal */}
          <div className="hairline-t pt-6">
            <span className="text-[11px] font-mono text-[#C59B27] uppercase tracking-wider block mb-1">
              Opção 01
            </span>
            <h3 className="text-xl font-bold text-white">Domicílio Fiscal</h3>
            <p className="text-xs text-[#94A3B8] mt-2 mb-4 leading-relaxed">
              Para empresas que necessitam de morada oficial para cumprimento legal junto das Finanças e Conservatória.
            </p>
            <ul className="space-y-2 text-xs text-[#CBD5E1] mb-6">
              <li>— Morada Fiscal de Prestígio em Maputo</li>
              <li>— Registo na Conservatória, BAU e Finanças</li>
              <li>— Receção de Notificações e Correspondência</li>
              <li>— Alerta Imediato por WhatsApp</li>
            </ul>
            <a
              href="https://wa.me/258846992501?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20aderir%20ao%20pacote%20de%20Domic%C3%ADlio%20Fiscal%20em%20Maputo."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center border border-white/20 hover:border-[#C59B27] text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-none whitespace-nowrap"
            >
              Aderir ao Fiscal
            </a>
          </div>

          {/* Card 2: Escritório Virtual */}
          <div className="hairline-t pt-6 border-l-2 border-[#C59B27] pl-4">
            <span className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-1">
              Opção 02 — Mais Solicitado
            </span>
            <h3 className="text-xl font-bold text-white">Escritório Virtual</h3>
            <p className="text-xs text-[#94A3B8] mt-2 mb-4 leading-relaxed">
              Morada fiscal somada a atendimento telefónico bilingue com linha fixa dedicada de Maputo.
            </p>
            <ul className="space-y-2 text-xs text-[#CBD5E1] mb-6">
              <li>— Tudo do Plano Domicílio Fiscal</li>
              <li>— Linha Telefónica Fixa de Maputo (+258 21 ...)</li>
              <li>— Atendimento em Nome da Sua Empresa</li>
              <li>— Digitalização Imediata de Documentos</li>
            </ul>
            <a
              href="https://wa.me/258846992501?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20aderir%20ao%20pacote%20de%20Escrit%C3%B3rio%20Virtual%20em%20Maputo."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#C59B27] hover:bg-[#D4AF37] text-[#080E1A] font-bold text-xs uppercase tracking-wider py-3.5 rounded-none whitespace-nowrap"
            >
              Aderir ao Virtual
            </a>
          </div>

          {/* Card 3: Full Corporate Hub */}
          <div className="hairline-t pt-6">
            <span className="text-[11px] font-mono text-[#C59B27] uppercase tracking-wider block mb-1">
              Opção 03
            </span>
            <h3 className="text-xl font-bold text-white">Full Corporate Hub</h3>
            <p className="text-xs text-[#94A3B8] mt-2 mb-4 leading-relaxed">
              Estrutura integral para reuniões presenciais e representação executiva de alto nível na capital.
            </p>
            <ul className="space-y-2 text-xs text-[#CBD5E1] mb-6">
              <li>— Tudo do Plano Escritório Virtual</li>
              <li>— 8 Horas Mensais em Sala de Reuniões Executiva</li>
              <li>— Apoio Secretarial Presencial para Clientes</li>
              <li>— Prioridade em Assessoria Contábil &amp; Legal</li>
            </ul>
            <a
              href="https://wa.me/258846992501?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20aderir%20ao%20pacote%20Full%20Corporate%20Hub%20em%20Maputo."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center border border-white/20 hover:border-[#C59B27] text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-none whitespace-nowrap"
            >
              Aderir ao Corporate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
