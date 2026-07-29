import React from "react";
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const handleNavClick = (id: string) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12 mt-auto" id="app-footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-3">
            <h3 className="font-sans font-extrabold text-lg text-slate-900 uppercase tracking-tight">{PERSONAL_INFO.name}</h3>
            <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
              AIML Undergraduate at KLS VDIT building practical AI-powered applications using modern AI technologies.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Navigation</h4>
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => handleNavClick("home")}
                className="text-sm text-slate-500 hover:text-blue-600 text-left transition-colors cursor-pointer font-semibold"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick("project")}
                className="text-sm text-slate-500 hover:text-blue-600 text-left transition-colors cursor-pointer font-semibold"
              >
                Project (Perceptiq AI)
              </button>
              <button
                onClick={() => handleNavClick("resume")}
                className="text-sm text-slate-500 hover:text-blue-600 text-left transition-colors cursor-pointer font-semibold"
              >
                Resume
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className="text-sm text-slate-500 hover:text-blue-600 text-left transition-colors cursor-pointer font-semibold"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Direct Channels Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Contact</h4>
            <div className="space-y-2.5">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors font-semibold"
                id="footer-email-link"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors font-semibold"
                id="footer-phone-link"
              >
                <Phone className="w-4 h-4 text-slate-400" />
                <span>+91 {PERSONAL_INFO.phone}</span>
              </a>
              <div className="flex gap-4 pt-1">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-all shadow-xs"
                  aria-label="GitHub Profile"
                  id="footer-github-btn"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-300 transition-all shadow-xs"
                  aria-label="LinkedIn Profile"
                  id="footer-linkedin-btn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-mono">
          <p>© {new Date().getFullYear()} Reetu Parabat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
