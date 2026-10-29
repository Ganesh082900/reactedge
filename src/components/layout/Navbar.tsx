"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "./Hamburger";
import MenuOverlay from "./MenuOverlay";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="fixed top-4 left-0 w-full z-50 bg-transparent">
                <div className="mx-auto px-6 flex justify-between items-center h-[80px]">

                    {/* LOGO */}
                    <Link href="/" onClick={() => setOpen(false)} aria-label="ReActEdge home" className="font-bold text-xl tracking-tight">
                        <Image 
                            // src="/images/ReActEdge_primary_logo.svg" 
                            src="/images/primary_black.svg" 
                            alt="ReActEdge Logo"
                            width={350}
                            height={40}
                        />
                    </Link>

                    {/* MENU */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="flex items-center gap-6 uppercase text-xs tracking-[0.2em]"
                    >
                        <Hamburger open={open} />
                        {open ? "Close" : "Menu"}
                    </button>

                </div>
            </header>

            <MenuOverlay open={open} setOpen={setOpen} />
        </>
    );
}