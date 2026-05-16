import Hero from "@/components/organisms/Hero";
import Synthesis from "@/components/organisms/Synthesis";
import Craft from "@/components/organisms/Craft";
import Evolution from "@/components/organisms/Evolution";
import Connect from "@/components/organisms/Connect";
import SmoothScroll from "@/components/molecules/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="flex min-h-screen flex-col bg-background">
        <Hero />
        <Synthesis />
        <Craft />
        <Evolution />
        <Connect />
      </main>
    </SmoothScroll>
  );
}
