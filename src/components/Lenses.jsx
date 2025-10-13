import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Lenses = () => {
  const lensTypes = [
    {
      id: 1,
      name: 'Monofocais',
      description: 'Lentes para correção de miopia, hipermetropia ou astigmatismo.',
      price: 'A partir de R$ 149,00',
      features: [
        'Visão nítida para uma distância',
        'Antirreflexo incluso',
        'Proteção UV',
        'Tratamento antirrisco',
      ],
      popular: false,
    },
    {
      id: 2,
      name: 'Multifocais',
      description: 'Lentes progressivas para visão de perto, intermediária e longe.',
      price: 'A partir de R$ 549,00',
      features: [
        'Transição suave entre distâncias',
        'Design personalizado',
        'Antirreflexo premium',
        'Proteção UV e luz azul',
      ],
      popular: true,
    },
    {
      id: 3,
      name: 'Transitions',
      description: 'Lentes fotossensíveis que escurecem ao sol.',
      price: 'A partir de R$ 399,00',
      features: [
        'Adaptação automática à luz',
        '100% proteção UV',
        'Conforto visual',
        'Antirreflexo incluso',
      ],
      popular: false,
    },
    {
      id: 4,
      name: 'Blue Light',
      description: 'Proteção contra luz azul de telas digitais.',
      price: 'A partir de R$ 249,00',
      features: [
        'Reduz fadiga ocular',
        'Melhora o sono',
        'Antirreflexo',
        'Ideal para trabalho digital',
      ],
      popular: false,
    },
  ];

  const handleWhatsApp = (lensName) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de saber mais sobre as lentes ${lensName}.`
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <section id="lenses" className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mb-4">
            Tipos de Lentes
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Tecnologia de ponta para sua visão. Escolha a lente ideal para seu estilo de vida.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lensTypes.map((lens, index) => (
            <motion.div
              key={lens.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border-2 ${
                lens.popular
                  ? 'border-cyan-500 shadow-xl shadow-cyan-500/20'
                  : 'border-slate-200 dark:border-slate-800'
              } hover:shadow-xl transition-shadow`}
            >
              {lens.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Sparkles className="w-4 h-4" />
                  Mais Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2 mt-2">{lens.name}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                {lens.description}
              </p>

              <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-6">
                {lens.price}
              </div>

              <ul className="space-y-3 mb-6">
                {lens.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={lens.popular ? 'default' : 'outline'}
                className={`w-full ${
                  lens.popular ? 'bg-cyan-600 hover:bg-cyan-700' : ''
                }`}
                onClick={() => handleWhatsApp(lens.name)}
              >
                Consultar Valor
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Combo Promotion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Combo Especial</h3>
          <p className="text-xl mb-6">
            Armação + Lente Multifocal a partir de{' '}
            <span className="text-4xl font-bold">R$ 799,00</span>
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => handleWhatsApp('Combo Especial')}
          >
            Aproveitar Oferta
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Lenses;

