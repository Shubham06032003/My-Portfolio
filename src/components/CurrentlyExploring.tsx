export default function CurrentlyExploring() {
    const learning = [
        "RAG Systems",
        "Vector Databases",
        "LangChain & LangGraph",
        "Agentic AI Systems"
    ];

    return (
        <section className="relative w-full bg-background py-24 px-6 md:px-12 lg:px-24 z-10 border-t border-white/[0.02]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-space font-bold text-foreground inline-block">
                        Currently <span className="text-cyan-400">Exploring</span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-cyan-400 mt-4 rounded-full" />
                </div>

                <div className="flex flex-wrap gap-6 max-w-4xl">
                    {learning.map((item, idx) => (
                        <div
                            key={idx}
                            className="group relative px-6 py-4 bg-white/[0.02] border border-white/[0.05] rounded-xl backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_30px_-5px_var(--tw-shadow-color)] hover:shadow-cyan-500/20"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10 flex items-center gap-3">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                                </span>
                                <span className="text-lg font-sans font-medium text-gray-200 group-hover:text-cyan-400 transition-colors">
                                    {item}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
