import React from 'react';

export interface TabMenuItem {
  key: string;
  label: string;
}

interface TabMenuProps {
  tabs: TabMenuItem[];
  activeTab: string;
  onChange: (key: string) => void;
  className?: string;
}

const TabMenu: React.FC<TabMenuProps> = ({ tabs, activeTab, onChange, className = '' }) => {
  return (
    <div className={`w-full overflow-x-auto ${className}`} style={{ WebkitOverflowScrolling: 'touch' }}>
      <div className="flex justify-start min-w-0">
        <div className="bg-[rgba(10,15,41,0.08)] rounded-full p-0.5 flex min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => onChange(tab.key)}
              className={`px-3 py-2.5 rounded-full font-medium whitespace-nowrap text-base md:text-base sm:text-sm transition-colors duration-200 ${
                activeTab === tab.key
                  ? 'bg-white border border-[#DEE0E3] text-[#14151A]'
                  : 'text-[rgba(15,19,36,0.6)]'
              }`}
              style={{
                fontSize: '1rem',
                lineHeight: 1.5,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabMenu; 