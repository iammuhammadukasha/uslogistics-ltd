"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full -mt-[7.5rem] pt-[7.5rem]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-ship.png"
          alt="Container ship at sea"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black/55"
        aria-hidden
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-32 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex max-w-3xl flex-col items-center"
        >
          <motion.h1
            variants={item}
            className="text-5xl font-bold uppercase tracking-tight text-white sm:text-6xl md:text-7xl"
            style={{ fontFamily: "var(--font-fredoka)" }}
          >
            Siddiqui & Co
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg"
            style={{ fontFamily: "'Coco Gothic', sans-serif" }}
          >
            We act as agents and representatives for leading global ethanol
            producers, facilitating reliable supply to international markets.
          </motion.p>
          <motion.div variants={item} className="mt-10">
            <motion.a
              href="#contact"
              className="inline-flex items-center rounded-md border border-white/40 bg-white/15 px-8 py-4 text-sm font-medium uppercase tracking-wide text-white backdrop-blur-sm transition hover:bg-white/25 hover:border-white/60"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              GET IN TOUCH
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
