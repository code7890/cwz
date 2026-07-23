import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code,
  Users,
  Target,
  Star,
  CheckCircle,
  Sparkles,
  ShieldCheck,
  Briefcase,
  Globe,
  Clock,
  DollarSign,
  UserCheck,
  Cpu,
  Mail,
  Linkedin,
  Calendar,
  Zap,
  Check,
} from "lucide-react";

const HomePage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Business Formation & Payment Infrastructure",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

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
          subject: `⚡ New Website Consultation Inquiry from ${formData.name}`,
          from_name: "CodeWithZee Platform",
          replyto: formData.email,
          name: formData.name,
          email: formData.email,
          service: formData.service,
          details: formData.details,
          message: `New Consultation Inquiry:\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nDetails: ${formData.details}`,
        }),
      });
    } catch (err) {
      console.log("Notification status:", err);
    }
  };

  const trustPillars = [
    {
      title: "Direct 1-on-1 Access",
      desc: "Single point of contact. You communicate directly with me from start to finish.",
      icon: UserCheck,
      color: "bg-primary-50 text-primary-700 border-primary-200",
    },
    {
      title: "Outcome First",
      desc: "Revenue and growth aligned. Every line of code or setup serves your business goal.",
      icon: Target,
      color: "bg-sage-50 text-sage-700 border-sage-200",
    },
    {
      title: "Tech + Business Infra",
      desc: "Full-stack software engineering combined with global legal and payment gateways.",
      icon: Cpu,
      color: "bg-cream-50 text-cream-800 border-cream-200",
    },
    {
      title: "Transparent Fixed Pricing",
      desc: "Clear upfront quotes with explicit deliverables. No hidden hourly surprises.",
      icon: DollarSign,
      color: "bg-peach-50 text-peach-700 border-peach-200",
    },
    {
      title: "Long-Term Partnership",
      desc: "Ongoing support and technical advice long after your product launches.",
      icon: ShieldCheck,
      color: "bg-lavender-50 text-lavender-700 border-lavender-200",
    },
  ];

  const mainServices = [
    {
      id: "infra",
      badge: "Legal & Payment Infra",
      title: "Global Business Setup & Payment Gateways",
      tagline: "International financial & legal foundation.",
      description:
        "Establish a verified legal presence worldwide. I assist with corporate entity setup, address verification, and verified payment gateway integrations.",
      features: [
        "US LLC or UK LTD Company Incorporation",
        "Registered Agent & Official Business Address",
        "ITIN Application & Tax Compliance Guidance",
        "Stripe & PayPal Business Account Verification",
        "Wise Business, Mercury Bank & Payoneer Setup",
      ],
      timeline: "3–7 Days",
      icon: Globe,
      accent: "from-primary-500 to-primary-600",
      bgColor: "bg-primary-50/50",
      borderColor: "border-primary-200",
      href: "/services/business-setup",
    },
    {
      id: "mvp",
      badge: "Software Engineering",
      title: "MVP Development in 7 Days",
      tagline: "Launch your product fast with clean modern tech.",
      description:
        "Turn your product idea into a production-grade web application built with React/Next.js, Supabase, and Stripe checkout.",
      features: [
        "Full-Stack Frontend & Backend Architecture",
        "Responsive Modern Glassmorphism UI",
        "User Auth, Database & File Storage",
        "Stripe Billing & Subscription Setup",
        "Deployment & Full Code Handover",
      ],
      timeline: "5–7 Days",
      icon: Zap,
      accent: "from-sage-500 to-sage-600",
      bgColor: "bg-sage-50/50",
      borderColor: "border-sage-200",
      href: "/services#mvp",
    },
    {
      id: "ai-automation",
      badge: "AI & Operations",
      title: "AI Solutions & Workflow Automation",
      tagline: "Automate manual tasks and lead responses.",
      description:
        "Deploy custom AI agents, automated email/WhatsApp sequences, and smart CRM sync pipelines to save hundreds of operational hours.",
      features: [
        "AI Lead Qualification & Support Agents",
        "Automated WhatsApp & Email Follow-ups",
        "Zapier, Make, Notion & OpenAI Pipelines",
        "End-to-End Agency Operations Sync",
      ],
      timeline: "3–5 Days",
      icon: Cpu,
      accent: "from-cream-500 to-cream-600",
      bgColor: "bg-cream-50/50",
      borderColor: "border-cream-200",
      href: "/services#automation",
    },
    {
      id: "talent",
      badge: "Team Building",
      title: "Top 1% Vetted Talent Matching",
      tagline: "Handpicked engineering firepower for your team.",
      description:
        "Access personally tested full-stack developers, AI builders, and UI engineers from my private network.",
      features: [
        "1-on-1 Requirement Mapping",
        "Shortlist 1–3 Vetted Technical Builders",
        "Direct Interview & Onboarding",
        "Ongoing Quality Assurance",
      ],
      timeline: "24–48 Hours",
      icon: Users,
      accent: "from-peach-500 to-peach-600",
      bgColor: "bg-peach-50/50",
      borderColor: "border-peach-200",
      href: "/services#talent",
    },
  ];

  // Modern minimalist reviews without stock images
  const modernReviews = [
    {
      author: "Sharim P.",
      title: "Founder, SaaS Platform",
      location: "United States",
      service: "US LLC + Stripe Setup + MVP",
      quote:
        "Zee set up our US company structure, verified our Stripe account, and built our MVP in 6 days. Communication was direct, clear, and focused on launching quickly.",
    },
    {
      author: "Daniel M.",
      title: "Agency Director",
      location: "United Kingdom",
      service: "Workflow Automation",
      quote:
        "Our entire lead qualification and CRM pipeline now runs automatically through AI agents. Saved us dozens of hours every single week.",
    },
    {
      author: "Usman R.",
      title: "E-Commerce Director",
      location: "UAE",
      service: "Payment Infrastructure",
      quote:
        "Having one point of contact who understands technical engineering and international payment gateways solved a major bottleneck for us.",
    },
  ];

  return (
    <div className="animate-fade-in overflow-x-hidden text-neutral-900">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-white pt-28 pb-20 overflow-hidden border-b border-neutral-800">
        <div className="absolute inset-0 bg-[radial-gradient(#ee720a_1px,transparent_1px)] [background-size:32px_32px] opacity-10"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-600/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-neutral-800/90 border border-neutral-700 rounded-full text-xs font-semibold text-primary-400 mb-8 shadow-inner">
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span>FOUNDER PARTNER & TECHNICAL CONSULTANT</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Build, Launch & Scale Your Business With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-500 to-peach-400">
                Direct Technical Partnership
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
              From global business formation & payment gateways (LLC, Stripe, PayPal, Wise) to 7-Day MVPs, AI automations, and vetted talent matching.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
              <Link
                to="/hire"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-xl font-bold text-base transition-all duration-300 shadow-lg hover:shadow-primary-500/25 flex items-center justify-center space-x-2 group"
              >
                <Calendar className="w-5 h-5" />
                <span>Work With Me</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto px-8 py-4 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-neutral-200 rounded-xl font-semibold text-base transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Explore All Services</span>
              </Link>
            </div>

            {/* Quick Badges */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-4xl mx-auto border-t border-neutral-800 pt-8 text-left">
              <div className="flex items-center space-x-2 text-xs font-semibold text-neutral-300 bg-neutral-800/40 p-2.5 rounded-lg border border-neutral-800">
                <Check className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span>1 Point of Contact</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-neutral-300 bg-neutral-800/40 p-2.5 rounded-lg border border-neutral-800">
                <Check className="w-4 h-4 text-sage-400 flex-shrink-0" />
                <span>Outcome First</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-neutral-300 bg-neutral-800/40 p-2.5 rounded-lg border border-neutral-800">
                <Check className="w-4 h-4 text-cream-400 flex-shrink-0" />
                <span>Tech + Business</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-neutral-300 bg-neutral-800/40 p-2.5 rounded-lg border border-neutral-800">
                <Check className="w-4 h-4 text-peach-400 flex-shrink-0" />
                <span>Fixed Upfront Pricing</span>
              </div>
              <div className="col-span-2 md:col-span-1 flex items-center space-x-2 text-xs font-semibold text-neutral-300 bg-neutral-800/40 p-2.5 rounded-lg border border-neutral-800 justify-center md:justify-start">
                <Check className="w-4 h-4 text-lavender-400 flex-shrink-0" />
                <span>Long-Term Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES SECTION */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary-50 border border-primary-200 rounded-full text-xs font-bold text-primary-700 mb-3">
                <Briefcase className="w-3.5 h-3.5" />
                <span>CORE SERVICES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
                Everything Needed To Launch & Scale
              </h2>
            </div>
            <p className="text-neutral-600 max-w-md mt-4 md:mt-0 text-sm leading-relaxed">
              Global payment gateways, legal business setup, rapid 7-day software engineering, and AI automation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((srv) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.id}
                  className={`rounded-3xl border-2 ${srv.borderColor} ${srv.bgColor} p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-white border border-neutral-200 rounded-full text-neutral-800 shadow-xs">
                        {srv.badge}
                      </span>
                      <div className="flex items-center space-x-2 text-xs font-bold text-neutral-700 bg-white/80 px-3 py-1 rounded-lg border border-neutral-200">
                        <Clock className="w-3.5 h-3.5 text-primary-600" />
                        <span>Timeline: {srv.timeline}</span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 mb-4">
                      <div
                        className={`p-3.5 rounded-2xl bg-gradient-to-br ${srv.accent} text-white shadow-md group-hover:scale-105 transition-transform`}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-neutral-900">
                          {srv.title}
                        </h3>
                        <p className="text-sm font-semibold text-primary-700 mt-0.5">
                          {srv.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-neutral-700 mb-6 text-sm leading-relaxed">
                      {srv.description}
                    </p>

                    <div className="space-y-2.5 mb-8">
                      {srv.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center space-x-2.5 text-sm text-neutral-800 font-medium">
                          <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-neutral-200/80 flex items-center justify-between">
                    <span className="text-xs font-bold text-neutral-500">
                      Direct 1-on-1 Execution
                    </span>
                    <Link
                      to={srv.href}
                      className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold rounded-xl transition-colors flex items-center space-x-2 shadow-xs"
                    >
                      <span>View Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MODERN MINIMALIST REVIEWS SECTION (NO IMAGES) */}
      <section className="py-20 bg-neutral-50 border-t border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-neutral-900 mb-3">
              Client Feedback & Results
            </h2>
            <p className="text-neutral-600 text-sm">
              Direct feedback from founders and technical leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {modernReviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-neutral-200 p-8 rounded-3xl shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-1 text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-neutral-800 text-sm leading-relaxed mb-6 font-normal">
                    "{rev.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div>
                    <div className="font-extrabold text-sm text-neutral-900">{rev.author}</div>
                    <div className="text-xs text-neutral-500 font-medium">{rev.title} • {rev.location}</div>
                  </div>
                  <span className="text-[11px] font-bold text-primary-700 bg-primary-50 px-2.5 py-1 rounded-md border border-primary-200">
                    {rev.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMING SOON CONTENT TEASER */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 bg-neutral-900 text-white rounded-3xl border border-neutral-800 text-center relative overflow-hidden">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary-950 border border-primary-800 text-primary-400 rounded-full text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CONTENT ECOSYSTEM</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Free Technical Courses & Roadmaps</h3>
            <p className="text-neutral-400 text-sm max-w-xl mx-auto mb-6">
              Interactive video courses, technical roadmaps, and AI tool directories are currently being updated and will be available soon.
            </p>
            <span className="inline-block px-4 py-2 bg-neutral-800 border border-neutral-700 text-neutral-300 text-xs font-bold rounded-xl">
              Coming Soon
            </span>
          </div>
        </div>
      </section>

      {/* DIRECT CONSULTATION FORM */}
      <section className="py-24 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-2 border-neutral-200 text-neutral-900 rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1 rounded-full border border-primary-200">
                DIRECT INQUIRY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mt-4 mb-3">
                Book a Direct Consultation
              </h2>
              <p className="text-neutral-600 text-sm">
                Fill this short form to discuss your setup, timeline, and requirements. I reply within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="bg-primary-50 border border-primary-200 p-8 rounded-2xl text-center">
                <CheckCircle className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Inquiry Submitted!
                </h3>
                <p className="text-neutral-700 text-sm">
                  Thank you! I'll review your details and reply shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Alex Rivera"
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary-600 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="alex@startup.com"
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary-600 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 focus:outline-none focus:border-primary-600 text-sm font-medium"
                  >
                    <option value="Business Formation & Payment Infrastructure">
                      Global Business Setup & Payment Gateways (LLC, Stripe, PayPal, Wise)
                    </option>
                    <option value="MVP Development (7 Days)">
                      MVP Development in 7 Days (React, SaaS, Supabase)
                    </option>
                    <option value="AI & Automation">
                      AI Solutions & Workflow Automation
                    </option>
                    <option value="Vetted Talent Provider">
                      Top 1% Vetted Talent Matching
                    </option>
                    <option value="Mentorship & Strategy">
                      1-on-1 Founder Strategy Consultation
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.details}
                    onChange={(e) =>
                      setFormData({ ...formData, details: e.target.value })
                    }
                    placeholder="Briefly describe your business, timeline, or key requirement..."
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-xl text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary-600 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded-xl text-base transition-all shadow-md flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5 text-primary-400" />
                  <span>Submit Inquiry</span>
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
              <span className="flex items-center space-x-1.5">
                <Mail className="w-4 h-4 text-primary-600" />
                <span>devzeeofficial@gmail.com</span>
              </span>
              <a
                href="https://www.linkedin.com/in/zaheerexplores/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 hover:text-neutral-900 transition-colors"
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

export default HomePage;
