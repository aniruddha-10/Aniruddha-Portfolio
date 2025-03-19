
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Float, Text } from '@react-three/drei';
import * as THREE from 'three';

const PyramidModel = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  // Create a pyramid geometry
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <tetrahedronGeometry args={[2.5, 0]} />
        <meshStandardMaterial 
          color="#9b87f5"
          roughness={0.2}
          metalness={0.8}
          emissive="#6E59A5"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Orbit rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.5, 0.1, 16, 100]} />
        <meshStandardMaterial color="#7E69AB" transparent opacity={0.6} />
      </mesh>
      
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[4, 0.06, 16, 100]} />
        <meshStandardMaterial color="#D946EF" transparent opacity={0.4} />
      </mesh>
    </Float>
  );
};

// Sparkles that orbit around the pyramid
const Particles = () => {
  const particlesCount = 20;
  const particleRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state, delta) => {
    particleRefs.current.forEach((particle, i) => {
      const angle = (i / particlesCount) * Math.PI * 2;
      const radius = 3 + Math.sin(state.clock.elapsedTime * 0.2 + i) * 0.5;
      
      particle.position.x = Math.cos(angle + state.clock.elapsedTime * 0.2) * radius;
      particle.position.z = Math.sin(angle + state.clock.elapsedTime * 0.2) * radius;
      particle.position.y = Math.sin(state.clock.elapsedTime * 0.5 + i) * 1.5;
      
      particle.scale.setScalar(0.1 + Math.sin(state.clock.elapsedTime + i) * 0.05);
    });
  });

  return (
    <>
      {Array.from({ length: particlesCount }).map((_, i) => (
        <mesh 
          key={i} 
          ref={(el) => {
            if (el) particleRefs.current[i] = el;
          }}
        >
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial 
            color="#D6BCFA" 
            emissive="#8B5CF6"
            emissiveIntensity={1}
            toneMapped={false}
          />
        </mesh>
      ))}
    </>
  );
};

const Scene3D: React.FC = () => {
  return (
    <div className="h-[500px] w-full max-w-[800px] mx-auto mt-8 rounded-lg overflow-hidden shadow-lg">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <color attach="background" args={['#10011b']} />
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} color="#D946EF" intensity={1} />
        
        <PyramidModel />
        <Particles />
        
        <Environment preset="sunset" />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;
