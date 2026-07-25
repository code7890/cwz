import React from "react";
import { Link } from "react-router-dom";
import { Code, Linkedin, Mail } from "lucide-react";
import Newsletter from "./Newsletter";

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "All Services", href: "/services" },
        { name: "Business Setup & Gateways", href: "/services#infra" },
        { name: "7-Day MVP Dev", href: "/services#mvp" },
        { name: "AI Automations", href: "/services#automation" },
        { name: "Vetted Talent Matching", href: "/services#talent" },
      ],
    },
    {
      title: "Work With Me",
      links: [
        { name: "Book a Consultation", href: "/hire" },
        { name: "1-on-1 Mentorship", href: "/services#advisory" },
        { name: "Direct Contact Form", href: "/hire#consultation-form" },
      ],
    },
    {
      title: "Content Ecosystem",
      links: [
        { name: "Courses (Coming Soon)", href: "/services" },
        { name: "Tech Roadmaps (Coming Soon)", href: "/services" },
        { name: "AI Tools (Coming Soon)", href: "/services" },
        { name: "Medium Articles", href: "https://medium.com/@zaheerexplores" },
      ],
    },
    {
      title: "Contact",
      links: [
        { name: "WhatsApp: +92 301 8950491", href: "https://wa.me/923018950491" },
        { name: "Email: devzeeofficial@gmail.com", href: "mailto:devzeeofficial@gmail.com" },
        { name: "LinkedIn: zaheerexplores", href: "https://www.linkedin.com/in/zaheerexplores/" },
      ],
    },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">CodeWithZee</span>
            </Link>
            <p className="text-neutral-400 mb-6 max-w-sm leading-relaxed text-xs">
              Direct technical and business partnership for founders. Global business formation (LLC, LTD, Stripe, PayPal, Wise) + 7-Day MVPs, AI Solutions, and Vetted Talent.
            </p>
            <div className="mb-6 max-w-sm">
              <Newsletter variant="compact" />
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/zaheerexplores/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-neutral-800"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:devzeeofficial@gmail.com"
                className="text-neutral-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-neutral-800"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith("http") || link.href.startsWith("mailto:") ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-white transition-colors text-xs hover:underline"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-neutral-400 hover:text-white transition-colors text-xs hover:underline"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-xs">
            © {new Date().getFullYear()} CodeWithZee. All rights reserved.
          </p>
          <p className="text-neutral-400 text-xs mt-2 md:mt-0">
            Outcome First • Direct Technical & Business Partnership
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
