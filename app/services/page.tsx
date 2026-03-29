"use client";

import { motion } from "framer-motion";
import { Zap, Bot, ArrowUpRight, Check, X, Shield, Rocket, RefreshCw, Code2, Smartphone, Database, Brain } from "lucide-react";
import { CircuitPattern, GridDots, CrossHatch } from "@/components/ui/Decorative";

/* ─── Animations ─── */
const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* ─── Data ─── */
const velocityFeatures = [
    { icon: <Code2 size={20} />, label: "Algorithmic Systems", desc: "Priority queues, heaps, graphs, and efficient matching logic" },
    { icon: <Smartphone size={20} />, label: "Full-Stack Interfaces", desc: "Next.js or Streamlit frontends backed by Python services" },
    { icon: <Database size={20} />, label: "Data Pipelines", desc: "SQL-backed storage, preprocessing, and model-ready workflows" },
    { icon: <Shield size={20} />, label: "Reliable Implementations", desc: "Clean logic, reproducible flows, and measurable outputs" },
];

const aiFeatures = [
    { icon: <Brain size={20} />, label: "Forecasting Models", desc: "Applied ML for predictions and planning" },
    { icon: <Bot size={20} />, label: "LLM Workflows", desc: "Practical advisory and scoring systems" },
    { icon: <RefreshCw size={20} />, label: "RAG Pipelines", desc: "Evidence-grounded retrieval and responses" },
    { icon: <Rocket size={20} />, label: "Computer Vision", desc: "Detection and tracking for real-time use cases" },
];

