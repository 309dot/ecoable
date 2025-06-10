interface ServiceCardProps {
  title: string;
  description: string;
  href?: string;
}

const ServiceCard = ({ title, description, href }: ServiceCardProps) => {
  const CardContent = () => (
    <div 
      className="bg-white border border-[#dee0e3] rounded-3xl hover:shadow-lg transition-all duration-300 cursor-pointer group"
      style={{ width: '240px', height: '126px' }}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-3 h-6">
          <h3 className="text-[#14151a] font-bold text-lg leading-[26px] tracking-[-0.2px] group-hover:text-primary-blue transition-colors">
            {title}
          </h3>
          <div className="w-6 h-6 text-gray-400 group-hover:text-primary-blue transition-colors flex-shrink-0">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M7 7l10 10M17 7v10H7"/>
            </svg>
          </div>
        </div>
        <p 
          className="text-[#0f1324] text-sm leading-5 tracking-[-0.1px] group-hover:text-[#0f1324]/80 transition-colors"
          style={{ 
            opacity: 0.6,
            fontSize: '14px',
            lineHeight: '20px',
            height: '40px'
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
};

export default ServiceCard; 