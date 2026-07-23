import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Zap,
  Cog,
  Users,
  ArrowRight,
  CheckCircle,
  Clock,
  Target,
  Sparkles,
  Mail,
  Linkedin,
  Globe,
  DollarSign,
  ShieldCheck,
  Building,
  CreditCard,
  UserCheck,
  Calendar,
} from "lucide-react";

const ServicesPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  const services = [
    {
      id: "infra",
      badge: "Legal & Payment Infra",
      title: "Global Business Setup & Payment Gateways",
      subtitle: "Full international legal and financial foundation for growing startups.",
      description:
        "Build a verified, hassle-free global business presence. I assist with legal corporate formation, tax compliance guidance, and verified payment gateway integrations.",
      highlights: [
        "US LLC or UK LTD Company Incorporation",
        "Registered Agent & Official Business Address Setup",
        "ITIN Application & Tax Number Guidance",
        "Stripe & PayPal Business Verification & Setup",
        "Wise Business, Mercury Bank & Payoneer Integrations",
      ],
      outcomes: [
        "Fully operational global payment acceptance",
        "Clean legal ownership & bank account access",
        "Step-by-step guidance without gateway compliance friction",
      ],
      timeline: "3–7 Business Days",
      pricing: "Fixed Package • Clear Deliverables",
      color: "from-primary-500 to-primary-600",
      bgColor: "bg-primary-50/50",
      borderColor: "border-primary-200",
      icon: Globe,
    },
    {
      id: "mvp",
      badge: "Software Engineering",
      title: "MVP Development in 7 Days",
      subtitle: "Launch a market-ready product fast.",
      description:
        "Transform your vision into a deployed, high-performance web application built with modern architecture (React/Next.js, Supabase, Tailwind, Stripe).",
      highlights: [
        "Core Feature Set Engineering & Frontend/Backend Architecture",
        "Clean, Modern UI/UX Design Tailored to Your Brand",
        "User Authentication, Database & File Storage Setup",
        "Stripe Payment Gateway & Subscription Integration",
        "Deployment, Custom Domain Setup & Full Code Handover",
      ],
      outcomes: [
        "Live product ready for user onboarding and investor demos",
        "Clean code structure designed for future scaling",
        "Complete ownership of all code and accounts",
      ],
      timeline: "5–7 Days",
      pricing: "Fixed Milestone Pricing",
      color: "from-sage-500 to-sage-600",
      bgColor: "bg-sage-50/50",
      borderColor: "border-sage-200",
      icon: Zap,
    },
    {
      id: "automation",
      badge: "AI & Workflow Ops",
      title: "AI Solutions & Workflow Automation",
      subtitle: "Automate operations and save hundreds of hours.",
      description:
        "Streamline lead capture, client onboarding, support, and internal operations with smart AI workflows and automated CRM pipelines.",
      highlights: [
        "AI Customer Support & Lead Qualification Systems",
        "Automated Email & WhatsApp Follow-up Sequences",
        "CRM Sync Pipelines (Zapier, Make, Google Sheets, Notion)",
        "OpenAI & Custom Agent API Integration",
        "Complete Team Walkthrough & Video Documentation",
      ],
      outcomes: [
        "Zero manual data entry chaos",
        "Instant responses to incoming leads 24/7",
        "Streamlined operational efficiency",
      ],
      timeline: "3–5 Days",
      pricing: "Project Fixed Fee",
      color: "from-cream-500 to-cream-600",
      bgColor: "bg-cream-50/50",
      borderColor: "border-cream-200",
      icon: Cog,
    },
    {
      id: "talent",
      badge: "Vetted Builders",
      title: "Top 1% Vetted Talent Matching",
      tagline: "Handpicked engineering firepower for your team.",
      description:
        "Access personally tested full-stack developers, AI builders, and designers from my private network.",
      highlights: [
        "Custom Requirement & Tech Stack Mapping",
        "Shortlist of 1–3 Thoroughly Screened Candidates",
        "Direct Candidate Interview & Fast Onboarding",
        "Quality Oversight & Technical Guidance",
      ],
      outcomes: [
        "High-caliber tech talent aligned with your codebase",
        "Fast 24-48 hour matching timeframe",
        "Flexible contract or monthly engagement options",
      ],
      timeline: "24–48 Hours Matching",
      pricing: "Contract / Monthly",
      color: "from-peach-500 to-peach-600",
      bgColor: "bg-peach-50/50",
      borderColor: "border-peach-200",
      icon: Users,
    },
    {
      id: "advisory",
      badge: "Strategic Advisory",
      title: "1-on-1 Founder Mentorship & Sessions",
      tagline: "Direct clarity on architecture, growth, and payment strategy.",
      description:
        "Private 1-on-1 technical and business consultations to audit your setup, optimize product architecture, or plan your next launch step.",
      highlights: [
        "Private 60-Minute 1-on-1 Consultation Session",
        "Architecture, Code & Tech Stack Audit",
        "Global Payment Gateway & Legal Infrastructure Review",
        "Actionable Step-by-Step Execution Plan",
      ],
      outcomes: [
        "Clear technical direction and elimination of blockers",
        "Direct answers tailored to your specific setup",
      ],
      timeline: "Bookable within 48h",
      pricing: "Per Session / Retainer",
      color: "from-lavender-500 to-lavender-600",
      bgColor: "bg-lavender-50/50",
      borderColor: "border-lavender-200",
      icon: Sparkles,
    },
  ];

  return (
    <div className="min-h-screen text-neutral-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-white pt-28 pb-20 overflow-hidden border-b border-neutral-800">
        <div className="absolute inset-0 bg-[radial-gradient(#ee720a_1px,transparent_1px)] [background-size:32px_32px] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-xs font-bold text-primary-400 mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>SERVICES & INFRASTRUCTURE</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
              Build, Launch & Scale Your Business With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-500 to-peach-400">
                Direct Technical Partnership
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 mb-8 leading-relaxed font-normal">
              Whether you need global payment gateways (Stripe, PayPal, Wise, LLC), a rapid 7-day MVP launch, AI workflow automations, or vetted talent—I work with you 1-on-1 to deliver working systems.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Link
                to="/hire"
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold text-base transition-colors shadow-lg flex items-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Book a Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-mt-24 bg-white rounded-3xl border-2 ${service.borderColor} overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300`}
              >
                {/* Header */}
                <div className={`${service.bgColor} p-8 border-b-2 ${service.borderColor}`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3.5 bg-gradient-to-br ${service.color} rounded-2xl text-white shadow-md`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 bg-white px-2.5 py-1 rounded-md border border-neutral-200">
                          {service.badge}
                        </span>
                        <h2 className="text-3xl font-extrabold text-neutral-900 mt-2 mb-1">
                          {service.title}
                        </h2>
                        <p className="text-base text-neutral-700 font-medium">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 text-xs font-bold text-neutral-800 bg-white px-4 py-2 rounded-xl border border-neutral-200 shadow-sm self-start md:self-center">
                      <Clock className="w-4 h-4 text-primary-600" />
                      <span>Timeline: {service.timeline}</span>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-8">
                  <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Deliverables */}
                    <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200">
                      <h3 className="text-base font-bold text-neutral-900 mb-4 flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-primary-600" />
                        <span>Included Deliverables</span>
                      </h3>
                      <ul className="space-y-3">
                        {service.highlights.map((item, i) => (
                          <li key={i} className="flex items-start space-x-3 text-sm text-neutral-800">
                            <span className="text-primary-600 font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcomes */}
                    <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200 flex flex-col justify-between">
                      <div>
                        <h3 className="text-base font-bold text-neutral-900 mb-4 flex items-center space-x-2">
                          <Target className="w-5 h-5 text-sage-600" />
                          <span>Expected Outcomes</span>
                        </h3>
                        <ul className="space-y-3">
                          {service.outcomes.map((item, i) => (
                            <li key={i} className="flex items-start space-x-3 text-sm text-neutral-800">
                              <span className="text-sage-600 font-bold">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 pt-4 border-t border-neutral-200/80 flex items-center justify-between text-xs font-bold text-neutral-600">
                        <span>Pricing Structure</span>
                        <span className="text-primary-700 bg-white px-3 py-1 rounded-md border border-primary-200">
                          {service.pricing}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center space-x-2 text-xs font-semibold text-neutral-600">
                      <ShieldCheck className="w-4 h-4 text-green-600" />
                      <span>Direct 1-on-1 Partnership</span>
                    </div>
                    <Link
                      to="/hire"
                      className="w-full sm:w-auto px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-sm rounded-xl transition-colors flex items-center justify-center space-x-2 shadow-sm"
                    >
                      <span>Book Consultation For This Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="py-16 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-3">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-base text-primary-100 mb-8 max-w-2xl mx-auto">
            Schedule a direct consultation call to discuss your business formation, MVP, or AI workflow needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/hire"
              className="px-8 py-4 bg-white text-primary-600 hover:bg-neutral-100 rounded-xl font-bold text-base shadow-lg transition-colors flex items-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Book a Consultation</span>
            </Link>
            <a
              href="mailto:devzeeofficial@gmail.com"
              className="px-8 py-4 bg-neutral-900 text-white hover:bg-neutral-800 rounded-xl font-bold text-base transition-colors flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Email Directly</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
