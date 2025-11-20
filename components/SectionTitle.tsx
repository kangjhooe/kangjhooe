type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  title,
  subtitle,
  align = "center",
}: SectionTitleProps) {
  return (
    <div
      className={`space-y-2 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <p className="text-xs uppercase tracking-[0.3em] text-primary/80">
        {subtitle ?? "Kang Jhooe"}
      </p>
      <h2 className="text-3xl font-semibold text-foreground">{title}</h2>
    </div>
  );
}

