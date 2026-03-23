"use client";

import { useState } from "react";
import { NAV_ITEMS } from "@/lib/navigation";
import Link from "next/link";
import useMenuAnimation from "@/hooks/useMenuAnimation";

export default function MenuOverlay({
    open,
    setOpen,
}: {
    open: boolean;
    setOpen: (v: boolean) => void;
}) {
    useMenuAnimation(open);

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = (index: number, hasChildren: boolean) => {
        if (!hasChildren) return;
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleClose = () => {
        setActiveIndex(null);
        setOpen(false);
    };

    return (
        <div
            className={`fixed inset-0 z-50 transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
        >
            {/* BACKDROP */}
            <div
                className="absolute inset-0 bg-black/30 backdrop-blur-md"
                onClick={handleClose}
            />

            {/* PANEL */}
            <div
                className={`absolute right-0 top-0 h-[calc(100vh-80px)] 
        w-full md:w-[520px] bg-[#F5F7FA] text-black p-10
        transform transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${open ? "translate-x-0 scale-100" : "translate-x-full scale-95"}`}
            >
                {/* CLOSE */}
                <div className="flex justify-end mb-12">
                    <button
                        onClick={handleClose}
                        className="text-xs uppercase tracking-[0.2em]"
                    >
                        ✕ Close
                    </button>
                </div>

                {/* NAV */}
                <nav className="space-y-10">
                    {NAV_ITEMS.map((item, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div key={index}>

                                {/* PARENT */}
                                <div
                                    onClick={() =>
                                        item.children
                                            ? handleToggle(index, true)
                                            : handleClose()
                                    }
                                    className="flex justify-between items-center cursor-pointer"
                                >
                                    <div className="text-5xl font-semibold tracking-tight">
                                        {item.href && !item.children ? (
                                            <Link href={item.href}>{item.title}</Link>
                                        ) : (
                                            <span>{item.title}</span>
                                        )}

                                        {item.count && (
                                            <sup className="text-base opacity-50 ml-1">
                                                {item.count}
                                            </sup>
                                        )}
                                    </div>

                                    {/* ARROW */}
                                    {item.children && (
                                        <span
                                            className={`transition-transform duration-300 ${isOpen ? "rotate-90" : ""
                                                }`}
                                        >
                                            →
                                        </span>
                                    )}
                                </div>

                                {/* CHILDREN */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-96 mt-6" : "max-h-0"
                                        }`}
                                >
                                    {item.children && (
                                        <ul className="space-y-4 text-lg">
                                            {item.children.map((child, i) => (
                                                <li key={i}>
                                                    <Link
                                                        href={child.href}
                                                        onClick={handleClose} // ✅ CLOSE ON CLICK
                                                        className="flex items-center gap-3 hover:opacity-60 transition"
                                                    >
                                                        <svg
                                                            width="16"
                                                            height="16"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                d="M5 12h14M13 6l6 6-6 6"
                                                                strokeWidth="2"
                                                            />
                                                        </svg>
                                                        {child.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                            </div>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
}