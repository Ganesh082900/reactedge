export default function Hamburger({ open }: { open: boolean }) {
    return (
        <div className="relative w-6 h-5">
            <span
                className={`absolute w-full h-[2px] bg-black transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${open ? "rotate-45 top-1/2 -translate-y-1/2" : "top-0"}`}
            />
            <span
                className={`absolute w-full h-[2px] bg-black transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${open ? "-rotate-45 top-1/2 -translate-y-1/2" : "bottom-0"}`}
            />
        </div>
    );
}