"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, PerspectiveCamera, Environment } from "@react-three/drei";
import * as THREE from "three";

function AbstractBust() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    // Use the elapsed time from state directly if clock is deprecated in your environment
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={1.2}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <MeshDistortMaterial
          color="#FFFFE3" 
          speed={2}
          distort={0.3}
          radius={1}
          metalness={0.9}
          roughness={0.1}
          wireframe
        />
      </mesh>
    </Float>
  );
}

export default function SynthesisVisual() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full opacity-60 lg:left-1/3">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} intensity={2} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        <AbstractBust />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
