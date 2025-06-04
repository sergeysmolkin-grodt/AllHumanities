import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
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
  X,
  ShoppingCart,
  ChevronDown,
  Shirt
} from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import CartSlider from './CartSlider';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/authors', label: 'Авторы', icon: Users },
    { path: '/materials', label: 'Материалы', icon: BookOpen },
    { path: '/community', label: 'Комьюнити', icon: MessageSquare },
    { path: '/posts', label: 'Статьи', icon: FileText },
    { path: '/strategies', label: 'Стратегии', icon: Target },
    { path: '/events', label: 'Мероприятия', icon: Calendar },
    { path: '/profile', label: 'Профиль', icon: User },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="bg-black/90 backdrop-blur-sm border-b border-white/10 relative z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="text-white text-lg font-light tracking-[0.2em] hover:tracking-[0.3em] transition-all duration-300 flex-shrink-0 min-w-fit">
              ALLHUMANITY
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-1 flex-1 justify-center mx-4">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center space-x-1 px-2 py-2 rounded-lg transition-all duration-200 text-sm whitespace-nowrap ${
                    isActive(path)
                      ? 'bg-white/10 text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon size={14} />
                  <span>{label}</span>
                </Link>
              ))}
              
              {/* Shop Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="flex items-center space-x-1 px-2 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 h-auto"
                  >
                    <Store size={14} />
                    <span>Магазин</span>
                    <ChevronDown size={12} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="bg-black/90 border-white/20 backdrop-blur-sm z-50"
                  align="center"
                >
                  <DropdownMenuItem asChild>
                    <Link 
                      to="/shop?category=merch" 
                      className="text-white hover:bg-white/10 cursor-pointer flex items-center space-x-2"
                    >
                      <Shirt size={14} />
                      <span>Мерч</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link 
                      to="/shop?category=books" 
                      className="text-white hover:bg-white/10 cursor-pointer flex items-center space-x-2"
                    >
                      <BookOpen size={14} />
                      <span>Книги</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Right side controls */}
            <div className="hidden lg:flex items-center space-x-2 flex-shrink-0">
              <LanguageSwitcher />
              
              <Button 
                variant="outline" 
                size="icon"
                className="border-white/20 text-white hover:bg-white/10 h-9 w-9"
                onClick={() => setIsCartOpen(true)}
                title="Корзина"
              >
                <ShoppingCart size={16} />
              </Button>
              
              <Link to="/auth" title="Вход">
                <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-white/10 h-9 w-9">
                  <User size={16} />
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors ml-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="xl:hidden py-4 border-t border-white/10">
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
                  to="/shop"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 text-white/70 hover:text-white hover:bg-white/5"
                >
                  <Store size={18} />
                  <span>Магазин</span>
                </Link>
                
                <button
                  onClick={() => {
                    setIsCartOpen(true);
                    setIsOpen(false);
                  }}
                  className="flex items-center space-x-3 px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 text-left"
                >
                  <ShoppingCart size={18} />
                  <span>Корзина</span>
                </button>
                
                <Link
                  to="/auth"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 mt-4 border-t border-white/10 text-white/70 hover:text-white"
                >
                  <User size={18} />
                  <span>Вход</span>
                </Link>
                
                <div className="px-4 py-3 border-t border-white/10">
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Cart Slider */}
      <CartSlider isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navigation;
