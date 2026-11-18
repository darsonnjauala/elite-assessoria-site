export default function StatsStrip() {
  const stats = [
    {
      metric: "100%",
      label: "Rigor OCAM e Fiscalidade",
      sub: "Conformidade estrita com o PGC-NIRF e a legislação tributária moçambicana.",
    },
    {
      metric: "5 Áreas",
      label: "Estrutura Integrada",
      sub: "Contabilidade, Crédito, Cursos, Apoio Legal e Domiciliação na Capital.",
    },
    {
      metric: "0 Multas",
      label: "Prevenção Fiscal",
      sub: "Planeamento preventivo e fecho rigoroso para blindar a sua empresa contra penalizações.",
    },
    {
      metric: "Av. Maguiguana",
      label: "Sede Executiva",
      sub: "Bairro Central A, Cidade de Maputo, Casa/Prédio NR 688.",
    },
  ];

  return (
    <section className="bg-[#073824] border-y border-[#D4AF37]/20 py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="border-l-2 border-[#D4AF37] pl-5 flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#D4AF37] tabular-numbers tracking-tight block">
                  {s.metric}
                </span>
                <span className="mt-1 text-xs font-mono font-bold text-white uppercase tracking-wider block">
                  {s.label}
                </span>
              </div>
              <p className="mt-2 text-xs text-[#CBD5E1] leading-relaxed">
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
