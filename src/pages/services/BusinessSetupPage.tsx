import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  CheckCircle,
  ShieldCheck,
  ArrowRight,
  Clock,
  DollarSign,
  Building,
  CreditCard,
  ChevronDown,
  ChevronUp,
  Zap,
  Calendar,
  MessageCircle,
  FileText,
  UserCheck,
  Check,
  Mail,
  Linkedin,
  Sparkles,
  PhoneCall,
  HelpCircle,
  Lock,
} from "lucide-react";

const BusinessSetupPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: "US LLC Complete Founder Package",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      // 1. Submit to Netlify Forms
      const netlifyBody = new URLSearchParams({
        "form-name": "business-setup",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        package: formData.package,
        notes: formData.notes,
      }).toString();

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: netlifyBody,
      });

      // 2. Email notification backup via Web3Forms API to devzeeofficial@gmail.com
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "e883e479-715b-432d-9eb5-8e36ae22bc30",
          to_email: "devzeeofficial@gmail.com",
          subject: `⚡ New Business Setup Lead: ${formData.name}`,
          from_name: "CodeWithZee Platform",
          replyto: formData.email,
          name: formData.name,
          email: formData.email,
          phone_whatsapp: formData.phone,
          package: formData.package,
          notes: formData.notes,
          message: `New Business Setup Request:\n\nName: ${formData.name}\nEmail: ${formData.email}\nWhatsApp/Phone: ${formData.phone}\nPackage: ${formData.package}\nNotes: ${formData.notes}`,
        }),
      });
    } catch (err) {
      console.log("Form notification sent:", err);
    }
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const deliverables = [
    {
      step: "01",
      title: "US LLC or UK LTD Registration",
      desc: "Official company registration in your name with state/government articles of organization.",
      tag: "Company Registration",
    },
    {
      step: "02",
      title: "Registered Agent & Business Address",
      desc: "Official commercial address required for bank accounts and payment gateway verification.",
      tag: "Official Address",
    },
    {
      step: "03",
      title: "Federal Tax ID (EIN)",
      desc: "Official US IRS Tax Number issued for your business to enable bank accounts and Stripe.",
      tag: "Tax Number",
    },
    {
      step: "04",
      title: "Stripe & PayPal Business Account",
      desc: "Verified merchant accounts configured under your business entity to accept credit cards worldwide.",
      tag: "Payment Gateways",
    },
    {
      step: "05",
      title: "Mercury & Wise Bank Accounts",
      desc: "US/UK online business bank accounts to receive USD/EUR/GBP and withdraw to your local bank.",
      tag: "Business Banking",
    },
    {
      step: "06",
      title: "1-on-1 Account Safety Guide",
      desc: "Step-by-step rules so your Stripe and bank accounts stay 100% safe and active long term.",
      tag: "Direct Support",
    },
  ];

  const faqs = [
    {
      q: "Can I open a US LLC and Stripe account if I live outside the US?",
      a: "Yes! You do not need to be a US citizen or live in the US. We register your company 100% legally from abroad and set up your bank accounts and Stripe without you needing to travel.",
    },
    {
      q: "Do I need a Social Security Number (SSN)?",
      a: "No. As an international founder, your business receives an official Federal Tax ID (EIN) from the IRS, which is all that is required for company banking and Stripe verification.",
    },
    {
      q: "How do I withdraw my earnings to my local bank account?",
      a: "Stripe and PayPal deposit your money directly into your US Mercury or Wise Business bank account. From there, you can transfer money to any local bank account in your home country within minutes.",
    },
    {
      q: "How fast will my setup be ready?",
      a: "The entire process — from company registration and tax ID to bank account and Stripe setup — takes between 5 to 7 business days.",
    },
    {
      q: "Will I get 100% full ownership of all accounts?",
      a: "Yes! All accounts, company documents, and login credentials belong 100% to you. We set everything up directly in your name.",
    },
  ];

  return (
    <div className="animate-fade-in overflow-x-hidden text-neutral-900 bg-white">
      {/* HERO SECTION - SIMPLE, PUNCHY, HIGH CONVERTING */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-white pt-28 pb-20 overflow-hidden border-b border-neutral-800">
        <div className="absolute inset-0 bg-[radial-gradient(#ee720a_1px,transparent_1px)] [background-size:32px_32px] opacity-10"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-neutral-800/90 border border-neutral-700 rounded-full text-xs font-semibold text-primary-400 mb-6 shadow-inner">
              <Zap className="w-4 h-4 text-primary-400" />
              <span>100% DONE-FOR-YOU BUSINESS & PAYMENT SETUP</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Start Accepting Payments Worldwide With a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-500 to-peach-400">
                Verified US/UK Business
              </span>
            </h1>

            {/* Subhead */}
            <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
              We register your official US LLC or UK LTD, get your tax ID (EIN), and activate your Stripe, PayPal, and bank accounts in 5 to 7 days. Zero paperwork hassle for you.
            </p>

            {/* High-Converting CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <a
                href="#intake-form"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-xl font-bold text-base transition-all duration-300 shadow-lg hover:shadow-primary-500/25 flex items-center justify-center space-x-2 group"
              >
                <span>Start Your Setup Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/923018950491"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-base transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto border-t border-neutral-800 pt-8 text-left">
              <div className="flex items-center space-x-2 text-xs font-semibold text-neutral-300 bg-neutral-800/40 p-3 rounded-xl border border-neutral-800">
                <Check className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span>100% Legal & Verified</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-neutral-300 bg-neutral-800/40 p-3 rounded-xl border border-neutral-800">
                <Check className="w-4 h-4 text-sage-400 flex-shrink-0" />
                <span>Stripe & PayPal Ready</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-neutral-300 bg-neutral-800/40 p-3 rounded-xl border border-neutral-800">
                <Check className="w-4 h-4 text-cream-400 flex-shrink-0" />
                <span>5–7 Days Turnaround</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-neutral-300 bg-neutral-800/40 p-3 rounded-xl border border-neutral-800">
                <Check className="w-4 h-4 text-peach-400 flex-shrink-0" />
                <span>Direct 1-on-1 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK WHATSAPP CTA TRIGGER BAR */}
      <section className="py-6 bg-primary-600 text-white shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center space-x-3">
            <MessageCircle className="w-6 h-6 flex-shrink-0" />
            <span className="text-sm font-bold">
              Have a quick question about your country or setup? Talk to me directly.
            </span>
          </div>
          <a
            href="https://wa.me/923018950491"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl font-bold text-xs transition-colors flex items-center space-x-2 shadow-sm flex-shrink-0"
          >
            <span>Message on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* BEFORE VS AFTER / SIMPLE COMPARISON */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-neutral-900 mb-3">
              The Easy Way To Get Your Payment Infrastructure
            </h2>
            <p className="text-neutral-600 text-sm">
              Stop struggling with confusing forms and document rejections.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* The Hard Way */}
            <div className="bg-white border-2 border-red-200 p-8 rounded-3xl shadow-xs">
              <div className="text-red-600 font-extrabold text-lg mb-4 flex items-center space-x-2">
                <span>❌ Doing It Alone</span>
              </div>
              <ul className="space-y-4 text-sm text-neutral-700">
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Confusing state forms & hidden filing fees</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Stripe account frozen due to mismatched address</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Rejected EIN applications from incorrect filings</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Weeks of frustration without accepting payments</span>
                </li>
              </ul>
            </div>

            {/* The Done-For-You Way */}
            <div className="bg-primary-50/40 border-2 border-primary-300 p-8 rounded-3xl shadow-sm">
              <div className="text-primary-700 font-extrabold text-lg mb-4 flex items-center space-x-2">
                <span>✅ Done-For-You Setup With Me</span>
              </div>
              <ul className="space-y-4 text-sm text-neutral-800 font-medium">
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 font-bold">✓</span>
                  <span>Official US LLC or UK LTD registered legally in your name</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 font-bold">✓</span>
                  <span>Verified Stripe & PayPal Business accounts configured</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 font-bold">✓</span>
                  <span>US Mercury or Wise bank accounts linked for payouts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 font-bold">✓</span>
                  <span>Complete setup delivered & ready in 5–7 days</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA BUTTON BELOW COMPARISON */}
          <div className="mt-12 text-center">
            <a
              href="#intake-form"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl font-bold text-base shadow-md transition-colors"
            >
              <span>Get Your Business Setup Started</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* EVERYTHING DONE FOR YOU (DELIVERABLES GRID) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary-50 border border-primary-200 rounded-full text-xs font-bold text-primary-700 mb-3">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>COMPLETE SETUP PACKAGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mb-4">
              Everything Included in Your Setup
            </h2>
            <p className="text-neutral-600 text-sm leading-relaxed">
              We handle every single technical and legal requirement so you can focus entirely on growing your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((item, idx) => (
              <div
                key={idx}
                className="bg-neutral-50 border border-neutral-200 rounded-3xl p-8 hover:border-primary-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-extrabold text-primary-600">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-bold text-neutral-700 bg-white px-2.5 py-1 rounded-md border border-neutral-200 uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-200/80 flex items-center space-x-2 text-xs font-semibold text-neutral-700">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Included & Handed Over</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA BANNER AFTER DELIVERABLES */}
          <div className="mt-16 p-8 bg-gradient-to-r from-neutral-900 to-neutral-950 text-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="text-2xl font-extrabold mb-2">Ready to start accepting payments?</h3>
              <p className="text-neutral-300 text-sm">Everything is set up in your name within 5 to 7 days.</p>
            </div>
            <a
              href="#intake-form"
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl text-sm transition-colors shadow-lg flex-shrink-0 flex items-center space-x-2"
            >
              <span>Claim Your Setup Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 3 SIMPLE STEPS TIMELINE */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold mb-3">
              How It Works (3 Simple Steps)
            </h2>
            <p className="text-neutral-400 text-sm">
              We guide you every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-800 border border-neutral-700 p-8 rounded-3xl">
              <div className="w-10 h-10 bg-primary-600 text-white font-extrabold rounded-xl flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                1. Share Your Details
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Fill out our short 2-minute form with your preferred business name, passport copy, and contact info.
              </p>
            </div>

            <div className="bg-neutral-800 border border-neutral-700 p-8 rounded-3xl">
              <div className="w-10 h-10 bg-primary-600 text-white font-extrabold rounded-xl flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                2. We Handle Registration & Tax ID
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                We register your company with government state authorities, set up your business address, and issue your EIN tax ID.
              </p>
            </div>

            <div className="bg-neutral-800 border border-neutral-700 p-8 rounded-3xl">
              <div className="w-10 h-10 bg-primary-600 text-white font-extrabold rounded-xl flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                3. Receive Accounts & Start Selling
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                We activate your Stripe, PayPal, and bank accounts, and hand over 100% login credentials directly to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTAKE / ORDER FORM - UPDATED WITH WHATSAPP/PHONE FIELD */}
      <section id="intake-form" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1 rounded-full border border-primary-200">
              START YOUR SETUP TODAY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mt-4 mb-3">
              Submit Your Setup Request
            </h2>
            <p className="text-neutral-600 text-sm">
              Fill this short form. I will personally contact you on WhatsApp/Email within 24 hours to begin.
            </p>
          </div>

          <div className="bg-neutral-50 border-2 border-neutral-200 rounded-3xl p-8 sm:p-12 shadow-sm">
            {submitted ? (
              <div className="bg-primary-50 border border-primary-200 p-8 rounded-2xl text-center">
                <CheckCircle className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Request Submitted Successfully!
                </h3>
                <p className="text-neutral-700 text-sm mb-4">
                  Thank you! I will review your details and reach out to you directly on WhatsApp or Email within 24 hours.
                </p>
                <a
                  href="https://wa.me/923018950491"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-600 text-white font-bold text-xs rounded-xl hover:bg-emerald-700 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Message Directly on WhatsApp Now</span>
                </a>
              </div>
            ) : (
              <form
                name="business-setup"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleFormSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="business-setup" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Alex Rivera"
                      className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-xl text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary-600 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="alex@startup.com"
                      className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-xl text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary-600 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                      WhatsApp / Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="e.g. +1 234 567 8900"
                      className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-xl text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary-600 text-sm font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                      Package Selected
                    </label>
                    <select
                      name="package"
                      value={formData.package}
                      onChange={(e) =>
                        setFormData({ ...formData, package: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-xl text-neutral-900 focus:outline-none focus:border-primary-600 text-sm font-medium"
                    >
                      <option value="US LLC Complete Founder Package">
                        US LLC Complete Package (LLC + EIN + Stripe + PayPal + Bank)
                      </option>
                      <option value="UK LTD Complete Setup Package">
                        UK LTD Complete Setup Package
                      </option>
                      <option value="Custom Setup Inquiry">
                        Custom Setup Inquiry / Consultation First
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                    Preferred Business Name or Notes
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    placeholder="Tell me a bit about your business or preferred company name..."
                    className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-xl text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary-600 text-sm resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold rounded-xl text-base transition-all shadow-md flex items-center justify-center space-x-2"
                  >
                    <span>Submit Setup Request</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <a
                    href="https://wa.me/923018950491"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-4 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-base transition-colors flex items-center justify-center space-x-2 shadow-md"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </form>
            )}

            <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-600">
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

      {/* FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION) */}
      <section className="py-20 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-neutral-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-600 text-sm">
              Simple plain-English answers to your setup questions.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left font-bold text-neutral-900 flex items-center justify-between hover:bg-neutral-50 transition-colors"
                >
                  <span className="text-base">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-neutral-700 leading-relaxed border-t border-neutral-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* FINAL CTA BOTTOM BANNER */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Still have a question before getting started?</h3>
            <a
              href="https://wa.me/923018950491"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-base shadow-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Ask Me Directly on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessSetupPage;
