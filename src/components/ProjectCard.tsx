import React, { useState } from "react";
import { Github, ExternalLink, HelpCircle, Code, Settings, User, CheckCircle2, Bookmark, FileText } from "lucide-react";
import { Project } from "../types";
import CaseStudyModal from "./CaseStudyModal";

interface ProjectCardProps {
  project: Project;
  onExploreCaseStudy?: () => void;
  key?: string;
}

export default function ProjectCard({ project, onExploreCaseStudy }: ProjectCardProps) {
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

  const handleCaseStudyClick = () => {
    if (onExploreCaseStudy) {
      onExploreCaseStudy();
    } else {
      setIsCaseStudyOpen(true);
    }
  };

  return (
    <>
      <div
        id={`project-card-${project.id}`}
        className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow p-6 md:p-8 space-y-6"
      >
        {/* Card Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold tracking-wide uppercase border border-blue-100">
                {project.type}
              </span>
              <span className="text-xs font-mono text-slate-400 font-semibold">• {project.duration}</span>
            </div>
            <h3 className="font-sans font-extrabold text-2xl text-slate-900 tracking-tight">
              {project.name}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {project.caseStudy && (
              <button
                onClick={handleCaseStudyClick}
                id={`view-case-study-top-${project.id}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold tracking-wide transition-all cursor-pointer shadow-2xs"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Read Full Case Study</span>
              </button>
            )}
            {/* Status badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{project.status}</span>
            </span>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-slate-600 text-sm md:text-base leading-relaxed font-sans">
          {project.shortDescription}
        </p>

        {/* Grid of Problem and Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-5 rounded-xl border border-slate-100">
          <div className="space-y-2">
            <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-tight">
              <HelpCircle className="w-4 h-4 text-red-500" />
              <span>Problem Statement</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-tight">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Engineering Solution</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="space-y-2.5">
          <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-tight">
            <Code className="w-4 h-4 text-blue-600" />
            <span>Key Implemented Features</span>
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm text-slate-600">
            {project.keyFeatures.map((feat, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-blue-500 font-bold select-none">•</span>
                <span className="leading-tight">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture (only if documented) */}
        <div className="space-y-2.5">
          <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-tight">
            <Settings className="w-4 h-4 text-indigo-600" />
            <span>System Architecture</span>
          </h4>
          {project.architecture && project.architecture.length > 0 ? (
            <ul className="space-y-1.5 text-xs md:text-sm text-slate-600">
              {project.architecture.map((arch, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-indigo-500 font-bold select-none">→</span>
                  <span className="leading-tight">{arch}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs font-mono text-slate-400 italic">Information not provided.</p>
          )}
        </div>

        {/* My Role */}
        <div className="space-y-2 pb-2">
          <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-tight">
            <User className="w-4 h-4 text-blue-600" />
            <span>My Specific Role & Contributions</span>
          </h4>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed pl-6">
            {project.myRole}
          </p>
        </div>

        {/* Technologies Used (Tags) */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-mono font-bold rounded transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-3 flex-wrap">
            {project.caseStudy && (
              <button
                onClick={handleCaseStudyClick}
                id={`view-case-study-${project.id}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-all cursor-pointer shadow-2xs"
              >
                <FileText className="w-4 h-4" />
                <span>Explore Full Case Study</span>
              </button>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                id={`github-link-${project.id}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-800 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all cursor-pointer shadow-2xs"
              >
                <Github className="w-4 h-4 text-slate-700" />
                <span>Source Code on GitHub</span>
              </a>
            )}

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                id={`live-demo-${project.id}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 rounded-full hover:bg-blue-100 transition-all cursor-pointer shadow-2xs"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      {project.caseStudy && (
        <CaseStudyModal
          project={project}
          isOpen={isCaseStudyOpen}
          onClose={() => setIsCaseStudyOpen(false)}
        />
      )}
    </>
  );
}
