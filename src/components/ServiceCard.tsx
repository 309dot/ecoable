interface ServiceCardProps {
  title: string;
  description: string;
  href?: string;
}

const ServiceCard = ({ title, description, href }: ServiceCardProps) => {
  const CardContent = () => (
    <div className="bg-white border border-border-gray rounded-3xl w-full md:w-60 h-32 p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-dark-text font-bold text-lg tracking-[-0.2px] group-hover:text-primary-blue transition-colors">
          {title}
        </h3>
        <div className="w-6 h-6 text-gray-400 group-hover:text-primary-blue transition-colors">
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
      <p className="text-gray-text/60 text-sm leading-5 tracking-[-0.1px] group-hover:text-gray-text/80 transition-colors">
        {description}
      </p>
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