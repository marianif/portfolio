"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, PerspectiveCamera, Environment } from "@react-three/drei";
import * as THREE from "three";

function TexturePlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.05;
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 4, 0, 0]} scale={3}>
      <planeGeometry args={[5, 5, 64, 64]} />
      <MeshDistortMaterial
        color="#161616"
        speed={1.5}
        distort={0.4}
        radius={1}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

export default function MaterialVisual() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full opacity-60 lg:left-1/4">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#FFFFE3" />
        <TexturePlane />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
