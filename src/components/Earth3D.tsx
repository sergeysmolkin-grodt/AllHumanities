
import React from 'react';

const Earth3D = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Видео Земли с правильными пропорциями */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="min-w-full min-h-full object-cover opacity-60"
        style={{
          filter: 'brightness(0.8) contrast(1.3)',
          width: '100%',
          height: '100%'
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
