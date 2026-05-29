import Link from "next/link";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
};

export function Button({
  href = "/",
  children,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className="
        inline-flex
        h-11
        items-center
        justify-center
        rounded-xl
        border
        border-white/10
        bg-white/5
        px-6
        text-sm
        font-medium
        text-white
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-blue-400/40
        hover:bg-blue-500/10
        hover:shadow-[0_0_30px_rgba(79,124,255,0.25)]
      "
    >
      {children}
    </Link>
  );
}