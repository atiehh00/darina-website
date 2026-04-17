import { Link } from "@/i18n/navigation";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer";
  const variants = {
    primary: "bg-[#a12d2d] text-white hover:bg-[#7d1f1f]",
    secondary: "bg-[#a12d2d] text-white hover:bg-[#7d1f1f]",
    outline:
      "border border-[#a12d2d] text-[#a12d2d] hover:bg-[#a12d2d] hover:text-white",
    ghost:
      "border border-[#2c2c2c] text-[#2c2c2c] hover:bg-[#2c2c2c] hover:text-white",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
