"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certs from "@/components/Certs";
import Contact from "@/components/Contact";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="w-full bg-background min-h-screen text-foreground selection:bg-cyan-500/30">
      {/* Scrollytelling Section */}
      <div ref={containerRef} className="h-[500vh] relative w-full" style={{ position: "relative" }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ScrollyCanvas scrollYProgress={scrollYProgress} totalFrames={75} />
          <Overlay scrollYProgress={scrollYProgress} />
        </div>
      </div>

      {/* Main Content Sections */}
      <Projects />
      <Skills />
      <Certs />
      <Contact />
    </main>
  );
}
