import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  FileText,
  MapPin,
  Linkedin,
  Github,
  Award,
  CheckCircle,
  Clock,
  ArrowUpRight,
  Download
} from "lucide-react";
import { PERSONAL_INFO, PROJECTS, EDUCATION, INTERNSHIP } from "./data";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import SkillsGrid from "./components/SkillsGrid";
import ContactForm from "./components/ContactForm";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />

      {/* Main Content Stage */}
      <main className="flex-grow">
        {/* Render Active View */}
        {activeTab === "home" && (
          <div id="home-view" className="space-y-16 py-12 md:py-20">
            {/* HERO SECTION */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Intro text */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
                    <span>Seeking ML Internships & Entry-level Opportunities</span>
                  </div>

                  <h1 className="font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl text-slate-900 leading-tight tracking-tight uppercase">
                    Hi, I'm <span className="text-blue-600">{PERSONAL_INFO.name}</span>
                  </h1>

                  <p className="font-sans text-xl sm:text-2xl text-slate-500 font-bold uppercase tracking-tight">
                    {PERSONAL_INFO.branch}
                  </p>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-sans">
                    I am an AIML undergraduate at KLS VDIT building practical AI-powered applications using modern AI technologies. 
                    I focus on building explainable AI systems, automating business processes, and designing centralized data platforms.
                  </p>

                  {/* Call to Actions */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                    <button
                      onClick={() => handleTabChange("projects")}
                      id="hero-primary-cta"
                      className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-full transition-all cursor-pointer shadow-sm hover:shadow-md"
                    >
                      <span>Explore Projects</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => handleTabChange("about")}
                      id="hero-secondary-cta"
                      className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-bold px-6 py-3 rounded-full transition-all cursor-pointer"
                    >
                      <span>About & Education</span>
                    </button>
                  </div>
                </div>

                {/* Proof Statement Highlight Card */}
                <div className="lg:col-span-5">
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full blur-2xl -mr-8 -mt-8" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-50 rounded-full blur-2xl -ml-8 -mb-8" />

                    <div className="flex items-center gap-2 text-emerald-600 font-mono text-xs uppercase tracking-wider font-bold">
                      <Award className="w-4 h-4" />
                      <span>Portfolio Proof Statement</span>
                    </div>

                    <blockquote className="text-slate-700 text-sm sm:text-base italic leading-relaxed relative z-10 font-sans">
                      "{PERSONAL_INFO.proofStatement}"
                    </blockquote>

                    <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold text-slate-900 uppercase tracking-tight">{PERSONAL_INFO.name}</p>
                        <p className="text-xs text-slate-400 font-mono font-bold uppercase tracking-wider">BE CSE (AI&ML) Candidate</p>
                      </div>
                      <div className="text-xs text-slate-500 font-mono font-bold bg-slate-50 border border-slate-200 px-2.5 py-1 rounded">
                        CGPA: 8.8
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FEATURED PROJECT SECTION */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-2">
                  <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-slate-900 uppercase tracking-tight">
                    Featured AI/ML Project
                  </h2>
                  <p className="text-sm text-slate-500 max-w-lg leading-relaxed">
                    Designed to address visibility gaps in AI recommendation and semantic web indexing systems.
                  </p>
                </div>

                <button
                  onClick={() => handleTabChange("projects")}
                  className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700 cursor-pointer group uppercase tracking-wider"
                >
                  <span>Explore project details</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {/* Render the core Perceptiq AI project */}
              <ProjectCard project={PROJECTS[0]} />
            </section>

            {/* SKILLS PREVIEW SECTION */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-2">
                  <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-slate-900 uppercase tracking-tight">
                    Core Technical Strengths
                  </h2>
                  <p className="text-sm text-slate-500 max-w-lg leading-relaxed">
                    Languages, tools, and platforms utilized during my projects and academic coursework.
                  </p>
                </div>

                <button
                  onClick={() => handleTabChange("about")}
                  className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700 cursor-pointer group uppercase tracking-wider"
                >
                  <span>View full resume journey</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              <SkillsGrid />
            </section>

            {/* PERSISTENT CONTACT CTA SECTION */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-lg border border-slate-800">
                {/* Decorative absolute patterns */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl -mr-32 -mt-32 opacity-20" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-700 rounded-full blur-3xl -ml-32 -mb-32 opacity-20" />

                <div className="relative z-10 max-w-2xl space-y-6">
                  <h3 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight uppercase">
                    Are you looking for an ML Intern or Junior Engineer?
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    I am actively seeking internship opportunities starting immediately or entry-level positions where I can apply my AIML knowledge. 
                    Let's connect, examine my project source code, and schedule a talk.
                  </p>

                  <div className="flex flex-wrap items-center gap-6 pt-2">
                    <button
                      onClick={() => handleTabChange("contact")}
                      className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-full hover:bg-blue-700 transition-colors cursor-pointer shadow-sm"
                    >
                      Get in Touch
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white font-bold transition-colors uppercase tracking-wider"
                    >
                      <Mail className="w-4 h-4 text-blue-500" />
                      <span>{PERSONAL_INFO.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === "projects" && (
          <div id="projects-view" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
            <div className="space-y-3 border-b border-slate-200 pb-8">
              <h1 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight uppercase">
                Projects
              </h1>
              <p className="text-sm sm:text-base text-slate-500 max-w-2xl leading-relaxed font-sans">
                Explore detailed breakdowns of my engineering implementations, including the specific problems addressed, developed solutions, feature logs, and tech stacks.
              </p>
            </div>

            <div className="space-y-12">
              {PROJECTS.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {activeTab === "about" && (
          <div id="about-view" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
            {/* ABOUT ME GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Profile Card & Info */}
              <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-2xl font-sans font-extrabold">
                    RP
                  </div>
                  <div>
                    <h2 className="font-sans font-bold text-xl text-slate-900">{PERSONAL_INFO.name}</h2>
                    <p className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider">{PERSONAL_INFO.careerGoal}</p>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-6 space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Contact Details</h3>
                  <div className="space-y-3">
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-600 transition-colors font-semibold">
                      <Mail className="w-4 h-4 text-slate-400" />
                      <span>{PERSONAL_INFO.email}</span>
                    </a>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-600 transition-colors font-semibold">
                      <Phone className="w-4 h-4 text-slate-400" />
                      <span>+91 {PERSONAL_INFO.phone}</span>
                    </a>
                    <div className="flex items-center gap-3 text-sm text-slate-600 font-semibold">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      <span>{PERSONAL_INFO.location}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-6 flex flex-col gap-3">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-white border border-slate-200 py-2.5 px-4 rounded-full text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      <Github className="w-4 h-4 text-slate-400" />
                      <span>GitHub Profile</span>
                    </a>
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-white border border-slate-200 py-2.5 px-4 rounded-full text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-blue-500" />
                      <span>LinkedIn Profile</span>
                    </a>
                  </div>
                  <a
                    href="/Reetu_Parabat_Resume.pdf"
                    download="Reetu_Parabat_Resume.pdf"
                    id="resume-download-about"
                    className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-full text-xs font-bold transition-all shadow-sm cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Resume (PDF)</span>
                  </a>
                </div>
              </div>

              {/* Biography Columns */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <h1 className="font-sans font-extrabold text-3xl text-slate-900 tracking-tight uppercase">
                    My Biography
                  </h1>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                    I am a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning (AIML) at KLS Vishwanathrao Deshpande Institute Of Technology, currently in my 7th semester. I maintain a cumulative CGPA of 8.8, reflecting strong academic diligence.
                  </p>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                    My core technical objective is to become a Machine Learning Engineer. I am currently building foundational skills in Python and ML, and I am seeking an opportunity to apply structured, deterministic, and mathematical problem-solving skills while further developing my knowledge in Generative AI, LLM integration, and prompt engineering. I am eager to learn, grow, and contribute to impactful, AI-driven solutions inside a technical, production-facing team environment.
                  </p>
                </div>

                {/* EDUCATION CARD */}
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-400 font-mono">
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                    <span>Education</span>
                  </h3>
                  <div className="bg-white border border-slate-200 p-5 rounded-2xl space-y-3 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h4 className="font-sans font-bold text-base text-slate-900 uppercase tracking-tight">
                        {EDUCATION.institution}
                      </h4>
                      <span className="text-xs font-mono font-semibold text-slate-500">{EDUCATION.duration}</span>
                    </div>
                    <p className="text-sm text-slate-600 font-semibold font-sans">
                      {EDUCATION.degree}
                    </p>
                    <div className="inline-block px-2.5 py-1 rounded bg-blue-50 border border-blue-100 text-blue-700 font-mono text-xs font-bold uppercase tracking-wider">
                      Academic Score: {EDUCATION.cgpa}
                    </div>
                  </div>
                </div>

                {/* INTERNSHIP CARD */}
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-400 font-mono">
                    <Briefcase className="w-4 h-4 text-blue-600" />
                    <span>Practical Internships</span>
                  </h3>
                  <div className="bg-white border border-slate-200 p-5 rounded-2xl space-y-3 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h4 className="font-sans font-bold text-base text-slate-900 uppercase tracking-tight">
                        {INTERNSHIP.title}
                      </h4>
                      <span className="text-xs font-mono font-semibold text-slate-500">{INTERNSHIP.duration}</span>
                    </div>
                    <p className="text-xs font-mono text-emerald-600 font-bold uppercase tracking-wider">{INTERNSHIP.company}</p>
                    <ul className="space-y-2 text-xs md:text-sm text-slate-600 pl-4 list-disc font-sans">
                      {INTERNSHIP.bulletPoints.map((bp, i) => (
                        <li key={i} className="leading-relaxed">{bp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* FULL SKILLS MATRIX */}
            <div className="space-y-8 border-t border-slate-200 pt-12">
              <div className="space-y-2 text-center max-w-xl mx-auto">
                <h2 className="font-sans font-extrabold text-2xl text-slate-900 tracking-tight uppercase">
                  Technical Skills Matrix
                </h2>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-sans">
                  Languages, tools, and environments I use to design and develop practical applications.
                </p>
              </div>

              <SkillsGrid />
            </div>
          </div>
        )}

        {activeTab === "contact" && (
          <div id="contact-view" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
            <div className="space-y-3 border-b border-slate-200 pb-8 text-center max-w-2xl mx-auto">
              <h1 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight uppercase">
                Connect With Me
              </h1>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-sans">
                Let's discuss internship opportunities, entry-level ML engineer openings, or technical collaborations. Fill out the direct recruiter inquiry form below.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
              {/* Contact Information Cards */}
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-6 shadow-sm">
                  <h3 className="font-sans font-bold text-lg text-slate-900 border-b border-slate-100 pb-3 uppercase tracking-tight">
                    Contact Channels
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Email Address</p>
                        <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm text-slate-700 hover:text-blue-600 font-bold break-all">
                          {PERSONAL_INFO.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Direct Phone</p>
                        <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sm text-slate-700 hover:text-blue-600 font-bold">
                          +91 {PERSONAL_INFO.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Current Location</p>
                        <p className="text-sm text-slate-700 font-bold">{PERSONAL_INFO.location}</p>
                      </div>
                    </div>

                    <div className="border-t border-slate-100 pt-5 mt-2">
                      <a
                        href="/Reetu_Parabat_Resume.pdf"
                        download="Reetu_Parabat_Resume.pdf"
                        id="resume-download-contact"
                        className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-full text-xs font-bold transition-all shadow-sm cursor-pointer"
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

      {/* Footer */}
      <Footer setActiveTab={handleTabChange} />
    </div>
  );
}
