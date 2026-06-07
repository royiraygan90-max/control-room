"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "יומן מסחר",
    sublabel: "Trading Journal",
    href: "https://trading-journal-production-d21e.up.railway.app",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m7 16 4-4 4 4 4-4" />
      </svg>
    ),
  },
  {
    label: "תיקי השקעות",
    sublabel: "Portfolio Manager",
    href: "/portfolio",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    label: "משימות יומיות",
    sublabel: "Daily Tasks",
    href: "/tasks",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    label: "כושר",
    sublabel: "Fitness Tracker",
    href: "https://web-production-86d20.up.railway.app",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5h2.25v-3H3.75m0 0H2.25m1.5 0v3m14.25-3h2.25v3H18m0 0h1.5M18 10.5v3M6 10.5v3m0-3H18m-12 0v3m12 0v-3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5h12" />
      </svg>
    ),
  },
  {
    label: "סקודואל",
    sublabel: "Scuduel",
    href: "https://web-production-646d7.up.railway.app",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>
    ),
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-full flex flex-col border-l border-[var(--border)] bg-[var(--surface)]">
      {/* Logo / Brand */}
      <div className="px-6 py-6 border-b border-[var(--border)]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
            </svg>
          </div>
          <div>
            <h1 className="text-sm font-semibold text-[var(--foreground)] leading-none">Control Room</h1>
            <p className="text-xs text-[var(--muted)] mt-0.5">לוח בקרה אישי</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <p className="px-3 pb-2 text-[11px] font-medium text-[var(--muted)] uppercase tracking-wider">
          מודולים
        </p>
        {navItems.map((item) => {
          const isActive = !item.external && pathname === item.href;
          const linkProps = item.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {};

          return (
            <Link
              key={item.href}
              href={item.href}
              {...linkProps}
              className={`
                flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-150 group
                ${isActive
                  ? "bg-[var(--accent)] text-white shadow-lg shadow-indigo-900/30"
                  : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-2)]"
                }
              `}
            >
              <span className={isActive ? "text-white" : "text-[var(--muted)] group-hover:text-[var(--accent-hover)]"}>
                {item.icon}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{item.label}</p>
                <p className={`text-[11px] truncate ${isActive ? "text-indigo-200" : "text-[var(--muted)]"}`}>
                  {item.sublabel}
                </p>
              </div>
              {item.external && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3 shrink-0 opacity-50">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-[var(--border)]">
        <p className="text-[11px] text-[var(--muted)] text-center">v0.1.0 · Control Room</p>
      </div>
    </aside>
  );
}
