import React, { useState } from "react";
import { Menu, X, ArrowUpRight, Code2 } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "project", label: "Perceptiq AI" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xs border-b border-slate-200/80" id="main-navigation">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-15 items-center">
          {/* Logo / Brand Name */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2.5 font-sans tracking-tight text-slate-900 cursor-pointer group"
            id="nav-logo"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-mono font-bold text-xs shadow-2xs group-hover:bg-blue-700 transition-colors">
              RP
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-sm tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] font-mono text-slate-400 font-semibold tracking-wider">
                AI/ML Engineer
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-1 text-sm font-medium">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-xs font-bold transition-all duration-150 cursor-pointer py-2 px-3.5 rounded-full ${
                    activeTab === item.id
                      ? "bg-blue-50 text-blue-700 font-bold border border-blue-100"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleNavClick("project")}
              id="nav-cta-button"
              className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-blue-700 transition-all shadow-2xs inline-flex items-center gap-1.5 cursor-pointer ml-2"
            >
              <span>Explore Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none rounded-lg"
              id="mobile-menu-toggle"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-3 px-4 space-y-2 shadow-sm" id="mobile-nav-drawer">
          {menuItems.map((item) => (
            <button
              key={item.id}
              id={`mobile-nav-item-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-bold ${
                activeTab === item.id
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => handleNavClick("contact")}
              id="mobile-nav-cta"
              className="flex w-full items-center justify-center gap-2 bg-blue-600 text-white text-xs font-bold px-4 py-2.5 rounded-full hover:bg-blue-700 transition-colors"
            >
              Contact Me
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

