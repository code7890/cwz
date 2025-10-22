import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Learn',
      links: [
        { name: 'Roadmaps', href: '/roadmaps' },
        { name: 'Courses', href: '/courses' },
        { name: 'Challenges', href: '/challenges' },
        { name: 'Documentation', href: '/docs' },
      ],
    },
    {
      title: 'Community',
      links: [
        { name: 'Discord', href: '#' },
        { name: 'Student Wall', href: '/community' },
        { name: 'Blog', href: '/blog' },
        { name: 'Success Stories', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'FAQ', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
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
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CodeWithZee</span>
            </Link>
            <p className="text-neutral-400 mb-6 max-w-sm leading-relaxed">
              A desi-first platform to learn tech, build mindset, and find direction. 
              Practical guidance for real youth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-neutral-800">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-neutral-800">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-neutral-800">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-neutral-800">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-neutral-400 hover:text-white transition-colors text-sm hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            © 2025 CodeWithZee. All rights reserved.
          </p>
          <p className="text-neutral-400 text-sm mt-2 md:mt-0">
            Made with ❤️ for the desi tech community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;