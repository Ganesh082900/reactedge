// components/atoms/FeatureVisual.tsx
import Image from "next/image";

const VISUALS: Record<string, string> = {
    radial: "/images/feature-img-11.svg",
    sphere: "/images/feature-img-12.svg",
    dots: "/images/feature-img-13.svg",
};

export default function FeatureVisual({ type }: { type: string }) {
    const src = VISUALS[type] ?? VISUALS.radial;

    return (
        <Image
            src={src}
            alt=""
            width={240}
            height={240}
            unoptimized
            className="w-40 h-40 md:w-52 md:h-52 object-contain"
        />
    );
}