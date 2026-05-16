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
    materials: ["Philosophy", "Digital Design", "Systematic Logic"],
  },
  {
    id: "02",
    title: "The Blockchain Catalyst",
    period: "2019 – 2020",
    narrative: "Architecting decentralized visions. Bridging product strategy and technical execution in high-velocity Web3 ecosystems.",
    materials: ["Hybridverse", "Product Strategy", "EVM Architectures"],
  },
  {
    id: "03",
    title: "The Full-Stack Shift",
    period: "2021 – 2022",
    narrative: "Refining the builder's craft. Mastering the alchemy of web and mobile architectures from database to delivery.",
    materials: ["React Native", "Node.js", "System Architecture"],
  },
  {
    id: "04",
    title: "The AI Architect",
    period: "2022 – Present",
    narrative: "Technical leadership in the intelligence era. Synthesis of AI-native workflows and scalable product innovation.",
    materials: ["Technical Lead", "AI Workflows", "React 19"],
  },
];

export default function Evolution() {
  const mainRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray<HTMLElement>(".era-panel");
    
    // Create the stacking effect
    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
        snap: i === panels.length - 1 ? undefined : 1,
      });

      // Kinetic Reveal for content
      const content = panel.querySelector(".panel-content");
      const number = panel.querySelector(".structural-number");

      if (content && number) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: "top 80%",
            end: "top top",
            scrub: 1,
          }
        });

        tl.fromTo(number, 
          { opacity: 0, scale: 1.2, filter: "blur(20px)" },
          { opacity: 0.03, scale: 1, filter: "blur(0px)", duration: 1 }
        )
        .from(content, {
          opacity: 0,
          y: 40,
          duration: 0.8,
        }, "-=0.5");
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { scope: mainRef });

  return (
    <div ref={mainRef} className="bg-background">
      <section className="relative w-full">
        {/* Section Header - Sticky */}
        <div className="sticky top-0 z-50 flex w-full items-center justify-between p-6 md:p-12 mix-blend-difference">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-8 bg-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Evolutionary Log</span>
          </div>
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-ghost md:text-4xl">
            Journey Map
          </h2>
        </div>

        <div className="relative w-full">
          {ERAS.map((era, index) => (
            <div 
              key={era.id}
              className="era-panel relative flex h-screen w-full items-center justify-center overflow-hidden border-t border-surface/30 bg-background"
              style={{ zIndex: index + 1 }}
            >
              {/* Massive Structural Number */}
              <div className="structural-number absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
                <span className="font-display text-[40vw] font-bold leading-none text-primary lg:text-[30vw]">
                  {era.id}
                </span>
              </div>

              <div className="panel-content relative z-10 grid w-full max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:px-12 lg:gap-24">
                {/* Primary Narrative */}
                <div className="space-y-8">
                  <div className="space-y-2">
                    <span className="font-mono text-xs tracking-widest text-primary/60">{era.period}</span>
                    <h3 className="font-display text-4xl font-bold uppercase leading-[0.9] text-ghost md:text-7xl">
                      {era.title}
                    </h3>
                  </div>
                  <p className="max-w-md font-sans text-sm leading-relaxed text-ash md:text-lg">
                    {era.narrative}
                  </p>
                </div>

                {/* Technical Manifest (Bill of Materials) */}
                <div className="flex flex-col justify-end space-y-6 md:pb-4">
                  <div className="space-y-4 border-l border-surface/50 pl-6 md:pl-10">
                    <div className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rotate-45 bg-primary" />
                      <span className="font-mono text-[10px] uppercase tracking-widest text-ghost">Technical Manifest</span>
                    </div>
                    <ul className="grid grid-cols-1 gap-y-3 lg:grid-cols-2 lg:gap-x-8">
                      {era.materials.map((item) => (
                        <li key={item} className="group flex items-center gap-3">
                          <span className="font-mono text-[10px] text-ash/40 transition-colors group-hover:text-primary">
                            [{(Math.random() * 1000).toFixed(0).padStart(4, "0")}]
                          </span>
                          <span className="font-mono text-xs uppercase tracking-tight text-ghost/90">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Decorative technical line */}
              <div className="absolute bottom-12 left-1/2 h-12 w-[1px] -translate-x-1/2 bg-gradient-to-b from-surface to-transparent md:bottom-24" />
            </div>
          ))}

          {/* End Cap / Reflection */}
          <div className="era-panel relative flex h-[60vh] w-full items-center justify-center bg-background z-50 border-t border-surface">
            <div className="space-y-6 text-center">
              <div className="inline-block h-3 w-3 rounded-full bg-primary animate-pulse shadow-[0_0_20px_rgba(255,255,227,0.4)]" />
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ash">Continuous Unfolding</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
