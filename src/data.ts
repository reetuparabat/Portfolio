import { Project, SkillCategory, Internship, Education } from "./types";

export const PERSONAL_INFO = {
  name: "Reetu Parabat",
  title: "AI/ML Undergraduate",
  branch: "Artificial Intelligence & Machine Learning (AIML)",
  college: "KLS Vishwanathrao Deshpande Institute of Technology (KLS VDIT), Haliyal",
  currentSemester: "7th Semester",
  careerGoal: "Become a Machine Learning Engineer",
  email: "reetuparabat761@gmail.com",
  phone: "6360948249",
  location: "Dharwad, Karnataka, India",
  github: "https://github.com/reetuparabat",
  linkedin: "https://www.linkedin.com/in/reetu-parabat-a6711b340",
  resumeFilename: "Reetu_Parabat_Resume.pdf", // Factual reference
  proofStatement: "I am an AIML undergraduate who designs and builds practical AI-powered applications using modern LLMs, APIs, and web technologies. I focus on building explainable AI systems, automating business processes, and designing centralized data platforms. My portfolio showcases real-world application building as I work toward my long-term goal of becoming a Machine Learning Engineer."
};

// Skill Track project definition retained for future inclusion once completed.
// NOTE: Skill Track is intentionally hidden from the public portfolio UI until completion.
export const SKILL_TRACK_PROJECT: Project = {
  id: "skill-track",
  name: "Skill Track – Internship & Skill Management System",
  type: "Academic Project",
  duration: "2026",
  shortDescription: "A web-based internship and skill management system developed for students, faculty, and the placement cell to manage internship records, student skills, and placement-related information in a centralized platform.",
  problem: "Managing internship details and student skills manually is time-consuming and makes it difficult for faculty and placement coordinators to track student progress efficiently.",
  solution: "Developed a centralized web application that allows different users to securely manage internship information, student profiles, skills, and placement activities through role-based access.",
  technologies: [
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Node.js",
    "HTML",
    "CSS"
  ],
  keyFeatures: [
    "Student, Faculty, and Placement Cell login",
    "Role-based authentication",
    "Student profile management",
    "Internship record management",
    "Skill tracking",
    "Dashboard for different user roles",
    "Placement eligibility management"
  ],
  architecture: undefined, // "Information not provided."
  myRole: "Developed the web application, implemented role-based login and dashboards, built modules for managing student, internship, and skill information, and participated in testing and improving the application.",
  status: "Completed (2026)",
  githubUrl: "", // "Information not provided."
  liveDemoUrl: null, // "Information not provided."
  resumeReference: "Skill Track – Internship & Skill Management System (2026) on Page 1 of Resume."
};

