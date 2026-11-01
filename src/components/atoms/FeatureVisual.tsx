import Image from "next/image";

const VISUALS: Record<string, string> = {
    radial: "/images/features/radial.svg",
    sphere: "/images/features/sphere.svg",
    dots: "/images/features/dots.svg",
    atom: "/images/features/atom.svg",
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