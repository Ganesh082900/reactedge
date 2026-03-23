// components/atoms/FeatureVisual.tsx

export default function FeatureVisual({ type }: { type: string }) {
    if (type === "sphere") {
        return <div className="w-32 h-32 rounded-full border border-black" />;
    }

    if (type === "dots") {
        return (
            <div className="w-32 h-32 rounded-full bg-black/20 blur-sm" />
        );
    }

    if (type === "radial") {
        return (
            <div className="w-32 h-32 border border-black rotate-45" />
        );
    }

    return null;
}