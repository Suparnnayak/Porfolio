import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ui/ThemeProvider";
import ThemeToggle from "@/components/ui/ThemeToggle";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import LoadingScreen from "@/components/ui/LoadingScreen";
import CommandPalette from "@/components/ui/CommandPalette";
import MagneticButton from "@/components/ui/MagneticButton";
import Link from "next/link";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-heading",
    weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
    weight: ["400", "500", "600", "700", "800"],
});

function getMetadataBase() {
    const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

    if (!rawSiteUrl) {
        return new URL("http://localhost:3000");
    }

    const normalizedSiteUrl = /^https?:\/\//i.test(rawSiteUrl) ? rawSiteUrl : `https://${rawSiteUrl}`;

    try {
        return new URL(normalizedSiteUrl);
    } catch {
        return new URL("http://localhost:3000");
    }
}

export const metadata: Metadata = {
    metadataBase: getMetadataBase(),
    title: "Suparn Nayak — Portfolio",
    description:
        "Portfolio of Suparn Nayak, a Computer Science student building AI, systems, and DSA-driven software projects.",
    keywords: ["Suparn Nayak", "portfolio", "computer science", "AI", "systems", "DSA", "machine learning", "developer"],
    authors: [{ name: "Suparn Nayak" }],
    icons: {
        icon: "/fevicon.png",
        shortcut: "/fevicon.png",
        apple: "/fevicon.png",
    },
    openGraph: {
        title: "Suparn Nayak — Portfolio",
        description: "Computer Science student building AI, systems, and software projects.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
            <body className="font-mono font-bold bg-cream text-ink antialiased selection:bg-acid selection:text-ink cursor-none">
                <ThemeProvider>
                    <LoadingScreen />
                    <CustomCursor />
                    <ScrollProgress />
                    <CommandPalette />

                    {/* Main content */}
                    <main>{children}</main>

                    {/* Bottom Navigation */}
                    <nav className="fixed bottom-0 left-0 w-full bg-ink border-t-[3px] border-ink z-[100] shadow-[0px_-4px_20px_rgba(0,0,0,0.3)]">
                        <div className="px-2 md:px-10 py-2.5 md:py-4 flex items-center gap-2 md:gap-4">
                            <div className="flex-1 overflow-x-auto hide-scrollbar">
                                <div className="w-max min-w-full flex items-center justify-start md:justify-center gap-1.5 md:gap-2 whitespace-nowrap pr-2">
                                    <MagneticButton>
                                        <Link
                                            href="/"
                                            className="font-mono text-[0.62rem] md:text-sm font-bold uppercase tracking-[0.1em] md:tracking-[0.16em] text-cream/85 hover:text-acid transition-colors px-2.5 md:px-3 py-2"
                                        >
                                            Home
                                        </Link>
                                    </MagneticButton>
                                    <MagneticButton>
                                        <Link
                                            href="/work"
                                            className="font-mono text-[0.62rem] md:text-sm font-bold uppercase tracking-[0.1em] md:tracking-[0.16em] text-cream/85 hover:text-acid transition-colors px-2.5 md:px-3 py-2"
                                        >
                                            Work
                                        </Link>
                                    </MagneticButton>
                                    <MagneticButton>
                                        <Link
                                            href="/stack"
                                            className="font-mono text-[0.62rem] md:text-sm font-bold uppercase tracking-[0.1em] md:tracking-[0.16em] text-cream/85 hover:text-acid transition-colors px-2.5 md:px-3 py-2"
                                        >
                                            Stack
                                        </Link>
                                    </MagneticButton>
                                    <MagneticButton>
                                        <Link
                                            href="/services"
                                            className="font-mono text-[0.62rem] md:text-sm font-bold uppercase tracking-[0.1em] md:tracking-[0.16em] text-cream/85 hover:text-acid transition-colors px-2.5 md:px-3 py-2"
                                        >
                                            Services
                                        </Link>
                                    </MagneticButton>
                                    <MagneticButton>
                                        <Link
                                            href="/resume"
                                            className="font-mono text-[0.62rem] md:text-sm font-bold uppercase tracking-[0.1em] md:tracking-[0.16em] text-cream/85 hover:text-acid transition-colors px-2.5 md:px-3 py-2"
                                        >
                                            Resume
                                        </Link>
                                    </MagneticButton>
                                </div>
                            </div>

                            <div className="flex items-center gap-1.5 md:gap-2 flex-shrink-0 border-l border-cream/10 pl-2 md:pl-4">
                                <ThemeToggle />
                                <MagneticButton>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center bg-acid text-ink px-3.5 md:px-5 py-2 md:py-2.5 font-heading font-bold text-[0.62rem] md:text-sm uppercase tracking-[0.1em] md:tracking-[0.16em] border-[2px] md:border-[3px] border-ink hover:bg-cream transition-colors whitespace-nowrap"
                                    >
                                        Let&apos;s Talk
                                    </Link>
                                </MagneticButton>
                            </div>
                        </div>
                    </nav>

                    {/* Keyboard shortcut hint - desktop only */}
                    <div className="fixed bottom-16 right-4 hidden lg:block z-[99]">
                        <div className="font-mono text-[0.5rem] font-bold text-ink/20 uppercase tracking-wider flex items-center gap-1">
                            <kbd className="px-1 py-0.5 border border-ink/10 text-ink/20">⌘K</kbd>
                            Quick Nav
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
