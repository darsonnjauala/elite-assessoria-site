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

  const whatsappMessage = encodeURIComponent(
    `Olá Elite Assessoria, realizei uma simulação de crédito para o setor público no vosso portal:\n\n• Montante Solicitado: ${formattedAmount} MT\n• Prazo Desejado: ${months} Meses\n• Prestação Estimada: ${formattedMonthly} MT / mês\n\nPossuo os documentos obrigatórios em mãos e pretendo iniciar a pré-avaliação do meu processo.`
  );

  return (
    <section id="credito" className="bg-[#0A111F] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#1E293B] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 border border-[#C59B27]/40 bg-[#C59B27]/10 px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-[#D4AF37] uppercase">
            Canal do Servidor Público
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Intermediação de Crédito Bancário para Funcionários Públicos
          </h2>
          <p className="mt-4 text-[#94A3B8] text-sm sm:text-base leading-relaxed">
            Linha dedicada de assistência e instrução de processos de crédito consignado em folha para trabalhadores dos Ministérios, Direcções Provinciais e órgãos do Estado moçambicano.
          </p>
        </div>

        {/* Psychological Anti-Burla Shield (Mandatory Trust Anchor) */}
        <div className="border-l-4 border-[#C59B27] bg-[#0F172A] p-5 sm:p-7 mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-[#C59B27]" />
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
              Aviso de Transparência Institucional &amp; Segurança Bancária
            </span>
          </div>
          <p className="text-sm sm:text-base text-[#E2E8F0] leading-relaxed">
            A Elite Assessoria atua estritamente como intermediária formal junto de instituições bancárias autorizadas em Moçambique. <strong className="text-white">Não cobramos comissões antecipadas, taxas de abertura ou qualquer pagamento ao cidadão para a emissão de crédito.</strong> O nosso serviço garante a correta instrução do seu processo de acordo com a sua margem salarial, com aprovação e desembolso efetuados diretamente pela instituição financeira.
          </p>
        </div>

        {/* Interactive Simulator Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border border-[#1E293B] bg-[#0F172A] p-6 sm:p-10">
          {/* Controls Column (Left) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            {/* Slider 1: Montante */}
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <label className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                  Montante Desejado (Meticais)
                </label>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] tabular-numbers tracking-tight">
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
                className="w-full h-2 bg-[#1E293B] accent-[#C59B27] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#64748B] mt-1.5 font-mono">
                <span>20.000 MT</span>
                <span>750.000 MT</span>
                <span>1.500.000 MT</span>
              </div>
            </div>

            {/* Slider 2: Prazo */}
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <label className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                  Prazo de Reembolso
                </label>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] tabular-numbers tracking-tight">
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
                className="w-full h-2 bg-[#1E293B] accent-[#C59B27] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#64748B] mt-1.5 font-mono">
                <span>12 Meses (1 Ano)</span>
                <span>36 Meses (3 Anos)</span>
                <span>60 Meses (5 Anos)</span>
              </div>
            </div>

            {/* Document Checklist Chips (System 1) */}
            <div>
              <span className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider block mb-3">
                Documentação Fisiológica Exigida pelo Banco
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="border border-[#1E293B] bg-[#0A111F] p-2.5 text-[#E2E8F0]">
                  • BI ou Passaporte Moçambicano Válido
                </div>
                <div className="border border-[#1E293B] bg-[#0A111F] p-2.5 text-[#E2E8F0]">
                  • Declaração de Efetividade do Ministério
                </div>
                <div className="border border-[#1E293B] bg-[#0A111F] p-2.5 text-[#E2E8F0]">
                  • Último Recibo de Vencimento Oficial
                </div>
                <div className="border border-[#1E293B] bg-[#0A111F] p-2.5 text-[#E2E8F0]">
                  • Extrato Bancário dos Últimos 3 Meses
                </div>
              </div>
            </div>
          </div>

          {/* Results Column (Right) */}
          <div className="lg:col-span-5 border border-[#1E293B] bg-[#0A111F] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block mb-2">
                Resultado da Simulação
              </span>
              <span className="text-xs text-[#94A3B8] block mb-1">
                Prestação Mensal Estimada
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tabular-numbers tracking-tight">
                {formattedMonthly} <span className="text-lg text-[#D4AF37]">MT / mês</span>
              </div>
              <p className="mt-3 text-[11px] text-[#64748B] leading-relaxed border-t border-[#1E293B] pt-3">
                *Simulação indicativa. O montante definitivo, prazo e prestação exata dependem da margem salarial líquida consignada pela Direcção Nacional de Contabilidade Pública (DNCP) e da aprovação final da instituição bancária parceira.
              </p>
            </div>

            <div className="mt-8">
              <a
                href={`https://wa.me/258846992501?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center block bg-[#C59B27] hover:bg-[#D4AF37] text-[#0A111F] font-bold text-xs uppercase tracking-wider py-4 rounded-none transition-colors"
              >
                Submeter Simulação via WhatsApp
              </a>
              <span className="text-[10px] text-center text-[#64748B] block mt-2">
                Encaminha o processo diretamente para o gestor de crédito em Maputo.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
