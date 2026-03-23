"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
    scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
    // Mapping scroll progress to specific animations

    // Section 1: 0% -> 20% (Center)
    const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.2, 1], [1, 1, 0, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2, 1], [0, -50, -50]);

    // Section 2: 25% -> 45% (Left)
    const opacity2 = useTransform(scrollYProgress, [0, 0.2, 0.25, 0.4, 0.45, 1], [0, 0, 1, 1, 0, 0]);
    const y2 = useTransform(scrollYProgress, [0, 0.2, 0.25, 0.4, 0.45, 1], [40, 40, 0, 0, -40, -40]);

    // Section 3: 50% -> 70% (Right)
    const opacity3 = useTransform(scrollYProgress, [0, 0.45, 0.5, 0.65, 0.7, 1], [0, 0, 1, 1, 0, 0]);
    const y3 = useTransform(scrollYProgress, [0, 0.45, 0.5, 0.65, 0.7, 1], [40, 40, 0, 0, -40, -40]);

    // Section 4: 75% -> 100% (Center)
    const opacity4 = useTransform(scrollYProgress, [0, 0.7, 0.75, 0.9, 1], [0, 0, 1, 1, 0]);
    const y4 = useTransform(scrollYProgress, [0, 0.7, 0.75, 1], [50, 50, 0, -50]);

    return (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center p-8 max-w-7xl mx-auto w-full">

            {/* 0% Center */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute flex flex-col items-center justify-center text-center max-w-5xl px-4"
            >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-space font-bold text-foreground mb-6 drop-shadow-lg leading-tight tracking-tight">
                    AI Developer building intelligent systems using <span className="text-cyan-400">LLMs</span>, <span className="text-emerald-400">RAG</span>, and <span className="text-blue-400">FastAPI</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-sans tracking-wide mb-10 max-w-3xl">
                    I design and build AI-powered applications that help developers understand complex systems and automate workflows.
                </p>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 pointer-events-auto">
                    <a href="#projects" className="group relative inline-flex items-center justify-center px-6 py-3 font-space font-bold text-cyan-50 transition-all duration-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-cyan-400 hover:shadow-[0_0_20px_-5px_rgba(34,211,238,0.4)] overflow-hidden">
                        <div className="absolute inset-0 w-0 bg-gradient-to-r from-cyan-500 to-emerald-500 transition-all duration-[400ms] ease-out group-hover:w-full opacity-20" />
                        <span className="relative">View Projects</span>
                    </a>
                    <a href="https://github.com/Shubham06032003" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center px-6 py-3 font-space font-bold text-white transition-all duration-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-cyan-400 hover:shadow-[0_0_20px_-5px_rgba(34,211,238,0.4)] overflow-hidden">
                        <div className="absolute inset-0 w-0 bg-gradient-to-r from-cyan-500 to-emerald-500 transition-all duration-[400ms] ease-out group-hover:w-full opacity-20" />
                        <span className="relative flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> 
                            GitHub
                        </span>
                    </a>
                    <a href="#contact" className="group relative inline-flex items-center justify-center px-6 py-3 font-space font-bold text-emerald-50 transition-all duration-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-emerald-400 hover:shadow-[0_0_20px_-5px_rgba(52,211,153,0.4)] overflow-hidden">
                        <div className="absolute inset-0 w-0 bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-[400ms] ease-out group-hover:w-full opacity-20" />
                        <span className="relative">Contact</span>
                    </a>
                </div>
            </motion.div>

            {/* 25% Left */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute inset-x-4 md:inset-x-auto md:left-24 md:w-[600px] max-w-2xl text-center md:text-left"
            >
                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-space font-bold text-emerald-400 leading-tight">
                    I build AI-powered backends and intelligent systems.
                </h2>
            </motion.div>

            {/* 50% Right */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute inset-x-4 md:inset-x-auto md:right-24 md:w-[600px] max-w-2xl text-center md:text-right"
            >
                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-space font-bold text-cyan-400 leading-tight">
                    From RAG pipelines to ML models.
                </h2>
                <p className="text-lg md:text-2xl lg:text-3xl text-foreground font-sans mt-4 md:mt-6">
                    Bridging data and product.
                </p>
            </motion.div>

            {/* 75% Center */}
            <motion.div
                style={{ opacity: opacity4, y: y4 }}
                className="absolute inset-x-4 md:inset-x-auto flex flex-col items-center text-center max-w-3xl"
            >
                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-space font-bold text-foreground mb-4 md:mb-6">
                    Certified. Curious.
                </h2>
                <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-sans text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                    Always building, always learning.
                </h3>
            </motion.div>

        </div>
    );
}
