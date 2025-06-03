
import { useEffect, useState } from 'react';

const Earth3D = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-32 h-32 bg-blue-500 rounded-full opacity-50 animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      {/* Основная сфера Земли */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
        {/* Базовая сфера */}
        <div 
          className="absolute inset-0 rounded-full bg-gradient-radial from-blue-400 via-blue-500 to-blue-800 shadow-2xl animate-spin"
          style={{
            background: 'radial-gradient(circle at 30% 30%, #60a5fa, #3b82f6, #1e40af, #1e3a8a)',
            animation: 'spin 20s linear infinite',
            boxShadow: '0 0 50px rgba(59, 130, 246, 0.3), inset -20px -20px 50px rgba(0, 0, 0, 0.3)'
          }}
        >
          {/* Континенты как темные пятна */}
          <div className="absolute top-1/4 left-1/3 w-8 h-12 bg-green-600 rounded-full opacity-70 transform rotate-12"></div>
          <div className="absolute top-1/2 right-1/4 w-6 h-8 bg-green-700 rounded-full opacity-60 transform -rotate-45"></div>
          <div className="absolute bottom-1/3 left-1/4 w-10 h-6 bg-yellow-700 rounded-full opacity-50 transform rotate-45"></div>
          <div className="absolute top-1/3 right-1/3 w-4 h-10 bg-green-800 rounded-full opacity-60 transform rotate-90"></div>
        </div>
        
        {/* Атмосфера */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, transparent 60%, rgba(135, 206, 235, 0.2) 80%, rgba(135, 206, 235, 0.4) 100%)',
            transform: 'scale(1.1)'
          }}
        ></div>
        
        {/* Блики */}
        <div 
          className="absolute top-6 left-6 w-16 h-16 bg-white rounded-full opacity-20 blur-sm"
        ></div>
      </div>
      
      {/* Орбитальные кольца */}
      <div 
        className="absolute inset-0 border border-white/10 rounded-full animate-pulse"
        style={{
          animation: 'pulse 4s ease-in-out infinite'
        }}
      ></div>
      <div 
        className="absolute inset-4 border border-blue-300/20 rounded-full"
        style={{
          animation: 'spin 30s linear infinite reverse'
        }}
      ></div>
    </div>
  );
};

export default Earth3D;
