import React from "react";
import {
  Github,
  ExternalLink,
  HelpCircle,
  Cpu,
  CheckCircle2,
  RotateCcw,
  Wrench,
  UserCheck,
  FileText,
  AlertCircle,
  Layers,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Image as ImageIcon,
  Compass,
  Code,
  Terminal,
  Database,
  Layout,
  ArrowDown,
  Sparkles,
  GitBranch,
  Calendar,
  Check
} from "lucide-react";
import { PROJECTS, PERSONAL_INFO } from "../data";

interface PerceptiqCaseStudyViewProps {
  onNavigateToContact?: () => void;
  onNavigateToResume?: () => void;
}

export default function PerceptiqCaseStudyView({
  onNavigateToContact,
  onNavigateToResume
}: PerceptiqCaseStudyViewProps) {
  const project = PROJECTS[0];
  const cs = project.caseStudy!;

  // Grouped Tech Stack per Requirement #6
  const techStackGrouped = [
    {
      category: "Frontend",
      description: "User Interface & Visualization",
      items: ["React 18", "TypeScript", "Tailwind CSS", "Lucide React"]
    },
    {
      category: "Backend",
      description: "API Services & Processing",
      items: ["Node.js", "Express.js", "RESTful APIs", "Website Crawler Engine"]
    },
    {
      category: "AI & ML",
      description: "Reasoning & Scoring System",
      items: ["Google Gemini API (@google/genai)", "Deterministic Scoring Engine", "Evidence Validation Engine"]
    },
    {
      category: "Database & Storage",
      description: "Data Models & Validation",
      items: ["In-Memory Structured Store", "JSON Schema Validators", "Firestore Ready Architecture"]
    },
    {
      category: "Tools & Deployment",
      description: "Development & Hosting",
      items: ["Git", "GitHub", "Vite", "ESBuild", "Cloud Run / Containerized Environment"]
    }
  ];

  // Development Journey per Requirement #7
  const developmentTimeline = [
    {
      phase: "Phase 1: Concept & Initial MVP",
      time: "Early 2026",
      title: "Direct LLM Query Prototype",
      description: "Built an initial proof-of-concept relying directly on language model prompts. Identified core limitations: outputs lacked explainability, scores varied between runs, and analysis was not anchored in verifiable website facts."
    },
    {
      phase: "Phase 2: Architecture Redesign",
      time: "Mid 2026",
      title: "Crawler & Evidence Extraction Engine",
      description: "Pivoted architecture to extract structured business evidence directly from raw HTML and web metadata before calling any AI services, establishing a factual baseline."
    },
    {
      phase: "Phase 3: Deterministic Scoring",
      time: "Mid 2026",
      title: "Mathematical Scoring & Gemini Grounding",
      description: "Implemented mathematical scoring algorithms for trust and recommendation readiness. Integrated the Google Gemini API solely to generate human-readable explanations grounded strictly in pre-computed scores."
    },
    {
      phase: "Phase 4: Dashboard & Open Source Release",
      time: "Current (2026)",
      title: "Complete Intelligence Platform",
      description: "Finalized the full-stack TypeScript platform, added comprehensive case study documentation, published open-source repository on GitHub, and verified end-to-end pipeline execution."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 font-sans text-[#111827]">
      
      {/* Case Study Top Banner */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-mono font-bold tracking-wider uppercase">
              Featured Case Study
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#10B981] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span>{project.status}</span>
            </span>
          </div>

          <a
            href="https://github.com/reetuparabat/Perceptiq-AI"
            target="_blank"
            rel="noopener noreferrer"
            id="top-github-banner-btn"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111827] text-white rounded-full text-xs font-bold hover:bg-slate-800 transition-colors shadow-xs"
          >
            <Github className="w-4 h-4" />
            <span>View on GitHub</span>
          </a>
        </div>

        <div className="space-y-3">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#111827] tracking-tight">
            Perceptiq AI – AI Commerce Visibility & Recommendation Intelligence Platform
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl">
            An explainable AI platform that evaluates how search engines and AI assistants understand, evaluate, and recommend products using evidence-based web analysis and deterministic scoring.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100 text-xs font-sans">
          <div>
            <p className="font-mono text-slate-400 font-bold uppercase">Role</p>
            <p className="font-bold text-[#111827] mt-0.5">Solo Developer</p>
          </div>
          <div>
            <p className="font-mono text-slate-400 font-bold uppercase">Stack</p>
            <p className="font-bold text-[#111827] mt-0.5">React, Node, Express, Gemini API</p>
          </div>
          <div>
            <p className="font-mono text-slate-400 font-bold uppercase">Focus</p>
            <p className="font-bold text-[#111827] mt-0.5">Explainable AI & Scoring</p>
          </div>
          <div>
            <p className="font-mono text-slate-400 font-bold uppercase">Repository</p>
            <a
              href="https://github.com/reetuparabat/Perceptiq-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#2563EB] hover:underline flex items-center gap-1 mt-0.5"
            >
              <span>reetuparabat/Perceptiq-AI</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* 1. PROJECT OVERVIEW */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 text-[#2563EB] font-bold text-lg uppercase tracking-tight">
          <Compass className="w-5 h-5" />
          <h2 className="font-heading font-extrabold text-2xl text-[#111827]">1. Project Overview</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#F9FAFB] border border-slate-200/80 rounded-2xl p-5 space-y-2">
            <h3 className="font-bold text-xs uppercase tracking-wider font-mono text-[#2563EB]">What It Is</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Perceptiq AI is an intelligence platform that analyzes public e-commerce websites and measures how effectively AI assistants (such as ChatGPT, Gemini, and Perplexity) can parse, comprehend, and recommend their products.
            </p>
          </div>

          <div className="bg-[#F9FAFB] border border-slate-200/80 rounded-2xl p-5 space-y-2">
            <h3 className="font-bold text-xs uppercase tracking-wider font-mono text-[#2563EB]">Who It Is For</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Designed for online merchants, e-commerce brand managers, and digital strategists who need transparent, actionable insights into their brand's visibility in AI-driven recommendation channels.
            </p>
          </div>

          <div className="bg-[#F9FAFB] border border-slate-200/80 rounded-2xl p-5 space-y-2">
            <h3 className="font-bold text-xs uppercase tracking-wider font-mono text-[#2563EB]">The Problem It Solves</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Bridges the critical gap between traditional SEO and modern AI recommendation engine discovery, replacing ungrounded LLM guesses with deterministic, evidence-based metrics.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 text-red-600 font-bold text-lg uppercase tracking-tight">
          <HelpCircle className="w-5 h-5 text-red-500" />
          <h2 className="font-heading font-extrabold text-2xl text-[#111827]">2. The Problem</h2>
        </div>

        <div className="space-y-4 text-slate-700 text-base leading-relaxed">
          <p>
            As consumer discovery shifts from traditional keyword search engines to AI assistants, businesses face an unprecedented challenge: <strong>they have zero visibility into how AI models perceive and evaluate their products.</strong>
          </p>
          <div className="bg-red-50/60 border border-red-200/80 rounded-2xl p-6 space-y-3 text-sm">
            <h3 className="font-bold text-red-900 uppercase tracking-wider font-mono text-xs">
              Key Business Pain Points:
            </h3>
            <ul className="space-y-2 text-slate-800 list-disc pl-5">
              <li><strong>Black-Box AI Recommendations:</strong> E-commerce brands do not know why an AI assistant recommends a competitor's product over their own.</li>
              <li><strong>Unstructured Website Data:</strong> Many product pages lack structured metadata, causing AI crawlers to misinterpret specifications, pricing, or availability.</li>
              <li><strong>Missing Trust Signals:</strong> AI assistants prioritize high-confidence sources. Websites missing clear return policies, security badges, or company details get penalized in AI recommendations.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. THE SOLUTION */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 text-[#10B981] font-bold text-lg uppercase tracking-tight">
          <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
          <h2 className="font-heading font-extrabold text-2xl text-[#111827]">3. The Solution</h2>
        </div>

        <p className="text-slate-700 text-base leading-relaxed">
          Perceptiq AI introduces an <strong>evidence-first intelligence framework</strong>. Instead of asking a language model to subjectively rate a website, Perceptiq AI crawls website content, extracts verifiable business facts, applies deterministic mathematical scoring, and uses AI strictly to explain the findings.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-5 bg-emerald-50/50 border border-emerald-200/80 rounded-2xl space-y-2">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span>Evidence-Based Analysis</span>
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              Harvests real website metadata, product details, return policies, and trust indicators before generating any score vectors.
            </p>
          </div>

          <div className="p-5 bg-emerald-50/50 border border-emerald-200/80 rounded-2xl space-y-2">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#10B981]" />
              <span>Grounded AI Explanations</span>
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              Google Gemini API generates natural-language business diagnostics that cite specific harvested evidence, eliminating AI hallucinations.
            </p>
          </div>
        </div>
      </section>

      {/* 4. SYSTEM ARCHITECTURE (VISUAL CENTERPIECE) */}
      <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 space-y-8 shadow-2xs">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3 text-blue-600 font-bold text-lg uppercase tracking-tight">
            <Layers className="w-5 h-5" />
            <h2 className="font-sans font-extrabold text-2xl text-slate-900 tracking-tight">4. System Architecture</h2>
          </div>
          <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase">
            End-to-End Pipeline
          </span>
        </div>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          The architecture executes a strict sequential pipeline that transforms raw public website URL inputs into evidence-grounded AI recommendation diagnostics.
        </p>

        {/* HIGH-PRECISION ARCHITECTURE DIAGRAM CENTERPIECE */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-8 shadow-xs border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
            <div>
              <h3 className="font-sans font-extrabold text-base text-white tracking-tight">
                Perceptiq AI Data Flow Architecture
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-0.5">
                Deterministic Processing Pipeline & Gemini Grounding Engine
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono font-bold text-slate-300">Stateless & Async</span>
            </div>
          </div>

          {/* Sequential Pipeline Flow Nodes */}
          <div className="space-y-4 max-w-3xl mx-auto font-sans">
            
            {/* Layer 1: Input */}
            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                  01
                </div>
                <div>
                  <p className="font-bold text-sm text-white">Target Web Domain Input</p>
                  <p className="text-xs text-slate-400 font-mono">Public HTTPS URL ingestion & protocol validation</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-slate-700/60 text-slate-300 text-[10px] font-mono font-semibold uppercase">
                Input Layer
              </span>
            </div>

            <div className="flex justify-center text-blue-400">
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>

            {/* Layer 2: Crawler Engine */}
            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                  02
                </div>
                <div>
                  <p className="font-bold text-sm text-white">Web Content Crawler & DOM Parser</p>
                  <p className="text-xs text-slate-400 font-mono">HTML fetching, DOM tree traversal, open-graph & schema extraction</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-blue-900/40 text-blue-300 border border-blue-700/50 text-[10px] font-mono font-semibold uppercase">
                Ingestion Engine
              </span>
            </div>

            <div className="flex justify-center text-blue-400">
              <ArrowDown className="w-5 h-5" />
            </div>

            {/* Layer 3: Evidence Extraction */}
            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                  03
                </div>
                <div>
                  <p className="font-bold text-sm text-white">Evidence Extraction & Sanitization</p>
                  <p className="text-xs text-slate-400 font-mono">Normalizes schema.org JSON-LD, trust signals, policies & specs</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-blue-900/40 text-blue-300 border border-blue-700/50 text-[10px] font-mono font-semibold uppercase">
                Factual Grounding
              </span>
            </div>

            <div className="flex justify-center text-blue-400">
              <ArrowDown className="w-5 h-5" />
            </div>

            {/* Layer 4: Parallel Intelligence Engines Grid */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-[11px] font-mono font-bold text-blue-400 uppercase tracking-wider">
                  04 • Parallel Intelligence & Diagnostic Engines
                </span>
                <span className="text-[10px] font-mono text-slate-500">Dual Processing Nodes</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl space-y-1">
                  <p className="font-bold text-xs text-white flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-blue-400" />
                    <span>Deterministic Scoring Engine</span>
                  </p>
                  <p className="text-[11px] text-slate-400 font-mono">
                    Calculates mathematical trust (0-100), policy clarity, and recommendation readiness vectors.
                  </p>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl space-y-1">
                  <p className="font-bold text-xs text-white flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Grounded Gemini API Diagnostic</span>
                  </p>
                  <p className="text-[11px] text-slate-400 font-mono">
                    Passes pre-computed evidence arrays to Gemini 2.5 Flash to generate grounded executive explanations.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center text-emerald-400">
              <ArrowDown className="w-5 h-5" />
            </div>

            {/* Layer 5: Output Business Report */}
            <div className="bg-emerald-950/60 border border-emerald-700/60 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                  05
                </div>
                <div>
                  <p className="font-bold text-sm text-white">Executive Recommendation Dashboard</p>
                  <p className="text-xs text-slate-300 font-mono">Delivers score breakdowns, gap analysis, and prioritized action plans</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-emerald-900/60 text-emerald-300 border border-emerald-700/60 text-[10px] font-mono font-semibold uppercase">
                Final Output
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 5. KEY FEATURES */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 text-[#2563EB] font-bold text-lg uppercase tracking-tight">
          <Sparkles className="w-5 h-5" />
          <h2 className="font-heading font-extrabold text-2xl text-[#111827]">5. Key Features</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-[#F9FAFB] border border-slate-200 rounded-2xl space-y-2">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Code className="w-4 h-4 text-[#2563EB]" />
              <span>Automated Website Content Crawling</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fetches and parses public website text, metadata, and structural tags to construct an initial entity graph.
            </p>
          </div>

          <div className="p-5 bg-[#F9FAFB] border border-slate-200 rounded-2xl space-y-2">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#2563EB]" />
              <span>Deterministic Scoring Engine</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Evaluates trust indicators, contact clarity, policy completeness, and schema markup with reproducible mathematical logic.
            </p>
          </div>

          <div className="p-5 bg-[#F9FAFB] border border-slate-200 rounded-2xl space-y-2">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
              <span>Grounded Gemini Explanation Pipeline</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Uses the Google Gemini API with pre-validated evidence as strict context, providing human-readable explanations without hallucinating.
            </p>
          </div>

          <div className="p-5 bg-[#F9FAFB] border border-slate-200 rounded-2xl space-y-2">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Layout className="w-4 h-4 text-[#2563EB]" />
              <span>Recommendation Readiness Dashboard</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Visualizes core scores, evidence checklists, and prioritized actionable steps for brand managers in a clean TypeScript React UI.
            </p>
          </div>
        </div>
      </section>

      {/* 6. TECHNOLOGY STACK (GROUPED BY CATEGORY) */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 text-[#2563EB] font-bold text-lg uppercase tracking-tight">
          <Wrench className="w-5 h-5" />
          <h2 className="font-heading font-extrabold text-2xl text-[#111827]">6. Technology Stack</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {techStackGrouped.map((grp, i) => (
            <div key={i} className="p-5 bg-[#F9FAFB] border border-slate-200 rounded-2xl space-y-3">
              <div>
                <p className="text-xs font-mono font-bold text-[#2563EB] uppercase">{grp.category}</p>
                <p className="text-xs text-slate-400 font-sans">{grp.description}</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {grp.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 bg-white border border-slate-200 text-[#111827] text-xs font-mono font-semibold rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. DEVELOPMENT JOURNEY */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 text-[#2563EB] font-bold text-lg uppercase tracking-tight">
          <GitBranch className="w-5 h-5" />
          <h2 className="font-heading font-extrabold text-2xl text-[#111827]">7. Development Journey</h2>
        </div>

        <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-slate-200 pl-8">
          {developmentTimeline.map((step, i) => (
            <div key={i} className="relative space-y-1">
              <div className="absolute -left-8 top-1 w-2.5 h-2.5 rounded-full bg-[#2563EB] border-2 border-white ring-2 ring-blue-100" />
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#2563EB] uppercase">{step.phase}</span>
                <span className="text-xs font-mono text-slate-400">• {step.time}</span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm">{step.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CHALLENGES & DECISIONS */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 text-amber-600 font-bold text-lg uppercase tracking-tight">
          <AlertCircle className="w-5 h-5 text-amber-600" />
          <h2 className="font-heading font-extrabold text-2xl text-[#111827]">8. Challenges & Engineering Decisions</h2>
        </div>

        <div className="space-y-4">
          <div className="p-5 bg-amber-50/60 border border-amber-200/80 rounded-2xl space-y-2">
            <h3 className="font-bold text-amber-900 text-sm uppercase font-mono tracking-wider">
              Engineering Decision 1: Evidence Grounding Over Raw Generative Prompts
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              <strong>Challenge:</strong> Initial LLM experiments produced scores that fluctuated across API calls and hallucinated policy compliance.
            </p>
            <p className="text-xs text-slate-700 leading-relaxed">
              <strong>Resolution:</strong> Shifted to a deterministic scoring engine that evaluates extracted evidence arrays mathematically first. The Gemini API is only passed pre-computed score vectors to write explanatory prose, ensuring 100% factual accuracy.
            </p>
          </div>

          <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
            <h3 className="font-bold text-slate-900 text-sm uppercase font-mono tracking-wider">
              Engineering Decision 2: Handling Unstructured DOM Variations
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              <strong>Challenge:</strong> Web pages vary significantly in CSS structures, making standard regex scraping unreliable.
            </p>
            <p className="text-xs text-slate-700 leading-relaxed">
              <strong>Resolution:</strong> Implemented fallback parsers that combine Schema.org JSON-LD extraction, Open Graph metadata inspection, and semantic DOM text tokenization.
            </p>
          </div>
        </div>
      </section>

      {/* 9. FUTURE IMPROVEMENTS */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 text-blue-600 font-bold text-lg uppercase tracking-tight">
          <RotateCcw className="w-5 h-5" />
          <h2 className="font-heading font-extrabold text-2xl text-[#111827]">9. Future Improvements</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-4 bg-[#F9FAFB] border border-slate-200 rounded-xl flex items-start gap-3">
            <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
            <span className="text-xs text-slate-700 font-semibold">Recursive multi-page sitemap crawling for deep product catalogues</span>
          </div>
          <div className="p-4 bg-[#F9FAFB] border border-slate-200 rounded-xl flex items-start gap-3">
            <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
            <span className="text-xs text-slate-700 font-semibold">Automated competitor benchmarking metrics & perception comparison matrix</span>
          </div>
          <div className="p-4 bg-[#F9FAFB] border border-slate-200 rounded-xl flex items-start gap-3">
            <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
            <span className="text-xs text-slate-700 font-semibold">CI/CD unit testing suite for deterministic scoring algorithms</span>
          </div>
          <div className="p-4 bg-[#F9FAFB] border border-slate-200 rounded-xl flex items-start gap-3">
            <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
            <span className="text-xs text-slate-700 font-semibold">Persistent PostgreSQL / Cloud Firestore historic perception tracking</span>
          </div>
        </div>
      </section>

      {/* EXECUTIVE DELIVERABLES & OUTPUT SCHEMA */}
      <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 space-y-6 shadow-2xs">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3 text-indigo-600 font-bold text-lg uppercase tracking-tight">
            <Code className="w-5 h-5 text-indigo-600" />
            <h2 className="font-sans font-extrabold text-2xl text-slate-900 tracking-tight">Platform Intelligence Deliverables</h2>
          </div>
          <span className="text-xs font-mono font-bold text-slate-500 uppercase">Output Schema</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Deliverable 1: Extracted Evidence Vector */}
          <div className="bg-slate-900 text-slate-200 rounded-2xl p-5 space-y-3 font-mono text-xs border border-slate-800 shadow-2xs">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-blue-400 font-bold uppercase text-[10px]">Evidence Extraction Payload</span>
              <span className="text-slate-500 text-[10px]">JSON Schema</span>
            </div>
            <pre className="text-[11px] leading-relaxed overflow-x-auto text-emerald-400 font-mono">
{`{
  "domain": "brand-store.com",
  "schemaPresent": true,
  "schemaType": "Product",
  "hasReturnPolicy": true,
  "hasContactEmail": true,
  "trustScore": 92.5,
  "recommendationReadiness": "HIGH"
}`}
            </pre>
            <p className="text-[11px] text-slate-400 font-sans leading-normal pt-1 border-t border-slate-800">
              Normalized evidence array generated by the web crawler before AI reasoning.
            </p>
          </div>

          {/* Deliverable 2: Gemini Grounded Executive Report */}
          <div className="bg-slate-900 text-slate-200 rounded-2xl p-5 space-y-3 font-mono text-xs border border-slate-800 shadow-2xs">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-emerald-400 font-bold uppercase text-[10px]">Grounded Gemini Diagnostic</span>
              <span className="text-slate-500 text-[10px]">Structured Output</span>
            </div>
            <pre className="text-[11px] leading-relaxed overflow-x-auto text-slate-300 font-mono">
{`"summary": "Brand has strong Schema markup 
 and verified policy links. AI crawlers can 
 reliably parse price ($49.99) and stock status."
"recommendation": "Add explicit SKU numbers 
 and structured FAQ to boost recommendation 
 rank by ~14%."`}
            </pre>
            <p className="text-[11px] text-slate-400 font-sans leading-normal pt-1 border-t border-slate-800">
              AI-generated executive explanation strictly anchored in extracted evidence.
            </p>
          </div>
        </div>
      </section>

      {/* 10. GITHUB (PROMINENT SECTION & BUTTON) */}
      <section className="bg-[#111827] text-white rounded-3xl p-8 sm:p-12 space-y-6 text-center shadow-md">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-[#10B981] text-xs font-mono font-bold uppercase tracking-wider">
          <Github className="w-4 h-4" />
          <span>Open Source Codebase</span>
        </div>

        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tight">
          10. Explore Source Code on GitHub
        </h2>

        <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
          The complete source code for Perceptiq AI is hosted publicly on GitHub. Review the frontend React dashboard, Express backend, crawler modules, and Gemini API integration.
        </p>

        <div className="pt-2">
          <a
            href="https://github.com/reetuparabat/Perceptiq-AI"
            target="_blank"
            rel="noopener noreferrer"
            id="case-study-github-prominent-btn"
            className="inline-flex items-center gap-2.5 bg-[#2563EB] hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full text-sm transition-all shadow-sm cursor-pointer"
          >
            <Github className="w-5 h-5" />
            <span>View on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

    </div>
  );
}
