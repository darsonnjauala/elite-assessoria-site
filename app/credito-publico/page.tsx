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
    <main className="min-h-screen bg-[#0A111F] text-[#F8FAFC] pt-18">
      <Header />
      <div className="py-8 bg-[#0F172A] border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-1">
            Portal Oficial de Intermediação Financeira
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
            Crédito ao Funcionário Público Moçambicano
          </h1>
        </div>
      </div>
      <CreditSimulator />
      <ContactLocation />
      <Footer />
    </main>
  );
}
