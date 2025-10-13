import { motion } from 'framer-motion';
import { ArrowRight, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900" />
      
      {/* Animated circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-300/20 dark:bg-cyan-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-cyan-100 dark:bg-cyan-900/30 px-4 py-2 rounded-full mb-6">
              <Eye className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="text-sm font-medium text-cyan-700 dark:text-cyan-300">
                Tecnologia e Cuidado Visual
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold font-['Playfair_Display'] mb-6 bg-gradient-to-r from-slate-900 via-cyan-800 to-blue-900 dark:from-slate-100 dark:via-cyan-200 dark:to-blue-100 bg-clip-text text-transparent">
              Veja o Mundo com Clareza
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Armações exclusivas, lentes de alta tecnologia e atendimento personalizado para você enxergar o melhor da vida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg"
                onClick={() => scrollToSection('frames')}
              >
                Ver Armações
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-2"
                onClick={() => scrollToSection('contact')}
              >
                Fale Conosco
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { number: '10+', label: 'Anos de Experiência' },
              { number: '5000+', label: 'Clientes Satisfeitos' },
              { number: '50+', label: 'Marcas Parceiras' },
            ].map((stat, index) => (
              <div key={index} className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 dark:text-slate-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

