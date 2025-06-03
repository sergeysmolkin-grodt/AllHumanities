
const MissionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-white mb-6 tracking-[0.15em]">
            НАША МИССИЯ
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl font-bold">🌍</span>
            </div>
            <h3 className="text-xl font-medium text-white mb-4 tracking-wide">ЕДИНСТВО</h3>
            <p className="text-white/70 leading-relaxed">
              Объединение людей всех наций, культур и вероисповеданий под общими идеалами мира и прогресса.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl font-bold">🚀</span>
            </div>
            <h3 className="text-xl font-medium text-white mb-4 tracking-wide">ПРОГРЕСС</h3>
            <p className="text-white/70 leading-relaxed">
              Стремление к научному и технологическому развитию для улучшения качества жизни всего человечества.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl font-bold">💫</span>
            </div>
            <h3 className="text-xl font-medium text-white mb-4 tracking-wide">БУДУЩЕЕ</h3>
            <p className="text-white/70 leading-relaxed">
              Создание устойчивого и справедливого мира для будущих поколений через коллективные усилия.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
