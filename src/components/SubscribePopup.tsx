import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, User } from "lucide-react";

interface SubscribePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubscribePopup: React.FC<SubscribePopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-100 flex items-center justify-center p-4"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-232 h-145.5 bg-white rounded-3xl overflow-hidden shadow-2xl z-101"
          >
            {/* Header / Brand Gradient */}
            <div className="" />
            
            <div className="relative p-8 md:p-16">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-6 top-6 p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group"
              >
                <X className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
              </button>

              {/* Title & Subtitle */}
              <div className="mb-8">
                <h2 className="text-[32px] font-medium w-154 mx-auto text-black mb-5 text-center">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-black text-lg font-normal text-center w-162 mx-auto mb-20">
                 Get our Conexion newsletter with program updates, event invitations,
and community success stories.
                </p>
              </div>

              {/* Form */}
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* First Name */}
                  <div className="space-y-2">
                    <label className="text-[12px] font-normal text-black ml-1.5 ">
                      First Name
                    </label>
                    <div className="relative group mt-1.5">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400 group-focus-within:text-[#F97316] transition-colors" />
                      </div>
                      <input
                        type="text"
                        placeholder="First Name"
                        className="w-full pl-11 pr-4 h-9.5 bg-[#F4F4F4]  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]/20 focus:border-[#F97316] transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Last Name */}
                  <div className="space-y-2">
                    <label className="text-[12px] font-normal text-black ml-1.5">
                      Last Name
                    </label>
                    <div className="relative group mt-1.5">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400 group-focus-within:text-[#F97316] transition-colors" />
                      </div>
                      <input
                        type="text"
                        placeholder="Last Name"
                         className="w-full pl-11 pr-4 h-9.5 bg-[#F4F4F4]  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]/20 focus:border-[#F97316] transition-all"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Email address */}
                <div className="space-y-2">
                  <label className="text-[12px] font-normal text-black ml-1.5">
                    Email Address
                  </label>
                  <div className="relative group mt-1.5">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-[#F97316] transition-colors" />
                    </div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full pl-11 pr-4 h-9.5 bg-[#F4F4F4]  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]/20 focus:border-[#F97316] transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-[#F97316] h-10.25 text-white  rounded-full font-bold text-lg hover:bg-[#EA580C] hover:shadow-xl hover:shadow-orange-200/50 transition-all active:scale-[0.98] mt-4 cursor-pointer"
                >
                  Subscribe Now
                </button>

            
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SubscribePopup;
