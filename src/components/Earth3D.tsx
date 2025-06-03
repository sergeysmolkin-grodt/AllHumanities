
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
      {/* Основная анимированная сфера Земли */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
        {/* Анимированная Земля с GIF */}
        <div 
          className="absolute inset-0 rounded-full overflow-hidden shadow-2xl"
          style={{
            backgroundImage: 'url("https://media.giphy.com/media/3o7btNhMBytxAM6YBa/giphy.gif")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: '0 0 50px rgba(59, 130, 246, 0.4), inset -20px -20px 50px rgba(0, 0, 0, 0.3)'
          }}
        >
          {/* Дополнительный слой для глубины */}
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, transparent 0%, transparent 60%, rgba(0, 0, 0, 0.1) 80%, rgba(0, 0, 0, 0.3) 100%)'
            }}
          ></div>
        </div>
        
        {/* Атмосфера */}
        <div 
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, transparent 50%, rgba(135, 206, 235, 0.15) 70%, rgba(135, 206, 235, 0.3) 85%, rgba(135, 206, 235, 0.5) 100%)',
            transform: 'scale(1.1)',
            animation: 'pulse 6s ease-in-out infinite'
          }}
        ></div>
        
        {/* Солнечные блики */}
        <div 
          className="absolute top-6 left-6 w-20 h-20 bg-white rounded-full opacity-10 blur-md pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)'
          }}
        ></div>
        
        {/* Дополнительный блик */}
        <div 
          className="absolute top-12 left-12 w-8 h-8 bg-white rounded-full opacity-20 blur-sm pointer-events-none"
        ></div>
      </div>
      
      {/* Орбитальные кольца */}
      <div 
        className="absolute inset-0 border border-white/10 rounded-full animate-pulse pointer-events-none"
        style={{
          animation: 'pulse 4s ease-in-out infinite'
        }}
      ></div>
      <div 
        className="absolute inset-4 border border-blue-300/20 rounded-full pointer-events-none"
        style={{
          animation: 'spin 30s linear infinite reverse'
        }}
      ></div>
      
      {/* Дополнительное внешнее кольцо */}
      <div 
        className="absolute -inset-4 border border-cyan-400/10 rounded-full pointer-events-none"
        style={{
          animation: 'spin 45s linear infinite'
        }}
      ></div>
    </div>
  );
};

export default Earth3D;
