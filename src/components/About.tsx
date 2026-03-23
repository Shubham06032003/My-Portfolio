export default function About() {
    return (
        <section id="about" className="relative w-full bg-background py-24 px-6 md:px-12 lg:px-24 z-10 border-t border-white/[0.02]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-space font-bold text-foreground inline-block">
                        About <span className="text-emerald-400">Me</span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-emerald-400 mt-4 rounded-full" />
                </div>

                <div className="max-w-4xl text-lg md:text-xl text-gray-300 font-sans leading-relaxed space-y-6">
                    <p>
                        I am a developer specializing in <strong className="text-emerald-400">AI systems, backend development, and building robust data pipelines</strong>. My core focus is bridging the gap between cutting-edge LLMs and scalable backend architectures to solve real-world problems.
                    </p>
                    <p>
                        Whether it&apos;s implementing a scalable Retrieval-Augmented Generation (RAG) system, fine-tuning ML models, or architecting high-performance APIs with FastAPI, I enjoy turning complex technical challenges into intuitive and reliable products.
                    </p>
                </div>
            </div>
        </section>
    );
}
