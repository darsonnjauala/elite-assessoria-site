import Header from "@/components/Header";
import CreditSimulator from "@/components/CreditSimulator";
import ContactLocation from "@/components/ContactLocation";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portal de Crédito para Funcionários Públicos | Elite Assessoria, S.A.",
  description:
    "Simulador interativo de crédito bancário consignado para servidores públicos em Moçambique. Intermediação formal, sem comissões antecipadas e com total transparência.",
};

export default function CreditoPublicoPage() {
  return (
    <main className="min-h-screen bg-white text-[#1E293B] pt-18">
      <Header />
      <div className="py-12 bg-[#073824] border-b border-[#D4AF37]/30 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-mono font-semibold text-[#D4AF37] uppercase tracking-[0.2em] mb-2">
            Portal Oficial de Intermediação Financeira
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Crédito ao Consumo para Funcionários Públicos
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-[#CBD5E1] max-w-2xl">
            Acompanhamento transparente do processo consignado em folha, sem cobrança de taxas antecipadas.
          </p>
        </div>
      </div>
      <CreditSimulator />
      <ContactLocation />
      <Footer />
    </main>
  );
}
