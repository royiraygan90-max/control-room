import Link from "next/link";
import { ReactNode } from "react";

interface ModuleCardProps {
  title: string;
  href: string;
  icon: ReactNode;
  accentColor: string;
  index: number;
}

export default function ModuleCard({ title, href, icon, accentColor, index }: ModuleCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ "--card-accent": accentColor } as React.CSSProperties}
      className="flex flex-col justify-between min-h-[128px] sm:min-h-[172px] rounded-2xl sm:rounded-[20px] border border-[var(--border)] bg-[var(--surface)] p-[18px] sm:p-[26px] transition-all duration-200 hover:bg-[var(--surface-hover)] hover:border-[var(--card-accent)] hover:-translate-y-[3px]"
    >
      <div className="flex items-start justify-between">
        <div
          className="w-10 h-10 sm:w-[52px] sm:h-[52px] rounded-xl sm:rounded-[14px] flex items-center justify-center shrink-0"
          style={{ background: `color-mix(in srgb, ${accentColor} 16%, transparent)` }}
        >
          <span
            style={{ color: accentColor }}
            className="[&>svg]:w-[18px] [&>svg]:h-[18px] sm:[&>svg]:w-[22px] sm:[&>svg]:h-[22px]"
          >
            {icon}
          </span>
        </div>
        <div className="hidden sm:flex w-7 h-[26px] items-center justify-center rounded-lg border border-[var(--border)] bg-white/[0.06] shrink-0">
          <span className="font-mono text-[11.5px] font-semibold text-[var(--muted)]">{index}</span>
        </div>
      </div>

      <div className="flex items-center gap-1.5 min-w-0">
        <span className="text-[14.5px] sm:text-[19px] font-semibold text-[var(--foreground)] truncate">
          {title}
        </span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="hidden sm:block w-3 h-3 text-[var(--muted-dim)] shrink-0"
        >
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="8,7 17,7 17,16" />
        </svg>
      </div>
    </Link>
  );
}
