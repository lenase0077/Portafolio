import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Coffee } from 'lucide-react';

const CozyToggle = ({ isCozy, toggleCozy }) => {
  return (
    // CAMBIO 1: Posición ajustada para móviles (bottom-4 right-4) vs escritorio (md:bottom-8)
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50">
      <motion.button
        onClick={toggleCozy}
        initial={false}
        animate={{
            backgroundColor: isCozy ? "rgba(234, 88, 12, 0.2)" : "rgba(69, 10, 10, 0.9)",
            borderColor: isCozy ? "rgba(251, 146, 60, 0.5)" : "rgba(220, 38, 38, 0.8)",
            scale: isCozy ? 0.9 : 1,
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        // CAMBIO 2: Padding y Texto responsive. 
        // En móvil: p-3 text-xs. En Desktop: p-4 text-base.
        className={`group flex items-center gap-2 md:gap-3 px-4 py-3 md:px-6 md:py-4 font-black tracking-widest rounded-xl md:rounded-2xl border-2 backdrop-blur-md transition-all shadow-lg ${
            isCozy ? 'text-orange-300 shadow-orange-500/20' : 'text-red-500 shadow-red-900/40'
        }`}
      >
        <motion.div
            animate={{ rotate: isCozy ? 360 : 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Iconos un poco más chicos en móvil */}
            {isCozy ? <Coffee size={20} className="md:w-6 md:h-6" /> : <AlertTriangle className="animate-pulse w-5 h-5 md:w-6 md:h-6" />}
        </motion.div>
        
        <motion.span 
            key={isCozy ? "relax" : "danger"}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative z-10 text-xs md:text-base" // Texto más chico en móvil
        >
          {isCozy ? "MODO COZY" : "NO TOCAR"}
        </motion.span>

        {!isCozy && (
             <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_20px)] rounded-xl md:rounded-2xl"></div>
        )}
      </motion.button>
    </div>
  );
};

export default CozyToggle;