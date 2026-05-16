"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useGSAP(() => {
    // Hidden by default to prevent flash
    gsap.set([dotRef.current, ringRef.current, labelRef.current], { opacity: 0 });

    const xDotTo = gsap.quickTo(dotRef.current, "x", { duration: 0.1, ease: "power3" });
    const yDotTo = gsap.quickTo(dotRef.current, "y", { duration: 0.1, ease: "power3" });
    
    const xRingTo = gsap.quickTo(ringRef.current, "x", { duration: 0.4, ease: "power3" });
    const yRingTo = gsap.quickTo(ringRef.current, "y", { duration: 0.4, ease: "power3" });

    const xLabelTo = gsap.quickTo(labelRef.current, "x", { duration: 0.45, ease: "power3" });
    const yLabelTo = gsap.quickTo(labelRef.current, "y", { duration: 0.45, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      xDotTo(clientX);
      yDotTo(clientY);
      xRingTo(clientX);
      yRingTo(clientY);
      xLabelTo(clientX);
      yLabelTo(clientY);

      setCoords({ x: clientX, y: clientY });
      
      // Reveal on first move
      gsap.to([dotRef.current, ringRef.current, labelRef.current], { 
        opacity: 1, 
        duration: 0.5,
        stagger: 0.1
      });
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);
    
    // Global delegation for hover states
    const interactiveElements = document.querySelectorAll('a, button, [data-cursor="hover"]');
    interactiveElements.forEach(el => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, []);

  useGSAP(() => {
    if (isHovering) {
      gsap.to(ringRef.current, {
        width: 80,
        height: 80,
        backgroundColor: "var(--color-primary)",
        mixBlendMode: "difference",
        duration: 0.4,
        ease: "power3.out",
      });
      gsap.to(dotRef.current, { opacity: 0, duration: 0.2 });
      gsap.to(labelRef.current, { opacity: 0, duration: 0.2 });
    } else {
      gsap.to(ringRef.current, {
        width: 32,
        height: 32,
        backgroundColor: "transparent",
        mixBlendMode: "normal",
        duration: 0.4,
        ease: "power3.out",
      });
      gsap.to(dotRef.current, { opacity: 1, duration: 0.3 });
      gsap.to(labelRef.current, { opacity: 1, duration: 0.3 });
    }
  }, [isHovering]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block">
      {/* The Point */}
      <div 
        ref={dotRef}
        className="fixed left-0 top-0 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
      />
      
      {/* The Kinetic Ring */}
      <div 
        ref={ringRef}
        className="fixed left-0 top-0 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/40"
      />

      {/* Technical Spec Overlay */}
      <div 
        ref={labelRef}
        className="fixed left-0 top-0 ml-6 mt-6 flex flex-col font-mono text-[8px] uppercase tracking-tighter text-primary/60"
      >
        <span>X:{coords.x.toString().padStart(4, "0")}</span>
        <span>Y:{coords.y.toString().padStart(4, "0")}</span>
      </div>

      <style jsx global>{`
        @media (min-width: 1024px) {
          body, a, button {
            cursor: none !important;
          }
        }
      `}</style>
    </div>
  );
}
