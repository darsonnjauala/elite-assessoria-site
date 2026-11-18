"use client";

import { useState } from "react";

export default function CreditSimulator() {
  const [amount, setAmount] = useState<number>(300000);
  const [months, setMonths] = useState<number>(36);

  // Standard indicative monthly installment calculation (24% per year indicative market reference)
  const monthlyRate = 0.24 / 12;
  const estimatedMonthly = Math.round(
    (amount * (monthlyRate * Math.pow(1 + monthlyRate, months))) /
      (Math.pow(1 + monthlyRate, months) - 1)
  );

  const formattedAmount = new Intl.NumberFormat("pt-MZ").format(amount);
  const formattedMonthly = new Intl.NumberFormat("pt-MZ").format(estimatedMonthly);

  const presets = [100000, 250000, 500000, 1000000];

  const whatsappMessage = encodeURIComponent(
    `Olá Elite Assessoria, realizei uma simulação de crédito para o setor público no vosso portal:\n\n• Montante Solicitado: ${formattedAmount} MT\n• Prazo Desejado: ${months} Meses\n• Prestação Estimada: ${formattedMonthly} MT / mês\n\nPossuo os documentos obrigatórios em mãos e pretendo verificar a pré-aprovação do meu processo.`
  );

  return (
    <section id="credito" className="bg-[#F8FAF9] py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-[#996515] uppercase tracking-[0.2em] font-mono mb-3">
            Canal do Servidor Público
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#032115] tracking-tight leading-tight">
            Intermediação de Crédito Bancário para Funcionários Públicos
          </h2>
          <p className="mt-4 text-[#475569] text-sm sm:text-base leading-relaxed">
            Linha dedicada de assistência e instrução de processos de crédito consignado em folha para trabalhadores dos Ministérios, Direcções Provinciais e órgãos do Estado moçambicano.
          </p>
        </div>

        {/* Psychological Anti-Burla Shield (Formal Institutional Assurance) */}
        <div className="border-l-4 border-[#D4AF37] bg-white border border-slate-200 shadow-sm p-6 sm:p-8 mb-14">
          <div className="text-xs font-mono font-bold text-[#996515] uppercase tracking-wider mb-2">
            Compromisso de Idoneidade e Transparência Bancária
          </div>
          <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
            A Elite Assessoria atua estritamente como intermediária formal junto de instituições bancárias autorizadas em Moçambique. <strong className="text-[#032115] font-semibold">Não cobramos comissões antecipadas, taxas de abertura ou qualquer pagamento ao cidadão para a emissão de crédito.</strong> O nosso serviço garante a correta instrução do seu processo de acordo com a sua margem salarial, com aprovação e desembolso efetuados diretamente pela instituição financeira.
          </p>
          <div className="mt-4 text-[11px] font-mono text-[#64748B] uppercase tracking-wider">
            Elite Assessoria Contábil e Empresarial, S.A. · Maputo, Moçambique
          </div>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls Column (Left) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 p-6 sm:p-10 shadow-xs flex flex-col justify-between space-y-8">
            {/* Slider 1: Montante */}
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <label className="text-xs font-mono font-bold text-[#475569] uppercase tracking-wider">
                  Montante Solicitado (Meticais)
                </label>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#032115] tabular-numbers tracking-tight">
                  {formattedAmount} MT
                </span>
              </div>
              <input
                type="range"
                min="20000"
                max="1500000"
                step="10000"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 accent-[#032115] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#64748B] mt-1.5 font-mono">
                <span>20.000 MT</span>
                <span>750.000 MT</span>
                <span>1.500.000 MT</span>
              </div>

              {/* Quick Presets (44px touch targets) */}
              <div className="mt-4 flex flex-wrap gap-2">
                {presets.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setAmount(p)}
                    className={`text-xs font-mono px-3 py-2 border transition-colors whitespace-nowrap min-h-[38px] ${
                      amount === p
                        ? "border-[#032115] bg-[#032115] text-white font-bold"
                        : "border-slate-200 text-[#475569] hover:border-slate-400"
                    }`}
                  >
                    {new Intl.NumberFormat("pt-MZ").format(p)} MT
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 2: Prazo */}
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <label className="text-xs font-mono font-bold text-[#475569] uppercase tracking-wider">
                  Prazo de Reembolso
                </label>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#032115] tabular-numbers tracking-tight">
                  {months} Meses
                </span>
              </div>
              <input
                type="range"
                min="12"
                max="60"
                step="6"
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 accent-[#032115] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#64748B] mt-1.5 font-mono">
                <span>12 Meses (1 Ano)</span>
                <span>36 Meses (3 Anos)</span>
                <span>60 Meses (5 Anos)</span>
              </div>
            </div>

            {/* Document Checklist */}
            <div className="border-t border-slate-100 pt-6">
              <span className="text-xs font-mono font-bold text-[#032115] uppercase tracking-wider block mb-3">
                Documentação Fisiológica Exigida pelo Banco
              </span>
              <ul className="space-y-2 text-xs text-[#334155]">
                <li className="flex items-center gap-2">
                  <span className="text-[#073824] font-bold font-mono">•</span> BI ou Passaporte Moçambicano Válido
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#073824] font-bold font-mono">•</span> Declaração de Efetividade do Ministério
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#073824] font-bold font-mono">•</span> Último Recibo de Vencimento Oficial
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#073824] font-bold font-mono">•</span> Extrato Bancário dos Últimos 3 Meses
                </li>
              </ul>
            </div>
          </div>

          {/* Results Column (Right - Dark Anchor Band) */}
          <div className="lg:col-span-5 bg-[#073824] border border-[#D4AF37]/30 text-white p-6 sm:p-8 shadow-md flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest block mb-2">
                Resultado da Simulação
              </span>
              <span className="text-xs text-[#CBD5E1] block mb-1">
                Prestação Mensal Estimada
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tabular-numbers tracking-tight">
                {formattedMonthly} <span className="text-lg text-[#D4AF37]">MT / mês</span>
              </div>
              <p className="mt-4 text-[11px] text-[#CBD5E1]/80 leading-relaxed border-t border-[#D4AF37]/20 pt-4">
                *Simulação indicativa. O montante definitivo, prazo e prestação exata dependem da margem salarial líquida consignada pela Direcção Nacional de Contabilidade Pública (DNCP) e da aprovação final da instituição bancária parceira.
              </p>
            </div>

            <div className="mt-8">
              <a
                href={`https://wa.me/258851408538?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center block bg-[#D4AF37] hover:bg-[#C59B27] text-[#032115] font-bold text-xs uppercase tracking-wider py-4 rounded-none transition-colors whitespace-nowrap shadow-xs"
              >
                Verificar Pré-Aprovação no WhatsApp
              </a>
              <span className="text-[10px] text-center text-[#CBD5E1]/70 block mt-2">
                Encaminha os dados da simulação diretamente para o gestor de crédito em Maputo.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
