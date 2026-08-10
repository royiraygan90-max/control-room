"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import ModuleCard from "@/components/ModuleCard";

const modules = [
  {
    index: 1,
    title: "Trading Journal",
    href: "https://trading-journal-production-d21e.up.railway.app",
    accentColor: "oklch(72% 0.15 155)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <polyline points="3,16 9,10 13,14 21,5" />
        <polyline points="15,5 21,5 21,11" />
      </svg>
    ),
  },
  {
    index: 2,
    title: "Portfolio Manager",
    href: "https://portfolio-dashboard-production-5dc3.up.railway.app",
    accentColor: "oklch(68% 0.14 250)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <polygon points="12,3 21,8 12,13 3,8" />
        <polyline points="3,13 12,18 21,13" />
        <polyline points="3,18.5 12,23 21,18.5" />
      </svg>
    ),
  },
  {
    index: 3,
    title: "Fitness Tracker",
    href: "https://web-production-86d20.up.railway.app",
    accentColor: "oklch(75% 0.13 190)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <polyline points="2,13 7,13 9,7 13,19 16,13 22,13" />
      </svg>
    ),
  },
  {
    index: 4,
    title: "Scuduel",
    href: "https://web-production-646d7.up.railway.app",
    accentColor: "oklch(68% 0.17 300)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="8,7 17,7 17,16" />
      </svg>
    ),
  },
  {
    index: 5,
    title: "Daily OS",
    href: "https://daily-os-production-f513.up.railway.app",
    accentColor: "oklch(72% 0.17 350)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5.3 5.3l4.2 4.2M14.5 14.5l4.2 4.2M18.7 5.3l-4.2 4.2M9.5 14.5l-4.2 4.2" />
      </svg>
    ),
  },
  {
    index: 6,
    title: "Cash Flow",
    href: "/go/cashflow",
    accentColor: "oklch(78% 0.15 75)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <rect x="2.5" y="6" width="19" height="13" rx="2.5" />
        <path d="M2.5 10h19" />
        <circle cx="16.5" cy="14.5" r="1.1" />
      </svg>
    ),
  },
];

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-[14px] h-[14px] text-[var(--muted-dim)] shrink-0"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export default function HomePage() {
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return modules;
    return modules.filter((m) => m.title.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="min-h-full flex flex-col">
      {/* Top bar */}
      <header className="h-[52px] sm:h-[72px] px-4 sm:px-10 flex items-center justify-center sm:justify-between border-b border-[var(--border)] shrink-0">
        <div className="hidden sm:flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-[9px] bg-[var(--accent)] flex items-center justify-center shrink-0">
            <svg viewBox="0 0 12 12" fill="white" className="w-[11px] h-[11px]">
              <polygon points="2,1 11,6 2,11" />
            </svg>
          </div>
          <span className="text-xs font-semibold tracking-[.08em] text-[var(--muted)]">CONTROL ROOM</span>
        </div>
        <span className="sm:hidden text-[11px] font-semibold tracking-[.08em] text-[var(--muted)]">CONTROL ROOM</span>
        <div className="hidden sm:flex items-center gap-2 w-[220px] h-[34px] rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5">
          <SearchIcon />
          <input
            ref={searchRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search modules..."
            className="flex-1 min-w-0 bg-transparent text-[12.5px] text-[var(--foreground)] placeholder:text-[var(--muted-dim)] outline-none"
          />
          <span className="text-[10px] font-medium text-[var(--muted-dim)] shrink-0">⌘K</span>
        </div>
      </header>

      {/* Mobile search row */}
      <div className="sm:hidden mx-4 mt-4 h-10 rounded-xl border border-[var(--border)] bg-[var(--surface)] flex items-center gap-2 px-3.5 shrink-0">
        <SearchIcon />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="flex-1 min-w-0 bg-transparent text-[13px] text-[var(--foreground)] placeholder:text-[var(--muted-dim)] outline-none"
        />
      </div>

      {/* Module grid */}
      <div className="flex-1 p-4 sm:p-10 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 content-start">
        {filtered.map((mod) => (
          <ModuleCard key={mod.href} {...mod} />
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full text-center text-[var(--muted)] text-sm py-10">
            No modules found
          </p>
        )}
      </div>
    </div>
  );
}
