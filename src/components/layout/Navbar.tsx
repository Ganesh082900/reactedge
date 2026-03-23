"use client";

import { useState } from "react";
import Hamburger from "./Hamburger";
import MenuOverlay from "./MenuOverlay";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-black/10">
                <div className="max-w-[1280px] mx-auto px-6 flex justify-between items-center h-[80px]">

                    {/* LOGO */}
                    <div className="font-bold text-xl tracking-tight">SHIFT5</div>

                    {/* MENU */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="flex items-center gap-3 uppercase text-xs tracking-[0.2em]"
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