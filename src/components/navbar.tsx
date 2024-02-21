"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import ShimmerButton from "./shimma-button";

export default function Navbar() {
  return <GlassNavigation />;
}

const GlassNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="z-50 backdrop-blur-md fixed left-0 right-0 top-0 mx-auto max-w-4xl overflow-hidden border-[1px] border-white/10 bg-gradient-to-br from-white/20 to-white/5 md:left-6 md:right-6 md:top-6 md:rounded-2xl">
      <div className="flex  items-center justify-between px-5  py-5">
        <p className="font-black text-3xl text-white">Pranith</p>
        <Links />
        <Buttons setMenuOpen={setMenuOpen} />
      </div>

      <MobileMenu menuOpen={menuOpen} />
    </nav>
  );
};

const Links = () => (
  <div className="font-gopher hidden items-center gap-4 md:flex">
    <GlassLink text="Home" href="/" />
    <GlassLink text="About" href="#about" />
    <GlassLink text="Projects" href="#projects" />
    <GlassLink text="Experience" href="#experience" />
  </div>
);

const GlassLink = ({ text, href }: { text: string; href: string }) => {
  return (
    <a
      href={href}
      className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95"
    >
      <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
        {text}
      </span>
      <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/10 to-white/[0.01] opacity-0 transition-opacity group-hover:opacity-100 " />
    </a>
  );
};

const TextLink = ({ text }: { text: string }) => {
  return (
    <a href="#" className="text-white/90 transition-colors hover:text-white">
      {text}
    </a>
  );
};

const Buttons = ({
  setMenuOpen,
}: {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => (
  <div className="flex items-center gap-4">
    <ShimmerButton className="shadow-xl">
      <span className="font-gopher whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white from-white to-slate-900/50 ">
        Contact Me
      </span>
    </ShimmerButton>

    <button
      onClick={() => setMenuOpen((pv) => !pv)}
      className="ml-2 block scale-100 text-3xl text-white/90 transition-all hover:scale-105 hover:text-white active:scale-95 md:hidden"
    >
      <FiMenu />
    </button>
  </div>
);

const MobileMenu = ({ menuOpen }: { menuOpen: boolean }) => {
  return (
    <motion.div
      initial={false}
      animate={{
        height: menuOpen ? "fit-content" : "0px",
      }}
      className="block overflow-hidden md:hidden"
    >
      <div className="font-gopher flex items-center justify-between px-5 pb-4">
        <div className=" flex items-center gap-8">
          <TextLink text="Home" />
          <TextLink text="About" />
          <TextLink text="Projects" />
          <TextLink text="Experience" />
        </div>
      </div>
    </motion.div>
  );
};
