export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  technologies: string[];
  summary: string;
  highlights: string[];
  specs?: Record<string, string>;
  award?: string;
  metrics?: { label: string; value: string; note: string }[];
  githubUrl?: string;
  liveDemoUrl?: string;
}

export const PORTFOLIO_DATA = {
  candidate: {
    name: "MOHIT S K",
    submark: "AI & SOFTWARE ENGINEERING",
    headline: "Building intelligent systems. Engineering practical solutions.",
    introduction:
      "I’m a Computer Science undergraduate exploring AI integration, computer vision, intelligent automation, cybersecurity, and full-stack engineering. I enjoy turning complex technical challenges into practical, deployable software.",
    email: "mohit17717@gmail.com",
    phone: "+91 7418634741",
    location: "Chennai, India",
    education: {
      institution: "SRM Institute of Science and Technology",
      degree: "B.Tech in Computer Science and Engineering",
      timeline: "2023 – 2027",
      cgpa: "8.35 / 10",
      semester: "6th Semester",
      priorEducation: [
        {
          institution: "Tagore Public School",
          level: "Class 12",
          timeline: "2022 – 2023",
          score: "68.5%",
        },
        {
          institution: "Maharishi International Residential School",
          level: "Class 10",
          timeline: "2020 – 2021",
          score: "65.6%",
        },
      ],
    },
    internship: {
      role: "Cybersecurity Intern",
      company: "Prompt Infotech",
      location: "Coimbatore, India",
      timeline: "June 2025 – July 2025",
      description:
        "Completed hands-on cybersecurity internship gaining practical exposure to Metasploit, Wireshark, Airmon-ng, and Kali Linux. Developed applied skills in ethical hacking, network vulnerability mapping, and penetration testing through collaborative diagnostics.",
    },
    achievements: [
      {
        title: "2nd Place at SaRaM Project Day 2026",
        track: "Edge Computing & Embedded AI",
        project: "Aura Vision",
        description:
          "Awarded second place for Aura Vision, an edge-first AI vision assistant running real-time multimodal inference on CPU-only embedded hardware.",
      },
    ],
    links: {
      linkedin: "https://www.linkedin.com/in/mohit-sk-085sk",
      github: "https://github.com/MOHIT17717",
      repoUrl: "https://github.com/MOHIT17717/portfolio.in",
      resumePdf: "/MOHIT_S_K.pdf",
    },
    languages: [
      { name: "Tamil", level: "Native proficiency" },
      { name: "English", level: "Working proficiency" },
      { name: "Hindi", level: "Elementary proficiency" },
    ],
    interests: [
      { name: "PC Building", detail: "Custom workstation thermal optimization & local LLM compute setups" },
      { name: "Horse Riding", detail: "Discipline, balance, and spatial focus" },
      { name: "Farming", detail: "Family agricultural roots, sustainable systems, and practical resilience" },
    ],
  },

  evidenceStrip: [
    {
      metric: "Edge AI / CPU-Only",
      label: "Aura Vision",
      detail: "Dual YOLOv8 + BLIP + Llama on Raspberry Pi 4 (8GB)",
    },
    {
      metric: "2nd Place Award",
      label: "SaRaM Project Day 2026",
      detail: "Recognized in Edge Computing & Embedded AI track",
    },
    {
      metric: "30+ Pages / 500+ Tasks",
      label: "MANAGE+ Enterprise Scale",
      detail: "Next.js 16 full-stack with autonomous Llama 3.3 consequence engine",
    },
    {
      metric: "8.35 CGPA",
      label: "B.Tech Computer Science",
      detail: "SRMIST (2023–2027) · Practical AI, Systems & Cybersecurity",
    },
  ],

  projects: [
    {
      id: "aura-vision",
      number: "01",
      title: "Aura Vision",
      subtitle: "Edge-First Real-Time Multimodal Vision Assistant for the Visually Impaired",
      category: "AI, Computer Vision & Edge Computing",
      award: "2nd Place · SaRaM Project Day 2026 (Edge Computing & Embedded AI)",
      technologies: ["YOLOv8", "Custom YOLO", "BLIP", "OpenCV", "Local Llama", "Raspberry Pi 4", "Python"],
      summary:
        "An edge-first real-time vision system engineered to provide low-latency spatial guidance without relying on cloud infrastructure. Built on a Raspberry Pi 4 (8GB RAM) with strict CPU-only execution, it couples dual YOLOv8 models for rapid spatial segmentation, temporal confidence gating to suppress jitter, BLIP for contextual scene captioning, and a local quantized Llama layer for logical spatial reasoning and audio feedback.",
      highlights: [
        "Dual-YOLOv8 architecture: dedicated near-field obstacle detector paired with a spatial landmark identifier.",
        "Temporal confidence gating: sliding-window consensus filter that eliminates bounding-box flicker and audio false alarms.",
        "Multimodal fusion: BLIP captures situational scene context, which the local Llama layer translates into concise, directional audio alerts.",
        "CPU-only edge deployment on Raspberry Pi 4 (8GB RAM) with memory footprint optimized below 3.8 GB.",
      ],
      specs: {
        "Hardware Target": "Raspberry Pi 4 Model B (8 GB LPDDR4)",
        "SoC Execution": "Quad-core Cortex-A72 @ 1.8GHz (CPU-Only)",
        "Input Stream": "640x480 video feed @ 30fps",
        "Feedback Latency": "Sub-200ms end-to-end token & audio generation",
      },
      githubUrl: "https://github.com/MOHIT17717",
    },
    {
      id: "manage-plus",
      number: "02",
      title: "MANAGE+",
      subtitle: "Enterprise Project Intelligence Platform with Autonomous Consequence Engine",
      category: "Full-Stack Web Engineering & Workflow Automation",
      technologies: [
        "Next.js 16",
        "React",
        "TypeScript",
        "Node.js",
        "Prisma ORM",
        "PostgreSQL",
        "Llama 3.3 70B",
        "OpenAI API",
        "Tailwind CSS",
      ],
      summary:
        "A full-stack enterprise project management platform designed to automate dependency management, risk surfacing, and workload balancing. Features 30+ dashboard views (Kanban, Sprint Planning, Risk Heatmaps, Budget Tracking, Impact Analyzer) supporting 120+ users and 500+ tasks, augmented with an autonomous PM agent and consequence engine powered by Llama 3.3 70B.",
      highlights: [
        "Autonomous PM Agent & Consequence Engine: detects blocked or overdue tasks, calculates multi-hop critical-path impacts, and executes constraint-aware reassignments.",
        "Resume-reported metrics: 43% faster blocker resolution and 31% better workload balancing across test sprint cycles.",
        "Five-engine analytical pipeline: CPM scheduling, resource allocation, risk quantification, team health telemetry, and portfolio optimization.",
        "Role-based AI chat system featuring five distinct personas and 11 executable tool definitions for project intelligence.",
      ],
      metrics: [
        {
          label: "Blocker Resolution",
          value: "43% Faster",
          note: "Resume-reported result in automated blocker triage vs manual escalation",
        },
        {
          label: "Workload Balancing",
          value: "31% Better",
          note: "Resume-reported result in standard deviation allocation across 120+ users",
        },
        {
          label: "Platform Scale",
          value: "30+ Pages / 500+ Tasks",
          note: "Production full-stack architecture with Prisma ORM and PostgreSQL",
        },
      ],
      githubUrl: "https://github.com/NavneethKonduru/manageplus",
    },
    {
      id: "aero-scan",
      number: "03",
      title: "Aero Scan",
      subtitle: "Network Security Scanning, Port Mapping & Vulnerability Diagnostic Tool",
      category: "Cybersecurity & Technical Diagnostics",
      technologies: ["Python", "Tkinter", "Nmap", "HTTP", "Shodan.io", "Kali Linux"],
      summary:
        "A network security and diagnostic application built to scan IP addresses and URLs, identify open ports, detect running services, map potential Common Vulnerabilities and Exposures (CVE), and compute latency baselines. It replaces raw terminal outputs with structured, developer-actionable risk reports paired with remediation recommendations.",
      highlights: [
        "Automated TCP/UDP port mapping with service fingerprinting and version detection.",
        "Potential vulnerability mapping cross-referenced with CVE intelligence databases.",
        "Network latency metrics and route profiling for diagnostic visibility.",
        "Developer-friendly reporting system detailing risk levels (Critical, High, Medium, Low) and concrete mitigation steps.",
      ],
      specs: {
        "Core Engine": "Python socket scanning & Nmap service integration",
        "User Interface": "Desktop GUI built with Tkinter",
        "Intelligence Sources": "Shodan.io API integration & CVE registry lookups",
        "Security Focus": "Rapid discovery of misconfigured open ports & outdated daemons",
      },
      githubUrl: "https://github.com/MOHIT17717",
    },
    {
      id: "edfa-vision",
      number: "04",
      title: "EDFA Vision",
      subtitle: "Interactive Web-Based Erbium-Doped Fiber Amplifier (EDFA) Optical Simulator",
      category: "Computational Modeling & Technical Visualization",
      technologies: ["HTML5", "CSS3", "JavaScript", "Chart.js", "Three.js"],
      summary:
        "An interactive computational simulation tool modeling Erbium-Doped Fiber Amplifier (EDFA) dynamics based on the Giles–Desurvire mathematical model. It visualizes real-time gain, noise figure, Amplified Spontaneous Emission (ASE) spectrum, and population inversion across the telecom C-band (1530–1565 nm).",
      highlights: [
        "Rigorous implementation of the Giles–Desurvire differential rate equations for dual-pumped optical fiber.",
        "Real-time calculations of spectral gain, noise figure, and ASE power across the complete 1530–1565 nm C-band.",
        "Interactive 3D fiber cross-section visualization powered by Three.js showing active core ion excitation.",
        "Six dynamic Chart.js visualizations synchronized with 15+ tunable optical inputs (pump power, fiber length, erbium doping concentration).",
      ],
      specs: {
        "Theoretical Model": "Giles–Desurvire Rate Equations",
        "Spectral Range": "C-band (1530 nm to 1565 nm)",
        "Visual Engines": "Three.js (3D Cross-Section) + Chart.js (6 Coordinated Curves)",
        "Parameter Control": "15+ Live Tunable Inputs with Real-Time Reactive Re-computation",
      },
      githubUrl: "https://github.com/MOHIT17717",
    },
  ] as ProjectItem[],

  approach: {
    title: "ENGINEERING APPROACH",
    subtitle: "How I approach complex technical problems, from initial investigation to reliable deployment.",
    steps: [
      {
        number: "01",
        title: "Understand the Problem",
        summary: "Identify real constraints, user friction points, and hardware/system boundaries before choosing tools.",
      },
      {
        number: "02",
        title: "Investigate Technologies",
        summary: "Evaluate available models, libraries, and runtime options against compute budgets and latency targets.",
      },
      {
        number: "03",
        title: "Design the System",
        summary: "Establish data schemas, pipeline contracts, and human-in-the-loop review gates to ensure safety and stability.",
      },
      {
        number: "04",
        title: "Build Practical Prototypes",
        summary: "Create lightweight, testable implementations rapidly without premature over-engineering.",
      },
      {
        number: "05",
        title: "Test & Evaluate",
        summary: "Benchmark quantitative latency, error rates, and qualitative usability using representative inputs.",
      },
      {
        number: "06",
        title: "Deploy, Document & Improve",
        summary: "Package software for straightforward deployment and write clear documentation so teams can adopt it easily.",
      },
    ],
  },

  skills: {
    title: "TECHNICAL CAPABILITIES",
    subtitle: "Verified skills and toolsets grounded directly in my resume.",
    categories: [
      {
        name: "Programming Languages",
        skills: ["Python", "Java", "TypeScript", "JavaScript", "HTML5", "CSS3"],
      },
      {
        name: "Frameworks & Libraries",
        skills: ["React.js", "Next.js", "Node.js", "Prisma ORM", "OpenCV", "NumPy", "Pandas", "Matplotlib", "Three.js", "Chart.js"],
      },
      {
        name: "AI & Computer Vision",
        skills: ["YOLOv8 / Custom YOLO", "BLIP Multimodal", "Local Llama Integration", "Prompt Engineering", "Temporal Gating", "Edge AI Optimization"],
      },
      {
        name: "Databases & Infrastructure",
        skills: ["PostgreSQL", "MongoDB", "Google Cloud Platform (GCP)", "Raspberry Pi (Embedded Linux)", "Git", "VS Code"],
      },
      {
        name: "Cybersecurity & Diagnostics",
        skills: ["Penetration Testing", "Metasploit", "Wireshark", "Airmon-ng", "Kali Linux", "Nmap", "IAM Fundamentals"],
      },
      {
        name: "Practical & Hardware",
        skills: ["PC Building & Hardware Architecture", "Robotics Basics", "Full-Stack Web Development", "REST APIs"],
      },
    ],
  },
};
