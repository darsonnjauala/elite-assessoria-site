import Header from "@/components/Header";
import HeroGateway from "@/components/HeroGateway";
import StatsStrip from "@/components/StatsStrip";
import MissionVisionValues from "@/components/MissionVisionValues";
import CorporateDivisions from "@/components/CorporateDivisions";
import CoursesFormation from "@/components/CoursesFormation";
import DomiciliationMatrix from "@/components/DomiciliationMatrix";
import CreditSimulator from "@/components/CreditSimulator";
import ContactLocation from "@/components/ContactLocation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1E293B]">
      <Header />
      <HeroGateway />
      <StatsStrip />
      <MissionVisionValues />
      <CorporateDivisions />
      <CoursesFormation />
      <DomiciliationMatrix />
      <CreditSimulator />
      <ContactLocation />
      <Footer />
    </main>
  );
}
