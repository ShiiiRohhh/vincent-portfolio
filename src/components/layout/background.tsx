export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#070A12] bg-noise">
      {/* Aurora blobs */}
      <div className="absolute -top-48 -left-48 h-[620px] w-[620px] rounded-full bg-orange-500/15 blur-[140px]" />
      <div className="absolute -bottom-48 -right-48 h-[620px] w-[620px] rounded-full bg-cyan-500/15 blur-[160px]" />
      <div className="absolute top-[28%] left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[160px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.75)_75%)]" />
    </div>
  );
}
