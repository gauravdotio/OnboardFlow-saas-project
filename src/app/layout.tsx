import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "OnboardFlow — Multi-Tenant Client Onboarding & Document Management",
  description:
    "OnboardFlow replaces email and spreadsheet onboarding with one branded client portal. Collect forms and documents, track every client's progress in real time, and enforce structured approval workflows.",
  keywords: [
    "client onboarding",
    "document management",
    "client portal",
    "accounting intake",
    "law firm client onboarding",
    "document checklist",
    "approval workflow",
    "multi-tenant onboarding",
  ],
  authors: [{ name: "OnboardFlow" }],
  openGraph: {
    title: "OnboardFlow — Client Onboarding, Without the Chaos",
    description:
      "Modern branded client portal for professional service firms. Collect forms, manage versioned document uploads, and track case progress in real time.",
    type: "website",
  },
};

import Providers from "@/components/shared/Providers";
import ThemePreviewer from "@/components/shared/ThemePreviewer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="indigo" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-brand-500 selection:text-white">
        <Providers>
          {children}
          <ThemePreviewer />
        </Providers>
      </body>
    </html>
  );
}
