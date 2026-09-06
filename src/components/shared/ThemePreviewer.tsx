"use client";

import React, { useState, useEffect } from "react";
import { Palette, Check, X, Sparkles, SlidersHorizontal } from "lucide-react";

export interface ThemeOption {
  id: string;
  name: string;
  subtitle: string;
  primaryColor: string;
  accentColor: string;
  tag: string;
}

export const THEMES: ThemeOption[] = [
  {
    id: "indigo",
    name: "Modern Indigo",
    subtitle: "Linear & Stripe aesthetic",
    primaryColor: "#6366F1",
    accentColor: "#10B981",
    tag: "Recommended",
  },
  {
    id: "ocean",
    name: "Electric Ocean",
    subtitle: "Classic enterprise B2B SaaS",
    primaryColor: "#0066FF",
    accentColor: "#14B8A6",
    tag: "Enterprise",
  },
  {
    id: "violet",
    name: "Cyber Violet",
    subtitle: "Raycast & AI tooling vibe",
    primaryColor: "#7C3AED",
    accentColor: "#06B6D4",
    tag: "Tech / AI",
  },
  {
    id: "emerald",
    name: "Emerald Fintech",
    subtitle: "Clean legal & wealth intake",
    primaryColor: "#059669",
    accentColor: "#0284C7",
    tag: "Fintech",
  },
  {
    id: "slate",
    name: "Midnight Slate",
    subtitle: "Executive corporate style",
    primaryColor: "#2563EB",
    accentColor: "#F59E0B",
    tag: "Executive",
  },
];

export default function ThemePreviewer() {
  const [activeTheme, setActiveTheme] = useState<string>("indigo");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("onboardflow_theme");
    if (saved && THEMES.some((t) => t.id === saved)) {
      setActiveTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      document.documentElement.setAttribute("data-theme", "indigo");
    }
  }, []);

  const handleSelectTheme = (themeId: string) => {
    setActiveTheme(themeId);
    document.documentElement.setAttribute("data-theme", themeId);
    localStorage.setItem("onboardflow_theme", themeId);
  };

  const currentTheme = THEMES.find((t) => t.id === activeTheme) || THEMES[0];

  return (
    <div className="fixed bottom-5 right-5 z-50 select-none print:hidden">
      {/* Expanded Menu */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-slate-200/90 p-4 animate-slide-up text-slate-900 transition-all">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center">
                <Palette className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Portfolio Theme Selector
                </h4>
                <p className="text-[11px] text-slate-500">
                  Switch live color palettes to test
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition"
              title="Close theme selector"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Theme List */}
          <div className="mt-3 space-y-2 max-h-72 overflow-y-auto pr-1">
            {THEMES.map((theme) => {
              const isSelected = activeTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => handleSelectTheme(theme.id)}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all border ${
                    isSelected
                      ? "bg-slate-900 text-white border-slate-900 shadow-md scale-[1.01]"
                      : "bg-slate-50/70 hover:bg-slate-100/90 text-slate-700 border-slate-200/80 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Color Swatch Dots */}
                    <div className="flex items-center -space-x-1.5 shrink-0">
                      <div
                        className="w-5 h-5 rounded-full border-2 border-white shadow-xs"
                        style={{ backgroundColor: theme.primaryColor }}
                      />
                      <div
                        className="w-5 h-5 rounded-full border-2 border-white shadow-xs"
                        style={{ backgroundColor: theme.accentColor }}
                      />
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className={`text-xs font-bold ${isSelected ? "text-white" : "text-slate-900"}`}>
                          {theme.name}
                        </span>
                        <span
                          className={`text-[9px] px-1.5 py-0.2 rounded font-medium ${
                            isSelected
                              ? "bg-slate-800 text-brand-300 border border-slate-700"
                              : "bg-slate-200/80 text-slate-600"
                          }`}
                        >
                          {theme.tag}
                        </span>
                      </div>
                      <p className={`text-[10px] ${isSelected ? "text-slate-300" : "text-slate-500"}`}>
                        {theme.subtitle}
                      </p>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-brand-500 text-white flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-brand-500" />
              <span>Click any theme to view live</span>
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-brand-600 font-semibold hover:underline text-[11px]"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Floating Pill Launcher */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="group flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-slate-900/95 hover:bg-slate-900 text-white shadow-xl hover:shadow-2xl border border-slate-700/80 backdrop-blur-md transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        title="Change Visual Theme"
      >
        <div className="flex items-center -space-x-1 shrink-0">
          <div
            className="w-3.5 h-3.5 rounded-full border border-white/60 shadow-xs"
            style={{ backgroundColor: currentTheme.primaryColor }}
          />
          <div
            className="w-3.5 h-3.5 rounded-full border border-white/60 shadow-xs"
            style={{ backgroundColor: currentTheme.accentColor }}
          />
        </div>
        <span className="text-xs font-semibold tracking-tight text-white flex items-center gap-1.5">
          <span>Theme:</span>
          <span className="text-brand-300 font-bold">{currentTheme.name}</span>
        </span>
        <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition" />
      </button>
    </div>
  );
}
