import ModuleCard from "@/components/ModuleCard";

const modules = [
  {
    title: "יומן מסחר",
    subtitle: "Trading Journal",
    description: "תיעוד וניתוח עסקאות מסחר, מעקב אחר ביצועים ולמידה מהיסטוריית המסחר שלך.",
    href: "https://trading-journal-production-d21e.up.railway.app",
    external: true,
    status: "Live",
    accentColor: "#22c55e",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m7 16 4-4 4 4 4-4" />
      </svg>
    ),
  },
  {
    title: "תיקי השקעות",
    subtitle: "Investment Portfolio Manager",
    description: "ניהול תיקי השקעות, מעקב אחר נכסים, תשואות וחשיפה לשוק בזמן אמת.",
    href: "/portfolio",
    accentColor: "#6366f1",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    title: "משימות יומיות",
    subtitle: "Daily Tasks & Morning Routine",
    description: "ניהול משימות יומיות, שגרת בוקר ומעקב אחר הרגלים לשיפור הפרודוקטיביות.",
    href: "/tasks",
    accentColor: "#f59e0b",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: "כושר",
    subtitle: "Fitness Tracker",
    description: "Live workout mode, activity heatmap, workout history",
    href: "https://web-production-86d20.up.railway.app",
    external: true,
    status: "Live",
    accentColor: "#22c55e",
    icon: <span className="text-xl">💪</span>,
  },
  {
    title: "סקודואל",
    subtitle: "Scuduel — External",
    description: "גישה ישירה לפלטפורמת סקודואל. לחץ לפתיחה בלשונית חדשה.",
    href: "https://web-production-646d7.up.railway.app",
    external: true,
    status: "Live",
    accentColor: "#8b5cf6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>
    ),
  },
  {
    title: "דיילי OS",
    subtitle: "Daily OS",
    description: "מערכת ניהול יום אישית עם גיימיפיקציה, הרגלים, משימות, מטרות ו-XP",
    href: "https://daily-os-production-f513.up.railway.app",
    external: true,
    status: "Live",
    accentColor: "#6366f1",
    icon: (<span>🧠</span>),
  },
];

export default function HomePage() {
  return (
    <div className="p-8">
      {/* Page Header */}
      <div className="mb-10">
        <p className="text-sm text-[var(--muted)] mb-1">ברוך הבא</p>
        <h1 className="text-3xl font-bold text-[var(--foreground)]">Control Room</h1>
        <p className="text-[var(--muted)] mt-1 text-base">לוח הבקרה האישי שלך</p>
      </div>

      {/* Quick Stats Bar */}
      <div className="grid grid-cols-4 gap-4 mb-10">
        {[
          { label: "מודולים פעילים", value: "0 / 4" },
          { label: "משימות היום", value: "—" },
          { label: "אימונים השבוע", value: "—" },
          { label: "עסקאות החודש", value: "—" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4"
          >
            <p className="text-xs text-[var(--muted)] mb-1">{stat.label}</p>
            <p className="text-xl font-semibold text-[var(--foreground)]">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Section Title */}
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-sm font-medium text-[var(--muted)] uppercase tracking-wider">מודולים</h2>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </div>

      {/* Module Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {modules.map((mod) => (
          <ModuleCard key={mod.href} {...mod} />
        ))}
      </div>
    </div>
  );
}
