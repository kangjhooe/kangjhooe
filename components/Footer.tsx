export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-primary/10 bg-white/90">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 text-center text-sm text-foreground/70">
        © {year} Kang Jhooe. Dibangun dengan cinta untuk edukasi madrasah.
      </div>
    </footer>
  );
}

