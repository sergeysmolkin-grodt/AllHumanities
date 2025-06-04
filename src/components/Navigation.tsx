
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  BookOpen, 
  Store, 
  MessageSquare, 
  FileText, 
  Target, 
  Calendar, 
  User,
  Menu,
  X
} from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/authors', label: 'Авторы', icon: Users },
    { path: '/materials', label: 'Материалы', icon: BookOpen },
    { path: '/shop', label: 'Магазин', icon: Store },
    { path: '/community', label: 'Комьюнити', icon: MessageSquare },
    { path: '/posts', label: 'Статьи', icon: FileText },
    { path: '/strategies', label: 'Стратегии', icon: Target },
    { path: '/events', label: 'Мероприятия', icon: Calendar },
    { path: '/profile', label: 'Профиль', icon: User },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-white text-xl font-light tracking-[0.2em] hover:tracking-[0.3em] transition-all duration-300">
            ALLHUMANITY
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive(path)
                    ? 'bg-white/10 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={16} />
                <span className="text-sm">{label}</span>
              </Link>
            ))}
          </div>

          {/* Auth Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/auth">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Вход
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-2">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive(path)
                      ? 'bg-white/10 text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </Link>
              ))}
              <Link
                to="/auth"
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 mt-4 border-t border-white/10 text-white/70 hover:text-white"
              >
                <User size={18} />
                <span>Вход</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
