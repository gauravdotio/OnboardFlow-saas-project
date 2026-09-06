"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Mail,
  Copy,
  Check,
  ArrowRight,
  Sparkles,
  Award,
  Users,
  Building2,
  Lock,
  Clock,
  HeartHandshake,
  MessageSquare,
  CheckCircle2,
  ChevronRight,
  Compass,
  Layers,
  Database,
  Workflow
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DemoModal from "@/components/ui/DemoModal";
import LoginModal from "@/components/ui/LoginModal";
import HowItWorksModal from "@/components/sections/HowItWorksModal";
import ScrollProgressBar from "@/components/shared/ScrollProgressBar";
import BackToTop from "@/components/shared/BackToTop";
import { useToast } from "@/components/shared/ToastProvider";

export default function AboutPage() {
  const toast = useToast();
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(text);
    toast.success(`${label} copied to clipboard!`);
    setTimeout(() => {
      setCopiedEmail(null);
    }, 2000);
  };

  const openDemo = () => {
    setIsDemoOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-brand-500 selection:text-white">
      <ScrollProgressBar />

      {/* Sticky Navigation */}
      <Navbar
        onRequestDemo={openDemo}
        onOpenLogin={() => setIsLoginOpen(true)}
      />

      <main className="flex-1 pt-24">
        {/* Breadcrumb Header */}
        <section className="bg-slate-50/80 border-b border-slate-200/80 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-brand-600 transition">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-800 font-semibold">About Platform</span>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white subtle-grid border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/70 text-brand-700 text-xs font-semibold shadow-xs mb-6 animate-slide-up">
              <Sparkles className="w-3.5 h-3.5 text-brand-500" />
              <span>Vision & Architecture</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-900 leading-[1.15] mb-6 animate-slide-up">
              Transforming How Modern Firms{" "}
              <span className="text-brand-500">Onboard & Collaborate</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto animate-slide-up">
              At OnboardFlow, we believe that client onboarding sets the tone for every professional relationship. We replace fragmented email chains and spreadsheets with frictionless, secure client portals.
            </p>
          </div>
        </section>

        {/* Platform Architecture & Core Pillars Section */}
        <section className="py-16 lg:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-50 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-3">
                <Layers className="w-3.5 h-3.5 text-brand-600" />
                <span>Architecture</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-900 tracking-tight">
                Engineered for High-Trust Practices
              </h2>
              <p className="text-slate-600 mt-3 text-sm sm:text-base">
                How OnboardFlow guarantees multi-tenant security, zero-friction client experiences, and strict compliance.
              </p>
            </div>

            {/* Architecture Card Container */}
            <div className="bg-gradient-to-br from-slate-900 via-navy-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl border border-slate-800 relative overflow-hidden">
              {/* Decorative background glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full filter blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-tealAccent-500/10 rounded-full filter blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center relative z-10">
                {/* Left Column: Feature Highlights */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-medium text-slate-300 mb-3">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-400" />
                      <span>Security by Design</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                      &ldquo;Client onboarding shouldn&apos;t be a security hazard or administrative bottleneck.&rdquo;
                    </h3>
                  </div>

                  <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                    <p>
                      OnboardFlow was built with a singular mission: to permanently eradicate the chaos, security risks, and administrative fatigue of client data collection in accounting, legal, and advisory practices.
                    </p>
                    <p>
                      Rather than asking clients to navigate complicated portals or email sensitive documents across unencrypted threads, OnboardFlow combines{" "}
                      <strong className="font-semibold text-white">frictionless magic links</strong>,{" "}
                      <strong className="font-semibold text-white">strict per-tenant database isolation</strong>, and{" "}
                      <strong className="font-semibold text-white">dynamic conditional intake workflows</strong>—reducing turnaround times from weeks to hours.
                    </p>
                  </div>

                  {/* Architecture Pillars */}
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <div className="text-xs text-brand-400 font-semibold">Pillar 01</div>
                      <div className="text-sm font-semibold text-white mt-0.5">Zero Friction</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <div className="text-xs text-brand-400 font-semibold">Pillar 02</div>
                      <div className="text-sm font-semibold text-white mt-0.5">Tenant Isolation</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                      <div className="text-xs text-brand-400 font-semibold">Pillar 03</div>
                      <div className="text-sm font-semibold text-white mt-0.5">Automated Audits</div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Platform Metrics & Contact */}
                <div className="lg:col-span-6 space-y-6">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-slate-800/70 border border-slate-700">
                      <div className="text-3xl font-extrabold text-brand-400">70%</div>
                      <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">Faster Client Onboarding</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">Average cycle reduction</div>
                    </div>
                    <div className="p-5 rounded-2xl bg-slate-800/70 border border-slate-700">
                      <div className="text-3xl font-extrabold text-tealAccent-400">100%</div>
                      <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">Data Isolation</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">Per-firm boundary enforcement</div>
                    </div>
                    <div className="p-5 rounded-2xl bg-slate-800/70 border border-slate-700">
                      <div className="text-3xl font-extrabold text-purple-400">4 Roles</div>
                      <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">Role-Based Access</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">Admin, Reviewer, Staff, Client</div>
                    </div>
                    <div className="p-5 rounded-2xl bg-slate-800/70 border border-slate-700">
                      <div className="text-3xl font-extrabold text-amber-400">25MB</div>
                      <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">Versioned Documents</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">Immutable audit logging</div>
                    </div>
                  </div>

                  {/* Direct Contact Card */}
                  <div className="bg-slate-900/90 rounded-2xl p-5 sm:p-6 border border-slate-700 space-y-4 shadow-lg">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="text-xs font-bold text-brand-400 uppercase tracking-wider flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5" />
                        Inquiries & Inquiries
                      </span>
                      <span className="text-[11px] text-slate-400">
                        Direct response guaranteed
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-slate-800/80 rounded-xl border border-slate-700/80">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center text-slate-300 shrink-0">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[11px] text-slate-400 font-medium">Platform Contact</p>
                          <p className="text-sm font-semibold text-white">contact@onboardflow.com</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 self-end sm:self-center">
                        <button
                          type="button"
                          onClick={() => handleCopy("contact@onboardflow.com", "Contact email")}
                          className="px-2.5 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-700/70 hover:bg-slate-700 rounded-lg transition flex items-center gap-1.5"
                          title="Copy Contact Email"
                        >
                          {copiedEmail === "contact@onboardflow.com" ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                          <span>{copiedEmail === "contact@onboardflow.com" ? "Copied" : "Copy"}</span>
                        </button>
                        <a
                          href="mailto:contact@onboardflow.com"
                          className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-700 hover:bg-slate-600 rounded-lg transition flex items-center gap-1.5"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Mail</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values / Principles Section */}
        <section className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-50 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-3">
                <Compass className="w-3.5 h-3.5" />
                <span>Our Principles</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-900 tracking-tight">
                Built on Uncompromising Values
              </h2>
              <p className="text-slate-600 mt-3 text-sm sm:text-base">
                How our engineering team designs every feature, flow, and integration at OnboardFlow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Value 1 */}
              <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-200">
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Client-First Simplicity
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Your clients shouldn&apos;t need tutorials or complex credentials. We make submission as intuitive as clicking a single link.
                </p>
              </div>

              {/* Value 2 */}
              <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-200">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Per-Tenant Isolation
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Confidential documents deserve ironclad protection. We ensure absolute schema isolation and end-to-end encryption.
                </p>
              </div>

              {/* Value 3 */}
              <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-200">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Time-to-Value Velocity
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We compress onboarding cycles from 3+ weeks down to 48 hours with automated nudges, inline validations, and smart reviews.
                </p>
              </div>

              {/* Value 4 */}
              <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-200">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Professional Rigor
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Engineered specifically for CPA, law, and financial practices with immutable audit logs and version-controlled document trails.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-brand-900 via-slate-900 to-navy-950 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Ready to modernize your firm&apos;s intake?
            </h2>
            <p className="text-slate-300 text-base max-w-xl mx-auto mb-8">
              Join leading professional service practices who trust OnboardFlow for seamless client data collection and onboarding.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={openDemo}
                className="w-full sm:w-auto px-8 py-3.5 text-base font-bold text-white bg-brand-500 hover:bg-brand-600 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Request a Walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/dashboard"
                className="w-full sm:w-auto px-7 py-3.5 text-base font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-xl transition flex items-center justify-center gap-2"
              >
                <span>Explore Live Platform</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer onRequestDemo={openDemo} />

      <BackToTop />

      {/* Interactive Modals */}
      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />

      <HowItWorksModal
        isOpen={isHowItWorksOpen}
        onClose={() => setIsHowItWorksOpen(false)}
        onRequestDemo={openDemo}
      />
    </div>
  );
}
