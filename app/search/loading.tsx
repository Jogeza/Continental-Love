export default function SearchLoading() {
  return (
    <div className="animate-pulse space-y-8">
      <div className="h-4 w-32 bg-neutral-200/80 rounded" />
      <div className="h-10 w-1/2 bg-neutral-200/80 rounded" />
      <div className="h-4 w-3/4 bg-neutral-200/60 rounded" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-80 bg-neutral-200/60 rounded-sm" />
        ))}
      </div>
    </div>
  );
}
