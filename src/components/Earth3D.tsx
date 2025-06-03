
import { useRef, Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Stars, OrbitControls } from '@react-three/drei';
import { Mesh } from 'three';

const RotatingEarth = () => {
  const earthRef = useRef<Mesh>(null);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Sphere ref={earthRef} args={[2, 32, 32]} position={[0, 0, 0]}>
      <meshStandardMaterial
        color="#4A90E2"
        metalness={0.1}
        roughness={0.8}
      />
    </Sphere>
  );
};

const Earth3D = () => {
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    // Check WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      setWebglSupported(false);
    }
  }, []);

  if (!webglSupported) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-32 h-32 bg-blue-500 rounded-full opacity-50"></div>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <Suspense fallback={<div className="w-full h-full bg-blue-900/20 rounded-full animate-pulse" />}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45 }}
          className="w-full h-full"
          dpr={[1, 2]}
          performance={{ min: 0.5 }}
        >
          <ambientLight intensity={0.2} />
          <directionalLight position={[-5, 5, 5]} intensity={1} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <Stars
            radius={300}
            depth={60}
            count={20000}
            factor={7}
            saturation={0}
            fade={true}
          />
          <RotatingEarth />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
          />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Earth3D;
