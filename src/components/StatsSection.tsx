
const StatsSection = () => {
  const stats = [
    { number: "8B+", label: "ЛЮДЕЙ НА ЗЕМЛЕ" },
    { number: "195", label: "СТРАН МИРА" },
    { number: "7000+", label: "ЯЗЫКОВ" },
    { number: "∞", label: "ВОЗМОЖНОСТЕЙ" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.15),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-white mb-6 tracking-[0.15em]">
            МАСШТАБ ЧЕЛОВЕЧЕСТВА
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Удивительные цифры, которые показывают размах и потенциал нашего общего дома
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300 group-hover:scale-105">
                <div className="text-3xl md:text-4xl font-light text-white mb-2 tracking-wide">
                  {stat.number}
                </div>
                <div className="text-sm text-white/70 tracking-[0.1em]">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
