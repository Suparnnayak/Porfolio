"use client";

import { motion } from "framer-motion";
import { CircuitPattern, GridDots, CrossHatch } from "@/components/ui/Decorative";
import { ArrowUpRight, BookOpen, Flame } from "lucide-react";

/* ─── Animations ─── */
const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* ─── Data ─── */
const categories = [
    {
        name: "Programming",
        color: "bg-acid",
        textColor: "text-ink",
        tools: [
            { name: "Python", level: 90, detail: "My most-used language for AI, ML, data pipelines, and backend work." },
            { name: "C++", level: 85, detail: "Used heavily for DSA-oriented projects and efficient core logic." },
            { name: "C", level: 78, detail: "Strong fundamentals in low-level programming and problem solving." },
            { name: "SQL", level: 82, detail: "Comfortable with relational modeling, querying, and analytics." },
            { name: "JavaScript / TypeScript", level: 75, detail: "Used for Next.js-based product interfaces and integrations." },
        ],
    },
    {
        name: "Data & Backend",
        color: "bg-electric",
        textColor: "text-cream",
        tools: [
            { name: "PostgreSQL", level: 82, detail: "Used for forecast storage, serving, and analytics workflows." },
            { name: "MySQL", level: 78, detail: "Solid grounding in relational databases and query design." },
            { name: "Flask", level: 80, detail: "Used for lightweight ML and backend API integration." },
            { name: "Next.js", level: 76, detail: "Full-stack UI layer for product-facing dashboards and apps." },
            { name: "Docker", level: 72, detail: "Comfortable packaging apps and services for deployment." },
        ],
    },
    {
        name: "AI / ML",
        color: "bg-hotpink",
        textColor: "text-cream",
        tools: [
            { name: "Scikit-learn", level: 84, detail: "Classical ML pipelines, preprocessing, and evaluation." },
            { name: "LightGBM", level: 82, detail: "Used for admissions forecasting in HealthFlow AI." },
            { name: "RAG Pipelines", level: 80, detail: "Retrieval-grounded scoring and response generation." },
            { name: "Keras", level: 76, detail: "Hands-on with neural-network workflows and experimentation." },
            { name: "NLP / Embeddings", level: 82, detail: "Chunking, retrieval, similarity search, and rubric-aware processing." },
        ],
    },
    {
        name: "Tools & Deployment",
        color: "bg-vivid",
        textColor: "text-cream",
        tools: [
            { name: "Git / GitHub", level: 86, detail: "Daily workflow for version control, collaboration, and project publishing." },
            { name: "Vercel", level: 78, detail: "Fast deployment path for Next.js applications." },
            { name: "Render", level: 72, detail: "Used for simple hosted services and backend deployment." },
            { name: "Streamlit", level: 80, detail: "Quickly turn data and ML ideas into usable interfaces." },
        ],
    },
];

const learning = [
    { name: "Advanced System Design", reason: "To build stronger large-scale and production-ready architectures." },
    { name: "Computer Vision", reason: "To go deeper on real-time detection and tracking workflows." },
    { name: "Deep Learning", reason: "To strengthen model-building beyond applied library usage." },
    { name: "Competitive Programming", reason: "To keep sharpening speed, logic, and algorithmic thinking." },
];

