import React, { useEffect } from "react";
import { X, Github, ExternalLink, HelpCircle, Cpu, CheckCircle2, RotateCcw, Wrench, UserCheck, Lightbulb, FileText, AlertCircle } from "lucide-react";
import { CaseStudyData, Project } from "../types";

interface CaseStudyModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseStudyModal({ project, isOpen, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project.caseStudy) return null;

  const cs: CaseStudyData = project.caseStudy;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      {/* Backdrop overlay listener */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[90vh] flex flex-col z-10">
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-slate-100 flex items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-bold tracking-wider uppercase">
                <FileText className="w-3.5 h-3.5" />
                <span>Engineering Case Study</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>{project.status}</span>
              </span>
            </div>
            <h2 className="font-sans font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight">
              {cs.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close Case Study"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Content Body */}
        <div className="p-6 sm:p-8 md:p-10 space-y-10 overflow-y-auto font-sans text-slate-800 leading-relaxed">
          
          {/* Section: The Problem */}
          <section className="space-y-3 border-b border-slate-100 pb-8">
            <div className="flex items-center gap-2.5 text-blue-600 font-extrabold text-lg sm:text-xl uppercase tracking-tight">
              <HelpCircle className="w-5 h-5 text-red-500" />
              <h3>The Problem</h3>
            </div>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed pl-1">
              {cs.problem}
            </p>
          </section>

          {/* Section: What I Did and Decided */}
          <section className="space-y-5 border-b border-slate-100 pb-8">
            <div className="flex items-center gap-2.5 text-blue-600 font-extrabold text-lg sm:text-xl uppercase tracking-tight">
              <Cpu className="w-5 h-5 text-blue-600" />
              <h3>What I Did and Decided</h3>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed pl-1">
              {cs.whatIDidAndDecided.overview}
            </p>

            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 sm:p-6 space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-wider text-slate-900 font-mono">
                Key Decisions:
              </h4>

              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-blue-600 font-bold select-none">•</span>
                  <span>{cs.whatIDidAndDecided.keyDecisions[0]}</span>
                </li>

                <li className="space-y-2">
                  <div className="flex items-start gap-2.5">
                    <span className="text-blue-600 font-bold select-none">•</span>
                    <span>Built custom modules for:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pl-6 pt-1">
                    {cs.whatIDidAndDecided.customModules.map((moduleName, i) => (
                      <div
                        key={i}
                        className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 shadow-xs flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <span>{moduleName}</span>
                      </div>
                    ))}
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="text-blue-600 font-bold select-none">•</span>
                  <span>{cs.whatIDidAndDecided.keyDecisions[1]}</span>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="text-blue-600 font-bold select-none">•</span>
                  <span>{cs.whatIDidAndDecided.keyDecisions[2]}</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section: What Came of It */}
          <section className="space-y-4 border-b border-slate-100 pb-8">
            <div className="flex items-center gap-2.5 text-blue-600 font-extrabold text-lg sm:text-xl uppercase tracking-tight">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <h3>What Came of It</h3>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed pl-1">
              {cs.whatCameOfIt.overview}
            </p>

            <div className="space-y-3 pl-1">
              <p className="text-sm font-bold text-slate-900 uppercase tracking-tight">
                The platform successfully:
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                {cs.whatCameOfIt.outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold select-none">-</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed pl-1 pt-1">
              {cs.whatCameOfIt.integrationNote}
            </p>

            <div className="p-4 bg-amber-50/80 border border-amber-200/80 rounded-xl text-xs sm:text-sm text-amber-900 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <span>{cs.whatCameOfIt.limitationsNote}</span>
            </div>
          </section>

          {/* Section: What I'd Do Differently */}
          <section className="space-y-4 border-b border-slate-100 pb-8">
            <div className="flex items-center gap-2.5 text-blue-600 font-extrabold text-lg sm:text-xl uppercase tracking-tight">
              <RotateCcw className="w-5 h-5 text-indigo-600" />
              <h3>What I'd Do Differently</h3>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed pl-1">
              If I rebuilt Perceptiq AI, I would:
            </p>

            <ul className="space-y-2 text-sm text-slate-700 pl-1">
              {cs.whatIdDoDifferently.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-indigo-600 font-bold select-none">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section: Technologies Used */}
          <section className="space-y-4 border-b border-slate-100 pb-8">
            <div className="flex items-center gap-2.5 text-blue-600 font-extrabold text-lg sm:text-xl uppercase tracking-tight">
              <Wrench className="w-5 h-5 text-slate-700" />
              <h3>Technologies Used</h3>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {cs.technologiesUsed.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-slate-100 text-slate-800 text-xs sm:text-sm font-mono font-bold rounded-lg border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Section: My Role */}
          <section className="space-y-4 border-b border-slate-100 pb-8">
            <div className="flex items-center gap-2.5 text-blue-600 font-extrabold text-lg sm:text-xl uppercase tracking-tight">
              <UserCheck className="w-5 h-5 text-blue-600" />
              <h3>My Role</h3>
            </div>

            <div className="space-y-3 pl-1">
              <p className="font-bold text-slate-900 text-base">{cs.myRole.title}</p>
              <p className="text-sm font-semibold text-slate-700">Responsible for:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
                {cs.myRole.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-blue-500 font-bold select-none">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section: Lessons Learned */}
          <section className="space-y-3 border-b border-slate-100 pb-8">
            <div className="flex items-center gap-2.5 text-blue-600 font-extrabold text-lg sm:text-xl uppercase tracking-tight">
              <Lightbulb className="w-5 h-5 text-amber-500" />
              <h3>Lessons Learned</h3>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed pl-1 bg-blue-50/50 p-4 rounded-2xl border border-blue-100">
              {cs.lessonsLearned}
            </p>
          </section>

          {/* Section: Places where I had to guess */}
          <section className="space-y-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              Places where I had to guess
            </h4>
            <p className="text-sm font-mono font-semibold text-slate-600">None.</p>
          </section>

        </div>

        {/* Sticky Footer Actions */}
        <div className="bg-slate-50 px-6 sm:px-8 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-800 hover:bg-slate-100 transition-colors shadow-xs"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-xs font-bold hover:bg-blue-700 transition-colors shadow-xs"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-full transition-colors cursor-pointer"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
