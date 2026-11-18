import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#021C11] border-t border-[#D4AF37]/20 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-xs text-[#CBD5E1]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#D4AF37]/15">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/elite-logo-white.svg"
                alt="Elite Assessoria Contábil e Empresarial, S.A."
                width={260}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-xs text-[#CBD5E1] leading-relaxed max-w-sm">
              Elite Assessoria Contábil e Empresarial, S.A. Prestação de serviços contábeis com transparência e responsabilidade, formação executiva, domiciliação fiscal e apoio corporativo em Maputo.
            </p>
            <div className="pt-2 text-xs text-[#CBD5E1] space-y-1 font-mono">
              <div>Sede: Av. Maguiguana, Bairro Central A, NR 688, Maputo</div>
              <div>Tel / WhatsApp: +258 85 140 8538</div>
              <div>E-mail: eliteassessoriacontabile@gmail.com</div>
            </div>
          </div>

          {/* Quick Links 1: Serviços */}
          <div>
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block mb-4">
              Serviços
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
                  Constituição de Empresas (BAU)
                </Link>
              </li>
              <li>
                <Link href="/#legal" className="hover:text-[#D4AF37] transition-colors">
                  Licenciamento &amp; Regularização
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links 2: Cursos & Domiciliação */}
          <div>
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block mb-4">
              Cursos &amp; Sede
            </span>
            <ul className="space-y-2.5">
              <li>
                <Link href="/#formacao" className="text-[#D4AF37] hover:underline transition-colors font-medium">
                  Cursos de Formação Prática
                </Link>
              </li>
              <li>
                <Link href="/#formacao" className="hover:text-[#D4AF37] transition-colors">
                  Fiscalidade Moçambicana
                </Link>
              </li>
              <li>
                <Link href="/#domiciliacao" className="hover:text-[#D4AF37] transition-colors">
                  Domiciliação Fiscal Maputo
                </Link>
              </li>
              <li>
                <Link href="/#domiciliacao" className="hover:text-[#D4AF37] transition-colors">
                  Escritório Virtual &amp; Linha Fixa
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
                  Simulador de Crédito ao Consumo
                </Link>
              </li>
              <li>
                <Link href="/#credito" className="hover:text-[#D4AF37] transition-colors">
                  Requisitos &amp; Documentação
                </Link>
              </li>
              <li>
                <Link href="/#pacto" className="hover:text-[#D4AF37] transition-colors">
                  Missão, Visão e Valores
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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#CBD5E1]/70">
          <div>
            © {new Date().getFullYear()} Elite Assessoria Contábil e Empresarial, S.A. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span>Maputo, Moçambique</span>
            <span>·</span>
            <span>Integridade · Inovação · Trabalho em Equipe</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
