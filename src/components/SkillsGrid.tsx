import React from "react";
import { Award, Terminal, Brain, Server, Database, Sliders } from "lucide-react";
import { SKILLS } from "../data";

export default function SkillsGrid() {
  // Map index or category to an icon for visual organization
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programming":
        return <Terminal className="w-5 h-5 text-blue-600" />;
      case "Tools":
        return <Sliders className="w-5 h-5 text-blue-600" />;
      default:
        return <Sliders className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="skills-grid-container">
      {SKILLS.map((cat) => (
        <div
          key={cat.category}
          id={`skills-cat-${cat.category.toLowerCase().replace(/\s+/g, "-")}`}
          className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
              {getCategoryIcon(cat.category)}
              <h3 className="font-sans font-bold text-base text-slate-900 uppercase tracking-tight">
                {cat.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-block px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-xs font-mono font-bold rounded transition-all"
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
