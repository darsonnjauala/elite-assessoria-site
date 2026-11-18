"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#032115]/95 backdrop-blur-md border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/elite-logo.svg"
            alt="Elite Assessoria Contábil e Empresarial, S.A."
            width={260}
            height={50}
            className="h-10 sm:h-11 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-7 text-xs font-mono font-medium text-[#CBD5E1] tracking-wider uppercase">
          <Link href="/#financas" className="hover:text-[#D4AF37] transition-colors">
            Contabilidade
          </Link>
          <Link href="/#legal" className="hover:text-[#D4AF37] transition-colors">
            Constituição
          </Link>
          <Link href="/#formacao" className="hover:text-[#D4AF37] transition-colors text-[#F6E39F]">
            Cursos &amp; Formação
          </Link>
          <Link href="/#domiciliacao" className="hover:text-[#D4AF37] transition-colors">
            Domiciliação
          </Link>
          <Link href="/#credito" className="hover:text-[#D4AF37] transition-colors">
            Crédito
          </Link>
          <Link href="/#contactos" className="hover:text-[#D4AF37] transition-colors">
            Contactos
          </Link>
        </nav>

        {/* Header Right CTA - Actionable, concise, pure text */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://wa.me/258851408538?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20falar%20com%20um%20especialista."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4AF37] hover:bg-[#F1B814] text-[#032115] font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-none transition-colors whitespace-nowrap"
          >
            Falar com Especialista
          </a>
        </div>

        {/* Mobile Menu Actions */}
        <div className="flex xl:hidden items-center gap-2">
          <a
            href="https://wa.me/258851408538?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20atendimento."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4AF37] text-[#032115] text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-none whitespace-nowrap"
          >
            Falar no WhatsApp
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="border border-[#D4AF37]/30 bg-[#073824] text-white px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded-none whitespace-nowrap"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? "Fechar" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#032115] border-b border-[#D4AF37]/20 px-4 pt-4 pb-6 flex flex-col gap-4">
          <Link
            href="/#financas"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xs font-mono font-medium text-[#CBD5E1] hover:text-[#D4AF37] py-1 uppercase tracking-wider"
          >
            Contabilidade &amp; PGC-NIRF
          </Link>
          <Link
            href="/#legal"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xs font-mono font-medium text-[#CBD5E1] hover:text-[#D4AF37] py-1 uppercase tracking-wider"
          >
            Apoio Legal e Constituição
          </Link>
          <Link
            href="/#formacao"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xs font-mono font-medium text-[#F6E39F] hover:text-[#D4AF37] py-1 uppercase tracking-wider"
          >
            Cursos &amp; Formação Prática
          </Link>
          <Link
            href="/#domiciliacao"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xs font-mono font-medium text-[#CBD5E1] hover:text-[#D4AF37] py-1 uppercase tracking-wider"
          >
            Domiciliação na Av. Maguiguana
          </Link>
          <Link
            href="/#credito"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xs font-mono font-medium text-[#D4AF37] py-1 uppercase tracking-wider"
          >
            Crédito ao Consumo / Público
          </Link>
          <Link
            href="/#contactos"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xs font-mono font-medium text-[#CBD5E1] hover:text-[#D4AF37] py-1 uppercase tracking-wider"
          >
            Contactos e Atendimento
          </Link>
          <div className="pt-2">
            <a
              href="https://wa.me/258851408538?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20falar%20com%20um%20especialista."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#D4AF37] text-[#032115] font-bold text-xs uppercase tracking-wider py-3 rounded-none whitespace-nowrap"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
