import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elite Assessoria Contábil e Empresarial, S.A. | Maputo, Moçambique",
  description:
    "Sociedade Anónima moçambicana. Contabilidade organizada PGC-NIRF, auditoria financeira independente, apoio legal e constituição de empresas, domiciliação fiscal e escritório virtual em Maputo, e intermediação de crédito para funcionários públicos.",
  keywords: [
    "Elite Assessoria",
    "Contabilidade Maputo",
    "Auditoria Financeira Moçambique",
    "Constituição de Empresas Maputo",
    "Domiciliação Fiscal Maputo",
    "Escritório Virtual Maputo",
    "Crédito Funcionários Públicos Moçambique",
    "Contabilistas OCAM Maputo",
    "Balcão Único Maputo",
  ],
  icons: {
    icon: "/elite-emblem.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A111F",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0A111F] text-[#F8FAFC] antialiased selection:bg-[#C59B27] selection:text-[#0A111F] font-sans">
        {children}
      </body>
    </html>
  );
}
