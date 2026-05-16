import Hero from "@/components/organisms/Hero";
import Synthesis from "@/components/organisms/Synthesis";
import SmoothScroll from "@/components/molecules/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="flex min-h-screen flex-col bg-background">
        <Hero />
        
        {/* Comparison of the 3 Variants */}
        <Synthesis variant="classical" />
        <Synthesis variant="blueprint" />
        <Synthesis variant="material" />
        
        {/* Next section: Craft (Expertise) */}
        <section className="flex min-h-screen flex-col items-center justify-center bg-surface px-6 text-center">
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight sm:text-6xl text-ghost">
            The Craft
          </h2>
          <p className="mt-6 max-w-2xl text-ash">
            Technical Leadership & AI-Native Product Architecture.
          </p>
        </section>
      </main>
    </SmoothScroll>
  );
}
