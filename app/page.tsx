import Hero from "@/components/organisms/Hero";
import Synthesis from "@/components/organisms/Synthesis";
import Craft from "@/components/organisms/Craft";
import Evolution from "@/components/organisms/Evolution";
import SmoothScroll from "@/components/molecules/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="flex min-h-screen flex-col bg-background">
        <Hero />
        <Synthesis />
        <Craft />
        <Evolution />
        
        {/* Connection Section */}
        <section className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center border-t border-surface">
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight sm:text-6xl text-ghost">
            Connect
          </h2>
          <p className="mt-6 max-w-2xl text-ash font-sans">
            Ready to formalize the next complex problem into truth.
          </p>
        </section>
      </main>
    </SmoothScroll>
  );
}
