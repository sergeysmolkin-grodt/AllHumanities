import React from 'react';

const Earth3D = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Видео Земли в форме шара */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-100"
      >
        <source 
          src="/world-bg.mp4"
          type="video/mp4" 
        />
      </video>
      
      {/* Атмосферные эффекты */}
      {/* <div className="absolute inset-0 bg-gradient-radial from-transparent via-blue-900/20 to-black/40"></div> */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-600/10 to-black/30"></div> */}
    </div>
  );
};

export default Earth3D;
