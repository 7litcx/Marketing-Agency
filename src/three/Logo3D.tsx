import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Center, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const Logo3D = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
        <Center>
          {/* We use a simple 3D shape or text since we don't have a model */}
          <mesh castShadow receiveShadow>
            <torusKnotGeometry args={[1.5, 0.4, 128, 32]} />
            <meshStandardMaterial 
              color="#6C3BFF" 
              roughness={0.1}
              metalness={0.8}
              envMapIntensity={2}
            />
          </mesh>
        </Center>
      </Float>
      
      {/* Floating particles */}
      <Sparkles count={100} scale={10} size={4} speed={0.4} color="#9D7BFF" />
      
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" castShadow />
      <pointLight position={[-10, -10, -5]} intensity={1} color="#4B1D95" />
    </group>
  );
};

export default Logo3D;