export default function StackPage() {
    return (
        <div className="min-h-screen bg-cream pb-28 md:pb-24">

            {/* Status bar */}
            <div className="w-full bg-ink border-b-[3px] border-ink py-2 px-4 md:px-8 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-acid animate-pulse-dot" />
                    <span className="font-mono text-xs font-bold text-cream/75 uppercase tracking-widest">system://arsenal</span>
                </div>
                <span className="font-mono text-xs font-bold text-cream/60 tracking-widest uppercase">
                    {categories.reduce((acc, c) => acc + c.tools.length, 0)} TOOLS LOADED
                </span>
            </div>

            {/* Header */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 mt-8 md:mt-16 mb-8 md:mb-12">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="font-mono text-[0.65rem] md:text-xs font-bold uppercase tracking-[0.24em] md:tracking-[0.3em] text-ink/40 mb-3">Tech Stack</div>
                    <h1 className="text-[2.8rem] sm:text-6xl md:text-[7rem] font-heading font-bold text-ink leading-[0.9] md:leading-[0.85] tracking-tighter uppercase mb-5 md:mb-6">
                        My<br />Stack
                    </h1>
                    <p className="font-mono text-sm md:text-base font-bold text-ink/60 max-w-lg leading-relaxed">
                        The tools here reflect what I use across coursework, projects, hackathons, and experiments in AI, backend, and full-stack development.
                    </p>
                </motion.div>
            </section>

            {/* ──── Categories ──── */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-20 space-y-5">
                {categories.map((cat, catIndex) => (
                    <motion.div
                        key={cat.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIndex * 0.05 }}
                    >
                        <div className={`neo-card ${cat.color} ${cat.textColor} p-6 md:p-8 relative overflow-hidden`}>
                            {catIndex % 2 === 0 ? (
                                <CircuitPattern className="absolute top-0 right-0 w-32 h-32 opacity-[0.06]" />
                            ) : (
                                <GridDots className="absolute top-0 right-0 w-32 h-32 opacity-[0.06]" />
                            )}

                            <div className="relative z-10">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                                    <h2 className="font-heading font-bold text-2xl md:text-3xl uppercase tracking-tight">{cat.name}</h2>
                                    <span className="font-mono text-[0.6rem] font-bold uppercase tracking-widest opacity-50">
                                        {cat.tools.length} tools
                                    </span>
                                </div>

                                <div className="space-y-4">
                                    {cat.tools.map((tool) => (
                                        <div key={tool.name} className="group">
                                            <div className="flex justify-between items-center mb-1.5">
                                                <span className="font-heading font-bold text-sm uppercase tracking-tight">{tool.name}</span>
                                                <span className="font-mono text-xs font-bold opacity-50">{tool.level}%</span>
                                            </div>
                                            <div className="h-2 bg-current/10 overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${tool.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                                                    className={`h-full ${cat.textColor === "text-ink" ? "bg-ink" : "bg-cream"
                                                        }`}
                                                />
                                            </div>
                                            <p className="font-mono text-xs font-bold opacity-40 mt-1">{tool.detail}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* ──── Currently Learning ──── */}
            <motion.section
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-20"
            >
                <div className="flex items-center gap-2 mb-2">
                    <Flame size={16} className="text-hotpink" />
                    <div className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-ink/40">Level Up</div>
                </div>
                <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-tight text-ink mb-6">Currently Learning</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    {learning.map((item) => (
                        <motion.div key={item.name} variants={fadeUp}>
                            <div className="neo-card bg-cream p-5 h-full group hover:bg-ink hover:text-cream transition-all">
                                <div className="flex items-center gap-2 mb-2">
                                    <BookOpen size={16} className="opacity-40 group-hover:text-acid" />
                                    <h3 className="font-heading font-bold text-base uppercase tracking-tight">{item.name}</h3>
                                </div>
                                <p className="font-mono text-xs font-bold opacity-50 leading-relaxed">{item.reason}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* ──── CTA ──── */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-4 md:px-8 mb-12"
            >
                <div className="neo-card bg-ink text-cream p-8 md:p-12 text-center relative overflow-hidden gradient-top-accent">
                    <GridDots className="absolute inset-0 w-full h-full text-cream/3" />
                    <div className="relative z-10">
                        <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight mb-4">
                            Want This Stack<br /><span className="gradient-text-acid">On Your Team?</span>
                        </h2>
                        <p className="font-mono text-sm font-bold text-cream/78 max-w-lg mx-auto mb-8">
                            I&apos;m looking for opportunities where I can apply these skills to meaningful software and AI problems.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex w-full sm:w-auto justify-center bg-acid text-ink font-heading font-bold text-base md:text-lg uppercase tracking-wider px-8 py-4 border-[3px] border-ink shadow-neo hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all"
                        >
                            Let&apos;s Build →
                        </a>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
