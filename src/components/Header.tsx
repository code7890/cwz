import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Code,
  Sparkles,
  ShieldCheck,
  Zap,
  Briefcase,
  Calendar,
  MessageSquare,
  Users,
  Cpu,
  Globe,
} from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: "Services", href: "/services", icon: Sparkles },
    { name: "Business Setup", href: "/services/business-setup", icon: ShieldCheck },
    { name: "7-Day MVP", href: "/services#mvp", icon: Zap },
    { name: "AI Automations", href: "/services#automation", icon: Cpu },
    { name: "Talent Matching", href: "/services#talent", icon: Users },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path.includes("#")) {
      return location.pathname + location.hash === path;
    }
    return location.pathname === path && !location.hash;
  };

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      if (location.pathname === path) {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate(href);
      }
    } else {
      navigate(href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm"
          : "bg-white/80 backdrop-blur-sm border-b border-neutral-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <Code className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold text-neutral-900 tracking-tight leading-none">
                CodeWithZee
              </span>
              <span className="text-[10px] font-bold text-primary-600 uppercase tracking-widest">
                Founder Partner
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-all duration-200 ${
                    active
                      ? "bg-primary-50 text-primary-700 shadow-xs"
                      : "text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100/70"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Consultation Button */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/hire"
              className="bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all duration-200 shadow-sm flex items-center space-x-2 group"
            >
              <Calendar className="w-4 h-4 text-primary-400 group-hover:scale-110 transition-transform" />
              <span>Book a Consultation</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200 bg-white animate-fade-in space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="w-full flex items-center space-x-2 px-3 py-2.5 rounded-lg text-sm font-bold text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 text-left"
                >
                  <Icon className="w-4 h-4 text-primary-600" />
                  <span>{item.name}</span>
                </button>
              );
            })}
            <div className="pt-3 border-t border-neutral-100">
              <Link
                to="/hire"
                onClick={() => setIsMenuOpen(false)}
                className="w-full bg-neutral-900 text-white text-sm font-bold px-4 py-3 rounded-xl flex items-center justify-center space-x-2 text-center"
              >
                <Calendar className="w-4 h-4 text-primary-400" />
                <span>Book a Consultation</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
