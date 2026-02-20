"use client";

import { useState, useEffect } from "react";

/**
 * Wraps app content and only renders children after client mount.
 * Prevents hydration mismatches on mobile (Safari, extensions, etc.)
 * by ensuring server and initial client render match (empty), then
 * painting real content after hydration.
 */
export function ClientHydrationBoundary({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white" aria-hidden="true" suppressHydrationWarning />
    );
  }

  return <>{children}</>;
}
