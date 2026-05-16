"use client";

import { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, PerspectiveCamera, Environment, Center } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function MorphingSolid() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);
  const [geoIndex, setGeoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Lower subdivisions to maintain "brutalist" sharp edges
  const geometries = useMemo(() => [
    new THREE.TetrahedronGeometry(1.6, 2),
    new THREE.BoxGeometry(1.2, 1.2, 1.2, 2, 2, 2),
    new THREE.OctahedronGeometry(1.4, 2),
    new THREE.DodecahedronGeometry(1.4, 2),
    new THREE.IcosahedronGeometry(1.4, 2),
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    if (!isTransitioning) return;

    const tl = gsap.timeline({
      onComplete: () => setIsTransitioning(false)
    });

    // The "Crystalline Pulse" Morph
    // 1. Activation: Subtle distortion and brightness spike
    tl.to(materialRef.current, {
      distort: 0.5,
      speed: 4,
      emissiveIntensity: 1.2,
      duration: 0.6,
      ease: "expo.out",
    })
    .to(meshRef.current?.scale || {}, {
      x: 1.1,
      y: 1.1,
      z: 1.1,
      duration: 0.6,
      ease: "expo.out",
    }, 0)
    // 2. The Shift: Instant swap at the peak of the pulse
    .add(() => {
      setGeoIndex((prev) => (prev + 1) % geometries.length);
    })
    // 3. Settling: Sharp snap back into the new solid
    .to(materialRef.current, {
      distort: 0.1,
      speed: 1.5,
      emissiveIntensity: 0.2,
      duration: 1.2,
      ease: "elastic.out(1, 0.8)",
    })
    .to(meshRef.current?.scale || {}, {
      x: 1,
      y: 1,
      z: 1,
      duration: 1.2,
      ease: "elastic.out(1, 0.8)",
    }, ">-1.0");

  }, { dependencies: [isTransitioning], scope: meshRef });

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Controlled, elegant rotation
    meshRef.current.rotation.x = time * 0.15;
    meshRef.current.rotation.y = time * 0.2;
  });

  return (
    <mesh ref={meshRef} geometry={geometries[geoIndex]}>
      <MeshDistortMaterial
        ref={materialRef}
        color="#FFFFE3"
        speed={1.5}
        distort={0.1}
        radius={1}
        metalness={0.9}
        roughness={0.1}
        emissive="#FFFFE3"
        emissiveIntensity={0.2}
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
        <spotLight position={[10, 10, 10]} intensity={3} penumbra={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#8A8A8A" />
        <Center>
          <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.6}>
            <MorphingSolid />
          </Float>
        </Center>
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
