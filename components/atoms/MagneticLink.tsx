"use client";

import { useRef, ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface MagneticLinkProps {
  children: ReactNode;
  href: string;
  className?: string;
}

export default function MagneticLink({ children, href, className = "" }: MagneticLinkProps) {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const contentRef = useRef<HTMLSpanElement>(null);
  
  useGSAP(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = container.getBoundingClientRect();
      
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const moveX = (clientX - centerX) * 0.4;
      const moveY = (clientY - centerY) * 0.4;

      gsap.to(content, {
        x: moveX,
        y: moveY,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    const onMouseLeave = () => {
      gsap.to(content, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)",
      });
    };

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);

    return () => {
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
    };
  }, { scope: containerRef });

  return (
    <a
      ref={containerRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-block p-4 ${className}`}
    >
      <span ref={contentRef} className="relative z-10 block transition-colors duration-300">
        {children}
      </span>
      <div className="absolute inset-0 z-0 scale-0 rounded-full bg-primary/10 transition-transform duration-500 group-hover:scale-100" />
    </a>
  );
}
