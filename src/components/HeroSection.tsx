import Earth3D from './Earth3D';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Removed */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-black"> */}
      {/*   <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div> */}
      {/* </div> */}
      
      {/* Animated stars background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Earth 3D Model Removed From Here */}
      {/* <div className="absolute right-10 md:right-20 top-1/2 transform -translate-y-1/2 w-96 h-96 md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px]"> */}
      {/*   <Earth3D /> */}
      {/* </div> */}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
            <span className="block tracking-[0.2em] mb-4">ЕДИНСТВО</span>
            <span className="block tracking-[0.15em] text-3xl md:text-5xl lg:text-6xl text-blue-300">
              ЧЕЛОВЕЧЕСТВА
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed max-w-lg">
            Объединяя людей по всему миру для создания лучшего будущего. 
            Вместе мы сильнее, вместе мы едины.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium tracking-wide hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
              ПРИСОЕДИНИТЬСЯ
            </button>
            <button className="px-8 py-4 border border-white/30 text-white font-medium tracking-wide hover:bg-white/10 transition-all duration-300">
              УЗНАТЬ БОЛЬШЕ
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
