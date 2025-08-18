// eslint-disable-next-line no-unused-vars
import { easeInOut, motion } from "motion/react";

export const Hover = () => {
  return (
    <div
      className="flex min-h-screen max-w-screen items-center justify-center bg-neutral-900 text-neutral-200 [perspective:1000px] [transform-style:preserve-3d]"
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <motion.button
        // initial={{
        //   rotate: 0,
        // }}
        // animate={{
        //   rotate: [0, 60, 120, 180, 240, 360],
        // }}
        // transition={{
        //   duration: 0.3,
        //   ease: "easeInOut",
        // }}
        whileHover={{
          rotateX: 25,
          rotateY: 10,
          boxShadow: "0px 20px 50px rgba(8,112,184,0.7",
          y: -5,
        }}
        whileTap={{
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: easeInOut,
        }}
        className="group relative cursor-pointer rounded-lg bg-black px-9 py-4.5 text-2xl shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]"
        style={{
          translateZ: 100,
        }}
      >
        <span className="transition-colors duration-300 group-hover:text-cyan-400">
          Click Me
        </span>
        <span className="absolute inset-x-0 bottom-0 mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></span>
        <span className="absolute inset-x-0 bottom-0 mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100"></span>
      </motion.button>
    </div>
  );
};
