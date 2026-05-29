type GlowOrbProps = {
  className?: string;
};

export function GlowOrb({
  className = "",
}: GlowOrbProps) {
  return (
    <div
      className={`
        absolute
        rounded-full
        bg-blue-500/20
        blur-3xl
        pointer-events-none
        ${className}
      `}
    />
  );
}