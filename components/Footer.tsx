import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#080E1A] hairline-t pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-xs text-[#94A3B8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 hairline-b">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/elite-logo.svg"
                alt="Elite Assessoria Contábil e Empresarial, S.A."
                width={240}
                height={46}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-xs text-[#94A3B8] leading-relaxed max-w-sm">
              Elite Assessoria Contábil e Empresarial, S.A. — Sociedade Anónima moçambicana de serviços integrados de contabilidade PGC-NIRF, auditoria, consultoria societária, domiciliação fiscal e intermediação financeira.
            </p>
            <div className="pt-2 text-[11px] text-[#64748B] font-mono">
              NUIT Corporativo: 401XXXXXX · Maputo, Moçambique
            </div>
          </div>

          {/* Quick Links 1: Divisões */}
          <div>
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block mb-4">
              Divisões
            </span>
            <ul className="space-y-2.5">
              <li>
                <Link href="/#financas" className="hover:text-[#D4AF37] transition-colors">
                  Contabilidade &amp; PGC-NIRF
                </Link>
              </li>
              <li>
                <Link href="/#financas" className="hover:text-[#D4AF37] transition-colors">
                  Auditoria Independente
                </Link>
              </li>
              <li>
                <Link href="/#legal" className="hover:text-[#D4AF37] transition-colors">
                  Constituição no Balcão Único
                </Link>
              </li>
              <li>
                <Link href="/#legal" className="hover:text-[#D4AF37] transition-colors">
                  Assessoria Jurídica Comercial
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links 2: Domiciliação */}
          <div>
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block mb-4">
              Escritório Virtual
            </span>
            <ul className="space-y-2.5">
              <li>
                <Link href="/#domiciliacao" className="hover:text-[#D4AF37] transition-colors">
                  Domicílio Fiscal em Maputo
                </Link>
              </li>
              <li>
                <Link href="/#domiciliacao" className="hover:text-[#D4AF37] transition-colors">
                  Atendimento Telefónico Dedicado
                </Link>
              </li>
              <li>
                <Link href="/#domiciliacao" className="hover:text-[#D4AF37] transition-colors">
                  Gestão e Triagem Documental
                </Link>
              </li>
              <li>
                <Link href="/#domiciliacao" className="hover:text-[#D4AF37] transition-colors">
                  Salas de Reunião na Capital
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links 3: Servidores Públicos */}
          <div>
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block mb-4">
              Setor Público
            </span>
            <ul className="space-y-2.5">
              <li>
                <Link href="/#credito" className="text-[#D4AF37] hover:underline transition-colors font-medium">
                  Simulador de Crédito Bancário
                </Link>
              </li>
              <li>
                <Link href="/#credito" className="hover:text-[#D4AF37] transition-colors">
                  Requisitos &amp; Documentos
                </Link>
              </li>
              <li>
                <Link href="/#credito" className="hover:text-[#D4AF37] transition-colors">
                  Margem Consignada DNCP
                </Link>
              </li>
              <li>
                <Link href="/#contactos" className="hover:text-[#D4AF37] transition-colors">
                  Atendimento Presencial
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#64748B]">
          <div>
            © {new Date().getFullYear()} Elite Assessoria Contábil e Empresarial, S.A. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span>Moçambique · Maputo</span>
            <span>·</span>
            <span>Rigor · Transparência · Confidencialidade</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
