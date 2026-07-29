import React from "react";
import {
  Download,
  FileText,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  GraduationCap,
  Code,
  Award,
  ExternalLink
} from "lucide-react";
import { PERSONAL_INFO, EDUCATION, PROJECTS, SKILLS } from "../data";

export default function ResumeView() {
  const perceptiq = PROJECTS[0];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header & Download Bar */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            <h1 className="font-sans font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              Curriculum Vitae / Resume
            </h1>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm font-sans">
            Official resume document for Reetu Parabat — AIML Undergraduate & Aspiring ML Engineer
          </p>
        </div>

        <a
          href="/Reetu_Parabat_Resume.pdf"
          download="Reetu_Parabat_Resume.pdf"
          id="resume-page-download-btn"
          className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-full text-xs transition-all shadow-xs cursor-pointer shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Download Resume (PDF)</span>
        </a>
      </div>

      {/* Styled Resume Document Preview */}
      <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8 sm:p-12 space-y-10 font-sans text-slate-800">
        
        {/* Document Header */}
        <div className="border-b border-slate-200 pb-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-sans font-extrabold text-3xl text-slate-900 tracking-tight">
                {PERSONAL_INFO.name}
              </h2>
              <p className="text-blue-600 font-bold text-sm uppercase tracking-wide mt-0.5">
                {PERSONAL_INFO.careerGoal}
              </p>
            </div>
            <div className="text-xs font-mono font-bold bg-slate-100 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg shrink-0">
              Score: {EDUCATION.cgpa}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs text-slate-600 pt-2 font-mono">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 hover:text-blue-600">
              <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span className="truncate">{PERSONAL_INFO.email}</span>
            </a>
            <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-2 hover:text-blue-600">
              <Phone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>+91 {PERSONAL_INFO.phone}</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span className="truncate">{PERSONAL_INFO.location}</span>
            </div>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600">
              <Github className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>GitHub Profile</span>
            </a>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <Award className="w-4 h-4 text-blue-600" />
            <span>Professional Profile & Objective</span>
          </h3>
          <p className="text-slate-700 text-sm leading-relaxed">
            {PERSONAL_INFO.proofStatement}
          </p>
        </div>

        {/* Education Section */}
        <div className="space-y-4 border-t border-slate-100 pt-8">
          <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-blue-600" />
            <span>Education</span>
          </h3>
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h4 className="font-bold text-slate-900 text-base">{EDUCATION.institution}</h4>
              <span className="text-xs font-mono font-semibold text-slate-500">{EDUCATION.duration}</span>
            </div>
            <p className="text-sm font-semibold text-slate-700">{EDUCATION.degree}</p>
            <p className="text-xs font-mono font-bold text-blue-700 pt-1">Academic Performance: {EDUCATION.cgpa}</p>
          </div>
        </div>

        {/* Featured Project Section */}
        <div className="space-y-4 border-t border-slate-100 pt-8">
          <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <Code className="w-4 h-4 text-blue-600" />
            <span>Key Featured Project</span>
          </h3>
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h4 className="font-bold text-slate-900 text-base">{perceptiq.name} — {perceptiq.type}</h4>
              <span className="text-xs font-mono font-semibold text-slate-500">{perceptiq.duration}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {perceptiq.shortDescription}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {perceptiq.technologies.map((tech) => (
                <span key={tech} className="px-2 py-0.5 bg-white border border-slate-200 text-slate-700 text-[11px] font-mono font-semibold rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-4 border-t border-slate-100 pt-8">
          <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-400">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SKILLS.map((cat, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl space-y-2">
                <p className="text-xs font-bold font-mono text-slate-900 uppercase">{cat.category}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s) => (
                    <span key={s} className="px-2 py-0.5 bg-white border border-slate-200 text-slate-800 text-xs font-mono font-semibold rounded">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* PDF Direct Document Embed Section */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-4 shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <h3 className="font-sans font-bold text-base text-slate-900">
            PDF Document Embed
          </h3>
          <a
            href="/Reetu_Parabat_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
          >
            <span>Open PDF in New Tab</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="w-full h-[600px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
          <object
            data="/Reetu_Parabat_Resume.pdf"
            type="application/pdf"
            className="w-full h-full"
          >
            <div className="flex flex-col items-center justify-center h-full p-6 text-center space-y-3">
              <FileText className="w-10 h-10 text-slate-400" />
              <p className="text-sm font-semibold text-slate-700">
                Direct PDF viewer preview is available for download.
              </p>
              <a
                href="/Reetu_Parabat_Resume.pdf"
                download="Reetu_Parabat_Resume.pdf"
                className="px-4 py-2 bg-blue-600 text-white rounded-full text-xs font-bold hover:bg-blue-700"
              >
                Download Reetu_Parabat_Resume.pdf
              </a>
            </div>
          </object>
        </div>
      </div>
    </div>
  );
}
