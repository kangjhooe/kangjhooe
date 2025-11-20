"use client";

import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => {
      setVisible(window.scrollY > 280);
    };
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 rounded-full bg-primary p-3 text-white shadow-soft-xl transition hover:-translate-y-1"
      aria-label="Kembali ke atas"
    >
      <FiArrowUp className="h-5 w-5" />
    </button>
  );
}

