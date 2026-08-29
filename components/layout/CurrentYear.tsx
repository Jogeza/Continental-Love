"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => undefined;
const getCurrentYear = () => new Date().getFullYear();
const getPrerenderYear = () => 2026;

export default function CurrentYear() {
  const year = useSyncExternalStore(
    subscribe,
    getCurrentYear,
    getPrerenderYear,
  );

  return <span suppressHydrationWarning>{year}</span>;
}
