import React from 'react';
import { X } from 'lucide-react';

interface ATDModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ATDAnnouncementModal: React.FC<ATDModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      {/* Modal Container */}
      <div className="relative  w-175 h-150 bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors"
        >
          <X size={28} strokeWidth={1.5} />
        </button>

        <div className="p-8 md:p-12 flex flex-col items-center text-center">

          {/* Logo Section */}
          <div className="mb-8 w-full">
            <img
              src="/images/Achieving the Dream 2026 - First Coast Hispanic Chamber of Commerce.png"
              alt="Achieving The Dream 2026"
              className="w-full h-auto max-h-62 object-contain"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-[40px] font-normal text-[#1D84E4] ">
              ATD 2026
            </h2>

            <p className="text-xl md:text-[24px]  text-black  font-bold ">
              Applications for 2026 will open on September 16, 2025!
            </p>

            <p className="text-slate-600 text-sm md:text-[24px] pt-2">
              Be sure to{' '}
              <a href="#" className="text-[#1D84E4] font-bold hover:underline">
                subscribe
              </a>{' '}
              to be notified!
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ATDAnnouncementModal;
