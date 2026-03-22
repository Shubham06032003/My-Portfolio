"use client";

import { motion } from "framer-motion";

export default function Skills() {
    const stack = {
        "Languages": ["Python"],
        "Frameworks & Libraries": [
            "FastAPI",
            "Streamlit",
            "NumPy",
            "pandas",
            "Matplotlib",
            "Seaborn",
            "Plotly",
            "scikit-learn",
            "XGBoost",
            "Prompt Engineering",
        ],
        "AI & Machine Learning": [
            "RAG (Retrieval-Augmented Generation)",
            "Semantic Embeddings",
            "Vector Search",
            "Supervised Learning",
            "Feature Engineering",
            "End-to-End ML Pipeline",
            "Google Gemini API",
        ],
        "APIs & Integrations": [
            "REST API design",
            "Async Background Tasks",
        ],
        "Tools & Platforms": ["VS Code", "Google Colab", "Kaggle", "GitPython"],
    };

    const learning = ["LangChain Framework", "LangGraph", "Agentic AI Systems"];

    return (
        <section className="relative w-full bg-background py-24 px-6 md:px-12 lg:px-24 z-10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-space font-bold text-foreground inline-block">
                        Technical <span className="text-emerald-400">Toolkit</span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-emerald-400 mt-4 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-16">
                    {Object.entries(stack).map(([category, items], idx) => (
                        <div key={idx} className="flex flex-col">
                            <h3 className="text-xl font-space font-bold text-gray-200 border-b border-white/10 pb-4 mb-6">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 font-sans text-sm text-gray-300 bg-white/[0.03] rounded-md border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Currently Learning Section */}
                    <div className="flex flex-col md:col-span-2 lg:col-span-3 mt-8">
                        <h3 className="text-xl font-space font-bold text-cyan-400 border-b border-cyan-500/20 pb-4 mb-6 flex items-center gap-3">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                            </span>
                            Currently Learning
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            {learning.map((item, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ boxShadow: ["0px 0px 0px 0px rgba(34,211,238,0)", "0px 0px 15px 0px rgba(34,211,238,0.3)", "0px 0px 0px 0px rgba(34,211,238,0)"] }}
                                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: i * 0.5 }}
                                    className="relative px-5 py-3 font-sans text-sm font-medium text-cyan-50 bg-cyan-950/30 rounded-lg border border-cyan-500/40 backdrop-blur-sm shadow-[0_0_15px_-5px_var(--tw-shadow-color)] shadow-cyan-500/20"
                                >
                                    <span className="absolute -top-3 -right-3 px-2 py-0.5 text-[10px] font-bold tracking-widest text-black bg-cyan-400 rounded-sm">
                                        WIP
                                    </span>
                                    {item}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
