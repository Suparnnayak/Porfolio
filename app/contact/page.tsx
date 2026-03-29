"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Mail, Send, Loader2, CheckCircle, MapPin, Clock, MessageCircle, Github, Linkedin, ChevronDown, Copy, Check, Instagram, Twitter, Code2 } from "lucide-react";
import { CircuitPattern, GridDots, CrossHatch } from "@/components/ui/Decorative";

/* ─── Data ─── */
const contactInfo = [
    { icon: <Mail size={18} />, label: "Email", value: "suparnnayak56@gmail.com", href: "mailto:suparnnayak56@gmail.com" },
    { icon: <MapPin size={18} />, label: "Location", value: "Bengaluru, India" },
    { icon: <Clock size={18} />, label: "Response Time", value: "Within 24 hours" },
    { icon: <MessageCircle size={18} />, label: "Open To", value: "Internships, collaborations, hackathons" },
];

const faqs = [
    { q: "What kind of opportunities are you looking for?", a: "I&apos;m mainly looking for internships, project collaborations, hackathons, and software roles where I can contribute to AI, full-stack, or systems-oriented work." },
    { q: "What technologies do you work with most?", a: "Python, C++, SQL, Flask, Next.js, PostgreSQL, LightGBM, RAG pipelines, ChromaDB, and computer vision tools like YOLO and OpenCV." },
    { q: "Are your projects available publicly?", a: "Yes. The projects featured here are linked to GitHub, and I&apos;m happy to discuss the design choices, algorithms, and trade-offs behind them." },
    { q: "Can you collaborate on hackathons or student projects?", a: "Yes. I enjoy collaborating on ambitious ideas, especially when they involve problem solving, AI, useful product design, or strong system logic." },
];

const interestOptions = [
    "Internship Opportunity",
    "Project Collaboration",
    "Hackathon Team-Up",
    "Open Source / Mentoring",
    "General Inquiry",
];

