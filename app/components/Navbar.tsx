"use client";

import React from 'react';
// Removed BellRing import
import { Menu } from 'lucide-react'; // Menu is still needed for mobile
import Image from 'next/image'; // Import the Image component from Next.js

interface NavLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

interface NavbarProps {
  appName: string;
  navLinks: NavLink[];
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ appName, navLinks, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2">
          {/* Replaced BellRing with Image component */}
          <Image
            src="/assets/logo.png" // Path to your logo image
            alt={`${appName} Logo`} // Alt text for accessibility
            width={50} // Desired width of the logo
            height={50} // Desired height of the logo (adjust as needed for aspect ratio)
            className="rounded-full" // Add styling like rounded corners if your logo is circular
          />
          {/* <h1 className="text-2xl font-bold text-purple-700">{appName}</h1> */}
        </a>
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-gray-700 hover:text-purple-600 transition-colors duration-300 flex items-center space-x-1.5 text-base font-medium group">
              <span className="group-hover:text-purple-500">{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 hover:text-purple-600 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
            <Menu size={28} />
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 right-0 z-40 py-3">
          {navLinks.map((link) => (
            <a key={link.label + "-mobile"} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-300 flex items-center space-x-3 text-base font-medium">
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;