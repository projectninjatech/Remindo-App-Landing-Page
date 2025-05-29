"use client";

import Head from 'next/head';
import React, { useState } from 'react';
import { BarChart3, ListChecks, CalendarPlus, Search, Smartphone, Home, LayoutDashboard, Trash2, FilePlus, Mail } from 'lucide-react';

// Import components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AppShowcaseSection from './components/AppShowcaseSection';
import HowItWorksSection from './components/HowItWorksSection';
import CallToActionSection from './components/CallToActionSection';
import Footer from './components/Footer';

export default function LandingPage() {
  const appName = "Remindo";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home", icon: <Home size={18} /> },
    { href: "#features", label: "Features", icon: <ListChecks size={18} /> },
    { href: "#app-showcase", label: "Showcase", icon: <Smartphone size={18} /> },
    { href: "/contact-us", label: "Contact", icon: <Mail size={18} /> },
  ];

  const featuresData = [
    {
      icon: <CalendarPlus size={32} />,
      title: "Easy Reminder Creation",
      description: "Quickly create and schedule reminders for all your important tasks and events. Our intuitive interface makes it a breeze.",
    },
    {
      icon: <ListChecks size={32} />,
      title: "Task Management",
      description: "Organize your day with a clear list of pending and completed tasks. Filter, sort, and prioritize with ease.",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Monthly Statistics",
      description: "Visualize your productivity with insightful monthly statistics on your task completion. Track your progress and stay motivated.",
    },
    {
      icon: <Search size={32} />,
      title: "Search & Categorize",
      description: "Easily find tasks using powerful search and organize them with custom categories for better clarity and focus.",
    },
  ];

  const screenshotFeaturesData = [
    {
      imageSrc: "/assets/1.png",
      imageAlt: "Remindo App Home Screen - Dashboard Overview",
      title: "Dashboard Overview",
      description: "Get a quick glance at your day with today's events, completed tasks, and pending items. The intuitive dashboard, featuring clear visual indicators, helps you stay on top of your schedule effortlessly and prioritize what matters most.",
      icon: <LayoutDashboard size={28} />,
    },
    {
      imageSrc: "/assets/2.png",
      imageAlt: "Remindo App Task List & Search - Smart Management",
      title: "Smart Task Management",
      description: "View your upcoming tasks in a neatly organized list, search for specific reminders with instant results, and manage your to-do list with ease. Our clean interface, coupled with powerful filtering, makes task tracking simple and efficient.",
      icon: <ListChecks size={28} />,
      reverse: true,
    },
{
      imageSrc: "/assets/3.png",
      imageAlt: "Remindo App Deleting Tasks - Simple Deletion",
      title: "Simple Deletion",
      description: "Easily delete any unwanted tasks with a quick, intuitive swipe. Remindo makes managing your reminders straightforward, ensuring you can clear your list effortlessly.",
      icon: <Trash2 size={28} />, // Changed to Trash2 icon for deletion
    },
    {
      imageSrc: "/assets/4.png",
      imageAlt: "Remindo App Create Reminder Screen - Flexible Creation",
      title: "Flexible Reminder Creation",
      description: "Set detailed reminders with specific dates, times, and customizable categories. Whether it's for personal errands, study sessions, or work deadlines, Remindo adapts to your unique needs, offering unparalleled flexibility.",
      icon: <FilePlus size={28} />,
      reverse: true,
    },
  ];

  return (
    <>
      <Head>
        <title>{appName} - Your Personal Reminder Assistant</title>
        <meta name="description" content={`Download ${appName} today and never miss an important task or event again!`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 text-gray-800 font-sans">
        <Navbar
          appName={appName}
          navLinks={navLinks}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        <HeroSection appName={appName} />

        <FeaturesSection appName={appName} features={featuresData} />

        <AppShowcaseSection appName={appName} screenshotFeaturesData={screenshotFeaturesData} />

        <HowItWorksSection appName={appName} />

        <CallToActionSection appName={appName} />

        <Footer appName={appName} navLinks={navLinks} />
      </div>
      <style jsx global>{`
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-pulse-slower {
          animation: pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.1; transform: scale(1.05); }
        }
      `}</style>
    </>
  );
}