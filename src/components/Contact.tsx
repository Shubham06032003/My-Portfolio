import { Mail, Phone, ExternalLink } from "lucide-react";

export default function Contact() {
    return (
        <footer className="relative w-full bg-[#030305] py-24 px-6 md:px-12 lg:px-24 z-10 overflow-hidden border-t border-white/[0.05]">
            {/* Footer Noise Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")", backgroundRepeat: 'repeat' }} />

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
                <h2 className="text-5xl md:text-7xl font-space font-bold text-white mb-6 tracking-tight">
                    Let&apos;s Build <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                        Intelligent Systems
                    </span>
                </h2>

                <p className="text-xl text-gray-400 font-sans max-w-2xl mb-12 leading-relaxed">
                    Open for roles in AI, Machine Learning, and Backend Development.
                    If you have a high-impact project or a full-time opportunity, my inbox is open.
                </p>

                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=shub.p.2003@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center px-8 py-4 font-space font-bold text-white transition-all duration-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-cyan-400 hover:shadow-[0_0_20px_-5px_rgba(34,211,238,0.4)] overflow-hidden"
                >
                    <div className="absolute inset-0 w-0 bg-gradient-to-r from-cyan-500 to-emerald-500 transition-all duration-[400ms] ease-out group-hover:w-full opacity-20" />
                    <span className="relative flex items-center gap-2">
                        Let&apos;s Build Something <ExternalLink size={18} />
                    </span>
                </a>

                <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16 pt-8 border-t border-white/10 w-full">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shub.p.2003@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors font-sans group">
                        <div className="p-2 rounded-full bg-white/5 group-hover:bg-cyan-500/10 transition-colors">
                            <Mail size={18} />
                        </div>
                        shub.p.2003@gmail.com
                    </a>
                    <a href="tel:+919660155271" className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors font-sans group">
                        <div className="p-2 rounded-full bg-white/5 group-hover:bg-emerald-500/10 transition-colors">
                            <Phone size={18} />
                        </div>
                        +91-9660155271
                    </a>
                    <a href="https://linkedin.com/in/shubham-panwar-sp" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors font-sans group">
                        <div className="p-2 rounded-full bg-white/5 group-hover:bg-blue-500/10 transition-colors">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </div>
                        LinkedIn
                    </a>
                </div>

                <div className="mt-16 text-center text-sm text-gray-500 font-space flex flex-col sm:flex-row items-center justify-between w-full">
                    <p>© 2026 Shubham Panwar.</p>
                    <p>MCA @ Government Engineering College Bikaner</p>
                </div>
            </div>
        </footer>
    );
}
