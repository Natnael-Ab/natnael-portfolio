type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export function Section({
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      className={`
        relative
        py-20
        md:py-32
        ${className}
      `}
    >
      {children}
    </section>
  );
}