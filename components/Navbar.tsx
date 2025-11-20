"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#020806]/90 shadow-[0_25px_55px_-35px_rgba(0,0,0,0.8)] backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="font-semibold uppercase tracking-[0.4em] text-primary"
        >
          Kang Jhooe
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "relative rounded-full px-4 py-2 text-sm font-semibold transition",
                  isActive
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="navActive"
                    className="absolute inset-0 -z-10 rounded-full bg-primary/15 shadow-inner"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <button
            className="rounded-full border border-primary/45 px-4 py-2 text-sm font-semibold text-primary md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Buka menu navigasi"
          >
            Menu
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="border-t border-white/5 bg-[#030a07] px-4 py-4 shadow-lg"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={clsx(
                      "rounded-full px-4 py-2 text-sm font-semibold transition",
                      isActive
                        ? "bg-primary/15 text-primary"
                        : "text-foreground/80 hover:bg-primary/10 hover:text-primary",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

