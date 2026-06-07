import PageShell from "@/components/PageShell";

export default function TradingPage() {
  return (
    <PageShell
      title="יומן מסחר"
      subtitle="Trading Journal"
      accentColor="#22c55e"
      icon={
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m7 16 4-4 4 4 4-4" />
        </svg>
      }
    />
  );
}
