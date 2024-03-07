"use client";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import AboutV2 from "@/components/about-two";

export default function Home() {
  return (
    <>
      <Hero />
      <div id="about" className="h-[5rem] w-full"></div>
      <AboutV2 />
      <Projects />
      <Experience />
      <Contact />
      <div className="h-24 w-full md:h-0"></div>
    </>
  );
}
