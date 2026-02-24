"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const orbVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: (i: number) => ({
    scale: 1,
    opacity: 0.4,
    transition: { delay: 0.8 + i * 0.2, duration: 1.2, ease: "easeOut" as const },
  }),
  float: (i: number) => ({
    y: [0, -20, 0],
    x: [0, i % 2 === 0 ? 15 : -15, 0],
    transition: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" as const },
  }),
};

export default function AnimatedHero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0c0f14]">
      {/* Background orbs */}
      <motion.div
        className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-[#22d3a4] blur-[120px]"
        variants={orbVariants}
        initial="initial"
        animate={["animate", "float"]}
        custom={0}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[#6366f1] blur-[140px]"
        variants={orbVariants}
        initial="initial"
        animate={["animate", "float"]}
        custom={1}
      />
      <motion.div
        className="absolute right-1/3 top-1/2 h-64 w-64 rounded-full bg-[#f59e0b] blur-[100px]"
        variants={orbVariants}
        initial="initial"
        animate={["animate", "float"]}
        custom={2}
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex max-w-4xl flex-col items-center text-center"
        >
          <motion.p
            variants={item}
            className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-[#22d3a4]"
          >
            Welcome
          </motion.p>
          <motion.h1
            variants={item}
            className="text-6xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl"
          >
            Siddiqui
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
          >
            A focused, animated experience — built with Next.js and Framer
            Motion.
          </motion.p>
          <motion.div variants={item} className="mt-12 flex gap-4">
            <motion.a
              href="#"
              className="rounded-full bg-[#22d3a4] px-8 py-4 font-medium text-[#0c0f14] transition-colors hover:bg-[#2ee9b8]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get started
            </motion.a>
            <motion.a
              href="#"
              className="rounded-full border border-zinc-600 px-8 py-4 font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:bg-white/5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn more
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          className="absolute bottom-16 left-1/2 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#22d3a4]/60 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        />
      </div>
    </div>
  );
}
