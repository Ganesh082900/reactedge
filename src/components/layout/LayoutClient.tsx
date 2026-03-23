"use client";

import { usePathname } from "next/navigation";
import MailToSection from "@/components/mailHeader/MailToSection";

export default function LayoutClient() {
    const pathname = usePathname();

    const HIDE_MAIL_ROUTES = ["/contact"];
    const hideMailSection = HIDE_MAIL_ROUTES.includes(pathname);

    if (hideMailSection) return null;

    return <MailToSection />;
}