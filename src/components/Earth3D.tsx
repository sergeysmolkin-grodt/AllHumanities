
import { useRef } from 'react';
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
    <Sphere ref={earthRef} args={[2, 64, 64]} position={[0, 0, 0]}>
      <meshStandardMaterial
        color="#4A90E2"
        metalness={0.1}
        roughness={0.8}
        transparent
        opacity={0.9}
      />
    </Sphere>
  );
};

const Earth3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[-5, 5, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#87CEEB" />
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
    </div>
  );
};

export default Earth3D;
