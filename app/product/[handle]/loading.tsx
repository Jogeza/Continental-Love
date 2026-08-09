export default function ProductLoading() {
  return (
    <div className="min-h-screen bg-[var(--warm-ivory)] py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7 h-[500px] bg-neutral-200/60 rounded-sm" />
        <div className="lg:col-span-5 space-y-6">
          <div className="h-4 w-32 bg-neutral-200/80 rounded" />
          <div className="h-10 w-3/4 bg-neutral-200/80 rounded" />
          <div className="h-6 w-24 bg-neutral-200/80 rounded" />
          <div className="h-24 w-full bg-neutral-200/60 rounded" />
          <div className="h-12 w-full bg-neutral-200/80 rounded" />
        </div>
      </div>
    </div>
  );
}
