"use client";

import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, PerspectiveCamera, Environment, Center } from "@react-three/drei";
import { MeshDistortMaterialProps } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

function MorphingSolid() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  
  // We'll use a single geometry and morph its vertices or swap geometries.
  // Swapping geometries is cleaner for distinct Platonic solids.
  // Reordered from simplest (4 faces) to most complex (20 faces)
  const geometries = useMemo(() => [
    new THREE.TetrahedronGeometry(1.6),   // 4 faces
    new THREE.BoxGeometry(1.2, 1.2, 1.2), // 6 faces
    new THREE.OctahedronGeometry(1.4),    // 8 faces
    new THREE.DodecahedronGeometry(1.4),  // 12 faces
    new THREE.IcosahedronGeometry(1.4),   // 20 faces
  ], []);

  const [geoIndex, setGeoIndex] = useState(0);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Smooth rotation
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;

    // Cycle geometry every 3 seconds
    const newIndex = Math.floor(time / 3) % geometries.length;
    if (newIndex !== geoIndex) {
      setGeoIndex(newIndex);
      
      // Flash effect on transition
      if (materialRef.current) {
        gsap.to(materialRef.current, {
          distort: 0.8,
          duration: 0.4,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut",
        });
      }
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometries[geoIndex]}>
      <MeshDistortMaterial
        ref={materialRef}
        color="#FFFFE3"
        speed={1}
        distort={0.2}
        radius={1}
        metalness={0.9}
        roughness={0.1}
        emissive="#FFFFE3"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}

export default function SynthesisArtifact() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} intensity={1.5} penumbra={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8A8A8A" />
        <Center>
          <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <MorphingSolid />
          </Float>
        </Center>
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
