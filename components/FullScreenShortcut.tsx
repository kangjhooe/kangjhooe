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
    <div className="fixed bottom-4 right-4 hidden sm:flex flex-col items-end gap-2 text-xs text-primary/70">
      <span className="rounded-full border border-primary/20 bg-white/80 px-3 py-1 shadow-sm dark:bg-white/10 dark:text-white">
        Tekan <kbd className="font-mono">F</kbd> untuk{" "}
        {isFullscreen ? "keluar" : "masuk"} mode layar penuh
      </span>
      <span className="rounded-full border border-primary/20 bg-white/80 px-3 py-1 shadow-sm dark:bg-white/10 dark:text-white">
        Tekan <kbd className="font-mono">D</kbd> untuk ubah tema
      </span>
    </div>
  );
}

