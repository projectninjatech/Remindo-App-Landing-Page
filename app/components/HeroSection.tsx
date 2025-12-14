"use client";

import React from 'react';
import { Apple } from 'lucide-react';
import ResponsiveImage from './ResponsiveImage'; // Assuming it's in the same components directory

interface HeroSectionProps {
  appName: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ appName }) => {
  return (
    <header id="home" className="py-20 md:py-32 text-center bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="absolute -top-20 -left-40 w-96 h-96 bg-purple-200 rounded-full opacity-30 blur-2xl animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -right-40 w-96 h-96 bg-pink-200 rounded-full opacity-30 blur-2xl animate-pulse-slower"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-purple-700 mb-8 leading-tight tracking-tight">
            Never Miss a Beat with <span className="text-pink-500 block sm:inline">{appName}</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Organize your life, track your tasks, and stay ahead with the most intuitive reminder app.
            Focus on what matters, we'll handle the reminders.
          </p>
          <div className="flex justify-center items-center">
            <a href="https://apps.apple.com/us/app/remindo-task-water-reminder/id6746641151" className="bg-black hover:bg-gray-800 text-white font-semibold py-4 px-10 rounded-xl text-lg sm:text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-3">
              <Apple size={30} />
              <span>Get on Apple Store</span>
            </a>
          </div>
        </div>
        <div className="relative z-10 mt-20 sm:mt-24 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
          <ResponsiveImage
            src="/assets/1.png"
            alt={`${appName} App Screenshot in Phone Mockup`}
            width={400}
            height={800}
            className="w-full h-auto"
            priority
            objectFit="cover"
          />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;