const comparisonData = [
    { feature: "Core strength", agency: "General-purpose delivery", me: "DSA, AI, and systems-oriented problem solving" },
    { feature: "Typical context", agency: "Client projects", me: "Student projects, hackathons, and technical builds" },
    { feature: "Working style", agency: "Large team process", me: "Hands-on implementation and iteration" },
    { feature: "Decision making", agency: "Process first", me: "Problem first" },
    { feature: "Focus", agency: "Broad service coverage", me: "Learning fast and building well" },
    { feature: "AI exposure", agency: "Varies", me: "Used across forecasting, RAG, and vision" },
    { feature: "Mindset", agency: "Delivery pipeline", me: "Growth, experimentation, and strong fundamentals" },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-cream pb-28 md:pb-24">

            {/* Status bar */}
            <div className="w-full bg-ink border-b-[3px] border-ink py-2 px-4 md:px-8 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-acid animate-pulse-dot" />
                    <span className="font-mono text-xs font-bold text-cream/75 uppercase tracking-widest">system://services</span>
                </div>
                <span className="font-mono text-xs font-bold text-cream/60 tracking-widest uppercase">2 Packages</span>
            </div>

            {/* Header */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 mt-8 md:mt-16 mb-8 md:mb-12">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="font-mono text-[0.65rem] md:text-xs font-bold uppercase tracking-[0.24em] md:tracking-[0.3em] text-ink/40 mb-3">Focus Areas</div>
                    <h1 className="text-[2.8rem] sm:text-6xl md:text-[7rem] font-heading font-bold text-ink leading-[0.9] md:leading-[0.85] tracking-tighter uppercase mb-5 md:mb-6">
                        What I Build
                    </h1>
                    <p className="font-mono text-sm md:text-base font-bold text-ink/60 max-w-lg leading-relaxed">
                        This page summarizes the kinds of systems I enjoy building most.
                        These are the technical areas where I can contribute best right now:
                    </p>
                </motion.div>
            </section>

            {/* ──── Service Packages ──── */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-20">
                <div className="grid md:grid-cols-2 gap-5">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="neo-card bg-acid text-ink p-6 md:p-8 h-full relative overflow-hidden group gradient-top-accent">
                            <CrossHatch className="absolute top-0 right-0 w-32 h-32 text-ink opacity-[0.04]" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <Zap size={28} />
                                    <span className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.2em] opacity-50">Systems Thinking</span>
                                </div>
                                <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-tight mb-3">Systems & Full-Stack</h2>
                                <p className="font-mono text-sm font-bold opacity-70 leading-relaxed mb-6">
                                    I like building products where algorithms, backend logic, databases, and usable interfaces all connect cleanly.
                                </p>

                                <div className="space-y-4 mb-6">
                                    {velocityFeatures.map((f) => (
                                        <div key={f.label} className="flex items-start gap-3 group/item">
                                            <div className="text-ink/60 mt-0.5">{f.icon}</div>
                                            <div>
                                                <div className="font-heading font-bold text-sm uppercase tracking-tight">{f.label}</div>
                                                <div className="font-mono text-xs font-bold opacity-50">{f.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href="/contact"
                                    className="inline-flex items-center gap-2 bg-ink text-cream px-5 py-3 font-heading font-bold text-sm uppercase tracking-wider border-[3px] border-ink hover:bg-cream hover:text-ink transition-all group"
                                >
                                    Let&apos;s Talk
                                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="neo-card bg-electric text-cream p-6 md:p-8 h-full relative overflow-hidden group gradient-top-accent neo-glow-blue">
                            <CircuitPattern className="absolute bottom-0 left-0 w-40 h-40 text-cream/5" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <Bot size={28} className="text-acid" />
                                    <span className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.2em] text-cream/70">Applied Intelligence</span>
                                </div>
                                <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-tight mb-3">AI & ML Products</h2>
                                <p className="font-mono text-sm font-bold text-cream/82 leading-relaxed mb-6">
                                    Forecasting, RAG, LLM-backed scoring, and computer vision are the areas where I&apos;ve been building the most.
                                </p>

                                <div className="space-y-4 mb-6">
                                    {aiFeatures.map((f) => (
                                        <div key={f.label} className="flex items-start gap-3 group/item">
                                            <div className="text-acid mt-0.5">{f.icon}</div>
                                            <div>
                                                <div className="font-heading font-bold text-sm uppercase tracking-tight">{f.label}</div>
                                                <div className="font-mono text-xs font-bold text-cream/70">{f.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href="/contact"
                                    className="inline-flex items-center gap-2 bg-acid text-ink px-5 py-3 font-heading font-bold text-sm uppercase tracking-wider border-[3px] border-ink hover:bg-cream transition-all group"
                                >
                                    Explore Ideas
                                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ──── Process ──── */}
            <motion.section
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-20"
            >
                <div className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-ink/40 mb-2">How I Work</div>
                <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-tight text-ink mb-8">The Process</h2>

                <div className="grid md:grid-cols-4 gap-5">
                    {[
                        { num: "01", title: "Understand", desc: "Study the problem, constraints, and what success actually looks like.", color: "bg-acid", textColor: "text-ink" },
                        { num: "02", title: "Design", desc: "Choose practical algorithms, models, and architecture instead of overbuilding.", color: "bg-ink", textColor: "text-cream" },
                        { num: "03", title: "Build", desc: "Implement the system with working code, readable structure, and useful outputs.", color: "bg-electric", textColor: "text-cream" },
                        { num: "04", title: "Iterate", desc: "Refine based on results, edge cases, and what the project teaches next.", color: "bg-hotpink", textColor: "text-cream" },
                    ].map((step) => (
                        <motion.div key={step.num} variants={fadeUp}>
                            <div className={`neo-card ${step.color} ${step.textColor} p-6 h-full relative overflow-hidden`}>
                                <div className="absolute top-3 right-3 font-heading font-bold text-4xl opacity-10 select-none">{step.num}</div>
                                <div className="relative z-10">
                                    <h3 className="font-heading font-bold text-xl uppercase tracking-tight mb-3">{step.title}</h3>
                                    <p className="font-mono text-xs font-bold opacity-70 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* ──── Me vs Agency Comparison ──── */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-20"
            >
                <div className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-ink/40 mb-2">Why This Portfolio</div>
                <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-tight text-ink mb-8">How I Add Value</h2>

                <div className="neo-card bg-cream overflow-hidden hidden md:block">
                    {/* Header row */}
                    <div className="grid grid-cols-3 bg-ink text-cream">
                        <div className="p-4 font-mono text-xs font-bold uppercase tracking-wider border-r border-cream/10"></div>
                        <div className="p-4 font-mono text-xs font-bold uppercase tracking-wider text-center border-r border-cream/10 text-cream/72">
                            Typical Setup
                        </div>
                        <div className="p-4 font-mono text-xs font-bold uppercase tracking-wider text-center text-acid">
                            My Approach
                        </div>
                    </div>

                    {/* Rows */}
                    {comparisonData.map((row, i) => (
                        <div key={i} className={`grid grid-cols-3 ${i % 2 === 0 ? "bg-cream" : "bg-ink/[0.02]"} border-t-[2px] border-ink/10`}>
                            <div className="p-4 font-mono text-xs font-bold text-ink/60">{row.feature}</div>
                            <div className="p-4 font-mono text-xs font-bold text-ink/40 text-center border-x-[2px] border-ink/10">{row.agency}</div>
                            <div className="p-4 font-mono text-xs font-bold text-ink text-center">{row.me}</div>
                        </div>
                    ))}
                </div>

                <div className="space-y-3 md:hidden">
                    {comparisonData.map((row, i) => (
                        <div key={i} className="neo-card bg-cream p-4">
                            <div className="font-heading font-bold text-base uppercase tracking-tight text-ink mb-3">{row.feature}</div>
                            <div className="space-y-3 font-mono text-xs font-bold">
                                <div className="border-t-[2px] border-ink/10 pt-3">
                                    <div className="uppercase tracking-widest text-ink/40 mb-1">Typical Setup</div>
                                    <div className="text-ink/65">{row.agency}</div>
                                </div>
                                <div className="border-t-[2px] border-ink/10 pt-3">
                                    <div className="uppercase tracking-widest text-acid mb-1">My Approach</div>
                                    <div className="text-ink">{row.me}</div>
                                </div>
                            </div>
                        </div>
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
                    <div className="absolute top-0 left-1/4 w-1/2 h-20 bg-acid/10 blur-3xl pointer-events-none" />
                    <div className="relative z-10">
                        <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight mb-4">
                            Let&apos;s Build.<br /><span className="gradient-text-acid">Let&apos;s Learn.</span>
                        </h2>
                        <p className="font-mono text-sm font-bold text-cream/78 max-w-lg mx-auto mb-8">
                            I&apos;m always interested in internships, collaborations, and technical conversations around meaningful products.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex w-full sm:w-auto justify-center bg-acid text-ink font-heading font-bold text-base md:text-lg uppercase tracking-wider px-8 py-4 border-[3px] border-ink shadow-neo hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all"
                        >
                            Reach Out →
                        </a>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
