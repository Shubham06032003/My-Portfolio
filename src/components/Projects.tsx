import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "CodeMind AI",
            tag: "Full-Stack RAG App",
            description:
                "AI-powered GitHub codebase explainer. Developers ask natural language questions about any repo — answered with file path and line number citations.",
            stack: [
                "Python",
                "FastAPI",
                "React",
                "Vite",
                "Tailwind CSS",
                "Google Gemini API",
                "NumPy",
                "GitPython",
            ],
            liveLink: "https://code-mind-ai-sable.vercel.app/",
            githubLink: "https://github.com/Shubham06032003/CodeMind-AI",
        },
        {
            title: "Breast Cancer Prediction",
            tag: "ML · Healthcare",
            description:
                "Supervised ML model to predict cancer likelihood from structured medical data. Includes preprocessing, feature selection, and result visualizations.",
            stack: [
                "Python",
                "Streamlit",
                "scikit-learn",
                "Matplotlib",
                "Seaborn",
            ],
            liveLink: "https://breast-cancer-prediction-ai-model-xidcpahf83csec9pr7zx9n.streamlit.app/",
            githubLink: "https://github.com/Shubham06032003/breast-Cancer-Prediction-ai-model",
        },
        {
            title: "India Air Quality Prediction",
            tag: "ML · Environmental",
            description:
                "Regression-based AQI predictor for Indian cities using historical environmental data. Interactive Streamlit app with live predictions.",
            stack: ["Python", "NumPy", "pandas", "scikit-learn", "Streamlit"],
            liveLink: "https://india-airq-predictor-5oddzh8bwmfcwfsed3vpsc.streamlit.app/",
            githubLink: "https://github.com/Shubham06032003/India-AirQ-Predictor",
        },
    ];

    return (
        <section className="relative w-full min-h-screen bg-background py-24 px-6 md:px-12 lg:px-24 z-10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-space font-bold text-foreground inline-block">
                        Featured <span className="text-cyan-400">Projects</span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-cyan-400 mt-4 rounded-full" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group relative flex flex-col justify-between p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_30px_-5px_var(--tw-shadow-color)] hover:shadow-cyan-500/20"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <span className="inline-block px-3 py-1 mb-6 text-xs font-space font-medium tracking-wider text-emerald-400 bg-emerald-400/10 rounded-full border border-emerald-400/20">
                                    {project.tag}
                                </span>

                                <h3 className="text-2xl font-bold font-space text-foreground mb-4 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 font-sans leading-relaxed mb-8">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.stack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-2.5 py-1 text-xs font-sans text-gray-300 bg-white/[0.03] rounded border border-white/5"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="relative z-10 flex items-center gap-4 mt-auto pt-6 border-t border-white/[0.05]">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm font-space text-cyan-400 hover:text-cyan-300 transition-colors"
                                >
                                    <ExternalLink size={16} /> Live Demo
                                </a>
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm font-space text-gray-400 hover:text-white transition-colors"
                                >
                                    <Github size={16} /> GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
