export default function StatsStrip() {
  const stats = [
    {
      metric: "100%",
      label: "Rigor OCAM & Fiscalidade",
      sub: "Conformidade estrita com o PGC-NIRF e a legislação tributária moçambicana.",
    },
    {
      metric: "3 Divisões",
      label: "Estrutura Corporativa Integrada",
      sub: "Finanças, Apoio Legal e Domiciliação Fiscal operando sob a mesma governação.",
    },
    {
      metric: "Maputo",
      label: "Sede Comercial Estratégica",
      sub: "Endereço institucional na capital com secretariado e gestão documental.",
    },
    {
      metric: "24 Horas",
      label: "Prontidão Operacional",
      sub: "Triagem ágil de processos, constituição de empresas e propostas comerciais.",
    },
  ];

  return (
    <section className="bg-[#0F172A] border-b border-[#1E293B] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="border-l-2 border-[#C59B27] pl-5 flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#D4AF37] tabular-numbers tracking-tight block">
                  {s.metric}
                </span>
                <span className="mt-1 text-sm font-bold text-white uppercase tracking-wider block">
                  {s.label}
                </span>
              </div>
              <p className="mt-2 text-xs text-[#94A3B8] leading-relaxed">
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
