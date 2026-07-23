import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Linkedin,
  CheckCircle,
  ArrowRight,
  Clock,
  DollarSign,
  Target,
  Zap,
  MessageSquare,
  UserCheck,
  ShieldCheck,
  Globe,
  Calendar,
} from "lucide-react";

const HirePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceCategory: "Global Business Setup & Payment Gateways",
    project: "",
    timeline: "ASAP",
    budget: "$1,000 - $3,000",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "e883e479-715b-432d-9eb5-8e36ae22bc30",
          to_email: "devzeeofficial@gmail.com",
          subject: `⚡ New Consultation Hire Request from ${formData.name}`,
          from_name: "CodeWithZee Platform",
          replyto: formData.email,
          name: formData.name,
          email: formData.email,
          serviceCategory: formData.serviceCategory,
          timeline: formData.timeline,
          budget: formData.budget,
          project: formData.project,
          message: `New Consultation Hire Request:\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.serviceCategory}\nTimeline: ${formData.timeline}\nBudget: ${formData.budget}\nProject Details: ${formData.project}`,
        }),
      });

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        serviceCategory: "Global Business Setup & Payment Gateways",
        project: "",
        timeline: "ASAP",
        budget: "$1,000 - $3,000",
      });
    } catch (error) {
      console.error("Error sending form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const process = [
    {
      number: "1",
      title: "Share Your Requirements",
      description: "Briefly outline your business setup, MVP, or AI workflow needs.",
      icon: MessageSquare,
    },
    {
      number: "2",
      title: "1-on-1 Consultation",
      description: "We align on scope, deliverables, and architecture timeline.",
      icon: Target,
    },
    {
      number: "3",
      title: "Clear Milestone Terms",
      description: "Fixed transparent pricing upfront with defined deliverables.",
      icon: DollarSign,
    },
    {
      number: "4",
      title: "Execution & Handover",
      description: "Fast, clean, high-performance systems delivered on schedule.",
      icon: Zap,
    },
  ];

  const highlights = [
    "Direct 1-on-1 access with single point of contact",
    "US LLC & UK LTD Corporate Formation Guidance",
    "Verified Stripe & PayPal Business Gateway Integration",
    "Wise Business, Mercury Bank & Payoneer Onboarding",
    "Production-grade 7-Day MVP Software Builds",
    "AI Agents & Automated CRM Pipelines",
    "Top 1% Vetted Talent Matching",
    "Clear milestone terms & fixed upfront pricing",
  ];

  return (
    <div className="min-h-screen text-neutral-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-white pt-28 pb-20 overflow-hidden border-b border-neutral-800">
        <div className="absolute inset-0 bg-[radial-gradient(#ee720a_1px,transparent_1px)] [background-size:32px_32px] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-xs font-bold text-primary-400 mb-6">
              <UserCheck className="w-4 h-4" />
              <span>DIRECT CONSULTATION & INQUIRY</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
              Book a Consultation &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-peach-400">
                Work With Me
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 mb-8 leading-relaxed">
              If you need technical execution—fast, clean, and revenue-aligned—let's schedule a direct consultation. From legal formation and Stripe setup to 7-day MVPs and AI automation.
            </p>
            <a
              href="#consultation-form"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold text-base transition-colors shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              <span>Schedule Consultation</span>
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-4">
              How We Work Together
            </h2>
            <p className="text-base text-neutral-600">
              Clear steps, direct communication, and outcome-aligned execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="bg-neutral-50 border-2 border-neutral-200 rounded-2xl p-6 hover:border-primary-500 hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-primary-600 text-white rounded-xl flex items-center justify-center font-extrabold text-lg">
                        {step.number}
                      </div>
                      <Icon className="w-6 h-6 text-neutral-400" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deliverables Overview */}
      <section className="py-16 bg-neutral-50 border-t border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-2 border-neutral-200 rounded-3xl p-8 shadow-xs">
            <h3 className="text-xl font-extrabold text-neutral-900 mb-6 flex items-center space-x-2">
              <ShieldCheck className="w-6 h-6 text-primary-600" />
              <span>What You Can Expect</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-sm text-neutral-800 font-medium">
                  <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation-form" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-4">
              Book Your Consultation
            </h2>
            <p className="text-base text-neutral-600">
              Provide a brief overview of your setup or product requirement. I reply within 24 hours.
            </p>
          </div>

          <div className="bg-neutral-50 border-2 border-neutral-200 rounded-3xl p-8 sm:p-10 shadow-xs">
            {submitStatus === "success" ? (
              <div className="p-8 bg-primary-50 border border-primary-200 rounded-2xl text-center">
                <CheckCircle className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Consultation Request Received!
                </h3>
                <p className="text-neutral-700 text-sm">
                  Thanks! I will review your project details and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-xl focus:border-primary-600 focus:outline-none text-sm"
                      placeholder="e.g. John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-xl focus:border-primary-600 focus:outline-none text-sm"
                      placeholder="john@startup.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                    Primary Service Category
                  </label>
                  <select
                    value={formData.serviceCategory}
                    onChange={(e) =>
                      setFormData({ ...formData, serviceCategory: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-xl focus:border-primary-600 focus:outline-none text-sm font-medium text-neutral-800"
                  >
                    <option value="Global Business Setup & Payment Gateways">
                      Global Business Setup & Payment Gateways (LLC, Stripe, PayPal, Wise)
                    </option>
                    <option value="MVP Development (7 Days)">
                      MVP Development in 7 Days (React, SaaS, Supabase)
                    </option>
                    <option value="AI Solutions & Workflow Automations">
                      AI Solutions & Workflow Automation (Zapier, Make, OpenAI)
                    </option>
                    <option value="Top 1% Vetted Talent Match">
                      Top 1% Vetted Talent Matching
                    </option>
                    <option value="1-on-1 Founder Mentorship">
                      1-on-1 Founder Mentorship & Strategy
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                    Project Overview / Current Requirement
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.project}
                    onChange={(e) =>
                      setFormData({ ...formData, project: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-xl focus:border-primary-600 focus:outline-none text-sm resize-none"
                    placeholder="Briefly describe your business, timeline, or key requirement..."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                      Desired Timeline
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.timeline}
                      onChange={(e) =>
                        setFormData({ ...formData, timeline: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-xl focus:border-primary-600 focus:outline-none text-sm"
                      placeholder="e.g. 1 week, Immediate"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                      Budget Range
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-xl focus:border-primary-600 focus:outline-none text-sm"
                      placeholder="e.g. $1,000 - $3,000"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded-xl text-base transition-colors flex items-center justify-center space-x-2 shadow-md disabled:opacity-50"
                >
                  <Calendar className="w-5 h-5 text-primary-400" />
                  <span>{isSubmitting ? "Submitting..." : "Submit Consultation Request"}</span>
                </button>
              </form>
            )}

            <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-600">
              <a
                href="https://wa.me/923474552747"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 hover:text-emerald-700 transition-colors font-bold text-emerald-600"
              >
                <span>WhatsApp: +92 347 4552747</span>
              </a>
              <a
                href="mailto:devzeeofficial@gmail.com"
                className="flex items-center space-x-2 hover:text-primary-600 transition-colors font-medium"
              >
                <Mail className="w-4 h-4 text-primary-600" />
                <span>devzeeofficial@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/zaheerexplores/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-primary-600 transition-colors font-medium"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
                <span>linkedin.com/in/zaheerexplores</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HirePage;
