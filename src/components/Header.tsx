
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-white text-2xl md:text-3xl font-light tracking-[0.3em] hover:tracking-[0.4em] transition-all duration-300">
            ALLHUMANITY
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-white/70 hover:text-white transition-colors text-sm tracking-wide">
                MISSION
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors text-sm tracking-wide">
                UNITY
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors text-sm tracking-wide">
                FUTURE
              </a>
            </div>
            
            <div className="flex items-center space-x-3 ml-6">
              <a href="#" className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <Facebook size={18} className="text-white/70 hover:text-white" />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <Youtube size={18} className="text-white/70 hover:text-white" />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <Instagram size={18} className="text-white/70 hover:text-white" />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <Linkedin size={18} className="text-white/70 hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
