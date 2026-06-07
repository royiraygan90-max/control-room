import PageShell from "@/components/PageShell";

export default function FitnessPage() {
  return (
    <PageShell
      title="כושר"
      subtitle="Fitness Tracker"
      accentColor="#ef4444"
      icon={
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5h2.25v-3H3.75m0 0H2.25m1.5 0v3m14.25-3h2.25v3H18m0 0h1.5M18 10.5v3M6 10.5v3m0-3H18m-12 0v3m12 0v-3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5h12" />
        </svg>
      }
    />
  );
}
