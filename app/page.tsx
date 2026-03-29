"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { CircuitPattern, GridDots, CrossHatch } from "@/components/ui/Decorative";
import LiveTerminal from "@/components/ui/LiveTerminal";
import { Brain, ArrowUpRight, Github, Mail, ChevronDown, Trophy, Linkedin, Terminal, Code2, Zap, Radar, Database, Star, Instagram, Twitter } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

function useCounter(end: number, duration = 2000, startCounting = false) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!startCounting) return;
        let startTime: number | null = null;
        let animationFrame: number;

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) animationFrame = requestAnimationFrame(step);
        };

        animationFrame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, startCounting]);

    return count;
}

function AnimatedStat({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const count = useCounter(value, 2000, isInView);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="neo-card bg-ink text-cream p-4 md:p-6 text-center relative overflow-hidden neo-glow"
        >
            <div className="relative z-10">
                <div className="font-heading font-bold text-3xl md:text-4xl text-acid">
                    {count}
                    {suffix}
                </div>
                <div className="font-mono text-[0.6rem] font-bold uppercase tracking-widest mt-1 text-cream/50">
                    {label}
                </div>
            </div>
        </motion.div>
    );
}

const techLogos = [
    "Python", "C++", "Next.js", "PostgreSQL", "LightGBM",
    "Flask", "ChromaDB", "Sentence Transformers", "Docker", "YOLO",
    "OpenCV", "Streamlit", "Scikit-learn", "RAG", "Vercel",
];

const achievements = [
    {
        title: "LeetCode",
        body: "Solved 250+ DSA problems with a strong focus on problem solving and core data structures.",
        accent: "bg-acid",
    },
    {
        title: "Projects",
        body: "Built 10+ projects ranging from foundational builds to higher-level AI, systems, and practical software applications.",
        accent: "bg-electric",
    },
    {
        title: "Mentorship",
        body: "Mentored 50+ students in Data Structures and Algorithms during CSOC.",
        accent: "bg-hotpink",
    },
];

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

function useKonamiCode(callback: () => void) {
    const sequence = [
        "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
        "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
        "b", "a",
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === sequence[index]) {
                const next = index + 1;
                if (next === sequence.length) {
                    callback();
                    setIndex(0);
                } else {
                    setIndex(next);
                }
            } else {
                setIndex(0);
            }
        };

        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [index, callback]);
}

