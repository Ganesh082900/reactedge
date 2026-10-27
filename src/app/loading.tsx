// app/loading.tsx
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0F1C]">
      <div className="relative">
        {/* Animated loader */}
        <div className="w-16 h-16 border-4 border-shift-orange/20 border-t-shift-orange rounded-full animate-spin" />
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-shift-orange/40 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
      </div>
    </div>
  );
}
