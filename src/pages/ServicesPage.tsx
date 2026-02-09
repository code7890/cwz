import React from "react";
import { Link } from "react-router-dom";
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
  ExternalLink,
  AlertCircle,
} from "lucide-react";

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Zap,
      title: "MVP in 7 Days",
      tagline: "For founders who want validation, not perfection.",
      description:
        "A working MVP you can show to users, investors, or clients—built fast, clean, and focused on the core problem.",
      includes: [
        "Core features only (no bloat)",
        "Clean frontend + backend",
        "Authentication / basic database",
        "Deployment + handover",
      ],
      notIncludes: [
        "No over-engineering",
        "No long-term scalability debates",
        "No endless revisions",
      ],
      timeline: "5–7 days",
      bestFor: "Early-stage founders, solo builders, idea validation",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: Cog,
      title: "Agency Workflow Automation",
      subtitle: "(AI + Ops)",
      tagline:
        "For agencies that already get leads—but lose time and money in operations.",
      description:
        "Stop losing leads and time to manual chaos. Automate your operations end-to-end.",
      solves: [
        "Missed or late lead follow-ups",
        "Manual data entry",
        "Messy inboxes, Sheets, and WhatsApp chaos",
      ],
      automations: [
        "Website / ad leads → CRM / Sheet",
        "Instant email or WhatsApp replies",
        "AI-powered follow-up emails",
        "Team notifications + reminders",
      ],
      tools: "Zapier, Make, Google Sheets, Notion, Gmail, OpenAI",
      timeline: "3–5 days",
      bestFor: "Marketing agencies, web agencies, service businesses",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: Users,
      title: "Top 1% Vetted Talent",
      tagline: "For agencies and startups that need reliable builders—fast.",
      description:
        "This is not a marketplace. And it's not random profiles. I personally interview, test, and shortlist developers, designers, and operators I trust.",
      process: [
        "I understand your exact requirement",
        "I shortlist 1–3 relevant people from my network",
        "You interview or directly start with them",
        "I stay involved to ensure quality & delivery",
      ],
      roles: [
        "Full-stack developers",
        "Frontend / Backend engineers",
        "Automation & AI engineers",
        "Product-focused builders",
      ],
      why: ["No resumes spam", "No endless screening", "No junior surprises"],
      engagement: "Contract / project-based / monthly",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">Execution, Not Slides</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              I build fast, practical systems that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                make money
              </span>
            </h1>
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
              CodeWithZee is where roadmaps, courses, and AI tools live. But
              this page is about execution.
            </p>
            <p className="text-lg text-neutral-400 mb-8">
              If you need something real—built, shipped, and working—these are
              the three services I personally deliver.
            </p>
            <Link
              to="#services"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors font-semibold text-lg"
            >
              <span>See Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl border-2 ${service.borderColor} overflow-hidden hover:shadow-xl transition-shadow`}
              >
                <div
                  className={`${service.bgColor} px-8 py-6 border-b-2 ${service.borderColor}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`p-3 bg-gradient-to-br ${service.color} rounded-xl`}
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-neutral-900 mb-1">
                          {service.title}
                          {service.subtitle && (
                            <span className="text-2xl font-normal text-neutral-600 ml-2">
                              {service.subtitle}
                            </span>
                          )}
                        </h2>
                        <p className="text-lg text-neutral-700 font-medium">
                          {service.tagline}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-lg text-neutral-700 mb-8">
                    {service.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      {service.includes && (
                        <div>
                          <h3 className="text-lg font-bold text-neutral-900 mb-3">
                            What you get
                          </h3>
                          <ul className="space-y-2">
                            {service.includes.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start space-x-3"
                              >
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span className="text-neutral-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {service.solves && (
                        <div>
                          <h3 className="text-lg font-bold text-neutral-900 mb-3">
                            What this solves
                          </h3>
                          <ul className="space-y-2">
                            {service.solves.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start space-x-3"
                              >
                                <Target className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                <span className="text-neutral-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {service.process && (
                        <div>
                          <h3 className="text-lg font-bold text-neutral-900 mb-3">
                            How this works
                          </h3>
                          <ol className="space-y-2">
                            {service.process.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start space-x-3"
                              >
                                <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm font-bold">
                                  {i + 1}
                                </span>
                                <span className="text-neutral-700">{item}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      {service.notIncludes && (
                        <div>
                          <h3 className="text-lg font-bold text-neutral-900 mb-3">
                            What this is NOT
                          </h3>
                          <ul className="space-y-2">
                            {service.notIncludes.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start space-x-3"
                              >
                                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <span className="text-neutral-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {service.automations && (
                        <div>
                          <h3 className="text-lg font-bold text-neutral-900 mb-3">
                            Typical automations
                          </h3>
                          <ul className="space-y-2">
                            {service.automations.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start space-x-3"
                              >
                                <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                <span className="text-neutral-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4 p-4 bg-neutral-50 rounded-lg">
                            <p className="text-sm font-semibold text-neutral-700 mb-1">
                              Tools (example)
                            </p>
                            <p className="text-sm text-neutral-600">
                              {service.tools}
                            </p>
                          </div>
                        </div>
                      )}

                      {service.roles && (
                        <div>
                          <h3 className="text-lg font-bold text-neutral-900 mb-3">
                            Roles I help you hire
                          </h3>
                          <ul className="space-y-2">
                            {service.roles.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start space-x-3"
                              >
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span className="text-neutral-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {service.why && (
                        <div>
                          <h3 className="text-lg font-bold text-neutral-900 mb-3">
                            Why this is different
                          </h3>
                          <ul className="space-y-2">
                            {service.why.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start space-x-3"
                              >
                                <Sparkles className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                <span className="text-neutral-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                          {service.engagement && (
                            <div className="mt-4 p-4 bg-neutral-50 rounded-lg">
                              <p className="text-sm font-semibold text-neutral-700 mb-1">
                                Engagement
                              </p>
                              <p className="text-sm text-neutral-600">
                                {service.engagement}
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-8 pt-6 border-t border-neutral-200 flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-neutral-600" />
                        <span className="text-sm font-semibold text-neutral-900">
                          Timeline:
                        </span>
                        <span className="text-sm text-neutral-700">
                          {service.timeline}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Target className="w-5 h-5 text-neutral-600" />
                        <span className="text-sm font-semibold text-neutral-900">
                          Best for:
                        </span>
                        <span className="text-sm text-neutral-700">
                          {service.bestFor}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to ship something real?
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            Let's talk about execution—fast, clean, and working.
          </p>
          <Link
            to="/hire"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors font-semibold text-lg"
          >
            <span>Hire Me</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Case studies & writing
            </h2>
            <p className="text-lg text-neutral-600">
              Technical roadmaps, AI tools & breakdowns, real-world product
              thinking
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="https://medium.com/@codewithzee"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border-2 border-neutral-200 rounded-xl hover:border-primary-600 hover:shadow-lg transition-all group"
            >
              <ExternalLink className="w-6 h-6 text-neutral-400 group-hover:text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Blog (Medium)
              </h3>
              <p className="text-neutral-600">
                Technical articles and insights
              </p>
            </a>

            <a
              href="https://codewithzee.com/case-studies"
              className="p-6 border-2 border-neutral-200 rounded-xl hover:border-primary-600 hover:shadow-lg transition-all group"
            >
              <ExternalLink className="w-6 h-6 text-neutral-400 group-hover:text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Case studies
              </h3>
              <p className="text-neutral-600">Real projects and results</p>
            </a>

            <a
              href="https://codewithzee.com/tools"
              className="p-6 border-2 border-neutral-200 rounded-xl hover:border-primary-600 hover:shadow-lg transition-all group"
            >
              <ExternalLink className="w-6 h-6 text-neutral-400 group-hover:text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Tools & experiments
              </h3>
              <p className="text-neutral-600">AI tools and breakdowns</p>
            </a>
          </div>
        </div>
      </section>

      {/* Final Note */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl font-bold text-neutral-900 mb-4">
            I don't sell dreams. I ship systems.
          </p>
          <p className="text-lg text-neutral-600 mb-8">
            If that's what you need—we should talk.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <a
              href="mailto:contact@codewithzee.com"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors font-medium"
            >
              <Mail className="w-5 h-5" />
              <span>Email Me</span>
            </a>
            <a
              href="https://linkedin.com/in/codewithzee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-neutral-900 text-neutral-900 rounded-lg hover:bg-neutral-900 hover:text-white transition-colors font-medium"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
