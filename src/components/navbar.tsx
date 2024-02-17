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
    <nav className="glass-nav fixed left-0 right-0 top-0 z-10 mx-auto max-w-4xl overflow-hidden border-[1px] border-white/10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur md:left-6 md:right-6 md:top-6 md:rounded-2xl">
      <div className="glass-nav flex items-center justify-between px-5  py-5">
        <p className="font-black text-3xl">Pranith</p>
        <Links />
        <Buttons setMenuOpen={setMenuOpen} />
      </div>

      <MobileMenu menuOpen={menuOpen} />
    </nav>
  );
};

const Links = () => (
  <div className="hidden items-center gap-2 md:flex">
    <GlassLink text="Home" />
    <GlassLink text="About" />
    <GlassLink text="Projects" />
    <GlassLink text="Experience" />
  </div>
);

const GlassLink = ({ text }: { text: string }) => {
  return (
    <a
      href="#"
      className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95"
    >
      <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
        {text}
      </span>
      <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
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
      <span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white from-white to-slate-900/10 ">
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
      <div className="flex items-center justify-between px-4 pb-4">
        <div className="flex items-center gap-4">
          <TextLink text="Products" />
          <TextLink text="History" />
          <TextLink text="Contact" />
        </div>
      </div>
    </motion.div>
  );
};
