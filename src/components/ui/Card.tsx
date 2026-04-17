type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  number?: string;
};

export default function Card({ icon, title, description, number }: CardProps) {
  return (
    <div className="group bg-white p-8 border border-[#e5e1d6] hover:border-[#a12d2d]/40 transition-all duration-300 relative">
      {number && (
        <span className="absolute top-6 right-6 font-serif text-2xl text-[#a12d2d]/70">
          {number}
        </span>
      )}
      <div className="mb-5 flex h-12 w-12 items-center justify-center text-[#a12d2d] group-hover:text-[#7d1f1f] transition-colors duration-300">
        {icon}
      </div>
      <h3 className="mb-3 font-serif text-xl text-[#2c2c2c]">{title}</h3>
      <p className="text-[#5a5a5a] text-sm leading-relaxed">{description}</p>
    </div>
  );
}
