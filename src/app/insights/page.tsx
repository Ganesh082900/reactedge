import type { Metadata } from "next";
import { INSIGHT } from "@/content/site";
import InsightArticleView from "@/components/insights/InsightArticleView";

export const metadata: Metadata = {
    title: INSIGHT.title,
    description: INSIGHT.description,
};

export default function Insights() {
    return <InsightArticleView insight={INSIGHT} />;
}
