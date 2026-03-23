import { Github, ExternalLink, ArrowRight } from "lucide-react";

export default function Projects() {
    const featuredProject = {
        title: "CodeMind AI – AI Codebase Explainer",
        tag: "Full-Stack RAG App",
        description: "AI-powered system that analyzes GitHub repositories and answers questions using RAG, embeddings, and Gemini LLM.",
        details: [
            { label: "Problem", text: "Developers struggle to understand large and unfamiliar codebases." },
            { label: "Solution", text: "Built a RAG system that retrieves relevant code snippets and generates contextual explanations." }
        ],
        stack: ["FastAPI", "React", "Chroma", "Gemini API"],
        liveLink: "https://code-mind-ai-sable.vercel.app/",
        githubLink: "https://github.com/Shubham06032003/CodeMind-AI",
    };

    const otherProjects = [
        {
            title: "Breast Cancer Prediction",
            tag: "ML · Healthcare",
            description: "Supervised ML model predicting cancer likelihood from structured medical data.",
            stack: ["Python", "Streamlit", "scikit-learn"],
            liveLink: "https://breast-cancer-prediction-ai-model-xidcpahf83csec9pr7zx9n.streamlit.app/",
            githubLink: "https://github.com/Shubham06032003/breast-Cancer-Prediction-ai-model",
        },
        {
            title: "India Air Quality Prediction",
            tag: "ML · Environmental",
            description: "Regression-based AQI predictor for Indian cities using historical environmental data.",
            stack: ["Python", "scikit-learn", "Streamlit"],
            liveLink: "https://india-airq-predictor-5oddzh8bwmfcwfsed3vpsc.streamlit.app/",
            githubLink: "https://github.com/Shubham06032003/India-AirQ-Predictor",
        },
    ];

    return (
        <section id="projects" className="relative w-full bg-background py-24 px-6 md:px-12 lg:px-24 z-10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-space font-bold text-foreground inline-block">
                        Featured <span className="text-cyan-400">Projects</span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-cyan-400 mt-4 rounded-full" />
                </div>

                <div className="flex flex-col gap-8">
                    {/* Featured Project */}
                    <div className="group relative flex flex-col lg:flex-row gap-8 p-8 md:p-12 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_30px_-5px_var(--tw-shadow-color)] hover:shadow-cyan-500/20">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative z-10 flex-1 flex flex-col justify-between">
                            <div>
                                <span className="inline-block px-3 py-1 mb-6 text-xs font-space font-medium tracking-wider text-emerald-400 bg-emerald-400/10 rounded-full border border-emerald-400/20">
                                    {featuredProject.tag}
                                </span>
                                
                                <h3 className="text-3xl md:text-4xl font-bold font-space text-foreground mb-4 group-hover:text-cyan-400 transition-colors">
                                    {featuredProject.title}
                                </h3>
                                
                                <p className="text-lg text-gray-300 font-sans leading-relaxed mb-6">
                                    {featuredProject.description}
                                </p>

                                <div className="space-y-4 mb-8">
                                    {featuredProject.details.map((detail, i) => (
                                        <div key={i} className="flex gap-3">
                                            <ArrowRight className="text-cyan-400 shrink-0 mt-1" size={18} />
                                            <p className="font-sans text-gray-400">
                                                <strong className="text-gray-200">{detail.label}:</strong> {detail.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2 mb-8 lg:mb-0">
                                    {featuredProject.stack.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 text-sm font-sans text-gray-300 bg-white/[0.05] rounded border border-white/10">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 lg:w-48 flex flex-col justify-end items-start lg:items-end gap-4">
                            <a href={featuredProject.liveLink} target="_blank" rel="noopener noreferrer" className="w-full flex justify-center items-center gap-2 px-6 py-3 bg-cyan-500/10 text-cyan-400 font-space font-bold rounded-lg border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors">
                                <ExternalLink size={18} /> Live Demo
                            </a>
                            <a href={featuredProject.githubLink} target="_blank" rel="noopener noreferrer" className="w-full flex justify-center items-center gap-2 px-6 py-3 bg-white/5 text-gray-300 font-space font-bold rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                                <Github size={18} /> GitHub
                            </a>
                        </div>
                    </div>

                    {/* Other Projects */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {otherProjects.map((project, idx) => (
                            <div key={idx} className="group relative flex flex-col justify-between p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-emerald-500/50 hover:shadow-[0_0_30px_-5px_var(--tw-shadow-color)] hover:shadow-emerald-500/20">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <span className="inline-block px-3 py-1 mb-4 text-xs font-space font-medium tracking-wider text-cyan-400 bg-cyan-400/10 rounded-full border border-cyan-400/20">
                                        {project.tag}
                                    </span>

                                    <h3 className="text-xl font-bold font-space text-foreground mb-3 group-hover:text-emerald-400 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 font-sans leading-relaxed mb-6 line-clamp-2">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.stack.map((tech, i) => (
                                            <span key={i} className="px-2.5 py-1 text-xs font-sans text-gray-300 bg-white/[0.03] rounded border border-white/5">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="relative z-10 flex items-center gap-4 mt-auto pt-6 border-t border-white/[0.05]">
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-space text-emerald-400 hover:text-emerald-300 transition-colors">
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-space text-gray-400 hover:text-white transition-colors">
                                        <Github size={16} /> GitHub
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