export default function Home() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const [konamiActive, setKonamiActive] = useState(false);

    useKonamiCode(() => setKonamiActive(true));

    return (
        <div className={`min-h-screen bg-cream pb-28 md:pb-24 ${konamiActive ? "hue-rotate-180 transition-all duration-1000" : ""}`}>
            <div className="w-full bg-acid border-b-[3px] border-ink py-2 overflow-hidden">
                <div className="marquee-container font-mono font-bold text-ink uppercase tracking-widest text-xs">
                    <div className="marquee-content animate-marquee">
                        <span className="px-4 md:px-6">COMPUTER SCIENCE STUDENT&nbsp;///&nbsp;</span>
                        <span className="px-4 md:px-6">AI + SYSTEMS BUILDER&nbsp;///&nbsp;</span>
                        <span className="px-4 md:px-6">DSA-DRIVEN PROJECTS&nbsp;///&nbsp;</span>
                        <span className="px-4 md:px-6">HACKATHON READY&nbsp;///&nbsp;</span>
                        <span className="px-4 md:px-6">COMPUTER SCIENCE STUDENT&nbsp;///&nbsp;</span>
                        <span className="px-4 md:px-6">AI + SYSTEMS BUILDER&nbsp;///&nbsp;</span>
                    </div>
                    <div className="marquee-content animate-marquee" aria-hidden="true">
                        <span className="px-4 md:px-6">COMPUTER SCIENCE STUDENT&nbsp;///&nbsp;</span>
                        <span className="px-4 md:px-6">AI + SYSTEMS BUILDER&nbsp;///&nbsp;</span>
                        <span className="px-4 md:px-6">DSA-DRIVEN PROJECTS&nbsp;///&nbsp;</span>
                        <span className="px-4 md:px-6">HACKATHON READY&nbsp;///&nbsp;</span>
                        <span className="px-4 md:px-6">COMPUTER SCIENCE STUDENT&nbsp;///&nbsp;</span>
                        <span className="px-4 md:px-6">AI + SYSTEMS BUILDER&nbsp;///&nbsp;</span>
                    </div>
                </div>
            </div>

            <section ref={heroRef} className="relative min-h-[88vh] md:min-h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-20 -right-20 w-72 md:w-[500px] h-72 md:h-[500px] bg-acid/10 rounded-full blur-3xl animate-blob" />
                    <div className="absolute bottom-10 -left-20 w-60 md:w-[400px] h-60 md:h-[400px] bg-electric/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
                    <div className="absolute top-1/3 left-1/3 w-48 md:w-[300px] h-48 md:h-[300px] bg-hotpink/8 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
                </div>

                <div className="max-w-[92rem] mx-auto px-4 md:px-8 py-12 md:py-20 w-full relative z-10">
                    <motion.div style={{ y: heroY, opacity: heroOpacity }}>
                        <header className="grid lg:grid-cols-[1.3fr_0.9fr] gap-6 md:gap-8 lg:gap-12 items-start">
                            <motion.div
                                initial={{ opacity: 0, x: -60 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                            >
                                <div className="font-mono text-[0.65rem] md:text-sm font-bold uppercase tracking-[0.28em] md:tracking-[0.35em] text-ink/50 mb-4 md:mb-5">
                                    Portfolio / {new Date().getFullYear()}
                                </div>
                                <h1 className="text-[3.35rem] sm:text-8xl md:text-[9rem] lg:text-[11rem] xl:text-[12.5rem] font-heading font-bold text-ink leading-[0.84] md:leading-[0.82] tracking-[-0.06em] uppercase max-w-[8ch] md:max-w-[10ch]">
                                    Suparn
                                    <br />
                                    <span className="relative inline-block">
                                        Nayak
                                        <span className="absolute -right-2 -top-2 md:-right-5 md:-top-5 w-5 h-5 md:w-8 md:h-8 bg-acid border-[3px] border-ink animate-spin-slow" />
                                    </span>
                                </h1>
                                <p className="theme-hero-body font-mono text-[0.95rem] md:text-lg lg:text-xl font-bold mt-5 md:mt-6 max-w-2xl leading-relaxed">
                                    Computer Science student building DSA-first systems, AI applications, and practical software products.
                                    I enjoy turning ideas into working software with clean logic and measurable results across 10+ projects.
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 md:mt-7 max-w-3xl">
                                    <div className="neo-card bg-cream px-4 py-3 md:px-5 md:py-4">
                                        <div className="font-mono text-[0.55rem] font-bold uppercase tracking-[0.25em] text-ink/40">Education</div>
                                        <div className="font-heading font-bold text-lg md:text-xl uppercase tracking-tight text-ink">B.E. CSE</div>
                                    </div>
                                    <div className="neo-card bg-cream px-4 py-3 md:px-5 md:py-4">
                                        <div className="font-mono text-[0.55rem] font-bold uppercase tracking-[0.25em] text-ink/40">CGPA</div>
                                        <div className="font-heading font-bold text-lg md:text-xl uppercase tracking-tight text-ink">8 / 10</div>
                                    </div>
                                    <div className="neo-card bg-cream px-4 py-3 md:px-5 md:py-4">
                                        <div className="font-mono text-[0.55rem] font-bold uppercase tracking-[0.25em] text-ink/40">Focus</div>
                                        <div className="font-heading font-bold text-lg md:text-xl uppercase tracking-tight text-ink">AI + DSA</div>
                                    </div>
                                    <div className="neo-card bg-cream px-4 py-3 md:px-5 md:py-4">
                                        <div className="font-mono text-[0.55rem] font-bold uppercase tracking-[0.25em] text-ink/40">Based In</div>
                                        <div className="font-heading font-bold text-lg md:text-xl uppercase tracking-tight text-ink">Bengaluru</div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="flex flex-col items-center lg:items-end gap-4 md:gap-5 lg:pt-10"
                            >
                                <div className="neo-card bg-acid p-2 overflow-hidden w-full max-w-[18rem] aspect-square sm:max-w-[20rem] md:max-w-[24rem] lg:max-w-[26rem] xl:max-w-[28rem] rotate-[-2deg] neo-glow">
                                    <div className="relative w-full h-full border-[3px] border-ink overflow-hidden">
                                        <Image
                                            src="/headshot.png"
                                            alt="Suparn Nayak headshot"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 448px"
                                            priority
                                        />
                                    </div>
                                </div>
                                <div className="theme-hero-meta text-center lg:text-right font-mono text-[0.65rem] md:text-xs font-bold uppercase tracking-[0.24em] md:tracking-[0.28em]">
                                    AI • Systems • Problem Solving • 10+ Projects
                                </div>
                                <a
                                    href="/contact"
                                    className="neo-card bg-ink text-cream w-full sm:w-auto justify-center px-7 py-3.5 font-heading font-bold text-sm md:text-base uppercase tracking-[0.18em] flex items-center gap-2 hover:bg-acid hover:text-ink transition-all group neo-glow"
                                >
                                    Let&apos;s Connect
                                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </a>
                                <div className="theme-hero-status flex items-center justify-center lg:justify-end gap-3 text-center">
                                    <div className="w-2 h-2 bg-acid animate-pulse-dot" />
                                    <span className="font-mono text-xs font-bold uppercase tracking-wider">Open to internships and collaborations</span>
                                </div>
                            </motion.div>
                        </header>

                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="mt-12 md:mt-20 flex justify-center"
                        >
                            <ChevronDown size={24} className="text-ink/20" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 md:px-8 -mt-4 mb-12 md:mb-20 relative z-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <AnimatedStat value={4} suffix="" label="Core Projects" />
                    <AnimatedStat value={250} suffix="+" label="LeetCode Solved" />
                    <AnimatedStat value={10} suffix="+" label="Projects Built" />
                    <AnimatedStat value={50} suffix="+" label="Students Mentored" />
                </div>
            </section>

            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-20"
            >
                <div className="grid md:grid-cols-5 gap-5">
                    <div className="md:col-span-2 neo-card bg-acid p-6 relative overflow-hidden min-h-[300px] md:min-h-[400px] flex flex-col justify-between">
                        <div className="absolute top-3 right-3 w-8 h-8 border-[3px] border-ink bg-acid animate-spin-slow" />
                        <div>
                            <div className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-ink/50 mb-4">Profile</div>
                            <div className="font-heading font-bold text-[5rem] md:text-[7rem] leading-none tracking-tighter text-ink">SN</div>
                        </div>
                        <div className="space-y-3 relative z-10">
                            <div>
                                <div className="font-mono text-[0.6rem] font-bold uppercase tracking-widest text-ink/50">Based in</div>
                                <div className="font-heading font-bold text-xl uppercase tracking-tight text-ink">Bengaluru, India</div>
                            </div>
                            <div>
                                <div className="font-mono text-[0.6rem] font-bold uppercase tracking-widest text-ink/50">Education</div>
                                <div className="font-mono text-sm font-bold text-ink/70">B.E. Computer Science, Sir MVIT</div>
                                <div className="font-mono text-xs font-bold text-ink/50">CGPA 8 / 10</div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-3 neo-card bg-cream p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
                        <CrossHatch className="absolute top-0 right-0 w-32 h-32 text-ink" />
                        <div className="relative z-10">
                            <div className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-ink/40 mb-3">About</div>
                            <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-tight text-ink mb-6 leading-tight">
                                Builder of
                                <br />
                                Intelligent Systems
                            </h2>
                            <p className="theme-about-body font-mono text-sm md:text-base font-bold leading-relaxed mb-4">
                                I&apos;m a Computer Science student focused on software engineering, machine learning, and strong problem-solving foundations.
                                My projects usually start from a real use case and are shaped by efficient algorithms, practical system design, and clear trade-offs.
                            </p>
                            <p className="theme-about-body font-mono text-sm md:text-base font-bold leading-relaxed">
                                From disaster relief matching and hospital forecasting to RAG-based screening and UAV vision pipelines,
                                I like building software that combines data, intelligence, and product thinking into something useful.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t-[3px] border-ink/10 relative z-10">
                            <a href="https://github.com/Suparnnayak" target="_blank" rel="noreferrer" className="neo-pill bg-ink text-cream hover:bg-acid hover:text-ink flex items-center gap-2">
                                <Github size={14} /> GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/suparn-nayak" target="_blank" rel="noreferrer" className="neo-pill bg-ink text-cream hover:bg-electric hover:text-cream flex items-center gap-2">
                                <Linkedin size={14} /> LinkedIn
                            </a>
                            <a href="https://leetcode.com/u/Suparn_nayak/" target="_blank" rel="noreferrer" className="neo-pill bg-ink text-cream hover:bg-acid hover:text-ink flex items-center gap-2">
                                <Code2 size={14} /> LeetCode
                            </a>
                            <a href="https://www.instagram.com/suparn._.nayak/?hl=en" target="_blank" rel="noreferrer" className="neo-pill bg-ink text-cream hover:bg-hotpink hover:text-cream flex items-center gap-2">
                                <Instagram size={14} /> Instagram
                            </a>
                            <a href="https://x.com/Suparnnayak" target="_blank" rel="noreferrer" className="neo-pill bg-ink text-cream hover:bg-vivid hover:text-cream flex items-center gap-2">
                                <Twitter size={14} /> X
                            </a>
                            <a href="mailto:suparnnayak56@gmail.com" className="neo-pill bg-ink text-cream hover:bg-vivid hover:text-cream flex items-center gap-2">
                                <Mail size={14} /> Email
                            </a>
                        </div>
                    </div>
                </div>
            </motion.section>

            <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-20">
                <div className="theme-section-kicker font-mono text-xs font-bold uppercase tracking-[0.3em] mb-2">Live Feed</div>
                <h2 className="font-heading font-bold text-2xl md:text-3xl uppercase tracking-tight text-ink mb-4">System Status</h2>
                <LiveTerminal />
            </section>

            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-20">
                <div className="border-[3px] border-ink bg-ink py-4 overflow-hidden">
                    <div className="marquee-container font-mono font-bold text-cream/65 uppercase tracking-[0.3em] text-xs md:text-sm">
                        <div className="marquee-content animate-marquee" style={{ animationDuration: "30s" }}>
                            {techLogos.map((logo) => (
                                <span key={logo} className="px-6 md:px-8 hover:text-acid transition-colors">
                                    {logo}&nbsp;•&nbsp;
                                </span>
                            ))}
                        </div>
                        <div className="marquee-content animate-marquee" aria-hidden="true" style={{ animationDuration: "30s" }}>
                            {techLogos.map((logo) => (
                                <span key={`dup-${logo}`} className="px-6 md:px-8">
                                    {logo}&nbsp;•&nbsp;
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6"
                >
                    <div>
                        <div className="theme-section-kicker font-mono text-xs font-bold uppercase tracking-[0.3em] mb-2">Featured</div>
                        <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-ink">Selected Work</h2>
                    </div>
                    <a href="/work" className="font-mono text-sm font-bold uppercase tracking-wider text-ink hover:text-electric transition-colors flex items-center gap-1 group">
                        View All <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                </motion.div>

                <BentoGrid className="md:auto-rows-[18rem] gap-5">
                    <BentoGridItem
                        index={0}
                        className="md:col-span-2 md:row-span-2"
                        title="AidLink"
                        description="Disaster relief matcher built with priority queues, spatial hashing, and top-k ranking"
                        bgColor="bg-acid"
                        textColor="text-ink"
                        icon={<Zap size={36} className="text-ink" />}
                        href="/work/aidlink"
                        header={
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <span className="text-[4.2rem] md:text-[10rem] font-heading font-bold tracking-tighter text-ink/10 leading-none select-none">DSA</span>
                            </div>
                        }
                    />

                    <BentoGridItem
                        index={1}
                        className="md:col-span-1 md:row-span-2"
                        title="HealthFlow AI"
                        description="7-day hospital admissions forecasting with advisory insights"
                        bgColor="bg-electric"
                        textColor="text-cream"
                        icon={<Brain size={36} className="text-cream" />}
                        href="/work/healthflow-ai"
                        header={
                            <div className="h-full w-full p-4 text-cream pointer-events-none">
                                <div className="font-mono text-[0.6rem] font-bold text-cream/55 tracking-widest uppercase">
                                    AI://HEALTHFLOW
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="font-heading font-bold text-[3.2rem] md:text-[5rem] tracking-tighter text-cream/10 leading-none select-none">
                                        AI
                                    </span>
                                </div>
                                <div className="absolute left-4 bottom-16 space-y-1 font-mono text-[0.55rem] font-bold uppercase tracking-[0.22em] text-cream/50">
                                    <p>Forecast ready</p>
                                    <p>DB-first serving</p>
                                    <p>Advisory generated</p>
                                </div>
                                <div className="absolute right-4 bottom-4 text-acid/70">
                                    <Brain size={28} />
                                </div>
                            </div>
                        }
                    />

                    <BentoGridItem
                        index={2}
                        className="md:col-span-1"
                        title="IdeaLens AI"
                        description="RAG-based proposal screening with rubric-grounded evidence"
                        bgColor="bg-hotpink"
                        textColor="text-cream"
                        icon={<Database size={28} className="text-cream" />}
                        href="/work/idealens-ai"
                        header={
                            <div className="absolute inset-0 pointer-events-none">
                                <CircuitPattern className="w-full h-full text-cream/10" />
                            </div>
                        }
                    />

                    <BentoGridItem
                        index={3}
                        className="min-h-[17rem] md:col-span-1"
                        title="SkyRescue Vision"
                        description="UAV detection and human tracking"
                        bgColor="bg-vivid"
                        textColor="text-cream"
                        icon={<Radar size={28} className="text-acid" />}
                        header={
                            <div className="h-full w-full p-3 md:p-4 text-cream pointer-events-none">
                                <div className="flex justify-between items-start">
                                    <div className="font-mono text-[0.55rem] md:text-[0.6rem] font-bold text-cream/55 tracking-[0.18em] md:tracking-widest uppercase">
                                        CV://SKYRESCUE
                                    </div>
                                    <Radar size={24} className="text-acid/70 md:w-7 md:h-7" />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="font-heading font-bold text-[3.8rem] md:text-[6rem] tracking-tighter text-cream/10 leading-none select-none">
                                        UAV
                                    </span>
                                </div>
                                <div className="absolute right-4 bottom-20 hidden md:block font-mono text-[0.55rem] font-bold uppercase tracking-[0.25em] text-cream/45">
                                    Vision Pipeline
                                </div>
                            </div>
                        }
                        href="/work/skyrescue-vision"
                    />

                    <BentoGridItem
                        index={4}
                        className="min-h-[17rem] md:col-span-1"
                        title="The Stack"
                        description="Languages, tools, and deployment flow"
                        bgColor="bg-ink"
                        textColor="text-cream"
                        icon={<Terminal size={28} className="text-cream" />}
                        href="/stack"
                        header={
                            <div className="h-full w-full p-3 md:p-4 text-cream pointer-events-none">
                                <div className="flex justify-between items-start">
                                    <div className="font-mono text-[0.55rem] md:text-[0.6rem] font-bold text-cream/55 tracking-[0.18em] md:tracking-widest uppercase">
                                        TOOLS://STACK
                                    </div>
                                    <Code2 size={24} className="text-cream/55 md:w-7 md:h-7" />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <span className="font-heading font-bold text-[3.3rem] md:text-[5rem] tracking-tighter text-cream/10 leading-none select-none">
                                        DEV
                                    </span>
                                </div>
                                <div className="absolute right-4 bottom-20 hidden md:block font-mono text-[0.55rem] font-bold uppercase tracking-[0.25em] text-cream/45">
                                    Workflow Ready
                                </div>
                            </div>
                        }
                    />
                </BentoGrid>
            </section>

            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-20"
            >
                <div className="neo-card bg-ink text-cream p-6 md:p-12 relative overflow-hidden gradient-top-accent">
                    <CircuitPattern className="absolute top-0 right-0 w-48 md:w-80 h-48 md:h-80 text-cream/5" />
                    <GridDots className="absolute bottom-0 left-0 w-40 h-40 text-cream/5" />
                    <div className="absolute top-0 right-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-16">
                        <div>
                            <div className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-cream/55 mb-3">Approach</div>
                            <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-cream leading-tight mb-6">
                                Build with logic.
                                <br />
                                <span className="gradient-text-acid">Ship with purpose.</span>
                            </h2>
                            <p className="font-mono text-sm font-bold text-cream/78 leading-relaxed mb-6">
                                I like projects where algorithms, data, and user impact come together.
                                My approach is to understand the problem deeply, choose practical tools,
                                and keep the implementation grounded in measurable outcomes.
                            </p>
                            <div className="flex items-center gap-3 p-4 border-[3px] border-cream/10">
                                <div className="w-3 h-3 bg-acid animate-pulse-dot flex-shrink-0" />
                                <span className="font-mono text-xs font-bold text-cream/65 uppercase tracking-wider">Currently exploring ML, backend, and systems-oriented projects</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {[
                                { num: "01", title: "Understand", desc: "Start from the problem, the constraints, and the success metric." },
                                { num: "02", title: "Design", desc: "Use the right data structures, models, and architecture for the job." },
                                { num: "03", title: "Build", desc: "Turn the idea into a working product with clean, testable logic." },
                                { num: "04", title: "Improve", desc: "Measure outcomes, refine the pipeline, and iterate fast." },
                            ].map((step, idx) => (
                                <motion.div
                                    key={step.num}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                                    className="flex gap-4 items-start group"
                                >
                                    <div className="font-heading font-bold text-2xl md:text-3xl text-acid w-12 flex-shrink-0 group-hover:translate-x-1 transition-transform">
                                        {step.num}
                                    </div>
                                    <div className="border-l-[3px] border-cream/10 pl-4 group-hover:border-acid/40 transition-colors">
                                        <div className="font-heading font-bold text-lg uppercase tracking-tight">{step.title}</div>
                                        <div className="font-mono text-xs font-bold text-cream/62 mt-1">{step.desc}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-20"
            >
                <div className="theme-section-kicker font-mono text-xs font-bold uppercase tracking-[0.3em] mb-2">Highlights</div>
                <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-ink mb-8">Achievements</h2>

                <div className="grid md:grid-cols-3 gap-5">
                    {achievements.map((item) => (
                        <motion.div key={item.title} variants={fadeUp}>
                            <div className="neo-card bg-cream p-6 md:p-8 h-full flex flex-col relative overflow-hidden neo-glow group">
                                <div className={`absolute top-0 left-0 w-16 h-16 ${item.accent} opacity-[0.08] group-hover:opacity-[0.15] transition-opacity`} />
                                <div className="relative z-10 flex flex-col h-full">
                                    <Trophy size={24} className="theme-card-icon mb-4 flex-shrink-0" />
                                    <div className="font-heading font-bold text-base uppercase tracking-tight mb-3">{item.title}</div>
                                    <p className="theme-card-body font-mono text-sm font-bold leading-relaxed">{item.body}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            <motion.section
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-20"
            >
                <div className="theme-section-kicker font-mono text-xs font-bold uppercase tracking-[0.3em] mb-2">Focus Areas</div>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6">
                    <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-ink">What I Build</h2>
                    <a href="/services" className="font-mono text-sm font-bold uppercase tracking-wider text-ink hover:text-vivid transition-colors flex items-center gap-1 group">
                        Details <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                    <motion.div variants={fadeUp}>
                        <div className="neo-card bg-acid text-ink p-5 md:p-8 h-full relative overflow-hidden group gradient-top-accent neo-glow">
                            <CrossHatch className="absolute top-0 right-0 w-24 h-24 text-ink opacity-50" />
                            <div className="relative z-10">
                                <Zap size={32} className="mb-4" />
                                <h3 className="font-heading font-bold text-2xl md:text-3xl uppercase tracking-tight mb-3">Algorithms & Systems</h3>
                                <p className="font-mono text-sm font-bold opacity-70 leading-relaxed mb-4">
                                    I enjoy building systems where data structures, ranking logic, and efficient processing directly shape the product.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["C++", "Priority Queues", "Heaps", "Spatial Hashing"].map((t) => (
                                        <span key={t} className="px-2 py-1 border-2 border-ink/30 font-mono text-[0.6rem] font-bold uppercase">{t}</span>
                                    ))}
                                </div>
                                <a href="/services" className="inline-flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                                    Learn More <ArrowUpRight size={14} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <div className="neo-card bg-electric text-cream p-5 md:p-8 h-full relative overflow-hidden group gradient-top-accent neo-glow-blue">
                            <CircuitPattern className="absolute bottom-0 left-0 w-32 h-32 text-cream/10" />
                            <div className="relative z-10">
                                <Brain size={32} className="mb-4 text-acid" />
                                <h3 className="font-heading font-bold text-2xl md:text-3xl uppercase tracking-tight mb-3">AI Applications</h3>
                                <p className="font-mono text-sm font-bold opacity-70 leading-relaxed mb-4">
                                    Forecasting, RAG pipelines, advisory systems, and computer vision workflows that combine ML with usable products.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["LightGBM", "RAG", "LLaMA-3", "YOLO"].map((t) => (
                                        <span key={t} className="px-2 py-1 border-2 border-cream/30 font-mono text-[0.6rem] font-bold uppercase">{t}</span>
                                    ))}
                                </div>
                                <a href="/services" className="inline-flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                                    Learn More <ArrowUpRight size={14} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto px-4 md:px-8 mb-12"
            >
                <div className="neo-card bg-hotpink text-cream p-6 md:p-12 text-center relative overflow-hidden gradient-top-accent">
                    <GridDots className="absolute inset-0 w-full h-full text-cream/5" />
                    <div className="absolute top-0 left-1/4 w-1/2 h-32 bg-acid/10 blur-3xl pointer-events-none" />
                    <div className="relative z-10">
                        <h2 className="font-heading font-bold text-3xl md:text-6xl uppercase tracking-tight mb-4">Ready to collaborate?</h2>
                        <p className="font-mono text-sm md:text-base font-bold opacity-80 mb-4 max-w-xl mx-auto">
                            I&apos;m currently open to internships, project collaborations, hackathons, and interesting software problems.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 text-cream/78">
                            <Star size={14} className="text-acid" />
                            <span className="font-mono text-xs font-bold uppercase tracking-wider">Best reached by email or LinkedIn</span>
                            <Star size={14} className="text-acid" />
                        </div>
                        <a
                            href="/contact"
                            className="inline-flex w-full sm:w-auto justify-center bg-cream text-ink font-heading font-bold text-base md:text-lg uppercase tracking-wider px-8 py-4 border-[3px] border-ink shadow-neo hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all hover-shake"
                        >
                            Get In Touch →
                        </a>
                    </div>
                </div>
            </motion.section>

            <div className="w-full bg-acid border-t-[3px] border-ink py-3 overflow-hidden">
                <div className="marquee-container font-mono font-bold text-ink uppercase tracking-widest text-sm">
                    <div className="marquee-content animate-marquee-reverse">
                        <span className="px-6">OPEN TO INTERNSHIPS&nbsp;///&nbsp;</span>
                        <span className="px-6">PROJECT COLLABORATIONS&nbsp;///&nbsp;</span>
                        <span className="px-6">HACKATHON READY&nbsp;///&nbsp;</span>
                        <span className="px-6">OPEN TO INTERNSHIPS&nbsp;///&nbsp;</span>
                        <span className="px-6">PROJECT COLLABORATIONS&nbsp;///&nbsp;</span>
                        <span className="px-6">HACKATHON READY&nbsp;///&nbsp;</span>
                    </div>
                    <div className="marquee-content animate-marquee-reverse" aria-hidden="true">
                        <span className="px-6">OPEN TO INTERNSHIPS&nbsp;///&nbsp;</span>
                        <span className="px-6">PROJECT COLLABORATIONS&nbsp;///&nbsp;</span>
                        <span className="px-6">HACKATHON READY&nbsp;///&nbsp;</span>
                        <span className="px-6">OPEN TO INTERNSHIPS&nbsp;///&nbsp;</span>
                        <span className="px-6">PROJECT COLLABORATIONS&nbsp;///&nbsp;</span>
                        <span className="px-6">HACKATHON READY&nbsp;///&nbsp;</span>
                    </div>
                </div>
            </div>

            {konamiActive && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="fixed top-20 left-1/2 -translate-x-1/2 z-[400] neo-card bg-acid text-ink px-6 py-3 font-mono text-sm font-bold uppercase"
                >
                    hidden mode activated
                    <button onClick={() => setKonamiActive(false)} className="ml-4 underline text-xs">dismiss</button>
                </motion.div>
            )}
        </div>
    );
}
