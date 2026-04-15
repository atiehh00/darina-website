type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function Card({ icon, title, description }: CardProps) {
  return (
    <div className="group rounded-2xl bg-white p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#d4a843]/30">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1e3a5f]/10 text-[#1e3a5f] group-hover:bg-[#d4a843]/10 group-hover:text-[#d4a843] transition-colors duration-300">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold text-[#1e3a5f]">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
