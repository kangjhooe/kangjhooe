"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "./ThemeProvider";

export function DarkModeToggle() {
  const { theme, toggleTheme, isReady } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle tema gelap"
      className="relative flex h-11 w-20 items-center rounded-full border border-primary/30 bg-white/70 px-1 text-primary shadow-sm transition hover:border-primary hover:shadow-lg dark:bg-white/10"
    >
      <AnimatePresence initial={false} mode="wait">
        {isReady && (
          <motion.span
            key={theme}
            layout
            initial={{ opacity: 0, x: theme === "dark" ? -15 : 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: theme === "dark" ? 15 : -15 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className={`absolute inset-y-1 ${
              theme === "dark" ? "right-1" : "left-1"
            } flex items-center justify-center rounded-full bg-primary text-white`}
          >
            {theme === "dark" ? (
              <FiMoon className="h-4 w-4" />
            ) : (
              <FiSun className="h-4 w-4" />
            )}
          </motion.span>
        )}
      </AnimatePresence>
      <span className="flex w-full items-center justify-between px-2 text-[11px] font-semibold uppercase tracking-wide">
        <span>Light</span>
        <span>Dark</span>
      </span>
    </button>
  );
}

