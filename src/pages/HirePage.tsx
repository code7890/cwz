import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Linkedin,
  CheckCircle,
  XCircle,
  ArrowRight,
  Clock,
  DollarSign,
  Target,
  Zap,
  AlertTriangle,
  MessageSquare,
} from "lucide-react";

const HirePage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    timeline: "",
    budget: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

What I'm building:
${formData.project}

Timeline: ${formData.timeline}
Budget Range: ${formData.budget}
    `);
    window.location.href = `mailto:contact@codewithzee.com?subject=${subject}&body=${body}`;
  };

  const process = [
    {
      number: "1",
      title: "You describe the problem",
      description: "Not features. Not tech. Just the real problem.",
      icon: MessageSquare,
    },
    {
      number: "2",
      title: "I suggest a simple solution",
      description: "Clear scope. Clear timeline. No jargon.",
      icon: Target,
    },
    {
      number: "3",
      title: "We agree on price & timeline",
      description: "Small, fixed scope • Clear deliverables • 50% upfront",
      icon: DollarSign,
    },
    {
      number: "4",
      title: "I build & deliver",
      description: "Fast. Clean. Working.",
      icon: Zap,
    },
  ];

  const doList = [
    "Build MVPs in 5-7 days",
    "Automate agency workflows",
    "Connect you with vetted talent",
    "Ship working systems fast",
    "Clear scope & timeline",
    "Fixed pricing upfront",
  ];

  const dontList = [
    "Long unpaid discussions",
    '"Let\'s explore ideas" calls',
    "Free consulting disguised as meetings",
    "Endless revisions",
    "Over-engineering",
    "Vague requirements",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">Fast Execution</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Hire Me
            </h1>
            <p className="text-2xl text-neutral-300 mb-8 leading-relaxed">
              If you're here, you probably need execution—fast.
            </p>
            <p className="text-lg text-neutral-400 mb-8">
              Before we talk, here's how I work.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors font-semibold text-lg"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              How the process works
            </h2>
            <p className="text-xl text-neutral-600">
              Simple, transparent, and focused on results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white border-2 border-neutral-200 rounded-xl p-6 hover:border-primary-600 hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                      {step.number}
                    </div>
                    <step.icon className="w-8 h-8 text-neutral-400" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-neutral-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Do / Don't Do */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              What I DO & DON'T do
            </h2>
            <p className="text-xl text-neutral-600">
              Clear boundaries = better results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* What I DO */}
            <div className="bg-white border-2 border-green-200 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  What I DO
                </h3>
              </div>
              <ul className="space-y-3">
                {doList.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What I DON'T DO */}
            <div className="bg-white border-2 border-red-200 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <XCircle className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  What I DON'T do
                </h3>
              </div>
              <ul className="space-y-3">
                {dontList.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 p-6 bg-yellow-50 border-2 border-yellow-200 rounded-xl">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-neutral-900 mb-2">
                  Important
                </h4>
                <p className="text-neutral-700">
                  If you want execution, we'll work great. If you want endless
                  discussions and free consulting, we won't.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Best way to reach me
            </h2>
            <p className="text-xl text-neutral-600">
              Short messages get faster replies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a
              href="mailto:contact@codewithzee.com"
              className="flex items-center space-x-4 p-6 bg-neutral-50 border-2 border-neutral-200 rounded-xl hover:border-primary-600 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                <Mail className="w-7 h-7 text-primary-600 group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-1">
                  Email
                </h3>
                <p className="text-neutral-600">contact@codewithzee.com</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/codewithzee"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-6 bg-neutral-50 border-2 border-neutral-200 rounded-xl hover:border-primary-600 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <Linkedin className="w-7 h-7 text-blue-600 group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-1">
                  LinkedIn
                </h3>
                <p className="text-neutral-600">linkedin.com/in/codewithzee</p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral-50 border-2 border-neutral-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">
              Quick Contact Form
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-primary-600 focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-primary-600 focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-900 mb-2">
                  What you're building
                </label>
                <textarea
                  required
                  value={formData.project}
                  onChange={(e) =>
                    setFormData({ ...formData, project: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-primary-600 focus:outline-none resize-none"
                  placeholder="Describe the problem you're solving..."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    Timeline
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.timeline}
                    onChange={(e) =>
                      setFormData({ ...formData, timeline: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-primary-600 focus:outline-none"
                    placeholder="e.g., 1 week, ASAP"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-900 mb-2">
                    Budget Range
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-primary-600 focus:outline-none"
                    placeholder="e.g., $2k-5k"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors font-semibold text-lg"
              >
                <span>Send Message</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="py-20 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Want to see what I can build for you?
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            Check out my services: MVPs, Automation, and Vetted Talent
          </p>
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors font-semibold text-lg"
          >
            <span>View Services</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Final Note */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl font-bold text-neutral-900 mb-4">
            I don't sell dreams. I ship systems.
          </p>
          <p className="text-lg text-neutral-600">
            If that's what you need—we should talk.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HirePage;
