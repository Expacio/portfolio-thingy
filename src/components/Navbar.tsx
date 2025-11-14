"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          AkShaY
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:opacity-60 transition">
            Home
          </Link>
          <Link href="/projects" className="hover:opacity-60 transition">
            Projects
          </Link>
          <Link href="/about" className="hover:opacity-60 transition">
            About
          </Link>
        </div>
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <div className="w-6 h-0.5 bg-zinc-900 dark:bg-white"></div>
          <div className="w-6 h-0.5 bg-zinc-900 dark:bg-white"></div>
          <div className="w-6 h-0.5 bg-zinc-900 dark:bg-white"></div>
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4 text-sm font-medium">
          <Link href="/projects" className="hover:opacity-60 transition">
            Projects
          </Link>
          <Link href="/about" className="hover:opacity-60 transition">
            About
          </Link>
          <Link href="/contact" className="hover:opacity-60 transition">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
