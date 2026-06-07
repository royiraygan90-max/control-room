import PageShell from "@/components/PageShell";

export default function TasksPage() {
  return (
    <PageShell
      title="משימות יומיות"
      subtitle="Daily Tasks & Morning Routine"
      accentColor="#f59e0b"
      icon={
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      }
    />
  );
}
