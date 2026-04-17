type SectionProps = {
  children: React.ReactNode;
  className?: string;
  bg?: "cream" | "white" | "gray" | "dark";
};

export default function Section({
  children,
  className = "",
  bg = "cream",
}: SectionProps) {
  const backgrounds = {
    cream: "bg-[#f5f3ef]",
    white: "bg-white",
    gray: "bg-[#ebe8e2]",
    dark: "bg-[#2a2a2a] text-white",
  };

  return (
    <section className={`py-20 px-4 ${backgrounds[bg]} ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
