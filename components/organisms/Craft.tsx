"use client";

import { useState, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type TechGroup = "ALL" | "AI-NATIVE" | "CORE-UI" | "ARCHITECTURE" | "MOBILE";

interface TechItem {
  name: string;
  group: TechGroup[];
  details: string[];
}

const TECH_STACK: TechItem[] = [
  {
    name: "React 19",
    group: ["CORE-UI", "ARCHITECTURE"],
    details: ["Concurrent Rendering", "Hooks & State Management", "Component Patterns"],
  },
  {
    name: "Next.js 15",
    group: ["CORE-UI", "ARCHITECTURE"],
    details: ["App Router", "React Server Components", "Streaming & Suspense"],
  },
  {
    name: "AI Engineering",
    group: ["AI-NATIVE"],
    details: ["LLM Integrations", "LangChain & Vercel AI SDK", "Context Engineering"],
  },
  {
    name: "React Native",
    group: ["MOBILE"],
    details: ["Cross-platform Architecture", "Native Modules", "Performance Optimization"],
  },
  {
    name: "Expo",
    group: ["MOBILE"],
    details: ["EAS Build & Deploy", "Managed Workflow", "OTA Updates"],
  },
  {
    name: "Technical Lead",
    group: ["ARCHITECTURE"],
    details: ["System Design", "Mentoring", "Stakeholder Communication"],
  },
  {
    name: "Tailwind CSS 4",
    group: ["CORE-UI"],
    details: ["Design Systems", "Responsive Architecture", "OKLCH Logic"],
  },
  {
    name: "Node.js & APIs",
    group: ["ARCHITECTURE"],
    details: ["REST & GraphQL", "Express/Hono", "Authentication Systems"],
  },
  {
    name: "Cloud / AWS",
    group: ["ARCHITECTURE"],
    details: ["Serverless Architectures", "Vercel Deployment", "CI/CD Pipelines"],
  },
];

export default function Craft() {
  const [filter, setFilter] = useState<TechGroup>("ALL");
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredStack = useMemo(() => {
    if (filter === "ALL") return TECH_STACK;
    return TECH_STACK.filter((item) => item.group.includes(filter));
  }, [filter]);

  useGSAP(() => {
    const cards = gridRef.current?.children;
    if (!cards) return;

    gsap.from(cards, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.05,
      duration: 0.8,
      ease: "expo.out",
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="relative flex min-h-screen w-full flex-col bg-background px-6 py-24 md:px-16"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-primary" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary">The Alchemy</span>
          </div>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight sm:text-6xl text-ghost">
            The Craft
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 font-mono text-[10px] sm:text-xs">
          {(["ALL", "AI-NATIVE", "CORE-UI", "ARCHITECTURE", "MOBILE"] as TechGroup[]).map((group) => (
            <button
              key={group}
              onClick={() => setFilter(group)}
              className={`border border-surface px-4 py-2 transition-all duration-300 hover:border-ghost ${
                filter === group ? "bg-primary text-background border-primary" : "text-ash"
              }`}
            >
              [ {group} ]
            </button>
          ))}
        </div>
      </div>

      <div 
        ref={gridRef}
        className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filteredStack.map((item) => (
          <div 
            key={item.name}
            className="group relative flex flex-col border border-surface bg-surface/30 p-8 transition-all duration-500 hover:border-primary/50"
          >
            <div className="absolute inset-0 -z-10 bg-primary/0 opacity-0 blur-2xl transition-all duration-500 group-hover:bg-primary/5 group-hover:opacity-100" />
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <h3 className="font-display text-2xl font-bold uppercase text-ghost group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <div className="h-2 w-2 rounded-full bg-surface group-hover:bg-primary transition-colors" />
              </div>
              <ul className="space-y-1">
                {item.details.map((detail) => (
                  <li key={detail} className="font-mono text-[10px] uppercase tracking-wider text-ash group-hover:text-ghost/80 transition-colors">
                    — {detail}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex gap-1">
              {item.group.map((g) => (
                <div key={g} className="h-[2px] w-4 bg-surface group-hover:bg-primary/40 transition-colors" title={g} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 max-w-2xl border-l border-primary/20 pl-8">
        <p className="font-sans text-ash leading-relaxed italic">
          &quot;Technological mastery is not just the accumulation of tools, but the precision with which they are applied to complex problems.&quot;
        </p>
      </div>
    </section>
  );
}
