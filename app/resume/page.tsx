"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, FileText } from "lucide-react";

export default function ResumePage() {
    return (
        <div className="min-h-screen bg-cream pb-28 md:pb-24">
            <div className="w-full bg-ink border-b-[3px] border-ink py-2 px-2 sm:px-4 md:px-8 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-acid animate-pulse-dot" />
                    <span className="font-mono text-xs font-bold text-cream/75 uppercase tracking-widest">document://resume</span>
                </div>
                <span className="font-mono text-xs font-bold text-cream/60 tracking-widest uppercase">PDF Viewer</span>
            </div>

            <section className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8 mt-8 md:mt-16 mb-8 md:mb-12">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="font-mono text-[0.65rem] md:text-xs font-bold uppercase tracking-[0.24em] md:tracking-[0.3em] text-ink/40 mb-3">Resume</div>
                    <h1 className="text-[2.8rem] sm:text-6xl md:text-[7rem] font-heading font-bold text-ink leading-[0.9] md:leading-[0.85] tracking-tighter uppercase mb-5 md:mb-6">
                        View
                        <br />
                        Resume
                    </h1>
                    <p className="font-mono text-sm md:text-base font-bold text-ink/60 max-w-2xl leading-relaxed">
                        You can preview my resume directly here or download the PDF.
                    </p>
                </motion.div>
            </section>

            <section className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8 mb-12">
                <div className="flex flex-col sm:flex-row gap-3 mb-5">
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="neo-card bg-ink text-cream px-5 py-3 font-heading font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-acid hover:text-ink transition-colors"
                    >
                        <FileText size={16} />
                        Open PDF
                    </a>
                    <a
                        href="/resume.pdf"
                        download="Suparn_Nayak_Resume.pdf"
                        className="neo-card bg-acid text-ink px-5 py-3 font-heading font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-ink hover:text-cream transition-colors"
                    >
                        <Download size={16} />
                        Download
                    </a>
                </div>

                <div className="neo-card bg-cream overflow-hidden hidden md:block">
                    <iframe
                        src="/resume.pdf#view=FitH"
                        title="Suparn Nayak Resume"
                        className="w-full h-[75vh] md:h-[85vh]"
                    />
                </div>

                <div className="neo-card bg-cream p-6 text-center md:hidden">
                    <div className="font-heading font-bold text-2xl uppercase tracking-tight text-ink mb-3">Best viewed in PDF mode</div>
                    <p className="font-mono text-sm font-bold text-ink/60 leading-relaxed">
                        Mobile browsers often make embedded PDF viewers cramped, so use the buttons above to open or download the resume directly.
                    </p>
                </div>

                <div className="mt-4 font-mono text-xs font-bold text-ink/50 flex flex-wrap items-center gap-2 uppercase tracking-wider">
                    If the preview doesn&apos;t load in your browser, use
                    <a href="/resume.pdf" target="_blank" rel="noreferrer" className="text-ink hover:text-electric inline-flex items-center gap-1">
                        Open PDF <ArrowUpRight size={12} />
                    </a>
                </div>
            </section>
        </div>
    );
}