/* ─── Animations ─── */
const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ContactPage() {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        interest: "",
        brief: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText("suparnnayak56@gmail.com");
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2000);
        } catch {
            setError("Could not copy automatically. Please use: suparnnayak56@gmail.com");
        }
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        setError("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            setIsSuccess(true);
        } catch (err: any) {
            setError(err.message || "Failed to send. Please use the copy email option below.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const canAdvance = () => {
        switch (step) {
            case 0: return formData.name.trim().length > 0;
            case 1: return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
            case 2: return formData.interest.length > 0;
            case 3: return formData.brief.trim().length > 10;
            default: return false;
        }
    };

    return (
        <div className="min-h-screen bg-cream pb-24">

            {/* Status bar */}
            <div className="w-full bg-ink border-b-[3px] border-ink py-2 px-4 md:px-8 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-acid animate-pulse-dot" />
                    <span className="font-mono text-xs font-bold text-cream/75 uppercase tracking-widest">secure://contact</span>
                </div>
                <span className="font-mono text-xs font-bold text-cream/60 tracking-widest uppercase">Encrypted</span>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8">

                {/* Header */}
                <section className="mt-8 md:mt-16 mb-8 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-ink/40 mb-3">Get in Touch</div>
                        <h1 className="text-4xl sm:text-6xl md:text-[7rem] font-heading font-bold text-ink leading-[0.85] tracking-tighter uppercase mb-6">
                            Let&apos;s
                            <br />
                            Connect
                        </h1>
                        <p className="font-mono text-sm md:text-base font-bold text-ink/60 max-w-lg leading-relaxed">
                            If you have an internship opportunity, project idea, collaboration, or just want to talk tech, feel free to reach out.
                            I&apos;ve worked on 10+ projects across AI, full-stack, and problem-solving oriented builds.
                        </p>
                    </motion.div>
                </section>

                <div className="grid lg:grid-cols-5 gap-5 mb-12 md:mb-20">

                    {/* ─── Form ─── */}
                    <div className="lg:col-span-3">
                        <AnimatePresence mode="wait">
                            {isSuccess ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="neo-card bg-acid text-ink p-8 md:p-12 text-center min-h-[400px] flex flex-col items-center justify-center"
                                >
                                    <CheckCircle size={48} className="mb-4" />
                                    <h3 className="font-heading font-bold text-3xl uppercase tracking-tight mb-3">
                                        Message Sent!
                                    </h3>
                                    <p className="font-mono text-sm font-bold opacity-70 max-w-sm mx-auto">
                                        Thanks for reaching out. I&apos;ll get back to you as soon as I can.
                                    </p>
                                    <div className="flex gap-3 mt-6">
                                        <a href="/work" className="neo-card bg-ink text-cream px-4 py-2 font-mono text-sm font-bold uppercase">
                                            View Work
                                        </a>
                                        <a href="https://github.com/Suparnnayak" target="_blank" className="neo-card bg-ink text-cream px-4 py-2 font-mono text-sm font-bold uppercase flex items-center gap-2">
                                            <Github size={14} /> GitHub
                                        </a>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="neo-card bg-cream p-6 md:p-8 relative overflow-hidden"
                                >
                                    <CrossHatch className="absolute top-0 right-0 w-24 h-24 text-ink opacity-[0.03]" />

                                    {/* Step indicator */}
                                    <div className="flex gap-2 mb-8">
                                        {[0, 1, 2, 3].map((s) => (
                                            <div key={s} className={`h-1 flex-1 transition-colors ${s <= step ? "bg-acid" : "bg-ink/10"}`} />
                                        ))}
                                    </div>

                                    {/* Step label */}
                                    <div className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.3em] text-ink/30 mb-2">
                                        Step {step + 1} of 4
                                    </div>

                                    <AnimatePresence mode="wait">
                                        {step === 0 && (
                                            <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                                <h3 className="font-heading font-bold text-2xl uppercase tracking-tight mb-6">
                                                    What&apos;s your name?
                                                </h3>
                                                <input
                                                    type="text"
                                                    placeholder="Your name"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full bg-transparent border-b-[3px] border-ink/20 focus:border-acid outline-none font-mono text-lg font-bold py-3 transition-colors placeholder:text-ink/20"
                                                    autoFocus
                                                    onKeyDown={(e) => e.key === "Enter" && canAdvance() && setStep(1)}
                                                />
                                            </motion.div>
                                        )}

                                        {step === 1 && (
                                            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                                <h3 className="font-heading font-bold text-2xl uppercase tracking-tight mb-6">
                                                    Your email?
                                                </h3>
                                                <input
                                                    type="email"
                                                    placeholder="hello@company.com"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full bg-transparent border-b-[3px] border-ink/20 focus:border-acid outline-none font-mono text-lg font-bold py-3 transition-colors placeholder:text-ink/20"
                                                    autoFocus
                                                    onKeyDown={(e) => e.key === "Enter" && canAdvance() && setStep(2)}
                                                />
                                            </motion.div>
                                        )}

                                        {step === 2 && (
                                            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                                <h3 className="font-heading font-bold text-2xl uppercase tracking-tight mb-6">
                                                    What is this about?
                                                </h3>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                    {interestOptions.map((interest) => (
                                                        <button
                                                            key={interest}
                                                            onClick={() => setFormData({ ...formData, interest })}
                                                            className={`neo-card p-4 font-mono text-sm font-bold text-left transition-all ${formData.interest === interest
                                                                    ? "bg-acid text-ink border-acid"
                                                                    : "bg-cream text-ink hover:bg-ink/5"
                                                                }`}
                                                        >
                                                            {interest}
                                                        </button>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}

                                        {step === 3 && (
                                            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                                <h3 className="font-heading font-bold text-2xl uppercase tracking-tight mb-6">
                                                    Tell me a bit more
                                                </h3>
                                                <textarea
                                                    placeholder="Share the role, idea, project context, or anything else you want me to know."
                                                    value={formData.brief}
                                                    onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                                                    rows={6}
                                                    className="w-full bg-transparent border-[3px] border-ink/10 focus:border-acid outline-none font-mono text-sm font-bold p-4 transition-colors placeholder:text-ink/20 resize-none"
                                                    autoFocus
                                                />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Error message */}
                                    {error && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="mt-4 p-3 bg-hotpink/10 border-[2px] border-hotpink/30 font-mono text-xs font-bold text-hotpink"
                                        >
                                            {error}
                                        </motion.div>
                                    )}

                                    {/* Navigation */}
                                    <div className="flex justify-between items-center mt-8">
                                        <button
                                            onClick={() => setStep(Math.max(0, step - 1))}
                                            className={`font-mono text-sm font-bold uppercase tracking-wider transition-colors ${step === 0 ? "opacity-0 pointer-events-none" : "text-ink/40 hover:text-ink"
                                                }`}
                                        >
                                            ← Back
                                        </button>

                                        {step < 3 ? (
                                            <button
                                                onClick={() => canAdvance() && setStep(step + 1)}
                                                disabled={!canAdvance()}
                                                className={`neo-card px-6 py-3 font-heading font-bold text-sm uppercase tracking-wider flex items-center gap-2 transition-all ${canAdvance()
                                                        ? "bg-ink text-cream hover:bg-acid hover:text-ink"
                                                        : "bg-ink/20 text-ink/30 cursor-not-allowed"
                                                    }`}
                                            >
                                                Next <ArrowUpRight size={14} />
                                            </button>
                                        ) : (
                                            <button
                                                onClick={handleSubmit}
                                                disabled={!canAdvance() || isSubmitting}
                                                className={`neo-card px-6 py-3 font-heading font-bold text-sm uppercase tracking-wider flex items-center gap-2 transition-all ${canAdvance() && !isSubmitting
                                                        ? "bg-acid text-ink hover:shadow-neo"
                                                        : "bg-ink/20 text-ink/30 cursor-not-allowed"
                                                    }`}
                                            >
                                                {isSubmitting ? (
                                                    <><Loader2 size={16} className="animate-spin" /> Sending...</>
                                                ) : (
                                                    <><Send size={16} /> Send Message</>
                                                )}
                                            </button>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* ─── Sidebar ─── */}
                    <div className="lg:col-span-2 space-y-5">
                        {/* Contact info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="neo-card bg-ink text-cream p-6 relative overflow-hidden gradient-top-accent"
                        >
                            <CircuitPattern className="absolute top-0 right-0 w-24 h-24 text-cream/5" />
                            <div className="relative z-10">
                                <div className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.2em] text-cream/60 mb-4">Direct Lines</div>
                                <div className="space-y-4">
                                    {contactInfo.map((info) => (
                                        <div key={info.label} className="flex items-start gap-3">
                                            <div className="text-acid mt-0.5 flex-shrink-0">{info.icon}</div>
                                            <div>
                                                <div className="font-mono text-[0.6rem] font-bold uppercase tracking-widest text-cream/60">{info.label}</div>
                                                {info.href ? (
                                                    <a href={info.href} className="font-mono text-sm font-bold text-cream hover:text-acid transition-colors break-all">
                                                        {info.value}
                                                    </a>
                                                ) : (
                                                    <div className="font-mono text-sm font-bold text-cream/80">{info.value}</div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Social links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="grid grid-cols-2 gap-3"
                        >
                            <a
                                href="https://github.com/Suparnnayak"
                                target="_blank"
                                rel="noreferrer"
                                className="neo-card bg-cream p-4 text-center font-mono text-sm font-bold uppercase hover:bg-ink hover:text-cream transition-all flex items-center justify-center gap-2 group"
                            >
                                <Github size={16} /> GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/suparn-nayak/"
                                target="_blank"
                                rel="noreferrer"
                                className="neo-card bg-cream p-4 text-center font-mono text-sm font-bold uppercase hover:bg-electric hover:text-cream transition-all flex items-center justify-center gap-2 group"
                            >
                                <Linkedin size={16} /> LinkedIn
                            </a>
                            <a
                                href="https://leetcode.com/u/Suparn_nayak/"
                                target="_blank"
                                rel="noreferrer"
                                className="neo-card bg-cream p-4 text-center font-mono text-sm font-bold uppercase hover:bg-acid hover:text-ink transition-all flex items-center justify-center gap-2 group"
                            >
                                <Code2 size={16} /> LeetCode
                            </a>
                            <a
                                href="https://www.instagram.com/suparn._.nayak/?hl=en"
                                target="_blank"
                                rel="noreferrer"
                                className="neo-card bg-cream p-4 text-center font-mono text-sm font-bold uppercase hover:bg-hotpink hover:text-cream transition-all flex items-center justify-center gap-2 group"
                            >
                                <Instagram size={16} /> Instagram
                            </a>
                            <a
                                href="https://x.com/Suparnnayak"
                                target="_blank"
                                rel="noreferrer"
                                className="neo-card bg-cream p-4 text-center font-mono text-sm font-bold uppercase hover:bg-vivid hover:text-cream transition-all flex items-center justify-center gap-2 group col-span-2"
                            >
                                <Twitter size={16} /> X
                            </a>
                        </motion.div>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35 }}
                            onClick={copyEmail}
                            className="neo-card w-full bg-cream p-4 text-center font-mono text-sm font-bold uppercase hover:bg-acid transition-all flex items-center justify-center gap-2"
                        >
                            {copied ? <Check size={16} /> : <Copy size={16} />}
                            {copied ? "Email Copied" : "Copy Email"}
                        </motion.button>

                        {/* Trust signals */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="neo-card bg-acid text-ink p-5"
                        >
                            <div className="font-heading font-bold text-lg uppercase tracking-tight mb-2">Quick Snapshot</div>
                            <p className="font-mono text-xs font-bold opacity-70 leading-relaxed">
                                B.E. Computer Science student, 250+ LeetCode problems solved, 50+ students mentored,
                                and 10+ projects built across AI, systems, and full-stack development.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* ─── FAQ ─── */}
                <motion.section
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="mb-12 md:mb-20"
                >
                    <div className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-ink/40 mb-2">Common Questions</div>
                    <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-tight text-ink mb-6">FAQ</h2>

                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <motion.div key={i} variants={fadeUp}>
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="neo-card w-full bg-cream p-5 text-left group"
                                >
                                    <div className="flex justify-between items-center gap-4">
                                        <h4 className="font-heading font-bold text-base uppercase tracking-tight group-hover:text-electric transition-colors">
                                            {faq.q}
                                        </h4>
                                        <ChevronDown
                                            size={18}
                                            className={`flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                                        />
                                    </div>
                                    <AnimatePresence>
                                        {openFaq === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="font-mono text-sm font-bold text-ink/60 leading-relaxed mt-4 pt-4 border-t-[2px] border-ink/10">
                                                    {faq.a}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </div>
    );
}
