
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe, ChevronDown } from 'lucide-react';

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState('RU');

  const languages = [
    { code: 'RU', name: 'Русский', flag: '🇷🇺' },
    { code: 'EN', name: 'English', flag: '🇺🇸' },
    { code: 'UA', name: 'Українська', flag: '🇺🇦' },
    { code: 'ES', name: 'Español', flag: '🇪🇸' },
    { code: 'FR', name: 'Français', flag: '🇫🇷' },
    { code: 'DE', name: 'Deutsch', flag: '🇩🇪' },
  ];

  const handleLanguageChange = (language: typeof languages[0]) => {
    setCurrentLanguage(language.code);
  };

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === currentLanguage) || languages[0];
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="border-white/20 text-white hover:bg-white/10 flex items-center space-x-2"
        >
          <Globe size={16} />
          <span>{getCurrentLanguage().flag}</span>
          <span className="hidden sm:inline">{currentLanguage}</span>
          <ChevronDown size={14} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="bg-black/90 border-white/20 backdrop-blur-sm"
        align="end"
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language)}
            className="text-white hover:bg-white/10 cursor-pointer flex items-center space-x-3"
          >
            <span>{language.flag}</span>
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
