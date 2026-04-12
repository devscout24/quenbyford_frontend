import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GlobalLoaderContextProps {
  isLoading: boolean;
  showLoader: () => void;
  hideLoader: () => void;
}

const GlobalLoaderContext = createContext<GlobalLoaderContextProps | undefined>(undefined);

export const GlobalLoaderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loader when the app initially mounts (on page refresh/reload)
    const handleLoad = () => {
      // Add a tiny delay to ensure a smooth transition
      setTimeout(() => setIsLoading(false), 600);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  const showLoader = () => setIsLoading(true);
  const hideLoader = () => setIsLoading(false);

  return (
    <GlobalLoaderContext.Provider value={{ isLoading, showLoader, hideLoader }}>
      {children}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-md"
          >
            <div className="flex flex-col items-center gap-6">
              {/* Beautiful animated loader circles */}
              <div className="relative flex items-center justify-center w-24 h-24">
                <motion.span
                  className="absolute w-full h-full border-[3px] border-transparent border-t-white border-l-white rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <motion.span
                  className="absolute w-20 h-20 border-[3px] border-transparent border-t-indigo-500 border-b-indigo-500 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                <motion.span
                  className="absolute w-16 h-16 border-[3px] border-transparent border-r-purple-500 border-l-purple-500 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                {/* Center glowing dot */}
                <motion.div
                  className="w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white font-medium tracking-[0.2em] uppercase text-sm"
              >
                Loading...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlobalLoaderContext.Provider>
  );
};

export const useGlobalLoader = (): GlobalLoaderContextProps => {
  const context = useContext(GlobalLoaderContext);
  if (!context) {
    throw new Error('useGlobalLoader must be used within a GlobalLoaderProvider');
  }
  return context;
};
