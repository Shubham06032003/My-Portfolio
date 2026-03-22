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
                className="absolute flex flex-col items-center justify-center text-center"
            >
                <h1 className="text-5xl md:text-7xl font-space font-bold text-foreground mb-4 drop-shadow-lg">
                    Shubham Panwar
                </h1>
                <p className="text-xl md:text-2xl text-cyan-400 font-sans tracking-wide">
                    Python Developer &middot; AI Systems &middot; LLM Apps
                </p>
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
                    Currently exploring Agentic AI.
                </h3>
            </motion.div>

        </div>
    );
}
