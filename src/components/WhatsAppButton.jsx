import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    const message = encodeURIComponent(
      'Olá! Gostaria de saber mais sobre as armações e lentes.'
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-slate-900 dark:bg-slate-800 text-white px-4 py-2 rounded-lg whitespace-nowrap shadow-lg"
        >
          Fale com um especialista!
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-slate-900 dark:border-l-slate-800" />
        </motion.div>
      )}
      
      <motion.button
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            '0 0 0 0 rgba(34, 197, 94, 0.4)',
            '0 0 0 20px rgba(34, 197, 94, 0)',
          ],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        <MessageCircle className="w-7 h-7" />
      </motion.button>
    </motion.div>
  );
};

export default WhatsAppButton;

