import Link from "next/link";
import { ReactNode } from "react";

interface ModuleCardProps {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  external?: boolean;
  icon: ReactNode;
  accentColor?: string;
  status?: string;
  stats?: { label: string; value: string }[];
}

export default function ModuleCard({
  title,
  subtitle,
  description,
  href,
  external,
  icon,
  accentColor = "var(--accent)",
  status,
  stats,
}: ModuleCardProps) {
  const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Link
      href={href}
      {...linkProps}
      className="group block rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] hover:bg-[var(--surface-2)] transition-all duration-200 hover:shadow-xl hover:shadow-black/20 overflow-hidden"
    >
      {/* Top accent line */}
      <div className="h-0.5 w-full" style={{ background: accentColor }} />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: `color-mix(in srgb, ${accentColor} 15%, transparent)` }}
          >
            <span style={{ color: accentColor }}>{icon}</span>
          </div>
          {external && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          )}
        </div>

        {/* Title */}
        <h2 className="text-base font-semibold text-[var(--foreground)] group-hover:text-white transition-colors">
          {title}
        </h2>
        <p className="text-xs text-[var(--muted)] mt-0.5 mb-3">{subtitle}</p>

        {/* Description */}
        <p className="text-sm text-[var(--muted)] leading-relaxed">{description}</p>

        {/* Stats placeholder */}
        {stats ? (
          <div className="mt-5 pt-4 border-t border-[var(--border)] grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-xs text-[var(--muted)]">{s.label}</p>
                <p className="text-sm font-semibold text-[var(--foreground)] mt-0.5">{s.value}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-5 pt-4 border-t border-[var(--border)]">
            <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
              {status ? (
                <>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: accentColor }} />
                  {status}
                </>
              ) : (
                <>
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--border)]" />
                  בקרוב
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
