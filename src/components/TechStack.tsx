"use client";

export default function TechStack() {
    const techStack = [
        "Python",
        "FastAPI",
        "React",
        "LangChain",
        "Gemini API"
    ];

    return (
        <section id="tech-stack" className="relative w-full bg-background py-24 px-6 md:px-12 lg:px-24 z-10 border-t border-white/[0.02]">
            <div className="max-w-7xl mx-auto text-center">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-space font-bold text-foreground inline-block">
                        Tech <span className="text-blue-400">Stack</span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-cyan-400 mt-4 mx-auto rounded-full" />
                </div>

                <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                    {techStack.map((tech, idx) => (
                        <div
                            key={idx}
                            className="group relative px-8 py-5 bg-white/[0.02] border border-white/[0.05] rounded-2xl backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_30px_-5px_var(--tw-shadow-color)] hover:shadow-blue-500/20"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <span className="relative z-10 text-xl md:text-2xl font-sans font-bold text-gray-200 group-hover:text-blue-400 transition-colors">
                                {tech}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
