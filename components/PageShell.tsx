import { ReactNode } from "react";

interface PageShellProps {
  title: string;
  subtitle: string;
  accentColor: string;
  icon: ReactNode;
}

export default function PageShell({ title, subtitle, accentColor, icon }: PageShellProps) {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-10">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
          style={{ background: `color-mix(in srgb, ${accentColor} 15%, transparent)` }}
        >
          <span style={{ color: accentColor }}>{icon}</span>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">{title}</h1>
          <p className="text-sm text-[var(--muted)]">{subtitle}</p>
        </div>
      </div>

      {/* Coming Soon Placeholder */}
      <div className="rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface)] p-16 flex flex-col items-center justify-center text-center">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
          style={{ background: `color-mix(in srgb, ${accentColor} 10%, transparent)` }}
        >
          <span style={{ color: accentColor }}>{icon}</span>
        </div>
        <h2 className="text-lg font-semibold text-[var(--foreground)] mb-2">בקרוב</h2>
        <p className="text-sm text-[var(--muted)] max-w-sm leading-relaxed">
          מודול זה נמצא בפיתוח. התכנים והפונקציונליות יתווספו בשלב הבא.
        </p>
        <div
          className="mt-6 px-4 py-1.5 rounded-full text-xs font-medium"
          style={{
            background: `color-mix(in srgb, ${accentColor} 10%, transparent)`,
            color: accentColor,
          }}
        >
          Coming Soon
        </div>
      </div>
    </div>
  );
}
