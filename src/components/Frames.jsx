import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Frames = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const frames = [
    {
      id: 1,
      name: 'Classic Aviator',
      brand: 'Ray-Ban',
      price: 'R$ 449,00',
      category: 'unisex',
      material: 'metal',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      name: 'Modern Square',
      brand: 'Oakley',
      price: 'R$ 589,00',
      category: 'masculino',
      material: 'acetato',
      image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      name: 'Elegant Cat Eye',
      brand: 'Vogue',
      price: 'R$ 349,00',
      category: 'feminino',
      material: 'acetato',
      image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=300&fit=crop',
    },
    {
      id: 4,
      name: 'Sport Performance',
      brand: 'Mormaii',
      price: 'R$ 299,00',
      category: 'unisex',
      material: 'policarbonato',
      image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=300&fit=crop',
    },
    {
      id: 5,
      name: 'Vintage Round',
      brand: 'Calvin Klein',
      price: 'R$ 529,00',
      category: 'unisex',
      material: 'metal',
      image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=400&h=300&fit=crop',
    },
    {
      id: 6,
      name: 'Bold Rectangle',
      brand: 'Carrera',
      price: 'R$ 479,00',
      category: 'masculino',
      material: 'acetato',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
    },
  ];

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'masculino', label: 'Masculino' },
    { id: 'feminino', label: 'Feminino' },
    { id: 'unisex', label: 'Unisex' },
  ];

  const filteredFrames =
    selectedFilter === 'all'
      ? frames
      : frames.filter((frame) => frame.category === selectedFilter);

  const handleWhatsApp = (frameName) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de saber mais sobre a armação ${frameName}.`
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <section id="frames" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mb-4">
            Nossas Armações
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Descubra armações exclusivas das melhores marcas do mercado, com design e qualidade incomparáveis.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          <Filter className="w-5 h-5 text-slate-600 dark:text-slate-400" />
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={selectedFilter === filter.id ? 'default' : 'outline'}
              onClick={() => setSelectedFilter(filter.id)}
              className={
                selectedFilter === filter.id
                  ? 'bg-cyan-600 hover:bg-cyan-700'
                  : ''
              }
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Frames Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFrames.map((frame, index) => (
            <motion.div
              key={frame.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={frame.image}
                  alt={frame.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-cyan-600 dark:text-cyan-400 font-medium mb-2">
                  {frame.brand}
                </div>
                <h3 className="text-xl font-bold mb-2">{frame.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">
                    {frame.price}
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400 capitalize">
                    {frame.material}
                  </span>
                </div>
                <Button
                  className="w-full bg-cyan-600 hover:bg-cyan-700"
                  onClick={() => handleWhatsApp(frame.name)}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Solicitar Orçamento
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Frames;

