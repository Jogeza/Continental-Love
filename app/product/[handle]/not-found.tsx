import Link from "next/link";
import { Button } from "@/components/primitives/Button";

export default function ProductNotFound() {
  return (
    <div className="min-h-[60vh] bg-[var(--warm-ivory)] flex flex-col items-center justify-center text-center px-4 py-20">
      <span className="text-xs font-sans tracking-[0.25em] uppercase text-[var(--heritage-gold)] font-semibold mb-3">
        ATELIER ARCHIVE
      </span>
      <h1 className="text-3xl md:text-5xl font-serif text-[var(--charcoal)] mb-4">
        Piece Not Found
      </h1>
      <p className="text-sm font-sans text-neutral-600 max-w-md mb-8">
        The requested Continental Love creation is currently unavailable or may have been archived.
      </p>
      <Link href="/search">
        <Button variant="primary">Return to Collections</Button>
      </Link>
    </div>
  );
}
