"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const DATA_POINTS = [
  "INK_ENGINE: V2",
  "LATENCY: 0.04ms",
  "LOGIC_GATES: ACTIVE",
  "KERNEL: 5.10.0",
  "SYS_ROOT: /FM",
  "ARCH: ARM64",
  "THREAD: ACTIVE",
  "MEMORY: OPTIMIZED",
  "PROTOCOL: SECURE",
  "ENCRYPT: AES-256",
  "UPLINK: STABLE",
  "BUFFER: CLEAN",
  "OS: BRUTALIST_V1",
  "CORE: QUANTUM_INK",
  "DRIVE: NVME_SSD",
  "CACHE: L3_64MB"
];

export default function MonolithIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(true);

  useGSAP(() => {
    if (!shouldRender) return;

    // Ensure scroll is locked during the 3s sequence
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "auto";
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 1.2,
          ease: "expo.inOut",
          onComplete: () => setShouldRender(false),
        });
      },
    });

    // 1. Initial State
    tl.set(".data-point", { opacity: 0, x: () => (Math.random() - 0.5) * 40 });
    tl.set(".status-line", { opacity: 0, scaleX: 0 });

    // 2. Deliberate Technical Assembly (0.0s - 1.5s)
    tl.to(".data-point", {
      opacity: 1,
      x: 0,
      duration: 0.4,
      stagger: {
        each: 0.05,
        from: "random",
      },
      ease: "power4.out",
    });

    // 3. Status Manifest Reveal (1.5s - 2.5s)
    tl.to(".status-line", {
      opacity: 1,
      scaleX: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
    }, "-=0.5");

    // 4. Ghost structures fade down
    tl.to(".data-point", {
      opacity: 0.05,
      duration: 1,
      ease: "power2.inOut",
    }, "-=0.8");

    // 5. Explicit 3s Duration Hold
    tl.to({}, { duration: 1 });

  }, [shouldRender]);

  if (!shouldRender) return (
    <div className="fixed inset-0 pointer-events-none z-[10000]">
      {/* Ghosting effect remains briefly after transition */}
    </div>
  );

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-background overflow-hidden"
    >
      {/* Asymmetric Grid of Metadata */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-8 gap-4 p-8 md:grid-cols-8 md:grid-rows-8 lg:grid-cols-12 lg:p-16">
        {DATA_POINTS.concat(DATA_POINTS).map((point, i) => (
          <div 
            key={`${point}-${i}`}
            className="data-point flex items-center justify-start font-mono text-[8px] uppercase tracking-tighter text-primary/60 md:text-[9px]"
            style={{
              gridColumnStart: (i % 12) + 1,
              gridRowStart: Math.floor(i / 4) + 1,
            }}
          >
            <span className="mr-2 text-primary/20">[{i.toString().padStart(2, '0')}]</span>
            {point}
          </div>
        ))}
      </div>

      {/* Assembly Manifest (No Name, just technical status) */}
      <div ref={contentRef} className="relative z-10 w-full max-w-7xl px-8 md:px-16">
        <div className="md:ml-[10%] space-y-4">
          <div className="status-line flex items-center gap-6 origin-left">
            <div className="h-[1px] w-24 bg-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary">
              System_Boot: Sequence_01
            </span>
          </div>
          
          <div className="status-line flex items-center gap-6 origin-left">
            <div className="h-[1px] w-12 bg-primary/40" />
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-ghost/60">
              Environment: Production_Ink
            </span>
          </div>

          <div className="status-line flex items-center gap-6 origin-left">
            <div className="h-[1px] w-8 bg-primary/20" />
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-ghost/30">
              Loading_Manifest: Verified
            </span>
          </div>
        </div>
      </div>

      {/* Technical Frame Elements */}
      <div className="absolute left-8 bottom-8 h-12 w-[1px] bg-primary/20" />
      <div className="absolute left-8 bottom-8 w-12 h-[1px] bg-primary/20" />
      
      <div className="absolute right-8 top-8 h-12 w-[1px] bg-primary/20" />
      <div className="absolute right-8 top-8 w-12 h-[1px] bg-primary/20" />
      
      {/* Background Pulse */}
      <div className="absolute inset-0 bg-primary/[0.02] animate-pulse pointer-events-none" />
    </div>
  );
}
