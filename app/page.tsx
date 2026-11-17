import Header from "@/components/Header";
import HeroGateway from "@/components/HeroGateway";
import StatsStrip from "@/components/StatsStrip";
import CorporateDivisions from "@/components/CorporateDivisions";
import DomiciliationMatrix from "@/components/DomiciliationMatrix";
import CreditSimulator from "@/components/CreditSimulator";
import ContactLocation from "@/components/ContactLocation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080E1A] text-[#F8FAFC]">
      <Header />
      <HeroGateway />
      <StatsStrip />
      <CorporateDivisions />
      <DomiciliationMatrix />
      <CreditSimulator />
      <ContactLocation />
      <Footer />
    </main>
  );
}
