import { useState } from "react";
import { links } from "../api/links";
import OffCanvasMenu from "./OffCanvasMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 flex h-14 items-center bg-white justify-between px-4">
        <div className="flex items-center gap-2">
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            <img src="/burger-menu-left.svg" className="h-6 w-auto" alt="" />
          </button>

          <img src="/fun-88.webp" alt="FUN88" className="h-4 w-auto" />
        </div>

        <div className="hidden md:flex items-center gap-4 text-[#2596be] font-bold uppercase">
          {links.map((label) => (
            <a
              key={label}
              href="#"
              className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#2596be] after:transition-all hover:after:w-full
            "
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button className="rounded-lg bg-[#2596be] px-3 py-1.5  uppercase text-white hover:bg-[#1f7a9d]">
            Login
          </button>
          <button className="rounded-lg bg-green-500 px-3 py-1.5  uppercase text-white hover:bg-green-600">
            Register
          </button>
        </div>
      </header>

      <OffCanvasMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
