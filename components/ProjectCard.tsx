type ProjectCardProps = {
  title: string;
  description: string;
  tags?: string[];
};

export function ProjectCard({ title, description, tags = [] }: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-primary/10 bg-white/80 p-6 shadow-sm shadow-primary/10 transition hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
        {description}
      </p>
      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

