"use client";

import { useState } from "react";
import Image from "next/image";
import Hamburger from "./Hamburger";
import MenuOverlay from "./MenuOverlay";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="fixed top-4 left-0 w-full z-50 bg-transparent">
                <div className="mx-auto px-6 flex justify-between items-center h-[80px]">

                    {/* LOGO */}
                    <div className="font-bold text-xl tracking-tight">
                        <Image 
                            src="/images/primary_black.svg" 
                            alt="ReActEdge Logo"
                            width={350}
                            height={40}
                        />
                    </div>

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