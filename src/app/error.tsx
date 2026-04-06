// app/error.tsx
'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-shift-dark px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-shift-blue mb-4">Oops!</h1>
        <h2 className="text-3xl font-semibold text-white mb-6">Something went wrong</h2>
        <p className="text-lg text-shift-white/70 mb-8 max-w-md mx-auto">
          We apologize for the inconvenience. Please try again.
        </p>
        <button
          onClick={reset}
          className="px-8 py-3 bg-shift-blue text-white rounded-lg hover:bg-shift-orange transition-all duration-300 shadow-lg"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
