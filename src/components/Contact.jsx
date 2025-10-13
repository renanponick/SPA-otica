import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Av. Paulista, 1000 - Bela Vista, São Paulo - SP',
      link: 'https://maps.google.com/?q=Av.+Paulista+1000+São+Paulo',
    },
    {
      icon: Clock,
      title: 'Horário de Funcionamento',
      content: 'Seg a Sex: 9h às 19h | Sáb: 9h às 14h',
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(11) 99999-9999',
      link: 'tel:+5511999999999',
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@oticamoderna.com.br',
      link: 'mailto:contato@oticamoderna.com.br',
    },
  ];

  const socialMedia = [
    { icon: Instagram, name: 'Instagram', link: '#' },
    { icon: Facebook, name: 'Facebook', link: '#' },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mb-4">
            Visite Nossa Loja
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Estamos prontos para atendê-lo com excelência. Venha nos visitar!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-100 dark:bg-cyan-900/30 p-3 rounded-lg">
                      <info.icon className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold mb-1">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-slate-600 dark:text-slate-300">
                          {info.content}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* About Section */}
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Sobre Nós</h3>
              <p className="mb-4">
                Com mais de 10 anos de experiência, a Ótica Moderna oferece
                atendimento personalizado, equipamentos de última geração e
                parcerias com as melhores marcas do mercado.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  ✓ Atendimento personalizado
                </li>
                <li className="flex items-center gap-2">
                  ✓ Equipamentos modernos
                </li>
                <li className="flex items-center gap-2">
                  ✓ Marcas reconhecidas
                </li>
                <li className="flex items-center gap-2">
                  ✓ Garantia e suporte pós-venda
                </li>
                <li className="flex items-center gap-2">
                  ✓ Estacionamento e acesso PCD
                </li>
              </ul>

              {/* Social Media */}
              <div className="flex gap-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-colors"
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full min-h-[500px]"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.096837231888!2d-46.65592668502207!3d-23.564447484682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Ótica Moderna"
              ></iframe>
            </div>
            <Button
              className="w-full mt-4 bg-cyan-600 hover:bg-cyan-700"
              size="lg"
              onClick={() =>
                window.open(
                  'https://maps.google.com/?q=Av.+Paulista+1000+São+Paulo',
                  '_blank'
                )
              }
            >
              <MapPin className="w-5 h-5 mr-2" />
              Abrir no Google Maps
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

