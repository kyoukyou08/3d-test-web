"use client";

import { motion } from "framer-motion";
import ThreeModel from "@/components/ThreeModel/ThreeModel";

export default function Home() {
  return (
    <main className="h-screen bg-amber-50">
      <div className="container mx-auto">
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            delay: 0.2,
            duration: 0.5,
          }}
          className="flex  justify-between items-center h-16 px-12"
        >
          <span className="text-4xl font-bold">3D Web</span>
          <nav>
            <ul className="flex row gap-6">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">News</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>
        </motion.header>
        <section className="lg:py-8">
          <div className="flex justify-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  delay: 0.2,
                  duration: 0.5,
                  stiffness: 200,
                }}
                className="text-slate-900 lg:text-9xl md:text-8xl font-bold  lg:max-w-[40rem]"
              >
                3D <span className="text-amber-500">website</span> testing
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  delay: 0.5,
                  duration: 0.5,
                  stiffness: 130,
                }}
                className="text-slate-900 lg:text-6xl md:text-8xl font-bold  lg:max-w-[40rem]"
              >
                Welcome my World
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "spring",
                  delay: 0.8,
                  duration: 0.9,
                }}
                className="flex gap-5 my-8"
              >
                <button className="bg-amber-500 font-bold text-white px-8 py-2 rounded-lg mt-4 hover:bg-amber-400 transition-colors">
                  play
                </button>
                <button className="b font-bold outline outline-amber-500 text-amber-500 px-8 py-2 rounded-lg mt-4 hover:bg-amber-500 transition-colors hover:text-white">
                  samples
                </button>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2 h-full">
              <ThreeModel />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
