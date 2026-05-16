"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, Environment, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function MorphingBlob() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time * 0.2) * 0.2;
    meshRef.current.rotation.y = time * 0.1;
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <octahedronGeometry args={[1, 6]} />
      <MeshDistortMaterial
        color="#FFFFE3" 
        speed={2}
        distort={0.4}
        radius={1}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

export default function AlchemicalObject() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8A8A8A" />
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <MorphingBlob />
        </Float>
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
