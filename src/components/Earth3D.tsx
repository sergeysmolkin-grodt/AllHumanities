
import React from 'react';

const Earth3D = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Увеличенное видео Земли */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-[120vw] h-[120vh] object-cover opacity-40"
        style={{
          filter: 'brightness(0.7) contrast(1.2)',
          transform: 'scale(1.5)'
        }}
      >
        <source 
          src="https://videos.pexels.com/video-files/1851190/1851190-uhd_2560_1440_25fps.mp4" 
          type="video/mp4" 
        />
      </video>
      
      {/* Атмосферные эффекты */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-blue-900/20 to-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-600/10 to-black/30"></div>
    </div>
  );
};

export default Earth3D;
