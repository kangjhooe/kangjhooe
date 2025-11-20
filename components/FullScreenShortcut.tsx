"use client";

import { useEffect, useState } from "react";

export function FullScreenShortcut() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleKeyDown = async (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "f" && !event.metaKey && !event.ctrlKey) {
        event.preventDefault();
        if (!document.fullscreenElement) {
          await document.documentElement.requestFullscreen();
          setIsFullscreen(true);
        } else {
          await document.exitFullscreen();
          setIsFullscreen(false);
        }
      }
    };

    const handleChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("fullscreenchange", handleChange);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("fullscreenchange", handleChange);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 hidden flex-col items-end gap-2 text-xs text-primary/80 sm:flex">
      <span className="rounded-full border border-white/15 bg-[rgba(12,20,16,0.75)] px-3 py-1 shadow-soft-xl">
        Tekan <kbd className="font-mono text-primary">F</kbd> untuk{" "}
        {isFullscreen ? "keluar" : "masuk"} mode layar penuh
      </span>
    </div>
  );
}

