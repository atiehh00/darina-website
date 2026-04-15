type SectionProps = {
  children: React.ReactNode;
  className?: string;
  bg?: "white" | "gray" | "dark";
};

export default function Section({
  children,
  className = "",
  bg = "white",
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    gray: "bg-gray-50",
    dark: "bg-[#1e3a5f] text-white",
  };

  return (
    <section className={`py-20 px-4 ${backgrounds[bg]} ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
