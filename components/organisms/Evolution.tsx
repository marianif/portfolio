"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Era {
  id: string;
  title: string;
  period: string;
  narrative: string;
  materials: string[];
}

const ERAS: Era[] = [
  {
    id: "01",
    title: "The Foundation",
    period: "2015 – 2018",
    narrative: "Deep inquiry into systematic logic and philosophical frameworks. Formalizing abstract complexity into the engine of engineering.",
    materials: ["Bachelor's in Philosophy", "MATEC Digital Design", "Systematic Logic"],
  },
  {
    id: "02",
    title: "The Blockchain Catalyst",
    period: "2019 – 2020",
    narrative: "Architecting decentralized visions. Bridging product strategy and technical execution in the high-velocity world of Web3.",
    materials: ["Hybridverse Blockchain", "VP Operations & CCO", "Product Strategy"],
  },
  {
    id: "03",
    title: "The Full-Stack Shift",
    period: "2021 – 2022",
    narrative: "Refining the builder's craft. Mastering the alchemy of web and mobile architectures from database to delivery.",
    materials: ["Seetizen", "Full-Stack Developer", "React Native", "Node.js"],
  },
  {
    id: "04",
    title: "The AI Architect",
    period: "2022 – Present",
    narrative: "Technical leadership in the intelligence era. Synthesis of AI-native workflows and scalable product innovation.",
    materials: ["Tinexta Innovation Hub", "Technical Lead", "AI-Native Workflows", "React 19"],
  },
];

export default function Evolution() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth;
    const viewportWidth = window.innerWidth;
    
    // Increased scroll distance for premium feel
    const scrollDistance = totalWidth; 

    const sideScroll = gsap.to(container, {
      x: () => -(totalWidth - viewportWidth),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${scrollDistance}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    // Individual Plate Reveals synced with horizontal movement
    const plates = container.querySelectorAll(".era-plate");
    plates.forEach((plate) => {
      const inner = plate.querySelector(".plate-inner");
      if (!inner) return;

      gsap.from(inner, {
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 1,
        scrollTrigger: {
          trigger: plate,
          start: "left 90%",
          end: "left 40%",
          containerAnimation: sideScroll,
          toggleActions: "play none none reverse",
          scrub: true,
        },
      });
    });
  }, { scope: triggerRef });

  return (
    <div ref={triggerRef} className="bg-background">
      <section className="relative flex h-screen w-full flex-col overflow-hidden">
        {/* Section Header */}
        <div className="absolute top-12 left-6 z-20 space-y-2 md:left-16">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-primary" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary">The Evolution</span>
          </div>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight sm:text-6xl text-ghost">
            Journey Map
          </h2>
        </div>

        {/* Horizontal Scroll Track */}
        <div 
          ref={containerRef}
          className="flex h-full items-center px-[5vw] will-change-transform"
        >
          {ERAS.map((era) => (
            <div 
              key={era.id}
              className="era-plate relative flex min-w-[90vw] flex-shrink-0 flex-col items-center justify-center px-4 md:min-w-[70vw] lg:min-w-[50vw]"
            >
              <div className="plate-inner relative w-full max-w-2xl border border-surface bg-surface/20 p-8 md:p-12 transition-colors duration-500 hover:border-primary/40">
                {/* Era Stamp */}
                <div className="absolute -top-4 -left-4 bg-primary px-3 py-1 font-mono text-xs font-bold text-background shadow-[4px_4px_0px_0px_rgba(255,255,227,0.2)]">
                  ERA {era.id}
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="font-mono text-xs text-primary">{era.period}</span>
                    <h3 className="font-display text-3xl font-bold uppercase text-ghost md:text-5xl leading-tight">
                      {era.title}
                    </h3>
                  </div>

                  <p className="max-w-md font-sans text-ash leading-relaxed text-sm md:text-base">
                    {era.narrative}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-surface">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-ash/60">Bill of Materials</span>
                    <ul className="flex flex-wrap gap-x-4 gap-y-2">
                      {era.materials.map((item) => (
                        <li key={item} className="flex items-center gap-2 font-mono text-[10px] uppercase text-ghost/80">
                          <span className="h-1 w-1 bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Decorative Horizontal Axis */}
              <div className="absolute left-0 top-1/2 -z-10 h-[1px] w-full bg-surface" />
            </div>
          ))}

          {/* End cap */}
          <div className="flex min-w-[50vw] flex-shrink-0 items-center justify-center">
            <div className="h-12 w-12 rounded-full border border-primary/20 flex items-center justify-center">
               <div className="h-3 w-3 rounded-full bg-primary animate-pulse shadow-[0_0_15px_rgba(255,255,227,0.5)]" />
            </div>
          </div>
        </div>

        {/* Scroll Progress Indicator */}
        <div className="absolute bottom-12 right-6 z-20 flex items-center gap-4 font-mono text-[10px] text-ash md:right-16">
          <span className="tracking-widest opacity-50 text-ghost uppercase">The Unfolding</span>
          <div className="h-[1px] w-12 bg-surface" />
        </div>
      </section>
    </div>
  );
}
