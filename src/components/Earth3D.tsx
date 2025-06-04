
import React from 'react';

const Earth3D = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Видео Земли в форме шара */}
      <div className="relative w-full h-full rounded-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
          style={{
            filter: 'brightness(0.9) contrast(1.2)',
          }}
        >
          <source 
            src="https://videos.pexels.com/video-files/1851190/1851190-uhd_2560_1440_25fps.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>
      
      {/* Атмосферные эффекты */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-blue-900/20 to-black/40 rounded-full"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-600/10 to-black/30 rounded-full"></div>
    </div>
  );
};

export default Earth3D;
