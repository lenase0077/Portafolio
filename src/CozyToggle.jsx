import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Coffee } from 'lucide-react';

const CozyToggle = ({ isCozy, toggleCozy }) => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.button
        onClick={toggleCozy}
        initial={false}
        animate={{
            // Cambiamos el color del botón dramáticamente
            backgroundColor: isCozy ? "rgba(234, 88, 12, 0.2)" : "rgba(69, 10, 10, 0.9)",
            borderColor: isCozy ? "rgba(251, 146, 60, 0.5)" : "rgba(220, 38, 38, 0.8)",
            scale: isCozy ? 0.9 : 1,
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`group flex items-center gap-3 px-6 py-4 font-black tracking-widest rounded-2xl border-2 backdrop-blur-md transition-all shadow-lg ${
            isCozy ? 'text-orange-300 shadow-orange-500/20' : 'text-red-500 shadow-red-900/40'
        }`}
      >
        <motion.div
            // Animación para rotar entre el icono de alerta y el de café
            animate={{ rotate: isCozy ? 360 : 0 }}
            transition={{ duration: 0.5 }}
        >
            {isCozy ? <Coffee size={24} /> : <AlertTriangle className="animate-pulse" size={24} />}
        </motion.div>
        
        <motion.span 
            // Animación suave del texto
            key={isCozy ? "relax" : "danger"}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative z-10"
        >
          {isCozy ? "MODO COZY ACTIVADO" : "NO TOCAR"}
        </motion.span>

        {/* Efecto de fondo rayado solo para el modo peligro */}
        {!isCozy && (
             <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_20px)] rounded-2xl"></div>
        )}
      </motion.button>
    </div>
  );
};

export default CozyToggle;