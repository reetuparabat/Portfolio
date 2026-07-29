import React from "react";
import { Terminal, Brain, Server, Sliders, Code2, Wrench } from "lucide-react";
import { SKILLS } from "../data";

export default function SkillsGrid() {
  const getCategoryIcon = (category: string) => {
    if (category.includes("Programming")) {
      return <Terminal className="w-4 h-4 text-blue-600" />;
    }
    if (category.includes("AI")) {
      return <Brain className="w-4 h-4 text-blue-600" />;
    }
    if (category.includes("Web") || category.includes("Backend")) {
      return <Server className="w-4 h-4 text-blue-600" />;
    }
    return <Wrench className="w-4 h-4 text-blue-600" />;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5" id="skills-grid-container">
      {SKILLS.map((cat) => (
        <div
          key={cat.category}
          id={`skills-cat-${cat.category.toLowerCase().replace(/\s+/g, "-")}`}
          className="bg-white border border-slate-200/90 p-5 rounded-2xl shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between space-y-4"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-2.5 border-b border-slate-100">
              <div className="p-1.5 bg-blue-50 rounded-lg">
                {getCategoryIcon(cat.category)}
              </div>
              <h3 className="font-sans font-bold text-sm text-slate-900 tracking-tight">
                {cat.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-block px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-700 text-xs font-mono font-semibold rounded-md hover:bg-slate-100/80 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
