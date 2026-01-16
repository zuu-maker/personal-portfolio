export const CONFIG = {
  name: "Mkhuzo Zulu",
  title: "Software Engineer",
  tagline: "Crafting Digital Experiences with Code & Creativity",
  description:
    "I transform complex problems into elegant solutions. Full-stack developer with expertise in AI, machine learning, and modern web technologies.",
  github: "https://github.com/zuu-maker",
  resumeUrl:
    "https://firebasestorage.googleapis.com/v0/b/resume-903bf.appspot.com/o/pdf%2Fmkhuzo%20j%20zulu.pdf?alt=media&token=a1e0e98d-66f7-4e48-8078-1f4f46e301c9",
  email: "mkhuzozulu@outlook.com",

  // EmailJS Config
  email: "mkhuzozulu@outlook.com",
};

export const portfolioItems = [
  {
    title: "Sirius Educational Trust",
    description:
      "A comprehensive learning management system connecting teachers and students through subscription-based courses. Features real-time collaboration, progress tracking, and payment integration.",
    demo: "https://set-tests.vercel.app/",
    code: "",
    image: "/portfolio/set.png",
    videos: [], // Add video URLs here: ["https://youtube.com/...", "https://vimeo.com/..."]
    tags: ["Next.js", "MongoDB", "Stripe", "LMS"],
    featured: true,
    color: "#6366f1",
  },
  {
    title: "Stock Manager",
    description:
      "A precision inventory control system for bars and restaurants featuring a custom algorithm that calculates remaining servings of alcohol based on weight measurements. Streamlines stock auditing with real-time tracking, session-based counting, Excel/PDF exports, and supervisor controls for accurate loss prevention.",
    demo: "", // Add demo URL if available
    code: "",
    image: "/portfolio/stock.png",
    videos: [],
    tags: ["Next.js", "Inventory", "Algorithm", "Audit"],
    featured: true,
    color: "#22c55e",
  },
  {
    title: "Portfolio Website",
    description:
      "My original developer portfolio showcasing a clean, responsive design with smooth scroll animations, dark mode support, and an interactive project gallery. Built to establish my personal brand and demonstrate frontend expertise.",
    demo: "https://portfolio-hazel-mu-87.vercel.app/",
    code: "",
    image: "/portfolio/port.png",
    videos: [], // Add video URLs here: ["https://youtube.com/...", "https://vimeo.com/..."]
    tags: ["Next.js", "Franer-motion", "Tailwind css"],
    featured: true,
    color: "#6366f1",
  },
  {
    title: "Student Progress Tracking System",
    description:
      "An intelligent classroom management system where teachers create and assign quizzes to track student performance. Features AI-driven analytics that identify struggling topics, visualize learning trends, and generate actionable insights to help educators personalize instruction and improve outcomes.",
    demo: "",
    code: "",
    image: "/portfolio/gifted-minds.png",
    videos: [], // Add video URLs here: ["https://youtube.com/...", "https://vimeo.com/..."]
    tags: ["Next.js", "LMS", "Analytics"],
    featured: true,
    color: "#6366f1",
  },
  {
    title: "Lungisa Quotation Manager",
    description:
      "Enterprise quotation management system streamlining the sales process with automated calculations, PDF generation, and customer relationship features.",
    demo: "https://quotation.lungisasolutions.com/",
    code: "",
    image: "/portfolio/quote.png",
    videos: [],
    tags: ["React", "Node.js", "PostgreSQL", "SaaS"],
    featured: true,
    color: "#10b981",
  },
  {
    title: "AI Bridge Inspection System",
    description:
      "Revolutionary AI-powered infrastructure inspection combining YOLOv8 computer vision, ontological reasoning, and LLMs for automated defect detection and severity assessment.",
    demo: "",
    code: "https://github.com/zuu-maker/bridge-front",
    image: "/portfolio/detection-demo.png",
    videos: [],
    tags: ["Python", "YOLOv8", "FastAPI", "Computer Vision"],
    featured: true,
    color: "#f59e0b",
  },
  {
    title: "Lungisa Solutions",
    description:
      "Modern corporate website showcasing tech services with stunning animations, responsive design, and optimized performance.",
    demo: "https://lungisasolutions.com/",
    code: "",
    image: "/portfolio/lungisa.png",
    videos: [],
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    color: "#3b82f6",
  },
  {
    title: "AI Flashcard Generator",
    description:
      "Intelligent study companion using AI to generate flashcards from any content, with spaced repetition algorithms for optimal learning.",
    demo: "https://flashcard-saas-kohl.vercel.app/",
    code: "",
    image: "/portfolio/web10.png",
    videos: [],
    tags: ["OpenAI", "React", "Firebase"],
    color: "#8b5cf6",
  },
  {
    title: "Automated Trading Bot",
    description:
      "Sophisticated trading system executing algorithmic strategies via Futu API with real-time TradingView signal integration and risk management.",
    demo: "",
    code: "https://github.com/zuu-maker/trading_web_ui",
    image: "/portfolio/trade.png",
    videos: [],
    tags: ["Python", "WebSocket", "Trading API"],
    color: "#ef4444",
  },
  {
    title: "Healthy Heels",
    description:
      "Full-featured e-commerce platform with pay-on-delivery system, inventory management, and customer analytics.",
    demo: "https://healthy-heels-809aa.firebaseapp.com/",
    code: "",
    image: "/portfolio/healthy.png",
    videos: [],
    tags: ["React", "Firebase", "E-commerce"],
    color: "#ec4899",
  },
  {
    title: "Tesla Clone",
    description:
      "Pixel-perfect Tesla website recreation demonstrating advanced CSS techniques, smooth scroll animations, and responsive design mastery.",
    demo: "https://tesla-clone-a55ff.web.app/",
    code: "",
    image: "/portfolio/tesla.png",
    videos: [],
    tags: ["React", "CSS", "Animation"],
    color: "#64748b",
  },
];

export const services = [
  {
    title: "Full-Stack Development",
    description:
      "End-to-end web applications with modern frameworks, secure backends, and scalable databases.",
    icon: "code",
    tools: [
      "React",
      "Next.js",
      "Node.js",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "c#",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Mobile Development",
    description:
      "Cross-platform mobile experiences that feel native on both iOS and Android.",
    icon: "mobile",
    tools: ["React Native", "Expo", "Firebase", "Push Notifications"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Intelligent systems from computer vision to predictive analytics and NLP solutions.",
    icon: "brain",
    tools: ["PyTorch", "TensorFlow", "YOLOv8", "Scikit-learn", "OpenAI"],
    gradient: "from-orange-500 to-red-500",
  },
];
