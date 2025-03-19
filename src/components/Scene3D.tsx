
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const EarthModel = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  
  // Load Earth textures
  const earthTextures = useTexture({
    map: 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg',
    bumpMap: 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg',
    specularMap: 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_specular_2048.jpg',
    cloudsMap: 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_clouds_2048.jpg',
  });
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.3}>
      {/* Earth sphere */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshPhongMaterial 
          map={earthTextures.map}
          bumpMap={earthTextures.bumpMap}
          bumpScale={0.05}
          specularMap={earthTextures.specularMap}
          specular={new THREE.Color(0x333333)}
          shininess={15}
        />
      </mesh>
      
      {/* Clouds layer */}
      <mesh ref={cloudsRef} position={[0, 0, 0]} scale={[1.01, 1.01, 1.01]}>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshPhongMaterial 
          map={earthTextures.cloudsMap}
          transparent={true}
          opacity={0.4}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Glow effect */}
      <mesh>
        <sphereGeometry args={[2.55, 32, 32]} />
        <meshBasicMaterial 
          color={new THREE.Color(0x0EA5E9)}
          transparent={true}
          opacity={0.08}
          side={THREE.BackSide}
        />
      </mesh>
    </Float>
  );
};

// Small satellites or stars
const Particles = () => {
  const particlesCount = 100;
  const particleRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state, delta) => {
    particleRefs.current.forEach((particle, i) => {
      if (particle) {
        const angle = (i / particlesCount) * Math.PI * 2;
        const distance = 10 + Math.sin(state.clock.elapsedTime * 0.1 + i) * 5;
        
        particle.position.x = Math.cos(angle + state.clock.elapsedTime * 0.05) * distance;
        particle.position.z = Math.sin(angle + state.clock.elapsedTime * 0.05) * distance;
        particle.position.y = (Math.random() - 0.5) * distance * 0.5;
        
        particle.scale.setScalar(0.05 + Math.sin(state.clock.elapsedTime + i) * 0.02);
      }
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
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshBasicMaterial 
            color={
              i % 3 === 0 
                ? new THREE.Color(0xD3E4FD) 
                : i % 3 === 1 
                  ? new THREE.Color(0x33C3F0) 
                  : new THREE.Color(0xF2FCE2)
            }
            toneMapped={false}
          />
        </mesh>
      ))}
    </>
  );
};

const Scene3D: React.FC = () => {
  return (
    <div className="h-[500px] w-full max-w-[800px] mx-auto mt-8">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} className="!bg-transparent">
        <color attach="background" args={['#00000000']} />
        <ambientLight intensity={0.4} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#0EA5E9" intensity={1} />
        
        <EarthModel />
        <Particles />
        
        <Environment preset="sunset" />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;
