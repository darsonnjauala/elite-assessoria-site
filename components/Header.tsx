"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A111F]/95 backdrop-blur-md border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/elite-logo.svg"
            alt="Elite Assessoria Contábil e Empresarial, S.A."
            width={240}
            height={46}
            className="h-10 sm:h-11 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#94A3B8]">
          <Link href="/#financas" className="hover:text-white transition-colors">
            Finanças &amp; Auditoria
          </Link>
          <Link href="/#legal" className="hover:text-white transition-colors">
            Apoio Legal
          </Link>
          <Link href="/#domiciliacao" className="hover:text-white transition-colors">
            Domiciliação Maputo
          </Link>
          <Link href="/#credito" className="hover:text-[#D4AF37] transition-colors">
            Crédito Público
          </Link>
          <Link href="/#contactos" className="hover:text-white transition-colors">
            Contactos
          </Link>
        </nav>

        {/* Header Right CTA - Pure text, rounded-none */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://wa.me/258846992501?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20solicitar%20uma%20proposta%20corporativa."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C59B27] hover:bg-[#D4AF37] text-[#0A111F] font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-none transition-colors"
          >
            Pedir Proposta Corporativa
          </a>
        </div>

        {/* Mobile Menu Button - Pure text */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="https://wa.me/258846992501?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20mais%20informa%C3%A7%C3%B5es."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C59B27] text-[#0A111F] text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-none"
          >
            WhatsApp
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="border border-[#1E293B] bg-[#0F172A] text-white px-3 py-2 text-xs font-semibold uppercase tracking-wider rounded-none"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? "Fechar" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0A111F] border-b border-[#1E293B] px-4 pt-3 pb-6 flex flex-col gap-4">
          <Link
            href="/#financas"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-[#94A3B8] hover:text-white py-1"
          >
            Finanças &amp; Auditoria
          </Link>
          <Link
            href="/#legal"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-[#94A3B8] hover:text-white py-1"
          >
            Apoio Legal &amp; Constituição
          </Link>
          <Link
            href="/#domiciliacao"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-[#94A3B8] hover:text-white py-1"
          >
            Domiciliação em Maputo
          </Link>
          <Link
            href="/#credito"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-[#D4AF37] py-1"
          >
            Crédito ao Funcionário Público
          </Link>
          <Link
            href="/#contactos"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-[#94A3B8] hover:text-white py-1"
          >
            Contactos &amp; Sede
          </Link>
          <div className="pt-2">
            <a
              href="https://wa.me/258846992501?text=Ol%C3%A1%20Elite%20Assessoria%2C%20pretendo%20solicitar%20uma%20proposta%20corporativa."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#C59B27] text-[#0A111F] font-bold text-xs uppercase tracking-wider py-3 rounded-none"
            >
              Pedir Proposta Corporativa
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
