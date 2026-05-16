"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SynthesisVisual from "../atoms/SynthesisVisual";
import BlueprintVisual from "../atoms/BlueprintVisual";
import MaterialVisual from "../atoms/MaterialVisual";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Variant = "classical" | "blueprint" | "material";

export default function Synthesis({ variant = "classical" }: { variant?: Variant }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const lines = quoteRef.current?.querySelectorAll(".line-inner");
    if (!lines) return;

    gsap.from(lines, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "expo.out",
    });

    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 50%",
      },
      opacity: 0,
      y: 30,
      duration: 1.5,
      delay: 0.5,
      ease: "power2.out",
    });
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef}
      className="relative flex min-h-screen w-full flex-col items-start justify-center overflow-hidden bg-background px-6 py-24 md:px-16 border-b border-surface"
    >
      {variant === "classical" && <SynthesisVisual />}
      {variant === "blueprint" && <BlueprintVisual />}
      {variant === "material" && <MaterialVisual />}
      
      <div className="relative z-10 max-w-5xl">
        <h2 
          ref={quoteRef}
          className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl text-ghost"
        >
          <div className="overflow-hidden">
            <span className="line-inner block">A problem well</span>
          </div>
          <div className="overflow-hidden">
            <span className="line-inner block">stated is a</span>
          </div>
          <div className="overflow-hidden">
            <span className="line-inner block text-primary">problem half</span>
          </div>
          <div className="overflow-hidden">
            <span className="line-inner block text-primary">solved.</span>
          </div>
        </h2>
        
        <div 
          ref={textRef}
          className="mt-12 max-w-xl space-y-6"
        >
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-primary" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              The Parallel Track: {variant.toUpperCase()}
            </span>
          </div>
          <p className="font-sans text-lg leading-relaxed text-ash md:text-xl">
            My background in Philosophy isn&apos;t a previous life—it&apos;s the engine. Engineering is the art of formalizing abstract complexity into functional truth. I don&apos;t just build; I define.
          </p>
        </div>
      </div>
    </section>
  );
}
