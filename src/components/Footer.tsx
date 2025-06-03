
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-white text-3xl md:text-4xl font-light tracking-[0.3em] mb-6">
            ALLHUMANITY
          </div>
          <p className="text-white/60 text-lg max-w-md mx-auto leading-relaxed">
            Вместе к светлому будущему для всего человечества
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors group">
            <Facebook size={24} className="text-white/70 group-hover:text-white" />
          </a>
          <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors group">
            <Youtube size={24} className="text-white/70 group-hover:text-white" />
          </a>
          <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors group">
            <Instagram size={24} className="text-white/70 group-hover:text-white" />
          </a>
          <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors group">
            <Linkedin size={24} className="text-white/70 group-hover:text-white" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left mb-12">
          <div>
            <h3 className="text-white font-medium mb-4 tracking-wide">МИССИЯ</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">О нас</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Наши цели</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">История</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4 tracking-wide">УЧАСТИЕ</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Присоединиться</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Волонтерство</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Проекты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4 tracking-wide">КОНТАКТЫ</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Связаться с нами</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Поддержка</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Пресс-центр</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © 2024 ALLHUMANITY. Все права защищены. | Конфиденциальность | Условия использования
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
