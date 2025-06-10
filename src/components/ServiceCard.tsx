import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  iconPath?: string;
}

export default function ServiceCard({ title, description, iconPath }: ServiceCardProps) {
  return (
    <div className="bg-white border border-[#dee0e3] rounded-2xl md:rounded-3xl p-4 md:p-6 hover:shadow-sm transition-shadow">
      {/* Icon */}
      <div className="mb-4 md:mb-6">
        {iconPath ? (
          <div className="w-8 h-8 md:w-10 md:h-10">
            <Image
              src={iconPath}
              alt={`${title} 아이콘`}
              width={40}
              height={40}
              className="w-full h-full"
            />
          </div>
        ) : (
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-200 rounded-lg"></div>
        )}
      </div>
      
      {/* Title */}
      <h3 className="text-[#14151a] font-bold text-base md:text-lg leading-tight tracking-[-0.2px] mb-2 md:mb-3">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-[#0f1324]/60 font-medium text-sm md:text-base leading-relaxed tracking-[-0.2px]">
        {description}
      </p>
    </div>
  );
} 