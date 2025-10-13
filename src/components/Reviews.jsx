import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Maria Silva',
      rating: 5,
      comment:
        'Atendimento excepcional! Encontrei a armação perfeita e as lentes são de altíssima qualidade. Recomendo!',
      date: '15/03/2024',
      avatar: '👩',
    },
    {
      id: 2,
      name: 'João Santos',
      rating: 5,
      comment:
        'Profissionais muito competentes. Me ajudaram a escolher as lentes multifocais ideais. Estou muito satisfeito!',
      date: '22/03/2024',
      avatar: '👨',
    },
    {
      id: 3,
      name: 'Ana Costa',
      rating: 5,
      comment:
        'Loja moderna e bem equipada. Grande variedade de marcas e modelos. Preços justos e ótimo atendimento.',
      date: '05/04/2024',
      avatar: '👩‍🦰',
    },
    {
      id: 4,
      name: 'Carlos Oliveira',
      rating: 5,
      comment:
        'Melhor ótica da região! Equipamentos de última geração e equipe super atenciosa. Voltarei sempre!',
      date: '12/04/2024',
      avatar: '👨‍🦱',
    },
    {
      id: 5,
      name: 'Fernanda Lima',
      rating: 5,
      comment:
        'Adorei! Consegui armações lindas da Ray-Ban com um preço excelente. O atendimento foi impecável.',
      date: '18/04/2024',
      avatar: '👱‍♀️',
    },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating
            ? 'fill-yellow-400 text-yellow-400'
            : 'text-slate-300 dark:text-slate-600'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Avaliações reais de clientes satisfeitos com nossos produtos e serviços.
          </p>
        </motion.div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-white text-center mb-12"
        >
          <div className="text-6xl font-bold mb-2">5.0</div>
          <div className="flex justify-center gap-1 mb-2">
            {renderStars(5)}
          </div>
          <div className="text-lg">Baseado em 500+ avaliações no Google</div>
        </motion.div>

        {/* Review Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentReview}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">{reviews[currentReview].avatar}</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">
                  {reviews[currentReview].name}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {renderStars(reviews[currentReview].rating)}
                  </div>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {reviews[currentReview].date}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-lg text-slate-700 dark:text-slate-300 italic">
              "{reviews[currentReview].comment}"
            </p>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevReview}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextReview}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentReview
                    ? 'bg-cyan-600 w-6'
                    : 'bg-slate-300 dark:bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

