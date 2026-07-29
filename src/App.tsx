import { useState } from "react";
import {
  ArrowRight,
  GraduationCap,
  Mail,
  Phone,
  FileText,
  MapPin,
  Linkedin,
  Github,
  Award,
  CheckCircle,
  Download,
  Code,
  Sparkles
} from "lucide-react";
import { PERSONAL_INFO, PROJECTS, EDUCATION } from "./data";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import SkillsGrid from "./components/SkillsGrid";
import ContactForm from "./components/ContactForm";
import PerceptiqCaseStudyView from "./components/PerceptiqCaseStudyView";
import ResumeView from "./components/ResumeView";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827] font-sans flex flex-col selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation Header */}
      <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />

      {/* Main Content Stage */}
      <main className="flex-grow">
        {/* VIEW 1: HOME PAGE */}
        {activeTab === "home" && (
          <div id="home-view" className="space-y-16 py-12 md:py-16">
            
            {/* HERO SECTION */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                
                {/* Hero Headline & Message */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    <span>AIML Candidate & Aspiring ML Engineer</span>
                  </div>

                  <h1 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 leading-[1.18] tracking-tight [text-wrap:balance]">
                    Building practical AI systems for real-world business problems.
                  </h1>

                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-sans">
                    Hi, I'm <strong className="text-slate-900">{PERSONAL_INFO.name}</strong>, studying Computer Science (AI & ML) at {PERSONAL_INFO.college}. I specialize in explainable AI systems, evidence-based decision engines, and data applications.
                  </p>

                  {/* Primary & Secondary Call to Actions */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                    <button
                      onClick={() => handleTabChange("project")}
                      id="hero-primary-cta"
                      className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-full transition-all cursor-pointer shadow-2xs hover:shadow-xs text-sm"
                    >
                      <span>Explore Perceptiq AI</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href="/Reetu_Parabat_Resume.pdf"
                      download="Reetu_Parabat_Resume.pdf"
                      id="hero-secondary-cta"
                      className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold px-6 py-3.5 rounded-full transition-all cursor-pointer text-sm shadow-2xs"
                    >
                      <Download className="w-4 h-4 text-slate-500" />
                      <span>Download Resume</span>
                    </a>
                  </div>
                </div>

                {/* Redesigned Compact Professional Summary Card */}
                <div className="lg:col-span-5">
                  <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 space-y-5 shadow-2xs hover:shadow-xs transition-shadow">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2 text-blue-600 font-mono text-xs uppercase tracking-wider font-bold">
                        <Sparkles className="w-4 h-4" />
                        <span>Portfolio Focus</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-mono font-bold uppercase">
                        Active Candidate
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs font-sans">
                      <div className="space-y-1">
                        <p className="font-mono text-slate-400 font-bold uppercase text-[10px]">Current Project</p>
                        <p className="font-bold text-slate-900 text-sm">Perceptiq AI</p>
                        <p className="text-slate-500 text-[11px]">AI Commerce Platform</p>
                      </div>

                      <div className="space-y-1">
                        <p className="font-mono text-slate-400 font-bold uppercase text-[10px]">Target Role</p>
                        <p className="font-bold text-slate-900 text-sm">ML / AI Engineer</p>
                        <p className="text-slate-500 text-[11px]">Full-Time / Internship</p>
                      </div>

                      <div className="space-y-1">
                        <p className="font-mono text-slate-400 font-bold uppercase text-[10px]">Academic Degree</p>
                        <p className="font-bold text-slate-900 text-sm">BE CSE (AI & ML)</p>
                        <p className="text-slate-500 text-[11px] font-mono">CGPA: {EDUCATION.cgpa}</p>
                      </div>

                      <div className="space-y-1">
                        <p className="font-mono text-slate-400 font-bold uppercase text-[10px]">Location</p>
                        <p className="font-bold text-slate-900 text-sm">Karnataka, India</p>
                        <p className="text-slate-500 text-[11px]">Open to Remote / Reloc.</p>
                      </div>
                    </div>

                    <div className="border-t border-slate-100 pt-3 space-y-2">
                      <p className="font-mono text-slate-400 font-bold uppercase text-[10px]">Core Capabilities</p>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-800 text-[11px] font-mono font-semibold rounded-md">
                          Explainable AI
                        </span>
                        <span className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-800 text-[11px] font-mono font-semibold rounded-md">
                          Deterministic Scoring
                        </span>
                        <span className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-800 text-[11px] font-mono font-semibold rounded-md">
                          Google Gemini SDK
                        </span>
                        <span className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-800 text-[11px] font-mono font-semibold rounded-md">
                          TypeScript / Node
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* FEATURED PROJECT SECTION (PERCEPTIQ AI) */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                    Core Featured Project
                  </span>
                  <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                    Perceptiq AI – AI Commerce Intelligence Platform
                  </h2>
                </div>

                <button
                  onClick={() => handleTabChange("project")}
                  id="home-explore-perceptiq-btn"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 cursor-pointer group tracking-tight"
                >
                  <span>Explore Full Case Study</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {/* Render Primary Project Card */}
              <ProjectCard
                project={PROJECTS[0]}
                onExploreCaseStudy={() => handleTabChange("project")}
              />
            </section>

            {/* ABOUT ME SECTION */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="border-b border-slate-200 pb-4">
                <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                  About & Academic Profile
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Academic Profile */}
                <div className="md:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xs">
                  <div className="flex items-center gap-3 text-blue-600 font-bold text-sm uppercase tracking-wider font-mono">
                    <GraduationCap className="w-5 h-5" />
                    <h3>Academic Profile</h3>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{EDUCATION.institution}</h4>
                    <p className="text-sm font-semibold text-slate-700 mt-1">{EDUCATION.degree}</p>
                    <p className="text-xs font-mono text-slate-500 mt-0.5">{EDUCATION.duration}</p>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans pt-1">
                    Currently in 7th semester, specializing in Machine Learning, Neural Networks, Natural Language Processing, and Software Engineering.
                  </p>
                  <div className="pt-2">
                    <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-mono font-bold rounded-lg border border-emerald-200">
                      Academic Score: {EDUCATION.cgpa}
                    </span>
                  </div>
                </div>

                {/* Practical AI/ML System Building Focus */}
                <div className="md:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xs">
                  <div className="flex items-center gap-3 text-blue-600 font-bold text-sm uppercase tracking-wider font-mono">
                    <Sparkles className="w-5 h-5" />
                    <h3>AI/ML Engineering Focus</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                    I design and build practical AI systems that combine statistical language models with deterministic logic. Rather than treating AI as a black box, my work emphasizes explainability, verifiable data pipelines, and evidence extraction.
                  </p>
                  <div className="p-4 bg-blue-50/60 border border-blue-200/80 rounded-2xl space-y-1">
                    <p className="font-bold text-xs font-mono uppercase text-blue-800">Core Engineering Objective:</p>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Transform raw AI model outputs into deterministic, reproducible business intelligence systems.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* TECHNICAL SKILLS SECTION */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="border-b border-slate-200 pb-4">
                <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                  Core Technical Strengths
                </h2>
              </div>

              <SkillsGrid />
            </section>

            {/* UNIFIED CONVERSION / NEXT STEPS SECTION */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs border border-slate-800">
                <div className="space-y-2 text-center md:text-left max-w-xl">
                  <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                    Next Steps
                  </span>
                  <h3 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight">
                    Review Qualifications or Connect
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Explore my full academic background and project history on the Resume page, or reach out directly regarding engineering opportunities.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
                  <button
                    onClick={() => handleTabChange("contact")}
                    id="home-contact-cta-btn"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-full text-xs transition-colors shadow-2xs cursor-pointer"
                  >
                    <span>Get in Touch</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleTabChange("resume")}
                    id="home-resume-cta-btn"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 font-bold px-6 py-3.5 rounded-full text-xs transition-colors cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-slate-400" />
                    <span>View Resume</span>
                  </button>

                  <a
                    href="/Reetu_Parabat_Resume.pdf"
                    download="Reetu_Parabat_Resume.pdf"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-bold px-5 py-3.5 rounded-full text-xs transition-colors shadow-2xs"
                  >
                    <Download className="w-4 h-4" />
                    <span>PDF</span>
                  </a>
                </div>
              </div>
            </section>

          </div>
        )}

        {/* VIEW 2: PROJECT PAGE (PERCEPTIQ AI CASE STUDY) */}
        {activeTab === "project" && (
          <div id="project-view" className="py-6">
            <PerceptiqCaseStudyView
              onNavigateToContact={() => handleTabChange("contact")}
              onNavigateToResume={() => handleTabChange("resume")}
            />
          </div>
        )}

        {/* VIEW 3: RESUME PAGE */}
        {activeTab === "resume" && (
          <div id="resume-view" className="py-6">
            <ResumeView />
          </div>
        )}

        {/* VIEW 4: CONTACT PAGE */}
        {activeTab === "contact" && (
          <div id="contact-view" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
            <div className="space-y-3 border-b border-slate-200 pb-8 text-center max-w-2xl mx-auto">
              <h1 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Get In Touch
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                I am actively seeking Machine Learning Engineer entry-level positions and internship opportunities. Please reach out via email, phone, or the form below.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
              {/* Contact Info Side Card */}
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
                  <h3 className="font-sans font-bold text-lg text-slate-900 border-b border-slate-100 pb-3">
                    Direct Contact Channels
                  </h3>

                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Email Address</p>
                        <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm text-slate-800 hover:text-blue-600 font-bold break-all">
                          {PERSONAL_INFO.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Phone</p>
                        <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sm text-slate-800 hover:text-blue-600 font-bold">
                          +91 {PERSONAL_INFO.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Location</p>
                        <p className="text-sm text-slate-800 font-bold">{PERSONAL_INFO.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                        <Github className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">GitHub Repository</p>
                        <a
                          href="https://github.com/reetuparabat/Perceptiq-AI"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:underline font-bold break-all inline-flex items-center gap-1"
                        >
                          <span>github.com/reetuparabat/Perceptiq-AI</span>
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                        <Linkedin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">LinkedIn Profile</p>
                        <a
                          href={PERSONAL_INFO.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:underline font-bold break-all"
                        >
                          {PERSONAL_INFO.linkedin}
                        </a>
                      </div>
                    </div>

                    <div className="border-t border-slate-100 pt-5 mt-2">
                      <a
                        href="/Reetu_Parabat_Resume.pdf"
                        download="Reetu_Parabat_Resume.pdf"
                        id="resume-download-contact-page"
                        className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-full text-xs font-bold transition-all shadow-xs cursor-pointer"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download Resume (PDF)</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Column */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer setActiveTab={handleTabChange} />
    </div>
  );
}
