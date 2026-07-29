import React, { useState } from "react";
import { Mail, Phone, Send, CheckCircle2, RefreshCw } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<any | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields (Name, Email, and Message).");
      return;
    }

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData, timestamp: new Date().toLocaleString() });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  const handleReset = () => {
    setSubmittedData(null);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm" id="contact-form-component">
      {!submittedData ? (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Hiring Manager / Recruiter"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-lg text-sm transition-all focus:outline-hidden"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@company.com"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-lg text-sm transition-all focus:outline-hidden"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-slate-500">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Internship / Entry-level opportunity inquiry"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-lg text-sm transition-all focus:outline-hidden"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-500">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Briefly tell me about your team's requirements or internship openings..."
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-lg text-sm transition-all focus:outline-hidden resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            id="contact-submit-btn"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full transition-colors cursor-pointer disabled:bg-blue-400"
          >
            {isSubmitting ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Sending Secure Inquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </>
            )}
          </button>
        </form>
      ) : (
        <div className="text-center py-6 space-y-6" id="contact-success-state">
          <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600 border border-emerald-100">
            <CheckCircle2 className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <h3 className="font-sans font-bold text-xl text-slate-900 tracking-tight">Message Received</h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto">
              Thank you for reaching out! Your message has been sent. Here is a copy of what was submitted:
            </p>
          </div>

          {/* Submitted data preview card */}
          <div className="bg-slate-50 rounded-xl p-4 text-left border border-slate-200 font-mono text-xs max-w-md mx-auto space-y-2">
            <div className="flex justify-between border-b border-slate-200 pb-1.5">
              <span className="font-bold text-slate-500 uppercase">Field</span>
              <span className="font-bold text-slate-500 uppercase">Recorded Value</span>
            </div>
            <div>
              <span className="text-slate-400 font-semibold uppercase">Name:</span> <span className="text-slate-800 font-bold">{submittedData.name}</span>
            </div>
            <div>
              <span className="text-slate-400 font-semibold uppercase">Email:</span> <span className="text-slate-800 font-bold">{submittedData.email}</span>
            </div>
            {submittedData.subject && (
              <div>
                <span className="text-slate-400 font-semibold uppercase">Subject:</span> <span className="text-slate-800 font-bold">{submittedData.subject}</span>
              </div>
            )}
            <div className="border-t border-slate-200 pt-1.5 mt-1.5">
              <p className="text-slate-400 font-semibold uppercase mb-1">Message:</p>
              <p className="text-slate-700 bg-white p-2 rounded border border-slate-200 text-[11px] leading-relaxed whitespace-pre-wrap">
                {submittedData.message}
              </p>
            </div>
            <div className="text-[10px] text-slate-400 text-right pt-1 uppercase font-bold">
              Registered at: {submittedData.timestamp}
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={handleReset}
              id="contact-reset-btn"
              className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 font-bold uppercase tracking-wider cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Send another message</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
