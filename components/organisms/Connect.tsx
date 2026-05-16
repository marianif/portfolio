"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SynthesisArtifact from "../atoms/SynthesisArtifact";
import MagneticLink from "../atoms/MagneticLink";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Connect() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(headlineRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "expo.out",
    })
    .from(linksRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.8")
    .from(footerRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut",
    }, "-=0.5");
  }, { scope: sectionRef });

  return (
    <div ref={sectionRef} className="relative flex min-h-screen flex-col bg-background">
      {/* 3D Background Artifact */}
      <div className="absolute inset-0 opacity-60">
        <SynthesisArtifact />
      </div>

      <section className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-8 bg-primary/40" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary">Final Movement</span>
            <div className="h-[1px] w-8 bg-primary/40" />
          </div>
          
          <h2 
            ref={headlineRef}
            className="font-display text-5xl font-bold uppercase tracking-tighter sm:text-8xl lg:text-[10rem] text-ghost leading-[0.85]"
          >
            CONNECT
          </h2>
          
          <p className="mx-auto max-w-md font-sans text-sm md:text-base text-ash">
            Formalizing the next complex problem into truth. Ready to synthesize vision into technical reality.
          </p>
        </div>

        <div 
          ref={linksRef}
          className="mt-16 flex flex-col items-center gap-8 md:flex-row md:gap-16"
        >
          <MagneticLink 
            href="mailto:federica.mariani@placeholder.com"
            className="font-display text-2xl font-semibold uppercase tracking-tight text-ghost hover:text-primary sm:text-3xl"
          >
            Email
          </MagneticLink>
          
          <div className="hidden h-12 w-[1px] bg-surface md:block" />
          
          <MagneticLink 
            href="https://linkedin.com/in/fm-placeholder"
            className="font-display text-2xl font-semibold uppercase tracking-tight text-ghost hover:text-primary sm:text-3xl"
          >
            LinkedIn
          </MagneticLink>
        </div>
      </section>

      {/* Minimalist Footer */}
      <footer 
        ref={footerRef}
        className="relative z-10 flex w-full flex-col items-center justify-between gap-6 border-t border-surface bg-background px-6 py-12 md:flex-row md:px-16"
      >
        <div className="flex flex-col items-center gap-2 md:items-start">
          <span className="font-mono text-[10px] uppercase tracking-widest text-ash">Location</span>
          <span className="font-display text-sm font-bold uppercase text-ghost">Milan / Remote</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-ash">System Status</span>
          <div className="flex items-center gap-2">
             <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
             <span className="font-mono text-[10px] uppercase text-ghost">Built with Kinetic Precision</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 md:items-end">
          <span className="font-mono text-[10px] uppercase tracking-widest text-ash">Temporal Marker</span>
          <span className="font-display text-sm font-bold uppercase text-ghost">© 2026</span>
        </div>
      </footer>
    </div>
  );
}
