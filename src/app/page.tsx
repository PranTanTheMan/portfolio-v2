"use client";
import Hero from "@/components/hero";
import About from "@/components/about";
import AnimatedCursor from "react-animated-cursor";

export default function Home() {
  return (
    <>
      <AnimatedCursor
        innerSize={7}
        outerSize={40}
        innerScale={1}
        outerScale={3}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          border: "2px solid var(--cursor-color-outer)",
        }}
      />
      <Hero />
      <About />
    </>
  );
}