// Active public projects list displayed in the portfolio UI.
// Perceptiq AI is currently the sole featured project until Skill Track is added back.
export const PROJECTS: Project[] = [
  {
    id: "perceptiq-ai",
    name: "Perceptiq AI",
    type: "AI Commerce Intelligence Platform",
    duration: "Ongoing (2026)",
    shortDescription: "An AI-powered platform that helps businesses understand how AI assistants perceive their products and websites. It analyzes publicly available website content and provides structured insights into product information, trust, business credibility, and recommendation readiness.",
    problem: "As AI assistants become a common way for users to discover products and services, businesses have limited visibility into how AI systems understand and recommend their brands.",
    solution: "Built a platform that crawls website content, extracts structured information, evaluates multiple business intelligence factors using deterministic scoring, and generates explainable AI insights to help businesses improve their AI readiness.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Google Gemini API",
      "Website Crawling",
      "Deterministic Scoring Engine",
      "Evidence Extraction",
      "Confidence Engine",
      "REST APIs"
    ],
    keyFeatures: [
      "Website content crawling and evidence extraction",
      "AI perception & reasoning analysis",
      "Recommendation readiness analysis",
      "Trust and authority evaluation",
      "Explainable AI-generated business insights",
      "Evidence-based deterministic scoring engine",
      "User-friendly dashboard for business owners"
    ],
    architecture: [
      "Modular intelligence engines for knowledge & evidence extraction",
      "Business perception and trust analysis pipelines",
      "Recommendation readiness and decision support engines",
      "Deterministic scoring, evidence validation, and explainable AI pipelines"
    ],
    myRole: "Solo Developer — Responsible for product idea, system architecture, frontend, backend, AI integration, testing, and deployment.",
    status: "Ongoing (2026)",
    githubUrl: "https://github.com/reetuparabat/Perceptiq-AI",
    liveDemoUrl: null, // "Information not provided."
    resumeReference: "Perceptiq AI – Explainable AI Visibility & Recommendation Intelligence Platform for Businesses (2026) on Page 1 of Resume.",
    caseStudy: {
      title: "Perceptiq AI – AI Commerce Intelligence Platform",
      problem: "Businesses can measure their search engine performance using SEO tools. However, there were few tools that explained how AI assistants evaluate and recommend products. I built Perceptiq AI to help companies understand and improve their visibility in AI-driven recommendations through evidence-based analysis and explainable insights.",
      whatIDidAndDecided: {
        overview: "I built Perceptiq AI as a solo project. I handled everything myself, including problem identification, system architecture, development, and deployment.",
        keyDecisions: [
          "Chose a TypeScript full-stack architecture using React for the frontend and Node.js with Express for backend APIs, website crawling, and business logic.",
          "Initially relied too heavily on the language model. I redesigned the architecture so deterministic scoring and confidence estimation analyze measurable website evidence first.",
          "Integrated the Google Gemini API only for explaining validated evidence instead of generating decision scores."
        ],
        customModules: [
          "Website Crawling",
          "Evidence Extraction",
          "Deterministic Scoring",
          "Confidence Estimation",
          "AI Perception",
          "AI Reasoning",
          "Recommendation Intelligence",
          "Trust Intelligence",
          "Decision Intelligence"
        ]
      },
      whatCameOfIt: {
        overview: "I tested Perceptiq AI using real public websites to validate the complete workflow.",
        outcomes: [
          "Crawled websites",
          "Extracted evidence",
          "Calculated deterministic scores",
          "Generated explainable AI insights grounded in extracted evidence"
        ],
        integrationNote: "All modules integrated correctly and produced consistent outputs.",
        limitationsNote: "This project has not yet been evaluated at production scale or measured against business KPIs, and I intentionally avoid claiming results I have not validated."
      },
      whatIdDoDifferently: [
        "Expand the evidence model with additional AI visibility signals",
        "Improve crawler robustness across more website structures",
        "Build a larger evaluation framework for many real-world e-commerce websites",
        "Add automated testing",
        "Improve scalability and performance",
        "Introduce benchmarking and model versioning"
      ],
      technologiesUsed: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "Google Gemini API",
        "Website Crawling",
        "Deterministic Scoring Engine",
        "Evidence Extraction",
        "Confidence Engine",
        "REST APIs"
      ],
      myRole: {
        title: "Solo Developer",
        responsibilities: [
          "Product idea",
          "System architecture",
          "Frontend",
          "Backend",
          "AI integration",
          "Testing",
          "Deployment"
        ]
      },
      lessonsLearned: "This project taught me that trustworthy AI systems should be evidence-driven rather than LLM-driven. AI explanations become significantly more reliable when they explain deterministic results instead of generating decisions independently."
    }
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Programming",
    skills: ["Python", "Java"]
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Visual Studio Code"]
  }
];

export const EDUCATION: Education = {
  institution: "KLS Vishwanathrao Deshpande Institute Of Technology",
  degree: "BE in Computer Science and Engineering (AI&ML)",
  cgpa: "8.8 CGPA",
  duration: "2023 – 2027"
};

export const INTERNSHIP: Internship = {
  title: "Java Full Stack Developer Virtual Internship",
  company: "EduSkills Academy",
  duration: "Oct 2025 – Dec 2025",
  bulletPoints: [
    "Learned Java full stack development through hands on projects and practical assignments.",
    "Worked with Java, SQL, and web application development fundamentals.",
    "Gained experience in backend development and database integration."
  ]
};
