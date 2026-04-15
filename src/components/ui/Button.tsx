import { Link } from "@/i18n/navigation";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
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
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 cursor-pointer";
  const variants = {
    primary: "bg-[#1e3a5f] text-white hover:bg-[#16304f] shadow-lg hover:shadow-xl",
    secondary: "bg-[#d4a843] text-white hover:bg-[#c49a38] shadow-lg hover:shadow-xl",
    outline:
      "border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white",
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
