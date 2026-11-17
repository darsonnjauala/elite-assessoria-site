import Header from "@/components/Header";
import DomiciliationMatrix from "@/components/DomiciliationMatrix";
import ContactLocation from "@/components/ContactLocation";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Domiciliação Fiscal & Escritório Virtual em Maputo | Elite Assessoria, S.A.",
  description:
    "Endereço comercial de prestígio na capital de Moçambique para empresas nacionais e estrangeiras. Domicílio fiscal para registo na Conservatória, atendimento telefónico dedicado e gestão documental.",
};

export default function DomiciliacaoPage() {
  return (
    <main className="min-h-screen bg-[#0A111F] text-[#F8FAFC] pt-18">
      <Header />
      <div className="py-8 bg-[#0F172A] border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-1">
            Soluções Corporativas de Domiciliação
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
            Escritório Virtual &amp; Sede Comercial em Maputo
          </h1>
        </div>
      </div>
      <DomiciliationMatrix />
      <ContactLocation />
      <Footer />
    </main>
  );
}
