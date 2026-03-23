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
                        I am a <strong className="text-emerald-400">Python developer</strong> focused on building <strong className="text-emerald-400">AI-powered applications</strong> and <strong className="text-emerald-400">backend systems</strong>. My work mainly involves integrating <strong className="text-emerald-400">LLMs</strong>, designing APIs using <strong className="text-emerald-400">FastAPI</strong>, and experimenting with techniques like <strong className="text-emerald-400">Retrieval-Augmented Generation (RAG)</strong>.
                    </p>
                    <p>
                        I enjoy solving <strong className="text-emerald-400">real-world problems</strong> by combining <strong className="text-emerald-400">machine learning</strong>, APIs, and modern <strong className="text-emerald-400">AI tools</strong>. Through my projects, I focus on understanding how systems work <strong className="text-emerald-400">end-to-end</strong>, from data processing to generating meaningful outputs.
                    </p>
                    <p>
                        Currently, I am exploring advanced AI concepts like <strong className="text-emerald-400">vector databases</strong>, <strong className="text-emerald-400">LangChain</strong>, and <strong className="text-emerald-400">agent-based systems</strong> while continuously improving my development and problem-solving skills.
                    </p>
                </div>
            </div>
        </section>
    );
}
