"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setIsVisible(false);
    }, 1600);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-gradient-to-br from-[#050906] via-[#0F1C16] to-[#1E2F27] text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="flex h-32 w-32 items-center justify-center rounded-[32px] border border-white/15 bg-[rgba(6,10,8,0.85)] text-4xl font-semibold tracking-[0.3em] text-primary"
          >
            KJ
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

