import { useEffect } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
  onClose: () => void;
}

export default function Toast({ message, type, isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // 3초 후 자동 닫기

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right duration-300">
      <div
        className={`
          px-6 py-4 rounded-[12px] shadow-lg border max-w-sm
          ${type === 'success' 
            ? 'bg-green-50 border-green-200 text-green-800' 
            : 'bg-red-50 border-red-200 text-red-800'
          }
        `}
      >
        <div className="flex items-center gap-3">
          <div className={`
            w-5 h-5 rounded-full flex items-center justify-center text-white text-sm font-bold
            ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}
          `}>
            {type === 'success' ? '✓' : '!'}
          </div>
          <p className="font-medium text-sm leading-5">{message}</p>
          <button
            onClick={onClose}
            className="ml-auto text-gray-400 hover:text-gray-600 text-lg font-bold"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
} 