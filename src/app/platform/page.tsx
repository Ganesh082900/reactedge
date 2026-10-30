import type { Metadata } from "next";
import { PLATFORM } from "@/content/site";
import PlatformView from "@/components/platform/PlatformView";

export const metadata: Metadata = {
    title: "Platform",
    description: PLATFORM.hero.description,
};

export default function Platform() {
    return <PlatformView />;
}
