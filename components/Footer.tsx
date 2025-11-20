export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 bg-[#020806] shadow-[0_-25px_60px_-45px_rgba(0,0,0,0.9)]">
      <div className="mx-auto max-w-5xl px-4 py-6 text-center text-sm text-foreground/80 sm:px-6">
        © {year} @kangjhooe
      </div>
    </footer>
  );
}

