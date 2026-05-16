"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AlchemicalObject from "../atoms/AlchemicalObject";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
    })
    .from(subtitleRef.current, {
      y: 20,
      opacity: 0,
      duration: 1,
    }, "-=1");
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background px-6"
    >
      <AlchemicalObject />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 
          ref={titleRef}
          className="font-display text-6xl font-bold uppercase sm:text-8xl md:text-9xl text-ghost mix-blend-difference"
        >
          Federica<br />Mariani
        </h1>
        
        <div 
          ref={subtitleRef}
          className="mt-8 flex flex-col items-center gap-2"
        >
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary">
            Technical Alchemist & Lead
          </p>
          <p className="max-w-md text-balance text-ash font-sans">
            Synthesis of Philosophy & Engineering. Building high-performance AI-native product architectures.
          </p>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <div className="h-12 w-[1px] bg-ghost" />
      </div>
    </section>
  );
}
