import Header from "@/components/Header";
import DomiciliationMatrix from "@/components/DomiciliationMatrix";
import ContactLocation from "@/components/ContactLocation";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Escritório Virtual e Domiciliação Fiscal na Capital | Elite Assessoria, S.A.",
  description:
    "Endereço comercial de prestígio na capital de Moçambique para empresas nacionais e estrangeiras. Domicílio fiscal para registo na Conservatória, atendimento telefónico dedicado e gestão documental.",
};

export default function DomiciliacaoPage() {
  return (
    <main className="min-h-screen bg-[#080E1A] text-[#F8FAFC] pt-18">
      <Header />
      <div className="py-10 bg-[#0D1627] hairline-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-mono font-semibold text-[#C59B27] uppercase tracking-[0.2em] mb-2">
            Soluções Corporativas de Domiciliação
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Escritório Virtual e Sede Comercial na Capital
          </h1>
        </div>
      </div>
      <DomiciliationMatrix />
      <ContactLocation />
      <Footer />
    </main>
  );
}
