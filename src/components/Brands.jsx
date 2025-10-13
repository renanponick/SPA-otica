import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Brands = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const brands = [
    { name: 'Ray-Ban', logo: '🕶️' },
    { name: 'Oakley', logo: '⚡' },
    { name: 'Vogue', logo: '💎' },
    { name: 'Mormaii', logo: '🌊' },
    { name: 'HB', logo: '🔥' },
    { name: 'Carrera', logo: '🏁' },
    { name: 'Calvin Klein', logo: '✨' },
    { name: 'Prada', logo: '👑' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % brands.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [brands.length]);

  return (
    <section id="brands" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mb-4">
            Marcas Parceiras
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Trabalhamos com as marcas mais renomadas do mercado óptico mundial.
          </p>
        </motion.div>

        {/* Brand Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{
              x: `-${currentIndex * 100}%`,
            }}
            transition={{
              duration: 0.8,
              ease: 'easeInOut',
            }}
          >
            {brands.concat(brands).map((brand, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow flex flex-col items-center justify-center h-48">
                  <div className="text-6xl mb-4">{brand.logo}</div>
                  <h3 className="text-2xl font-bold text-center">
                    {brand.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {brands.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-cyan-600 w-8'
                  : 'bg-slate-300 dark:bg-slate-600'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: '50+', label: 'Marcas Internacionais' },
            { number: '1000+', label: 'Modelos Disponíveis' },
            { number: '100%', label: 'Produtos Originais' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 text-center shadow-lg"
            >
              <div className="text-5xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 dark:text-slate-300 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;

