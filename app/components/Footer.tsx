import React from 'react';
import { BellRing } from 'lucide-react';

interface NavLink {
    href: string;
    label: string;
    icon: React.ReactNode; // Not used in footer links, but kept for consistency with Navbar
}

interface FooterProps {
  appName: string;
  navLinks: NavLink[];
}

const Footer: React.FC<FooterProps> = ({ appName, navLinks }) => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <a href="#home" className="flex justify-center items-center space-x-2 mb-6">
          <BellRing className="text-purple-400" size={28} />
          <h1 className="text-2xl font-bold text-white">{appName}</h1>
        </a>
        <p className="text-base mb-6 max-w-md mx-auto">
          Making your life easier, one reminder at a time. Your ultimate companion for staying organized.
        </p>
        <div className="flex flex-wrap justify-center space-x-5 sm:space-x-8 mb-8">
          {navLinks.filter(link => link.label !== "Home").map((link) => (
            <a key={link.label + "-footer"} href={link.href} className="text-base hover:text-purple-400 transition-colors">
              {link.label}
            </a>
          ))}
          <a href="/privacy-policy" className="text-base hover:text-purple-400 transition-colors">Privacy Policy</a>
          <a href="/terms-of-service" className="text-base hover:text-purple-400 transition-colors">Terms of Service</a>
        </div>
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {appName}. All rights reserved. Designed with <span className="text-pink-400">&hearts;</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;