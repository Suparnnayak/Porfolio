export interface Project {
    id: string;
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    tech: string[];
    metrics: { label: string; value: string }[];
    color: string;
    textColor: string;
    link: string;
    category: string;
    problem: string;
    solution: string;
    outcomes: string[];
}

export const projects: Project[] = [
    {
        id: "001",
        slug: "aidlink",
        title: "AidLink",
        description: "A disaster relief resource matcher built with priority queues, spatial hashing, and heap-based ranking to connect urgent requests with the right donors quickly.",
        longDescription: "AidLink is a DSA-focused disaster relief matching system designed to prioritize urgent requests, search nearby donors efficiently, and produce reliable top-k matches under resource constraints.",
        tech: ["C++", "Priority Queue", "Spatial Hashing", "Heaps", "CLI"],
        metrics: [
            { label: "Lookup", value: "Avg O(1)" },
            { label: "Urgency", value: "1-5" },
            { label: "Batch Test", value: "50/30" },
        ],
        color: "bg-acid",
        textColor: "text-ink",
        link: "https://github.com/Suparnnayak/AidLink",
        category: "Algorithms / Systems",
        problem: "Relief distribution often breaks down because requests differ in urgency, quantity, and deadlines, while donor discovery becomes slow and noisy as the dataset grows.",
        solution: "I combined priority-queue scheduling for urgency-aware ordering, grid-hash spatial indexing for efficient donor lookup, and heap-based top-k ranking with greedy quantity assignment to produce fast, deterministic matches.",
        outcomes: [
            "Priority-based donor-request matching",
            "Deterministic tie-breakers for fair scheduling",
            "Average O(1) cell access with bounded radius expansion",
            "Evaluated on 50 requests and 30 donors",
        ],
    },
    {
        id: "002",
        slug: "healthflow-ai",
        title: "HealthFlow AI",
        description: "A hospital forecasting and advisory platform that predicts 7-day admissions and serves AI-backed trend explanations for planning and staffing.",
        longDescription: "HealthFlow AI is a full-stack hospital intelligence platform that combines admissions forecasting, precomputed daily predictions, and AI-generated operational guidance for smarter planning.",
        tech: ["LightGBM", "Next.js 14", "PostgreSQL", "Flask", "Groq LLM", "Vercel"],
        metrics: [
            { label: "Forecast", value: "7 Days" },
            { label: "Serving", value: "DB-first" },
            { label: "Stack", value: "Full Stack" },
        ],
        color: "bg-electric",
        textColor: "text-cream",
        link: "https://github.com/Suparnnayak/HealthFlow-AI",
        category: "AI / Full-Stack",
        problem: "Hospital teams need early visibility into admissions trends, but real-time model inference inside request handlers can increase latency and make prediction delivery harder to scale reliably.",
        solution: "I built a pipeline around historical inflow plus external signals, generated forecasts ahead of time, stored them in PostgreSQL, and served them through a Next.js + Flask architecture with AI advisory responses for explanations and staffing guidance.",
        outcomes: [
            "7-day admissions forecasting workflow",
            "Precomputed predictions instead of runtime inference",
            "Database-first serving for lower request overhead",
            "AI-generated trend and staffing recommendations",
        ],
    },
    {
        id: "003",
        slug: "idealens-ai",
        title: "IdeaLens AI",
        description: "A RAG-based hackathon proposal screening system that parses PDFs, retrieves rubric-specific evidence, and produces structured 100-point evaluations.",
        longDescription: "IdeaLens AI helps screen hackathon submissions at scale by combining template-aware PDF chunking, embedding-based retrieval, and strict JSON scoring grounded in rubric evidence.",
        tech: ["Python", "LLaMA-3", "ChromaDB", "Sentence Transformers", "NLP", "RAG"],
        metrics: [
            { label: "Rubric", value: "100 pts" },
            { label: "Sections", value: "5" },
            { label: "Embeddings", value: "384-d" },
        ],
        color: "bg-hotpink",
        textColor: "text-cream",
        link: "https://github.com/Suparnnayak/HN_Screening-",
        category: "RAG / NLP",
        problem: "Judging large numbers of proposals manually is slow and inconsistent, especially when evaluators need evidence-backed scoring across multiple rubric dimensions.",
        solution: "I designed a rubric-aware pipeline that chunks each PDF into five sections, stores 384-dimensional embeddings in ChromaDB, retrieves supporting evidence per criterion, and enforces strict JSON scoring with validation and invalid-submission checks.",
        outcomes: [
            "Template-aware chunking across five rubric sections",
            "Evidence-grounded scoring with vector retrieval",
            "Near-duplicate detection for submission quality control",
            "Strict JSON output on a 100-point rubric",
        ],
    },
    {
        id: "004",
        slug: "skyrescue-vision",
        title: "SkyRescue Vision",
        description: "A UAV search-and-rescue computer vision contribution focused on real-time human detection and more stable multi-object tracking on RGB streams.",
        longDescription: "SkyRescue Vision is a software contribution to a UAV-SAR pipeline where I worked on improving human detection and tracking performance for real-time RGB stream analysis.",
        tech: ["Python", "YOLO", "OpenCV", "SORT", "Kalman Filtering"],
        metrics: [
            { label: "Tracking", value: "+25%" },
            { label: "Pipeline", value: "Real-time" },
            { label: "Workflow", value: "MAVLink" },
        ],
        color: "bg-vivid",
        textColor: "text-cream",
        link: "https://github.com/Suparnnayak/human_detection_using_rgb_dataset",
        category: "Computer Vision",
        problem: "Search-and-rescue video feeds are noisy and fast-moving, which makes stable tracking difficult and increases the chance of missed detections during critical operations.",
        solution: "I contributed to the RGB-stream detection and tracking workflow, improving multi-object tracking stability by tuning SORT association with Kalman-based adjustments for more reliable target continuity.",
        outcomes: [
            "Real-time UAV-SAR human detection pipeline support",
            "Improved tracking stability by about 25%",
            "Integrated YOLO, OpenCV, and SORT workflow",
            "MAVLink-ready deployment direction",
        ],
    },
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
    return projects.map((p) => p.slug);
}
