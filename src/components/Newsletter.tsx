import React, { useState } from "react";
import { Mail, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

interface NewsletterProps {
  variant?: "card" | "banner" | "compact";
}

const Newsletter: React.FC<NewsletterProps> = ({ variant = "card" }) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);

    try {
      // 1. Submit to Netlify Forms
      const netlifyBody = new URLSearchParams({
        "form-name": "newsletter",
        email: email,
      }).toString();

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: netlifyBody,
      });

      // 2. Send subscriber notification to devzeeofficial@gmail.com
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "e883e479-715b-432d-9eb5-8e36ae22bc30",
          to_email: "devzeeofficial@gmail.com",
          subject: `📩 New Newsletter Subscriber: ${email}`,
          from_name: "CodeWithZee Newsletter",
          email: email,
          message: `New Founder Newsletter Subscriber:\n\nEmail: ${email}\nDate: ${new Date().toLocaleString()}`,
        }),
      });

      setSubmitted(true);
      setEmail("");
    } catch (err) {
      console.error("Newsletter submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (variant === "compact") {
    return (
      <div className="w-full">
        <h4 className="text-white font-semibold mb-3 text-xs uppercase tracking-wider">
          Join Founder Newsletter
        </h4>
        <p className="text-neutral-400 text-xs mb-3 leading-relaxed">
          Weekly technical playbooks on US/UK business setup, payment gateways, and AI workflows.
        </p>

        {submitted ? (
          <div className="flex items-center space-x-2 text-primary-400 text-xs font-bold bg-neutral-800 p-3 rounded-xl border border-neutral-700">
            <CheckCircle className="w-4 h-4 flex-shrink-0 text-primary-400" />
            <span>Subscribed! Check your inbox soon.</span>
          </div>
        ) : (
          <form
            name="newsletter"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-2"
          >
            <input type="hidden" name="form-name" value="newsletter" />
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="founder@company.com"
                className="w-full px-3.5 py-2.5 bg-neutral-800 border border-neutral-700 rounded-xl text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-primary-500"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center space-x-1.5 shadow-sm disabled:opacity-50"
            >
              <span>{isSubmitting ? "Subscribing..." : "Subscribe Free"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-neutral-800 shadow-xl">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary-600/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-neutral-800 border border-neutral-700 rounded-full text-xs font-bold text-primary-400 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FOUNDER WEEKLY INSIGHTS</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Join 1,000+ Founders Building & Scaling Worldwide
            </h3>

            <p className="text-neutral-300 text-sm sm:text-base mb-8 leading-relaxed font-normal">
              Get actionable weekly playbooks on global business incorporation, Stripe verification, AI workflow automation, and rapid MVP engineering. Zero spam. Unsubscribe anytime.
            </p>

            {submitted ? (
              <div className="p-6 bg-neutral-800/80 border border-primary-500/40 rounded-2xl max-w-md mx-auto flex items-center justify-center space-x-3 text-primary-400">
                <CheckCircle className="w-6 h-6 text-primary-400 flex-shrink-0" />
                <div className="text-left text-sm font-semibold">
                  <p className="text-white font-bold">You're subscribed!</p>
                  <p className="text-neutral-400 text-xs">Look out for our next founder playbook in your inbox.</p>
                </div>
              </div>
            ) : (
              <form
                name="newsletter"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input type="hidden" name="form-name" value="newsletter" />
                <div className="relative flex-1">
                  <Mail className="w-5 h-5 text-neutral-500 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email..."
                    className="w-full pl-11 pr-4 py-3.5 bg-neutral-800/90 border border-neutral-700 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-primary-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3.5 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 flex-shrink-0 disabled:opacity-50"
                >
                  <span>{isSubmitting ? "Subscribing..." : "Subscribe Free"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            <p className="text-neutral-500 text-xs mt-4">
              100% free. No spam. Direct technical insights delivered weekly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
