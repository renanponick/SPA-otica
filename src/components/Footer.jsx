import { Glasses, Instagram, Facebook, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuLinks = [
    { label: 'Início', id: 'home' },
    { label: 'Armações', id: 'frames' },
    { label: 'Lentes', id: 'lenses' },
    { label: 'Marcas', id: 'brands' },
    { label: 'Avaliações', id: 'reviews' },
    { label: 'Contato', id: 'contact' },
  ];

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Glasses className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold font-['Playfair_Display']">
                Ótica Moderna
              </span>
            </div>
            <p className="text-slate-400 mb-4">
              Tecnologia e cuidado visual para você enxergar o melhor da vida.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-slate-800 hover:bg-slate-700 p-2 rounded-lg transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-slate-700 p-2 rounded-lg transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {menuLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-cyan-400" />
                <span>Av. Paulista, 1000 - Bela Vista, São Paulo - SP</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5 text-cyan-400" />
                <span>Seg a Sex: 9h às 19h<br />Sáb: 9h às 14h</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Nossos Serviços</h3>
            <ul className="space-y-2 text-slate-400">
              <li>• Exame de Vista</li>
              <li>• Armações de Grau</li>
              <li>• Óculos de Sol</li>
              <li>• Lentes de Contato</li>
              <li>• Ajustes e Reparos</li>
              <li>• Garantia Estendida</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>
            © {new Date().getFullYear()} Ótica Moderna. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

