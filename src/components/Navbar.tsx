import React, { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Dashboard" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "Skills & Profile" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-200" id="main-navigation">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand Name */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 font-sans tracking-tight text-slate-900 cursor-pointer"
            id="nav-logo"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              RP
            </div>
            <span className="font-bold text-lg tracking-tight uppercase">
              {PERSONAL_INFO.name}
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6 text-sm font-medium text-slate-500">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-semibold transition-all duration-200 cursor-pointer py-5 px-1 relative ${
                    activeTab === item.id
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-slate-500 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleNavClick("contact")}
              id="nav-cta-button"
              className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-500 hover:text-slate-900 focus:outline-none"
              id="mobile-menu-toggle"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-4 px-4 space-y-3" id="mobile-nav-drawer">
          {menuItems.map((item) => (
            <button
              key={item.id}
              id={`mobile-nav-item-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-2 rounded-lg text-base font-semibold ${
                activeTab === item.id
                  ? "bg-slate-50 text-blue-600"
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
              className="flex w-full items-center justify-center gap-2 bg-blue-600 text-white text-sm font-semibold px-4 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              Contact Me
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
