import { Award } from "lucide-react";

export default function Certs() {
    const certifications = [
        {
            title: "Microsoft Azure AI Engineer Associate",
            code: "AI-102",
            date: "Nov 2025 – Nov 2026",
            issuer: "Microsoft",
            color: "from-cyan-500 to-blue-500",
        },
        {
            title: "Fundamentals of Deep Learning",
            code: "DLI",
            date: "March 2025",
            issuer: "NVIDIA",
            color: "from-emerald-500 to-green-500",
        },
    ];

    return (
        <section className="relative w-full bg-[#050508] py-24 px-6 md:px-12 lg:px-24 z-10 border-t border-white/[0.02]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-space font-bold text-foreground">
                        Licenses & <span className="text-cyan-400">Certifications</span>
                    </h2>
                    <p className="text-gray-400 mt-4 font-sans text-lg">
                        Validated expertise in AI and Cloud Infrastructure
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {certifications.map((cert, idx) => (
                        <div
                            key={idx}
                            className="group relative p-[1px] rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-transparent hover:from-white/20 transition-all duration-300"
                        >
                            {/* Animated Border Glow */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}
                                style={{ zIndex: 0 }}
                            />

                            <div className="relative h-full bg-[#0a0a0f]/90 backdrop-blur-xl p-8 rounded-[15px] z-10 border border-white/[0.02] flex flex-col items-start gap-4">
                                <div className={`p-3 rounded-xl bg-gradient-to-br ${cert.color} bg-opacity-10`}>
                                    <Award className="text-white w-6 h-6" />
                                </div>

                                <div>
                                    <h3 className="text-xl md:text-2xl font-space font-bold text-gray-100 group-hover:text-white transition-colors">
                                        {cert.title}
                                    </h3>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="text-sm font-sans font-medium text-cyan-400">
                                            {cert.issuer}
                                        </span>
                                        <span className="text-gray-600">•</span>
                                        <span className="text-sm font-sans text-gray-500">
                                            {cert.code}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-auto pt-4">
                                    <span className="inline-block px-3 py-1 bg-white/[0.05] border border-white/10 rounded text-xs font-space text-gray-400">
                                        {cert.date}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
